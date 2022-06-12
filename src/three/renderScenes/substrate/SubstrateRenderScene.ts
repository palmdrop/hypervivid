import * as THREE from 'three';

import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';
import { FullscreenQuadRenderer } from '../../render/FullscreenQuadRenderer';
import { buildPatternShader } from '../../shader/builder/pattern/patternShaderBuilder';
import { setUniform } from '../../shader/core';

import createGrowth from './growthSubstrate';
import createPattern from './patternSubstrate';
import createDream from './dreamSubstrate';
import { randomElement } from '../../../utils/random';
// import createSubstrateSettings from './susbstrate';

const substrates = [
  createGrowth,
  createPattern,
  createDream
];

export class SubstarteRenderScene extends AbstractRenderScene {
  private targetA : THREE.WebGLRenderTarget;
  private targetB : THREE.WebGLRenderTarget;
  private tempMaterial : THREE.ShaderMaterial;
  private finalMaterial : THREE.MeshBasicMaterial;

  private quadRendererA : FullscreenQuadRenderer;
  private quadRendererB : FullscreenQuadRenderer;
  private quadRendererC : FullscreenQuadRenderer;

  private currentQuadRenderer : FullscreenQuadRenderer;

  private substrateShader : THREE.Shader;

  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    super( canvas, onLoad );
    this.setCaptureFrameResolutionMultiplier( 1.0 );

    this.substrateShader = buildPatternShader( 
      randomElement( substrates )()
    );

    this.targetA = new THREE.WebGLRenderTarget(
      canvas.width, canvas.height, {
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
        wrapS: THREE.MirroredRepeatWrapping,
        wrapT: THREE.MirroredRepeatWrapping,
      }
    );

    this.targetB = new THREE.WebGLRenderTarget(
      canvas.width, canvas.height, {
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
        wrapS: THREE.MirroredRepeatWrapping,
        wrapT: THREE.MirroredRepeatWrapping,
      }
    );

    this.tempMaterial = new THREE.ShaderMaterial(
      this.substrateShader
    );
    setUniform( 'tDiffuse', this.targetA.texture, this.tempMaterial );

    this.quadRendererA = new FullscreenQuadRenderer( 
      this.renderer,
      this.tempMaterial,
      this.targetA
    );
    this.quadRendererB = new FullscreenQuadRenderer( 
      this.renderer,
      this.tempMaterial,
      this.targetB
    );

    this.finalMaterial = new THREE.MeshBasicMaterial( {
      map: this.targetB.texture
    } );

    this.quadRendererC = new FullscreenQuadRenderer( 
      this.renderer,
      this.finalMaterial
    );

    this.currentQuadRenderer = this.quadRendererA;

    this.resizeables.push( 
      this.quadRendererA, this.quadRendererB, this.quadRendererC,
    );

    onLoad?.();
  }


  update( delta : number, now : number ) : void {
    setUniform( 'time', now, this.substrateShader );
  }

  render( delta : number, now : number ) : void {
    this.currentQuadRenderer.render();

    const previous = this.currentQuadRenderer;

    this.currentQuadRenderer = 
      this.currentQuadRenderer === this.quadRendererA 
        ? this.quadRendererB 
        : this.quadRendererA;

    this.finalMaterial.map = this.currentQuadRenderer.renderTarget!.texture;
    setUniform( 'tDiffuse', previous.renderTarget!.texture, this.tempMaterial );

    this.quadRendererC.render();
  }
  
}