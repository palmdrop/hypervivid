import * as THREE from 'three';
import { random } from '../../../utils/random';

import { getNoise3D, type Vector3 } from '../../utils/noise';

const xOffset = new THREE.Vector3( 100.0, 31.0, 51.0 );
const yOffset = new THREE.Vector3( -31.0, 0.0, 3.0 );
const zOffset = new THREE.Vector3( 38.0, -25.0, 10.0 );

const tempVector1 = new THREE.Vector3();
const tempVector2 = new THREE.Vector3();
const tempEuler = new THREE.Euler();

export type TransformFunctionArgs = { [key : string] : number | THREE.Vector3 };

export type TransformFunction = ( 
  point : Vector3,
  offset : Vector3 | undefined | null,
  frequency : number | Vector3,
  amount : number | Vector3,
  args ?: TransformFunctionArgs
) => Vector3;

export const distance = ( point1 : Vector3, point2 : Vector3 ) => {
  return Math.sqrt(
    Math.pow( point1.x - point2.x, 2.0 ) +
    Math.pow( point1.y - point2.y, 2.0 ) +
    Math.pow( point1.z - point2.z, 2.0 )
  );
};

export const domainWarp : TransformFunction = ( point, offset, frequency, amount, args = {
  warpFrequency: new THREE.Vector3( 0.3 ),
  warpAmount: 0.2, 
} ) => {
  const warpedPoint = noiseWarp( point, null, args.warpFrequency, args.warpAmount as number );

  const o = {
    x: warpedPoint.x - point.x,
    y: warpedPoint.y - point.y,
    z: warpedPoint.z - point.z,
  };

  if( offset ) {
    o.x += offset.x;
    o.y += offset.y;
    o.z += offset.z;
  }

  return noiseWarp( point, o, frequency, amount );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noiseWarp : TransformFunction = ( point, offset, frequency, amount, args = {} ) => {
  const { x, y, z } = point;

  const sample = { x, y, z };
  if( offset ) {
    sample.x += offset.x;
    sample.y += offset.y;
    sample.z += offset.z;
  }

  const warpAmount = typeof amount === 'number' ? new THREE.Vector3( amount, amount, amount ) : amount;

  return {
    x: x + getNoise3D( sample, xOffset, frequency, -warpAmount.x, warpAmount.x ),
    y: y + getNoise3D( sample, yOffset, frequency, -warpAmount.y, warpAmount.y ),
    z: z + getNoise3D( sample, zOffset, frequency, -warpAmount.z, warpAmount.z )
  };
};

export const twistWarp : TransformFunction = ( point, offset, frequency, amount, args = {
  twistAmount: new THREE.Vector3( 0.0, 0.5, 0.0 ),
  falloff: 0.9,
} ) => {
  const vector = tempVector1.set( point.x, point.y, point.z );
  tempVector2.copy( tempVector1 );

  const { x, y, z } = vector;

  vector.x *= Math.pow( args.falloff as number, Math.sqrt( y * y + z * z ) );
  vector.y *= Math.pow( args.falloff as number, Math.sqrt( x * x + z * z ) );
  vector.z *= Math.pow( args.falloff as number, Math.sqrt( x * x + y * y ) );

  vector.multiply( args.twistAmount as THREE.Vector3 );
  const euler = tempEuler.setFromVector3( vector );

  tempVector2.applyEuler( euler );

  return {
    x: tempVector2.x,
    y: tempVector2.y,
    z: tempVector2.z,
  };
};

export type WarpEntry = {
  warpFunction : TransformFunction,
  args ?: TransformFunctionArgs
}

export const geometryWarp = ( 
  geometry : THREE.BufferGeometry,

  frequency : number | Vector3,
  amount : number | Vector3,
  octaves : number,
  lacunarity : number,
  persistance : number,

  warpEntries : WarpEntry[],

  correctOffset = true,

  outputBoundingBox ?: THREE.Box3
) => {

  const noiseOffset = new THREE.Vector3(
    random( -100, 100 ),
    random( -100, 100 ),
    random( -100, 100 )
  );

  const averageOffset = new THREE.Vector3();
  const tempVector = new THREE.Vector3();

  const positionAttribute = geometry.attributes.position;
  for( let k = 0; k < octaves; k++ ) {
    for( let i = 0; i < positionAttribute.count; i++ ) {
      const x = positionAttribute.getX( i );
      const y = positionAttribute.getY( i );
      const z = positionAttribute.getZ( i );

      let warp = { x, y, z };
      for( let w = 0; w < warpEntries.length; w++ ) {
        const { 
          warpFunction, 
          args
        } = warpEntries[ w ];

        warp = warpFunction( warp, noiseOffset, frequency, amount, args );
      }

      positionAttribute.setXYZ( i, warp.x, warp.y, warp.z );

      if( k === octaves - 1 ) {
        averageOffset.x += warp.x;
        averageOffset.y += warp.y;
        averageOffset.z += warp.z;
      }

      if( outputBoundingBox ) {
        outputBoundingBox.expandByPoint( tempVector.set( warp.x, warp.y, warp.z ) );
      }
    }

    if( typeof frequency === 'number' ) {
      frequency *= lacunarity;
    } else {
      frequency.x *= lacunarity;
      frequency.y *= lacunarity;
      frequency.z *= lacunarity;
    }

    if( typeof amount === 'number' ) {
      amount *= persistance;
    } else {
      amount.x *= persistance;
      amount.y *= persistance;
      amount.z *= persistance;
    }
  }

  geometry.computeVertexNormals();
  if( correctOffset ) {
    averageOffset.divideScalar( positionAttribute.count );
    geometry.translate( -averageOffset.x, -averageOffset.y, -averageOffset.z );
  }

  return geometry;
};