import { makeNoise3D } from 'fast-simplex-noise';
import { clamp } from './math';

export type Vector3 = { x : number, y : number, z : number };

export type Noise = ( 
  position : Vector3, 
  offset : Vector3 | null | undefined, 
  frequency : number | Vector3,
  min ?: number, 
  max ?: number
) => number

export const noise3D = makeNoise3D();

export const getNoise3D : Noise = ( 
  position, 
  offset, 
  frequency,
  min = -1.0, 
  max = 1.0 
) => {
  let x = position.x;
  let y = position.y;
  let z = position.z;

  if( typeof frequency === 'number' ) {
    x *= frequency;
    y *= frequency;
    z *= frequency;
  } else {
    x *= frequency.x;
    y *= frequency.y;
    z *= frequency.z;
  }

  if( offset ) {
    x += offset.x;
    y += offset.y;
    z += offset.z;
  }
  const n = ( noise3D( x, y, z ) + 1.0 ) / 2.0;
  return clamp( min + ( max - min ) * n, min, max );
};