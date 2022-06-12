import * as THREE from 'three';
import type { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';

import { ASSETHANDLER, dataTextureToEnvironmentMap } from '../../systems/AssetHandler';

import { random } from '../../../utils/random';

import { FullscreenQuadRenderer } from '../../render/FullscreenQuadRenderer';
import { createWarpGradientShader } from '../../shader/shaders/gradient/WarpGradientShader';

import { clamp } from '../../utils/math';

import { 
  SolarChromeGeometryPrefab,
  SolarChromeGeometryPrefab2 
} from '../../prefabs/geometries';

import {
  SolarChromeMaterialPrefab, 
} from '../../prefabs/materials';

import hdriPath from '../../../assets/hdri/decor_shop_1k.hdr';

export class SolarChromeRenderScene extends AbstractRenderScene {
  private controls ?: TrackballControls;

  private object : THREE.Object3D;

  private rotationSpeed : number;
  private rotationVelocity : THREE.Vector2;
  private rotationAcceleration : THREE.Vector2;
  private rotationFriction : number;

  private backgroundRenderer : FullscreenQuadRenderer;
  private backgroundColors : THREE.Color[];
  private background : THREE.Texture;

  private minZ : number;
  private maxZ : number;
  private zoomSpeed : number;
  private zoomVelocity : number;

  private zoomFriction : number;
  private zoomLimitThreshold : number;

  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    super( canvas, onLoad );

    this.zoomSpeed = 0.12;
    this.zoomVelocity = 0.0;
    this.zoomFriction = 0.07;
    this.zoomLimitThreshold = 0.3;

    this.camera.far = 10000;

    this.rotationSpeed = 0.00002;
    this.rotationVelocity = new THREE.Vector2();
    this.rotationAcceleration = new THREE.Vector2();
    this.rotationFriction = 0.1;

    const backgroundMaterial = new THREE.ShaderMaterial( createWarpGradientShader( 3 ) );
    this.backgroundRenderer = new FullscreenQuadRenderer(
      this.renderer,
      backgroundMaterial,
      new THREE.WebGLRenderTarget( canvas.width, canvas.height, {

      } )
    );

    this.backgroundColors = [
      new THREE.Color().setHSL( Math.random(), 0.3, random( 0.2, 0.6 ) ),
      new THREE.Color().setHSL( Math.random(), 0.5, random( 0.2, 0.6 ) ),
      new THREE.Color().setHSL( Math.random(), 0.3, random( 0.2, 0.6 ) ),
    ];

    backgroundMaterial.uniforms[ 'colors' ].value = this.backgroundColors;
    backgroundMaterial.uniforms[ 'frequency' ].value = 0.5;
    backgroundMaterial.uniforms[ 'contrast' ].value = 1.9;
    backgroundMaterial.uniforms[ 'brightness' ].value = 2.0;

    this.resizeables.push( this.backgroundRenderer );

    this.background = ( this.backgroundRenderer.renderTarget?.texture as THREE.Texture );

    this.minZ = 0;
    this.maxZ = 0;
    this.object = this.populateScene();
  }

  protected createRenderer() {
    const renderer = new THREE.WebGLRenderer( {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      antialias: true,
      depth: true,
      stencil: false,
      alpha: true
    } );

    // enable the physically correct lighting model
    renderer.physicallyCorrectLights = true;

    return renderer;
  }

  private populateScene() {
    this.scene.background = new THREE.Color( '#976cb8' );

    const geometry = Math.random() < 0.5 
      ? SolarChromeGeometryPrefab( {} )
      : SolarChromeGeometryPrefab2( {} );

    const material = SolarChromeMaterialPrefab( { geometry } );

    const mesh = new THREE.Mesh(
      geometry,
      material
    );

    mesh.scale.set( 2.5, 2.5, 2.5 );

    mesh.rotation.order = 'XYZ';

    // Set camera to appropriate distance from object
    const boundingBox = new THREE.Box3().setFromObject( mesh );
    const maxSize = Math.max(
      boundingBox.max.x - boundingBox.min.x,
      boundingBox.max.y - boundingBox.min.y,
      boundingBox.max.z - boundingBox.min.z,
    );

    this.camera.position.set( 0, 0, maxSize / 2.0 + 5 );

    this.minZ = maxSize / 2.0;
    this.maxZ = maxSize / 2.0 + 20;

    this.object = mesh;

    this.scene.add( mesh );
    this.scene.background = this.background;

    const directionalLight = new THREE.DirectionalLight(
      this.backgroundColors[ 2 ],
      0.5
    );

    directionalLight.position.set( 0, 10, 10 );

    const ambientLight = new THREE.AmbientLight( 'white', 0.3 );

    const hemisphereLight = new THREE.HemisphereLight( 
      this.backgroundColors[ 0 ],
      this.backgroundColors[ 1 ],
      5 );

    this.scene.add( directionalLight, hemisphereLight, ambientLight );

    ASSETHANDLER.loadHDR( hdriPath, ( hdri ) => {
      this.scene.environment = dataTextureToEnvironmentMap( this.renderer, hdri );
    } );

    ASSETHANDLER.onLoad( undefined, () => {
      material.needsUpdate = true;
      this.onLoad?.();
    } );

    return mesh;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update( delta : number, now : number ) : void {
    this.controls?.update();

    this.object.rotation.y += delta * 0.14;

    this.object.rotation.x += this.rotationVelocity.x;
    this.object.rotation.y += this.rotationVelocity.y;

    this.rotationVelocity.add( this.rotationAcceleration );
    this.rotationAcceleration.multiplyScalar( 1.0 - this.rotationFriction );
    this.rotationVelocity.multiplyScalar( 1.0 - this.rotationFriction );


    if( Math.abs( this.zoomVelocity ) > 0.01 ) {
      const thresholdDistance = ( this.maxZ - this.minZ ) * this.zoomLimitThreshold;
      const z = this.camera.position.z;

      let zoomAmount = 1;

      if ( ( z - this.minZ ) < thresholdDistance && this.zoomVelocity < 0 ) {
        zoomAmount = 
          Math.pow( 
            clamp( ( z - this.minZ ) / thresholdDistance, 0.0, 1.0 ),
            1.1
          );
      } else if( ( this.maxZ - z ) < thresholdDistance && this.zoomVelocity > 0 ) {
        zoomAmount = 
          Math.pow( 
            clamp( ( this.maxZ - z ) / thresholdDistance, 0.0, 1.0 ),
            1.1
          );
      }

      this.camera.position.z = clamp( z + zoomAmount * this.zoomVelocity, this.minZ, this.maxZ );

      this.zoomVelocity *= ( 1.0 - this.zoomFriction );
    }
  }

  resize( width ?: number, height ?: number ) {
    super.resize( width, height );

    this.backgroundRenderer.render();
    this.renderer.setRenderTarget( null );
  }

  onMouseMove( x : number, y : number, deltaX : number, deltaY : number ) {
    this.rotationAcceleration.y += this.rotationSpeed * deltaX;
    this.rotationAcceleration.x += this.rotationSpeed * deltaY;
  }

  onScroll( deltaZoom : number ) {
    this.zoomVelocity += deltaZoom * this.zoomSpeed;
  }
}