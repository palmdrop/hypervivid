/* eslint-disable @typescript-eslint/no-unused-vars */
import * as THREE from 'three';
import * as dat from 'dat.gui';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';
import { buildPatternShader } from '../../shader/builder/pattern/patternShaderBuilder';
import { addUniformSlider, setUniform } from '../../shader/core';
import { createObject } from './object';
import { getComposer } from './postprocessing';
import { generateRoom } from './room';

import getShaderSettings from './shader';
import { DynamicTime, dynamicTimeFromNoise } from './util/dynamicTime';

const maxBoxDimensionSize = ( box : THREE.Box3 ) => {
  return ( [ 'x', 'y', 'z' ] as const ).reduce(
    ( maxSize, axis ) => {
      const minValue = box.min[ axis ];
      const maxValue = box.max[ axis ];
      const size = maxValue - minValue;
      return size > maxSize ? size : maxSize;
    }, 
    0.0
  );
};

const MAIN_TEXTURE_NAME = 't1';

export class RehashTransformRenderScene extends AbstractRenderScene {
  private controls ?: TrackballControls;

  private envShaderMaterial : THREE.ShaderMaterial;
  private envMaterialSpeed : number;

  private objectShaderMaterial : THREE.ShaderMaterial;
  private objectMaterialSpeed : number;

  private lineShaderMaterial : THREE.ShaderMaterial;

  private updateObject : ( time : number, delta : number ) => void;

  private dynamicTime : DynamicTime;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private customComposer : any;
  private updateComposer : ( delta : number, now : number ) => void;

  private guiVisible : boolean;
  private gui : dat.GUI
  private isAdmin : boolean;

  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    super( canvas, onLoad );
    this.isAdmin = false;

    this.captureFrameResolutionMultiplier = 4;

    this.dynamicTime = dynamicTimeFromNoise(
      0.3,
      0.0055,
      0.02
    );

    const objectSize = 30;

    this.objectMaterialSpeed = 0.1;
    this.envMaterialSpeed = 0.4;

    this.controls = new TrackballControls( this.camera, canvas );
    this.controls.noPan = true;
    this.controls.noRoll = true;

    const shaderSettings = getShaderSettings( MAIN_TEXTURE_NAME );

    const alphaMask = shaderSettings.alphaMask;
    shaderSettings.alphaMask = undefined;
    this.envShaderMaterial = new THREE.ShaderMaterial( buildPatternShader( shaderSettings ) );
    this.envShaderMaterial.side = THREE.BackSide;

    const room = new THREE.Mesh(
      generateRoom(),
      this.envShaderMaterial
    );

    const roomBoundingBox = new THREE.Box3().expandByObject( room );

    shaderSettings.mask = undefined;
    shaderSettings.alphaMask = alphaMask;
    shaderSettings.forInstancedMesh = true;

    this.objectShaderMaterial = new THREE.ShaderMaterial( buildPatternShader( shaderSettings ) );
    if( alphaMask ) {
      this.objectShaderMaterial.blending = THREE.NormalBlending;
      this.objectShaderMaterial.transparent = true;
    }

    shaderSettings.forInstancedMesh = false;
    this.lineShaderMaterial = new THREE.ShaderMaterial( buildPatternShader( shaderSettings ) );
    if( alphaMask ) {
      this.lineShaderMaterial.blending = THREE.NormalBlending;
      this.lineShaderMaterial.transparent = true;
    }

    const { 
      object, 
      lines,
      updateMesh 
    } = createObject(
      objectSize,
      this.objectShaderMaterial,
      this.lineShaderMaterial,
      roomBoundingBox
    );

    const objectBoundingBox = new THREE.Box3().expandByObject( object );
    const objectMaxDimensionSize = objectSize * maxBoxDimensionSize( objectBoundingBox );

    const roomMaxDimensionSize = maxBoxDimensionSize( roomBoundingBox );
    const roomScale = 15.0 * objectMaxDimensionSize / roomMaxDimensionSize;
    room.scale.set( roomScale, roomScale, roomScale );

    this.camera.position.z = objectMaxDimensionSize * 1.2;
    this.camera.far = roomScale * 10.0;
    this.controls.maxDistance = 1.7 * objectMaxDimensionSize;

    // Gui
    this.guiVisible = false;
    this.gui = new dat.GUI();
    this.gui.hide();

    const objectFolder = this.gui.addFolder( 'object' );
    objectFolder.add( { speed: this.objectMaterialSpeed }, 'speed', 0.0, 2.0 )
      .onChange( value => this.objectMaterialSpeed = value );

    const envFolder = this.gui.addFolder( 'environment' );
    envFolder.add( { speed: this.envMaterialSpeed }, 'speed', 0.0, 2.0 )
      .onChange( value => this.envMaterialSpeed = value );

    const linesFolder = this.gui.addFolder( 'lines' );
    linesFolder.add( { speed: this.envMaterialSpeed }, 'speed', 0.0, 2.0 )
      .onChange( value => this.lineShaderMaterial = value );

    addUniformSlider( objectFolder, this.objectShaderMaterial, 'frequency', 1.0, 0.0, 30.0 );
    addUniformSlider( objectFolder, this.objectShaderMaterial, 'brightness', 0.8, 0.0, 3.0 );

    addUniformSlider( envFolder, this.envShaderMaterial, 'frequency', 0.1, 0.0, 1.0 );
    addUniformSlider( envFolder, this.envShaderMaterial, 'brightness', 0.6, 0.0, 1.0 );

    addUniformSlider( linesFolder, this.lineShaderMaterial, 'frequency', 1.0, 0.0, 30.0 );
    addUniformSlider( linesFolder, this.lineShaderMaterial, 'brightness', 0.8, 0.0, 3.0 );

    this.updateObject = updateMesh;

    this.scene.add( room, lines, object );
    this.scene.background = new THREE.Color( 'black' );

    // Paths

    // Postprocessing
    const {
      composer: customComposer,
      update: updateComposer
    } = getComposer( 
      this.renderer, this.scene, this.camera,
      (Math.random() + 4.5) * objectMaxDimensionSize / this.camera.far,
      this.gui,
    );

    this.customComposer = customComposer;
    this.updateComposer = updateComposer;

    this.resizeables.push( this.customComposer );

    onLoad?.();
  }

  _createCubeCamera() : [ THREE.CubeCamera, THREE.WebGLCubeRenderTarget ] {
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 512, {
      format: THREE.RGBFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter
    } );

    const cubeCamera = new THREE.CubeCamera( 1, 10000, cubeRenderTarget );

    return [ cubeCamera, cubeRenderTarget ];
  }

  update( delta : number, now : number ) : void {
    this.controls?.update();

    this.dynamicTime.update( now );
    const time = this.dynamicTime.time;

    setUniform( 'time', this.envMaterialSpeed * time, this.envShaderMaterial );
    setUniform( 'time', this.objectMaterialSpeed * time, this.objectShaderMaterial );
    setUniform( 'time', this.objectMaterialSpeed * time, this.lineShaderMaterial );

    this.updateObject( now, delta );
    this.updateComposer( delta, now );
  }

  render() {
    this.renderer.setRenderTarget( null );
    this.customComposer.render();
  }

  resize( width ?: number, height ?: number, force ?: boolean ) : void {
    // Workaround for postprocessing pass that seems to disallow automatic resize of canvas
    if( !width || !height ) {
      width = this.canvas.parentElement?.clientWidth;
      height = this.canvas.parentElement?.clientHeight;
    }

    super.resize( width, height, force );
    // For some reason, automatic resizing does not work when using postprocessing library composer
    setUniform( 'viewport', new THREE.Vector2( this.canvas.width, this.canvas.height ), this.envShaderMaterial );
    setUniform( 'viewport', new THREE.Vector2( this.canvas.width, this.canvas.height ), this.objectShaderMaterial );
  }

  onUserAdmin() {
    if( this.controls ) {
      this.controls.noPan = false;
      this.controls.noRoll = false;
      this.controls.maxDistance = Number.POSITIVE_INFINITY;

      this.guiVisible = true;
      this.gui.show();
    }

    this.isAdmin = true;
  }

  updateTexture( dataUrl : string ) {
    const image = new Image();

    const objectMaterial = this.objectShaderMaterial;
    const envMaterial = this.envShaderMaterial;
    const lineMaterial = this.lineShaderMaterial;

    image.onload = function() {
      const texture = new THREE.Texture();
      texture.image = image;
      texture.needsUpdate = true;
      texture.wrapS = THREE.MirroredRepeatWrapping;
      texture.wrapT = THREE.MirroredRepeatWrapping;

      objectMaterial.uniforms[ MAIN_TEXTURE_NAME ].value = texture;
      envMaterial.uniforms[ MAIN_TEXTURE_NAME ].value = texture;
      lineMaterial.uniforms[ MAIN_TEXTURE_NAME ].value = texture;

      objectMaterial.uniformsNeedUpdate = true;
      envMaterial.uniformsNeedUpdate = true;
      lineMaterial.uniformsNeedUpdate = true;
    };

    image.src = dataUrl;
  }

  dispose() {
    this.gui.destroy();
  }

  toggleGUI( visible ?: boolean ) {
    if( !this.isAdmin ) return;
    visible = visible ?? !this.guiVisible;
    visible ? this.gui.show() : this.gui.hide();
    this.guiVisible = visible;
  }
}