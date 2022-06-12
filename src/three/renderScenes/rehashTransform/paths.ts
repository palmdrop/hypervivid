import * as THREE from 'three';
import { random } from '../../../utils/random';

import { noise3D } from '../../utils/noise';

export const createPath = ( 
  boundingBox : THREE.Box3, 
  stepSize : THREE.Vector3,
  frequency : THREE.Vector3,
  width : number,
  material : THREE.Material,
  numberOfSourcePoints : number,
  numberOfPathPoints ?: number,
) => {
  const offset = new THREE.Vector3(
    random( -1000, 1000 ),
    random( -1000, 1000 ),
    random( -1000, 1000 )
  );

  const points : THREE.Vector3[] = [];

  const currentPoint = new THREE.Vector3();

  const sampleNoise = ( x : number, y : number, z : number ) => {
    return noise3D( x * frequency.x, y * frequency.y, z * frequency.z );
  };

  for( let i = 0; i < numberOfSourcePoints; i++ ) {
    points.push( currentPoint.clone() );

    const nx = stepSize.x * sampleNoise( currentPoint.x + offset.x, currentPoint.y, currentPoint.z );
    const ny = stepSize.y * sampleNoise( currentPoint.x, currentPoint.y + offset.y, currentPoint.z );
    const nz = stepSize.z * sampleNoise( currentPoint.x, currentPoint.y, currentPoint.z + offset.z );

    currentPoint.x += nx;
    currentPoint.y += ny;
    currentPoint.z += nz;
  }

  const curve = new THREE.CatmullRomCurve3(
    points
  );

  /*const geometry = new THREE.BufferGeometry().setFromPoints( 
    curve.getPoints( numberOfPathPoints ?? numberOfSourcePoints )
  );*/

  const geometry = new THREE.TubeGeometry( curve, numberOfPathPoints, width, 20, false );

  const mesh = new THREE.Mesh( geometry, material );

  mesh.position.set( 
    100 * random( boundingBox.min.x, boundingBox.max.x ),
    100 * random( boundingBox.min.y, boundingBox.max.y ),
    100 * random( boundingBox.min.z, boundingBox.max.z ),
  );

  return mesh;
};
