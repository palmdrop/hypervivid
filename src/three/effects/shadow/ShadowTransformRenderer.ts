import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass';
import { KawaseBlurPass } from '../kawaseBlur/KawaseBlurPass';

import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
import { ShadowTransformShader } from '../../shader/shaders/shadow/ShadowTransformShader';

export class ShadowTransformRenderer {
  private composer : EffectComposer;
  private shadowTransformPass : ShaderPass;
  private kawaseBlurPass : typeof KawaseBlurPass;

  renderTarget : THREE.WebGLRenderTarget;

  constructor( 
    renderer : THREE.WebGLRenderer,
    texture : THREE.Texture,
    blurKernels : number[] = [ 1, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  ) {

    this.renderTarget = new THREE.WebGLRenderTarget( 
      renderer.domElement.width, renderer.domElement.height, {
      } );

    this.composer = 
      new EffectComposer( renderer, this.renderTarget );

    this.kawaseBlurPass = new KawaseBlurPass( { renderer, kernels: blurKernels } );

    this.shadowTransformPass = new ShaderPass( ShadowTransformShader );
    this.shadowTransformPass.uniforms[ 'offset' ].value.set(
      -60, 90
    );
    this.shadowTransformPass.uniforms[ 'darkness' ].value = -1.5;
    this.shadowTransformPass.uniforms[ 'opacity' ].value = 0.8;
    this.shadowTransformPass.uniforms[ 'staticAmount' ].value = 0.09;

    this.shadowTransformPass.uniforms[ 'zoom' ].value = 1.0;

    this.shadowTransformPass.uniforms[ 'tint' ].value.setRGB(
      2.3, 0.3, 1.1
    );


    const copyPass = new ShaderPass( CopyShader );

    const renderTexturePass = new TexturePass( texture );
    this.composer.addPass( renderTexturePass );

    this.composer.addPass( this.kawaseBlurPass );
    this.composer.addPass( this.shadowTransformPass );
    this.composer.addPass( copyPass );

    this.composer.renderToScreen = false;
  }

  render( delta : number, now : number ) {
    this.composer.render( delta );
  }

  setBlurKernels( blurKernels : number[] ) {
    this.kawaseBlurPass.setKernels( blurKernels );
  }

  setUniform( name : string, value : any ) {
    this.shadowTransformPass.uniforms[ name ].value = value;
  }

  setSize( width : number, height : number ) {
    this.composer.setSize( width, height );

    this.shadowTransformPass.uniforms[ 'viewport' ].value.set(
      width, height
    );
  }

}