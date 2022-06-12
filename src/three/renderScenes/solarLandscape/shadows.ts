import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
import { KawaseBlurPass } from '../../effects/kawaseBlur/KawaseBlurPass';
import { ShadowTransformShader } from '../../shader/shaders/shadow/ShadowTransformShader';

export class ShadowRenderer {
  private renderer : THREE.WebGLRenderer;
  private renderTarget : THREE.WebGLRenderTarget;

  private scene : THREE.Scene;
  private camera : THREE.OrthographicCamera;

  private composer : EffectComposer;
  private shadowPass : ShaderPass;

  private _size : THREE.Vector2;

  constructor( renderer : THREE.WebGLRenderer, scene : THREE.Scene, origin : THREE.Vector3, lookAt : THREE.Vector3, size : THREE.Vector2 ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = new THREE.OrthographicCamera(
      -size.x / 2.0, size.x / 2.0,
      size.y / 2.0, -size.y / 2.0
    );
    this._size = size;

    this.setLightPosition( origin );
    this.setLightLookAt( lookAt );

    const rendererSize = renderer.getSize( new THREE.Vector2() );
    this.renderTarget = new THREE.WebGLRenderTarget( rendererSize.x, rendererSize.y, {
      format: THREE.RGBAFormat,
      stencilBuffer: false
    } );

    this.composer = new EffectComposer( renderer, this.renderTarget );
    const renderPass = new RenderPass( scene, this.camera );
    renderPass.clearAlpha = 0;
    renderPass.clearColor = new THREE.Color( '#000' );

    const kawaseBlurPass = new KawaseBlurPass( { renderer, kernels: [ 1, 1, 2, 3, 5, 7 ] } );
    const shadowPass = new ShaderPass( ShadowTransformShader );
    const copyPass = new ShaderPass( CopyShader );

    shadowPass.uniforms[ 'darkness' ].value = 0.5;
    shadowPass.uniforms[ 'opacity' ].value = 0.7;
    shadowPass.uniforms[ 'offset' ].value.set( 0, 0 );
    shadowPass.uniforms[ 'staticAmount' ].value = 0.1;

    this.composer.addPass( renderPass );
    this.composer.addPass( kawaseBlurPass );
    this.composer.addPass( shadowPass );
    this.composer.addPass( copyPass );

    this.composer.renderToScreen = false;

    this.shadowPass = shadowPass;

    this.setSize( rendererSize.x, rendererSize.y );
  }

  render( delta : number ) {
    this.composer.render( delta );
  }

  setLightPosition( position : THREE.Vector3 ) {
    this.camera.position.copy( position );
  }

  setLightLookAt( lookAt : THREE.Vector3 ) {
    this.camera.lookAt( lookAt );
  }

  setSize( width ?: number, height ?: number ) {
    if( !width || !height ) {
      const size = this.renderer.getSize( new THREE.Vector2() );
      width = size.x;
      height = size.y;
    }

    this.composer.setSize( width, height );
    this.shadowPass.uniforms[ 'viewport' ].value.set(
      width, height
    );
  }

  get texture() {
    return this.renderTarget.texture;
  }

  get size() {
    return this._size.clone();
  }

  getUniform( uniformName : string ) {
    return this.shadowPass.uniforms[ uniformName ]?.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUniform( uniformName : string, value : any ) {
    const uniform = this.shadowPass.uniforms[ uniformName ];
    if( !uniform ) return false;
    uniform.value = value;
  }
}
