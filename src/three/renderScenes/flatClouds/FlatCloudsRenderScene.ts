import { random } from '$utils/random';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';
import { FoldedPlaneGeometryPrefab } from '../../prefabs/geometries';
import { FoldedPlaneMaterialPrefab } from '../../prefabs/materials';
import { buildPatternShader } from '../../shader/builder/pattern/patternShaderBuilder';
import { setUniform } from '../../shader/core';

import getShaderSettings from './shader';

export class FlatCloudsRenderScene extends AbstractRenderScene {
  private controls ?: TrackballControls;

  private materials : THREE.ShaderMaterial[];
  private meshes : THREE.Mesh[];

  private surfaceScene : THREE.Scene;
  private surface : THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;

  private depthPassRenderTarget : THREE.WebGLRenderTarget;

  private cubeCamera : THREE.CubeCamera;
  private environmentScene : THREE.Scene;

  private rotationSpeed : number;
  private rotationVelocity : THREE.Vector2;
  private rotationAcceleration : THREE.Vector2;
  private rotationFriction : number;


  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    super( canvas, onLoad );

    this.depthPassRenderTarget = new THREE.WebGLRenderTarget( canvas.width, canvas.height, {
      stencilBuffer: true,
      depthBuffer: true,
      generateMipmaps: false
    } );
    this.resizeables.push( this.depthPassRenderTarget );

    this.depthPassRenderTarget.texture.format = THREE.RGBFormat;
    this.depthPassRenderTarget.texture.minFilter = THREE.NearestFilter;
    this.depthPassRenderTarget.texture.magFilter = THREE.NearestFilter;
    this.depthPassRenderTarget.depthTexture = new THREE.DepthTexture( this.canvas.height, this.canvas.width );
    this.depthPassRenderTarget.depthTexture.format = THREE.DepthStencilFormat;
    this.depthPassRenderTarget.depthTexture.type = THREE.UnsignedInt248Type;

    this.camera.near = 0.1;
    this.camera.far = 100;

    this.rotationSpeed = 0.00001;
    this.rotationVelocity = new THREE.Vector2();
    this.rotationAcceleration = new THREE.Vector2();
    this.rotationFriction = 0.14;

    this.controls = new TrackballControls( this.camera, canvas );
    this.controls.enabled = false;

    this.scene.background = new THREE.Color( 'white' );

    this.meshes = [];
    this.materials = [];

    this.surfaceScene = new THREE.Scene();

    this.environmentScene = new THREE.Scene();
    this.environmentScene.background = this.scene.background;

    for( let i = 0; i < 7; i++ ) {
      const shader = buildPatternShader( 
        getShaderSettings( this.camera, this.depthPassRenderTarget.depthTexture ) 
      );

      const cloudMaterial = new THREE.ShaderMaterial( shader );
      cloudMaterial.transparent = true;
      cloudMaterial.side = THREE.DoubleSide;

      const cloudGeometry = new THREE.CircleBufferGeometry( 7, 128 );
      const cloud = new THREE.Mesh(
        cloudGeometry,
        cloudMaterial
      );

      cloud.position.set(
        random( -7, 7 ),
        random( -7, 7 ),
        random( -2, 7 ),
      );

      cloud.scale.set(
        random( 1.5, 2.5 ),
        random( 1.5, 2.5 ),
        1.0,
      );

      const cloudCopy = cloud.clone();
      cloudCopy.lookAt( 0, 0, 0 );
      this.environmentScene.add( cloudCopy );

      this.meshes.push( cloud );
      this.materials.push( cloudMaterial );

      this.scene.add( cloud );
    }

    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 
      1024, {
        format: THREE.RGBFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipMapLinearFilter,
      } 
    );

    const cubeCamera = new THREE.CubeCamera( 0.1, 1000, cubeRenderTarget );
    this.environmentScene.add( cubeCamera );
    this.cubeCamera = cubeCamera;

    // Assign environment map
    this.scene.environment = cubeRenderTarget.texture; 
    this.scene.environment.needsUpdate = true;

    const surfaceGeometry = FoldedPlaneGeometryPrefab( {} );
    const surfaceMaterial = FoldedPlaneMaterialPrefab( { geometry: surfaceGeometry } );
    surfaceMaterial.envMap = cubeRenderTarget.texture;
    surfaceMaterial.envMapIntensity = 1.1;

    this.surface = new THREE.Mesh(
      surfaceGeometry,
      surfaceMaterial
    );

    this.surface.scale.set(
      10.0, 10.0, 1.0 
    );

    const dirLight = new THREE.DirectionalLight( 'white', 3.0 );

    dirLight.position.set( 1.0, 2.0, 1.5 );

    this.surfaceScene.add ( this.surface );
    this.scene.add( this.surface, dirLight );

    onLoad?.();
  }

  update( delta : number, now : number ) : void {
    this.controls?.update();

    this.materials.forEach( material => {
      setUniform( 'time', now, material );
      setUniform( 'viewport', undefined, material )
        ?.set( this.canvas.width, this.canvas.height );
    } );

    this.meshes.forEach( mesh => {
      mesh.quaternion.copy( this.camera.quaternion );
    } );

    this.cubeCamera.update( this.renderer, this.environmentScene );

    this.surface.rotation.x += this.rotationVelocity.x;
    this.surface.rotation.y += this.rotationVelocity.y;

    this.rotationVelocity.add( this.rotationAcceleration );
    this.rotationAcceleration.multiplyScalar( 1.0 - this.rotationFriction );
    this.rotationVelocity.multiplyScalar( 1.0 - this.rotationFriction );
  }

  render( delta : number, now : number ) {
    this.renderer.setRenderTarget( this.depthPassRenderTarget );
    this.surfaceScene.add( this.surface );
    this.renderer.render( this.surfaceScene, this.camera );

    this.renderer.setRenderTarget( null );
    this.scene.add( this.surface );
    super.render( delta, now );
  }

  resize( width ?: number, height ?: number, force ?: boolean ) : void {
    super.resize( width, height, force );
  }

  onUserAdmin() {
    if( this.controls ) {
      this.controls.enabled = true;
    }
  }

  onMouseMove( x : number, y : number, deltaX : number, deltaY : number ) {
    this.rotationAcceleration.y += this.rotationSpeed * deltaX;
    this.rotationAcceleration.x += this.rotationSpeed * deltaY;
  }
}