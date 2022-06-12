import * as THREE from 'three';
import { random } from '../../../utils/random';
import { getNoise3D } from '../../utils/noise';

export type Domain = THREE.Box3 | THREE.Sphere;
export type ProbabilityMap = ( x : number, y : number, z : number ) => number;
export type NumberCombiner = ( v1 : number, v2 : number ) => number;

// Probability maps
export const uniformProbabilityMap = ( probability : number ) : ProbabilityMap => {
  return () => probability;
};

export const noiseProbabilityMap = ( 
  frequency : number,
  min : number,
  max : number
) : ProbabilityMap => {
  const offset = new THREE.Vector3().random().multiplyScalar( 100 );
  return ( x, y, z ) => (
    getNoise3D( { x, y, z }, offset, frequency, min, max )
  );
};


// Util
export const combineProbabilityMaps = ( map1 : ProbabilityMap, map2 : ProbabilityMap, combiner : NumberCombiner ) : ProbabilityMap => {
  return ( x, y, z ) => combiner( map1( x, y, z ), map2( x, y, z ) );
};

// Points
export const getRandomPointInDomain = ( domain : Domain, point ?: THREE.Vector3 ) => {
  if( domain instanceof THREE.Box3 ) {
    const x = random( domain.min.x, domain.max.x );
    const y = random( domain.min.y, domain.max.y );
    const z = random( domain.min.z, domain.max.z );
    return point 
      ? point.set( x, y, z ) 
      : new THREE.Vector3( x, y, z );

  } else if( domain instanceof THREE.Sphere ) {
    const theta = random( 0, Math.PI * 2 );
    const v = random( 0, 1 );
    const phi = Math.acos( 2 * v - 1.0 );
    const r = domain.radius * Math.pow( random( 0, 1 ), 1.0 / 3.0 );

    const x = r * Math.sin( phi ) * Math.cos( theta );
    const y = r * Math.sin( phi ) * Math.sin( theta );
    const z = r * Math.cos( phi );

    return point  
      ? point.set( x, y, z ) 
      : new THREE.Vector3( x, y, z ).add( domain.center );
  }
};

export const getWeightedRandomPointInDomain = ( 
  domain : Domain, 
  probabilityMap : ProbabilityMap, 
  tries = 10, 
  point ?: THREE.Vector3 
) : THREE.Vector3 | undefined => {
  let i = 0;
  if ( !point ) point = new THREE.Vector3();

  while( i < tries ) {
    getRandomPointInDomain( domain, point );
    const p = probabilityMap( point.x, point.y, point.z );
    const r = Math.random();

    if( r < p ) return point;

    i++;
  }

  return undefined;
};

export const getWeightedRandomPointsInDomain = (
  domain : Domain,
  probabilityMap : ProbabilityMap,
  numberOfPoints : number,
  tries = 10,
) : THREE.Vector3[] => {
  const points : THREE.Vector3[] = [];  

  for( let i = 0; i < numberOfPoints; i++ ) {
    const point = getWeightedRandomPointInDomain(
      domain,
      probabilityMap,
      tries
    );

    point && points.push( point );
  }

  return points;
};