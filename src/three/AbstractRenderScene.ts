import * as THREE from 'three';

import type{ EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

import type { AnimationLoop, DataURLCallback, RenderScene, Resizer, VoidCallback } from './core';
import { SimpleAnimationLoop } from './systems/AnimationLoop';
import { SimpleResizer } from './systems/Resizer';

type Resizeable = {
  setSize : ( width : number, height : number ) => void
}

export abstract class AbstractRenderScene implements RenderScene {
  canvas : HTMLCanvasElement;
  onLoad ?: VoidCallback;

  protected loop : AnimationLoop;
  protected resizer : Resizer;
  protected resizeables : Resizeable[];

  protected renderer : THREE.WebGLRenderer;
  protected scene : THREE.Scene;
  protected camera : THREE.PerspectiveCamera;

  protected composer ?: EffectComposer;

  protected captureNext : boolean;
  protected captureFrameResolutionMultiplier : number;
  protected dataCallback ?: DataURLCallback;

  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    this.canvas = canvas;
    this.onLoad = onLoad;
    this.loop = this.createLoop();

    this.renderer = this.createRenderer();
    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.resizer = this.createResizer();
    this.resizeables = [];

    this.captureNext = false;
    this.dataCallback = undefined;
    this.captureFrameResolutionMultiplier = 2.0;
  }

  private createLoop() : AnimationLoop {
    return new SimpleAnimationLoop( ( delta : number, now : number ) : void => {
      this.beforeRender();
      this.update( delta, now );
      this.render( delta, now );
      this.afterRender();

      if( this.captureNext ) {
        this.captureNext = false;
      }
    } );
  }

  protected createRenderer() : THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer( {
      canvas: this.canvas,
      antialias: true,
      alpha: true
    } );

    renderer.setClearColor( new THREE.Color( '#000000' ), 0.0 );

    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.LinearToneMapping;

    renderer.setPixelRatio( window.devicePixelRatio );

    return renderer;
  }

  private createScene() : THREE.Scene {
    const scene = new THREE.Scene();

    return scene;
  }

  private createCamera() : THREE.PerspectiveCamera {
    const camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
      0.1,
      50 
    );

    camera.position.set( 0, 0, 6 );

    return camera;
  }

  private createResizer() : Resizer {
    return new SimpleResizer( this.canvas, this.camera, this.renderer );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render( delta : number, now : number ) : void {
    if( this.composer ) {
      this.composer.render( delta );
    } else {
      this.renderer.render( this.scene, this.camera );
    }
  }

  abstract update( delta : number, now : number ) : void;

  protected beforeRender() : void {
    if( this.captureNext && this.dataCallback && this.captureFrameResolutionMultiplier !== 1.0 ) {
      this.canvas.width *= this.captureFrameResolutionMultiplier;
      this.canvas.height *= this.captureFrameResolutionMultiplier;
      this.resize( this.canvas.width, this.canvas.height );
    }
  }

  protected afterRender() : void {
    if( this.captureNext && this.dataCallback ) {
      this.dataCallback( this.canvas.toDataURL( 'image/url' ) );

      if ( this.captureFrameResolutionMultiplier !== 1.0 ) {
        this.canvas.width /= this.captureFrameResolutionMultiplier;
        this.canvas.height /= this.captureFrameResolutionMultiplier;
        this.resize( this.canvas.width, this.canvas.height );
      }
    }
  }

  resize( width ?: number, height ?: number, force ?: boolean ) : void {
    this.resizer.resize( ( width : number, height : number ) => {
      this.composer?.setSize( width, height );
      this.resizeables.forEach( resizeable => resizeable.setSize( width, height ) );
    }, width, height, force );
  }

  start() : void {
    this.loop.start();
  }

  stop() : void {
    this.loop.stop();
  }

  captureFrame( dataCallback : DataURLCallback ) {
    this.captureNext = true;
    this.dataCallback = dataCallback;
  }

  setCaptureFrameResolutionMultiplier( resolutionMultiplier : number ) {
    this.captureFrameResolutionMultiplier = resolutionMultiplier;
  }
}