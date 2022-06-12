import * as THREE from 'three';
import { random } from '../../../../utils/random';
import { getNoise3D } from '../../../utils/noise';

export type DeltaTimeProducer = ( actualTime : number ) => number;

export class DynamicTime {
  private previousActualTime : number;
  private internalTime : number;
  private deltaTimeProducer : DeltaTimeProducer;

  constructor( startTime : number, deltaTimeProducer : DeltaTimeProducer ) {
    this.previousActualTime = startTime;
    this.internalTime = startTime;
    this.deltaTimeProducer = deltaTimeProducer;
  }

  update( actualTime : number ) {
    const actualDelta = actualTime - this.previousActualTime;

    this.internalTime += 1000 * actualDelta * this.deltaTimeProducer( actualTime );

    this.previousActualTime = actualTime;
  }

  get time() {
    return this.internalTime;
  }
}

export const dynamicTimeFromNoise = (
  frequency : number,
  deltaMin : number,
  deltaMax : number,
) => {
  const offset = new THREE.Vector3(
    random( -1000, 1000 ),
    random( -1000, 1000 ),
    random( -1000, 1000 )
  );

  const position = new THREE.Vector3();

  const deltaTimeProducer = ( actualTime : number ) => {
    position.set( actualTime, 0, 0 );
    const n = getNoise3D(
      position,
      offset,
      frequency,
      deltaMin,
      deltaMax
    );

    return n;
  };

  return new DynamicTime( 0, deltaTimeProducer );
};