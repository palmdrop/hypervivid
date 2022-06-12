/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import type { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { AbstractRenderScene } from '../../AbstractRenderScene';
import type { VoidCallback } from '../../core';
import { ASSETHANDLER } from '../../systems/AssetHandler';
import { getPostprocessing } from './postprocessing';

import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { combineProbabilityMaps, getWeightedRandomPointsInDomain, noiseProbabilityMap, uniformProbabilityMap } from '../../generation/domain/domain';
import { SpaceColonizationTree } from '../../generation/space-colonization/SpaceColonizationTree';
import { getContainingVolume, type Volume } from '../../utils/math';
import { random, randomElement } from '../../../utils/random';

export class RhizomeRenderScene extends AbstractRenderScene {
  private shaderPass : ShaderPass;
  private backgroundComposer : EffectComposer;

  private rhizomeObject : THREE.Object3D;
  private lightRig : THREE.Object3D;
  private lightRotation : THREE.Vector3;
  private rhizomeRotation : THREE.Vector3;

  constructor( canvas : HTMLCanvasElement, onLoad : VoidCallback | undefined ) {
    super( canvas, onLoad );

    this.camera.position.z = 20;

    this.scene.fog = new THREE.Fog(
      new THREE.Color( 'black' ),
      0.0,
      30
    );

    const { points, volume } = this._createPoints();

    const structure = this._createRhizome( points, volume );

    const structureObject = structure.buildInstancedThreeObject(
      new THREE.MeshStandardMaterial( {
        color: 'white',
        metalness: 0.3,
        roughness: 0.5,
      } ),
      0.02,
      1.2,
      0.0,
      3
    );

    structureObject && this.scene.add( structureObject );

    this.scene.add(
      new THREE.AmbientLight( 'white', 2.0 )
    );

    const lightRig = new THREE.Group();

    const blueLight = new THREE.DirectionalLight(
      'blue', 4.0
    );
    blueLight.position.set( 
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
    );

    const redLight = new THREE.DirectionalLight(
      'red', 4.0
    );
    blueLight.position.set( 
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
    );

    lightRig.add(
      blueLight, redLight
    );

    this.scene.add( lightRig );
    this.lightRig = lightRig;
    this.lightRotation = new THREE.Vector3(
      random( -1, 1 ),
      random( -1, 1 ),
      random( -1, 1 ),
    );

    this.rhizomeRotation = new THREE.Vector3(
      random( -0.1, 0.1 ),
      random( -0.1, 0.1 ),
      random( -0.1, 0.1 ),
    );

    this.rhizomeObject = structureObject!;

    // Postprocessing
    const { 
      composer, 
      shaderPass,
      backgroundComposer
    } = getPostprocessing(
      this.renderer, this.scene, this.camera,
    );

    this.composer = composer;
    this.backgroundComposer = backgroundComposer;
    this.shaderPass = shaderPass;

    this.resizeables.push( this.backgroundComposer );

    ASSETHANDLER.onLoad( undefined, () => {
      onLoad?.();
    } );
  }

  _createPoints() {
    const domain = new THREE.Sphere(
      new THREE.Vector3(),
      15
    );

    const probabilityMap = 
      combineProbabilityMaps(
        noiseProbabilityMap( 0.12, 0.0, 1.0 ),
        uniformProbabilityMap( 5.0 ),
        ( v1, v2 ) => Math.pow( v1, v2 )
      );

    const points = getWeightedRandomPointsInDomain(
      domain, 
      probabilityMap,
      1500,
      20
    );

    const volume = getContainingVolume( points );

    return {
      points,
      volume
    };
  }

  _createRhizome( points : THREE.Vector3[], volume : Volume ) {
    const structure = new SpaceColonizationTree(
      // ( position: THREE.Vector3 ) => { return get( 0.05 * position.x, 0.05 * position.y, 0.05 * position.z ) * 0.1 + 0.1; },
      0.1,
      3.5, // Max dist
      0.5, // Dynamics
      0.05, // Step size
      0.24
      // ( position: THREE.Vector3 ) => { return noise( 0.1 * position.x, 0.1 * position.y, 0.1 * position.z ) * 0.02 + 0.0; },
    );

    structure.generate(
      points,
      volume,
      randomElement( points ),
      new THREE.Vector3(
        random( -1.0, 1.0 ),
        random( -1.0, 1.0 ),
        random( -1.0, 1.0 )
      ),
      120
    );

    return structure;
  }

  update( delta : number, now : number ) : void {
    this.rhizomeObject.visible = true;
    this.backgroundComposer.render( delta );
    this.backgroundComposer.swapBuffers();
    this.rhizomeObject.visible = false;

    this.shaderPass.uniforms[ 'time' ].value = now;

    this.lightRig.rotation.x += this.lightRotation.x * delta;
    this.lightRig.rotation.y += this.lightRotation.y * delta;
    this.lightRig.rotation.z += this.lightRotation.z * delta;

    this.rhizomeObject.rotation.x += this.rhizomeRotation.x * delta;
    this.rhizomeObject.rotation.y += this.rhizomeRotation.y * delta;
    this.rhizomeObject.rotation.z += this.rhizomeRotation.z * delta;


    TWEEN.update();
  }
}