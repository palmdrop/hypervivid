import * as THREE from 'three';
import { random } from '../../../utils/random';
import { getNoise3D, type Noise } from '../../utils/noise';

type Args = {
  noiseOffset ?: THREE.Vector3,
  frequency : number,

  maxSpeed : number, // TODO add vector support
  minSpeed : number,

  animationSpeed : number,

  sampleOffsets ?: [ THREE.Vector3, THREE.Vector3, THREE.Vector3 ]
}

export class RandomMovement {
  private noise : Noise;
  private args : Args;

  private sampleOffsets : [ THREE.Vector3, THREE.Vector3, THREE.Vector3 ];

  private tempVector1 : THREE.Vector3;

  private minComponentMultiplier : number;
  private maxComponentMultiplier : number;

  constructor( args : Args ) {
    this.noise = getNoise3D;
    this.args = args;

    if( !this.args.sampleOffsets ) {
      this.args.noiseOffset = new THREE.Vector3(
        random( -1000, 1000 ),
        random( -1000, 1000 ),
        random( -1000, 1000 ),
      );
    }

    this.sampleOffsets = args.sampleOffsets ?? [
      new THREE.Vector3().random().multiplyScalar( 100 ),
      new THREE.Vector3().random().multiplyScalar( 100 ),
      new THREE.Vector3().random().multiplyScalar( 100 )
    ];

    this.tempVector1 = new THREE.Vector3();

    this.minComponentMultiplier = this.args.minSpeed / Math.sqrt( 3 );
    this.maxComponentMultiplier = this.args.maxSpeed / Math.sqrt( 3 );
  }

  getForce( time : number, vector ?: THREE.Vector3 ) {
    if ( !vector ) vector = new THREE.Vector3();

    const zOffset = time * this.args.animationSpeed;

    for( let i = 0; i < 3; i++ ) {
      this.tempVector1.copy( this.sampleOffsets[ i ] );
      this.tempVector1.z += zOffset;

      const n = this.noise( 
        this.tempVector1,
        this.args.noiseOffset,
        this.args.frequency,
        -1.0,
        1.0
      );

      const componentForce = ( this.maxComponentMultiplier - this.minComponentMultiplier ) * n + this.minComponentMultiplier;

      switch ( i ) {
        case 0: vector.x = componentForce; break;
        case 1: vector.y = componentForce; break;
        case 2: vector.z = componentForce; break;
      }
    }

    return vector;
  }
}