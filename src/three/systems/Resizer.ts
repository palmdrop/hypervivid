import * as THREE from 'three';
import type { ResizeCallback, Resizer } from '../core';

export class SimpleResizer implements Resizer {
  private container : HTMLElement;
  private camera : THREE.PerspectiveCamera;
  private renderer : THREE.WebGLRenderer;
  private useDevicePixelRatio : boolean;

  constructor( container : HTMLElement, camera : THREE.PerspectiveCamera, renderer : THREE.WebGLRenderer, useDevicePixelRatio = false ) {
    this.container = container;
    this.camera = camera;
    this.renderer = renderer;
    this.useDevicePixelRatio = useDevicePixelRatio;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resize( callback ?: ResizeCallback, width ?: number, height ?: number, force = false ) {
    if( !width ) width = this.container.clientWidth;
    if( !height ) height = this.container.clientHeight;

    // const currentSize = this.renderer.getSize( new THREE.Vector2() );
    const newSize = new THREE.Vector2( width, height );

    if( this.useDevicePixelRatio ) newSize.multiplyScalar( window.devicePixelRatio );

    // If size is unchanged, do nothing
    // if( !force && currentSize.equals( newSize ) ) return;

    this.renderer.setSize( newSize.x, newSize.y, false );

    this.camera.aspect = newSize.x / newSize.y;
    this.camera.updateProjectionMatrix();

    callback && callback( newSize.x, newSize.y );
  }
}