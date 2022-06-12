/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as THREE from 'three';
import * as dat from 'dat.gui';
import * as TWEEN from '@tweenjs/tween.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import type { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';
import { ImmerseGeometryPrefab } from '../../prefabs/geometries';
import { ASSETHANDLER } from '../../systems/AssetHandler';
import { getPostprocessing } from './postprocessing';

import n1 from '../../../assets/normal/normal-texture1_x4.jpg';
import n2 from '../../../assets/normal/normal-texture2.jpg';
import n3 from '../../../assets/normal/normal-texture3.jpg';
import n4 from '../../../assets/normal/normal-texture4.jpg';
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { random, randomElement } from '../../../utils/random';
import { RandomMovement } from '../../generation/movement/RandomMovement';

type MovableObject = THREE.Object3D & {
  velocity ?: THREE.Vector3,
  acceleration ?: THREE.Vector3,
  maxForce ?: number,
  maxSpeed ?: number,
  friction ?: number
};

const normalTextures = [
  n1,
  n2,
  n3,
  n4
];

const tempVector = new THREE.Vector3();

export class ImmerseRenderScene extends AbstractRenderScene {
  private object : MovableObject;

  private mousePosition : THREE.Vector2;
  private tracker : MovableObject;

  private movables : MovableObject[];
  
  private shaderPass : ShaderPass;
  private controls ?: TrackballControls;
  private backgroundComposer : EffectComposer;

  private gui : dat.GUI;

  private randoMovement : RandomMovement;

  constructor( canvas : HTMLCanvasElement, onLoad : VoidCallback | undefined ) {
    super( canvas, onLoad );

    this.controls = new TrackballControls( this.camera, canvas );
    this.controls.noPan = true;
    this.controls.noRoll = true;
    this.controls.noRotate = true;
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 8.0;
    this.controls.zoomSpeed = 0.5;

    this.gui = new dat.GUI();
    this.gui.hide();

    this.mousePosition = new THREE.Vector2();

    this.camera.position.z = random( 4, 5 );

    const geometry = 
      ImmerseGeometryPrefab( {
        detail: 128,
        warp: 1.0
      } );

    const material = new THREE.MeshStandardMaterial( {
      color: 'white',
      metalness: 0.6,
      roughness: 0.5,
      dithering: true,
      normalMap: ASSETHANDLER.loadTexture( randomElement( normalTextures ), false ),
      normalScale: new THREE.Vector2(
        random( 0.01, 0.5 ),
        random( 0.01, 0.5 ),
      )
    } );

    this.object = new THREE.Mesh(
      geometry,
      material
    );

    this.object.position.set( 0, 0, 0 );
    this.object.velocity = new THREE.Vector3();
    this.object.acceleration = new THREE.Vector3();
    this.object.maxSpeed = 0.2;
    this.object.maxForce = 0.1;
    this.object.friction = 0.03;

    const trackerMaterial = material.clone();
    trackerMaterial.color.setColorName( 'grey' );

    this.tracker = new THREE.Mesh(
      ImmerseGeometryPrefab( {
        detail: 10,
        warp: 0.5
      } ),
      trackerMaterial
    );

    this.tracker.position.setFromSpherical( new THREE.Spherical(
      random( 8, 10.1 ),
      random( 0.0, Math.PI * 2 ),
      random( 0.0, Math.PI * 2 )
    ) );

    this.mousePosition.set( this.tracker.position.x, this.tracker.position.y );

    this.tracker.velocity = new THREE.Vector3();
    this.tracker.acceleration = new THREE.Vector3();
    this.tracker.maxSpeed = 0.5;
    this.tracker.maxForce = 0.01;
    this.tracker.friction = 0.04;

    this.tracker.scale.set( 1.0, 1.0, 1.0 ).multiplyScalar( random( 0.2, 0.4 ) );

    this.randoMovement = new RandomMovement( {
      frequency: 0.7,
      minSpeed: 0.00015,
      maxSpeed: 0.003,
      animationSpeed: 0.48
    } );

    const dirLight1 = new THREE.DirectionalLight( '#ff0000', 2.5 );
    dirLight1.position.set( 1, 1, 1 );

    const dirLight2 = new THREE.DirectionalLight( '#00ff00', 2.5 );
    dirLight2.position.set( -1, -1, -2 );

    const ambientLight = new THREE.AmbientLight( 'white', 1.2 );

    this.scene.add( 
      this.object, 
      this.tracker,
      dirLight1, 
      dirLight2, 
      ambientLight 
    );

    // Postprocessing
    const { 
      composer, 
      shaderPass,
      backgroundComposer
    } = getPostprocessing(
      this.renderer, this.scene, this.camera,
      this.gui,
    );

    this.composer = composer;
    this.backgroundComposer = backgroundComposer;
    this.shaderPass = shaderPass;

    this.movables = [
      this.tracker,
      this.object
    ];

    this.resizeables.push( this.backgroundComposer );

    this.setCaptureFrameResolutionMultiplier( 4 );

    ASSETHANDLER.onLoad( undefined, () => {
      onLoad?.();
    } );
  }

  update( delta : number, now : number ) : void {
    this.object.visible = true;
    this.tracker.visible = true;
    this.backgroundComposer.render( delta );
    this.backgroundComposer.swapBuffers();
    this.object.visible = false;
    this.tracker.visible = false;

    this.shaderPass.uniforms[ 'time' ].value = now;

    this.controls?.update();

    TWEEN.update();

    this._updateObject( delta );

    this._updateTracker( delta );

    this._updateMovableObjects( delta, now );
  }

  _updateObject ( delta : number ) {
    const centerForce = tempVector
      .copy( this.object.position )
      .multiplyScalar( -0.04 * delta );

    if ( centerForce.lengthSq() < 0.000001 ) centerForce.multiplyScalar( 0.0 );

    this.object.acceleration?.add( centerForce );

    // 
    const repellThreshold = 2.0;

    const trackerRepellForce = tempVector
      .copy( this.object.position )
      .sub( this.tracker.position );
    
    trackerRepellForce.z = 0.0;

    const distSq = trackerRepellForce.lengthSq();

    if( distSq < ( repellThreshold * repellThreshold ) ) {
      const scale = 1.0 - Math.sqrt( distSq ) / repellThreshold;

      trackerRepellForce
        .multiplyScalar( scale * delta * 0.08 );

      this.object.acceleration?.add( trackerRepellForce );
    }
  }

  _updateTracker( delta : number ) {
    tempVector.set(
      this.mousePosition.x,
      this.mousePosition.y,
      0.5 
    );
    tempVector.unproject( this.camera );
    tempVector.sub( this.camera.position ).normalize();

    const z = 0.0; // Make changable on zoom?
    const distance = ( z - this.camera.position.z ) / tempVector.z;

    const trackerGoal = this.camera.position.clone()
      .add( tempVector.multiplyScalar( distance ) );

    const force = tempVector
      .copy( trackerGoal )
      .sub( this.tracker.position )
      .multiplyScalar( 0.1 * delta );

    if ( force.lengthSq() < 0.000001 ) force.multiplyScalar( 0.0 );

    this.tracker.acceleration?.add( force );
  }

  _updateMovableObjects( delta : number, now : number ) {
    this.movables.forEach( ( object, i ) => {
      const velocity = object.velocity!;
      const acceleration = object.acceleration!;
      const maxSpeed = object.maxSpeed!;
      const maxForce = object.maxForce!;
      const friction = object.friction!;

      const randomForce = this.randoMovement.getForce( now + i * 100, tempVector );
      acceleration.add( randomForce.multiplyScalar( velocity.lengthSq() * delta + 0.1 ) );

      acceleration.clampLength( 0.0, maxForce );

      velocity
        .add( acceleration )
        .multiplyScalar( 1.0 - friction )
        .clampLength( 0.0, maxSpeed );

      object.position.add( velocity );

      acceleration.set( 0, 0, 0 );

      object.rotation.x += velocity.x;
      object.rotation.y += velocity.y;
      object.rotation.z += velocity.z;
    } );
  }

  onMouseMove( x : number, y : number ) {
    const screenX = ( x / this.canvas.clientWidth ) * 2.0 - 1;
    const screenY = -( y / this.canvas.clientHeight ) * 2.0 + 1;
    this.mousePosition.set( screenX, screenY );
  }

  dispose() {
    this.gui.destroy();
  }

  onUserAdmin() {
    this.gui.show();
  }
}