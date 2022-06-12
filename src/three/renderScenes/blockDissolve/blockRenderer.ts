import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { KawaseBlurPass } from '../../effects/kawaseBlur/KawaseBlurPass';
import { ColorCorrectionShader } from 'three/examples/jsm/shaders/ColorCorrectionShader';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';

export class BlockRenderer {
  private scene : THREE.Scene;
  private composer : EffectComposer;
  private camera : THREE.PerspectiveCamera;
  private block : THREE.Mesh;

  constructor(
    private renderer : THREE.WebGLRenderer,
    private renderTarget : THREE.WebGLRenderTarget,
    private canvas : HTMLCanvasElement
  ) {

    // TODO TODO TODO: apply light, display INSIDE of cube only! strange interior view


    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
      0.1,
      50
    );

    this.camera.position.set( 0, 0, 1.5 );

    const geometry = new THREE.BoxBufferGeometry(
      1.0, 1.0  
    );

    const material = new THREE.MeshBasicMaterial( {
      color: 'white'
    } );

    this.block = new THREE.Mesh(
      geometry,
      material
    );

    this.scene.add( this.block );

    this.composer = new EffectComposer(
      renderer, renderTarget
    );

    this.composer.addPass(
      new RenderPass( this.scene, this.camera )
    );

    this.composer.addPass(
      new KawaseBlurPass( {
        renderer,
        kernels: [ 1, 1, 2, 3, 3 ]
      } )
    );

    const colorCorrectionPass = new ShaderPass(
      ColorCorrectionShader
    );

    colorCorrectionPass.uniforms['powRGB'].value.set(
      0.8,
      0.8,
      0.8,
    );

    colorCorrectionPass.uniforms['addRGB'].value.set(
      0.0,
      0.0,
      0.0,
    );

    this.composer.addPass(
      colorCorrectionPass
    );

    this.composer.addPass(
      new ShaderPass(
        CopyShader
      )
    );

    this.composer.renderToScreen = false;

    this.scene.background = renderTarget.texture;
  }

  setSize( width : number, height : number ) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.composer.setSize( width, height );
  }

  update( delta : number, now : number ) {
    this.block.rotation.x += delta * 0.3;
    this.block.rotation.y += delta * -0.05;
    this.block.rotation.z += delta * -0.08;
  }

  render() {
    this.renderer.setRenderTarget( this.renderTarget );
    this.composer.render();
    this.composer.swapBuffers();
  }
}