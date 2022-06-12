import * as THREE from 'three';
import type { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

import * as dat from 'dat.gui';

import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';

import { ASSETHANDLER, dataTextureToEnvironmentMap } from '../../systems/AssetHandler';

import type { FullscreenQuadRenderer } from '../../render/FullscreenQuadRenderer';
import { varyColorHSL } from '../../utils/color';

import hdriPath from '../../../assets/hdri/decor_shop_1k.hdr';

import { createMeshes } from './meshes';
import { createBackground } from './background';
import { createPostProcessing } from './postProcessing';
import { ShadowRenderer } from './shadows';

import normalTexturePath from '../../../assets/normal/normal-texture1_x2.jpg';
import { random } from '../../../utils/random';

export class SolarLandscapeRenderScene extends AbstractRenderScene {
  private controls ?: TrackballControls;

  private meshes ?: THREE.Group;
  private materials ?: THREE.MeshStandardMaterial[];

  private rotationSpeed : number;
  private rotationVelocity : THREE.Vector3;
  private rotationAcceleration : THREE.Vector3;
  private rotationFriction : number;

  private backgroundRenderer : FullscreenQuadRenderer;
  private backgroundColors : THREE.Color[];

  private shadowRenderer : ShadowRenderer;
  private shadowPlane ?: THREE.Mesh;
  private backgroundPlane ?: THREE.Mesh;

  private gui : dat.GUI;

  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    super( canvas, onLoad );

    this.gui = new dat.GUI();

    this.camera.far = 50;

    this.rotationSpeed = 0.000002;
    this.rotationVelocity = new THREE.Vector3();
    this.rotationAcceleration = new THREE.Vector3();
    this.rotationFriction = 0.1;

    const { 
      backgroundColors,
      backgroundRenderer
    } = createBackground( this.renderer );

    this.backgroundColors = backgroundColors;
    this.backgroundRenderer = backgroundRenderer;

    this.resizeables.push( this.backgroundRenderer );

    const {
      composer
    } = createPostProcessing( this.renderer, this.scene, this.camera );
    this.composer = composer;

    this.shadowRenderer = new ShadowRenderer(
      this.renderer, 
      this.scene, 
      new THREE.Vector3( 0, 0, 10 ),
      new THREE.Vector3( 0, 0, -1 ),
      new THREE.Vector2( 55, 55 ),
    );

    this.populateScene();
  }

  protected createRenderer() {
    const renderer = new THREE.WebGLRenderer( {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      antialias: true,
      depth: true,
      stencil: false,
      alpha: true,
    } );

    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 0.8;
    // renderer.outputEncoding = THREE.GammaEncoding;

    renderer.shadowMap.enabled = true;

    renderer.setClearAlpha( 0.0 );
    renderer.autoClear = false;

    return renderer;
  }


  private createLights() {
    const directionalLight = new THREE.DirectionalLight(
      'white',
      3.5
    );

    directionalLight.position.set( random( -8, 8 ), random( -8, 8 ), 8.2 );
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1028 * 4;
    directionalLight.shadow.mapSize.height = 1028 * 4;
    directionalLight.shadow.bias = -0.0003;

    directionalLight.shadow.camera.left = -15;
    directionalLight.shadow.camera.right = 15;
    directionalLight.shadow.camera.top = 15;
    directionalLight.shadow.camera.bottom = -15;

    this.shadowRenderer.setLightPosition( directionalLight.position );
    const updateShadowRendererPosition = () => {
      this.shadowRenderer.setLightPosition( directionalLight.position );
    };

    const dirLightFolder = this.gui.addFolder( 'directionalLight' );
    dirLightFolder.add( directionalLight.position, 'x' ).min( -10 ).max( 10 ).onChange( updateShadowRendererPosition );
    dirLightFolder.add( directionalLight.position, 'y' ).min( -10 ).max( 10 ).onChange( updateShadowRendererPosition );
    dirLightFolder.add( directionalLight.position, 'z' ).min( -10 ).max( 10 ).onChange( updateShadowRendererPosition );
    dirLightFolder.add( directionalLight, 'intensity' ).min( 0.0 ).max( 10 );
    dirLightFolder.addColor( { 
      color: { 
        r: directionalLight.color.r * 255,
        g: directionalLight.color.g * 255,
        b: directionalLight.color.b * 255
      } 
    }, 'color' ).onChange( ( { r, g, b } ) => {
      directionalLight.color.setRGB( r / 255.0, g / 255.0, b / 255.0 );
    } );
    dirLightFolder.add( directionalLight.shadow, 'bias' ).min( -0.0003 ).max( 0.0003 );

    const hemisphereLight = new THREE.HemisphereLight( 
      this.backgroundColors[ 0 ],
      this.backgroundColors[ 1 ],
      0.2 );

    const hemisphereLightFolder = this.gui.addFolder( 'hemisphereLight' );
    hemisphereLightFolder.add( hemisphereLight, 'intensity' ).min( 0.0 ).max( 2.0 );

    this.scene.add( directionalLight, hemisphereLight );
  }

  private populateScene() {
    const { meshes, materials } = createMeshes( this.backgroundColors );
    this.meshes = meshes;
    this.materials = materials;
    this.createLights();

    // Set camera to appropriate distance from object
    const boundingBox = new THREE.Box3().setFromObject( this.meshes );
    const maxSize = Math.max(
      boundingBox.max.x - boundingBox.min.x,
      boundingBox.max.y - boundingBox.min.y,
      boundingBox.max.z - boundingBox.min.z,
    );

    this.camera.position.set( 0, -7, maxSize / 2.0 + 13 );
    this.camera.lookAt( 0, 0, 0 );

    this.scene.add( this.meshes );

    const fogColor = varyColorHSL( this.backgroundColors[0], 0.0, 0.0, random( 0.1, 0.55 ) );
    this.scene.fog = new THREE.Fog( 
      fogColor,
      this.camera.near, 
      this.camera.far 
    );
    this.scene.background = fogColor;
    
    const fogFolder = this.gui.addFolder( 'fog' );
    fogFolder.add( this.scene.fog, 'near' ).min( 0.0 ).max( 100 ).onChange( () => {
      return;
    } );

    fogFolder.add( this.scene.fog, 'far' ).min( 0.0 ).max( 100 ).onChange( ( far ) => {
      this.camera.far = far;
    } );

    // Shadow settings
    const shadowFolder = this.gui.addFolder( 'drop-shadow' );
    const addShadowSetting = ( uniformName : string, min : number, max : number ) => {
      shadowFolder.add( { [uniformName]: this.shadowRenderer.getUniform( uniformName ) }, uniformName )
        .min( min )
        .max( max )
        .onChange( ( value ) => {
          this.shadowRenderer.setUniform( uniformName, value );
        } );
    };

    addShadowSetting( 'darkness', -2, 2 );
    addShadowSetting( 'brightness', 0, 2 );
    addShadowSetting( 'opacity', -2, 2 );
    addShadowSetting( 'staticAmount', 0, 2 );

    ASSETHANDLER.loadHDR( hdriPath, ( hdri ) => {
      this.scene.environment = dataTextureToEnvironmentMap( this.renderer, hdri );
    } );

    const envMapIntensity = random( 1.0, 2.0 );
    const setMaterialEnvMapIntensity = ( intensity : number ) => this.materials?.forEach( material => material.envMapIntensity = intensity );
    setMaterialEnvMapIntensity( envMapIntensity );
    this.gui.add( { envMapIntensity: envMapIntensity }, 'envMapIntensity' ).min( 0.0 ).max( 4.0 )
      .onChange( setMaterialEnvMapIntensity );

    this.gui.add( this.renderer, 'toneMappingExposure' ).min( 0.0 ).max( 10.0 );

    ASSETHANDLER.onLoad( undefined, () => {
      this.onLoad?.();
    } );

    // Background shadow
    const createTexturedPlane = ( texture : THREE.Texture, transparent = false ) => {
      return new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 1.0, 1.0 ),
        new THREE.MeshBasicMaterial( {
          map: texture,
          transparent: transparent, 
          blending: THREE.NormalBlending
        } )
      );
    };

    const shadowPlane = createTexturedPlane( this.shadowRenderer.texture, true );
    const planeZ = -5;

    const size = this.shadowRenderer.size;
    shadowPlane.scale.set( size.x, size.y, 1.0 );
    shadowPlane.position.set( 0, 0, planeZ + 0.01 );
    
    this.shadowPlane = shadowPlane;
    this.scene.add( shadowPlane );
    
    ASSETHANDLER.loadTexture( normalTexturePath, false, ( texture ) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      const backgroundTexture = ( this.backgroundRenderer?.renderTarget?.texture as THREE.Texture );
      const backgroundPlane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 1.0, 1.0, 1, 1 ),
        new THREE.MeshStandardMaterial( {
          map: backgroundTexture,
          metalnessMap: backgroundTexture,
          roughnessMap: backgroundTexture,
          normalMap: texture,
          normalScale: new THREE.Vector2( 0.5 ),
          metalness: 0.5,
          roughness: 0.8,
          envMapIntensity: 0.5,
        } )
      );

      backgroundPlane.scale.set( 120, 120, 1.0 );
      backgroundPlane.position.set( 0, 0, planeZ );

      this.backgroundPlane = backgroundPlane;
      this.scene.add( backgroundPlane );
    } );
    
    this.gui.hide();
  }

  onMouseMove( x : number, y : number, deltaX : number, deltaY : number ) {
    this.rotationAcceleration.y += this.rotationSpeed * deltaX;
    this.rotationAcceleration.x += this.rotationSpeed * deltaY;
  }

  render( delta : number, now : number ) {
    // Hide shadow plane and background when rendering shadow
    if( this.shadowPlane ) this.shadowPlane.visible = false;
    if( this.backgroundPlane ) this.backgroundPlane.visible = false;
    const background = this.scene.background;
    this.scene.background = null;

    this.shadowRenderer.render( delta );

    // Show shadow plane and background again
    if( this.shadowPlane ) this.shadowPlane.visible = true;
    if( this.backgroundPlane ) this.backgroundPlane.visible = true;
    this.scene.background = background;

    super.render( delta, now );
  }

  update() {
    this.controls?.update();

    if( this.meshes ) {
      this.meshes.rotation.x += this.rotationVelocity.x;
      this.meshes.rotation.y += this.rotationVelocity.y;
      this.meshes.rotation.z += this.rotationVelocity.z + 0.001;
    }

    this.rotationVelocity.add( this.rotationAcceleration );
    this.rotationAcceleration.multiplyScalar( 1.0 - this.rotationFriction );
    this.rotationVelocity.multiplyScalar( 1.0 - this.rotationFriction );
  }

  resize( width ?: number, height ?: number ) {
    super.resize( width, height );

    this.shadowRenderer.setSize( width, height );
    this.backgroundRenderer.render();
  }

  dispose() {
    if( this.gui ) {
      this.gui.destroy();
    }
  }
  
  onUserAdmin() {
    this.gui.show();
  }
}