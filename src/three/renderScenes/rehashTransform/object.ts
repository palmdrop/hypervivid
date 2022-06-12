import * as THREE from 'three';
import { random } from '../../../utils/random';
import { ImprintGeometryPrefab } from '../../prefabs/geometries';
import { createPath } from './paths';

export const createObject = ( 
  size : number,
  instancedMaterial : THREE.Material, 
  regularMaterial : THREE.Material,
  roomBoundingBox : THREE.Box3,
) : {
  object : THREE.Mesh,
  lines : THREE.Group,
  updateMesh : ( time : number, delta : number ) => void,
} => {
  const geometry = ImprintGeometryPrefab( {} );

  const numberOfInstances = Math.floor( random( 40, 100 ) );
  const numberOfLines = Math.random() > 0.75 
    ? Math.floor( numberOfInstances / random( 1.0, 2.0 ) )
    : 0; 

  // Object

  const instancedObject = new THREE.InstancedMesh(
    geometry,
    instancedMaterial,
    numberOfInstances
  );

  // Lines
  const lineArray : THREE.Mesh[] = [];
  const lines : THREE.Group = new THREE.Group();

  for( let i = 0; i < numberOfLines; i++ ) {
    const line = createPath(
      roomBoundingBox,
      new THREE.Vector3( 
        random( 30, 60 ),
        random( 30, 60 ),
        random( 30, 60 )
      ),
      new THREE.Vector3( 
        random( 0.003, 0.007 ),
        random( 0.003, 0.007 ),
        random( 0.003, 0.007 )
      ),
      random( 0.02, 1.1 ),
      regularMaterial,
      100,
      300
    );

    lineArray.push( line );
    lines.add( line );
  }

  // Update
  const xSpeed = random( -0.2, 0.2 );
  const ySpeed = random( -0.2, 0.2 );
  const zSpeed = random( -0.2, 0.2 );

  const xRotation = random( -0.3, 0.3 );
  const yRotation = random( -0.3, 0.3 );
  const zRotation = random( -0.3, 0.3 );

  const xScale = random( -0.1, 0.1 );
  const yScale = random( -0.1, 0.1 );
  const zScale = random( -0.1, 0.1 );
  
  const offset = random( 1.0, 2.0 );
  const instancesPerLine = Math.floor( numberOfInstances / numberOfLines );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateMesh = ( time : number, delta : number ) => {
    const positionSum = new THREE.Vector3();
    const position = new THREE.Vector3();

    for( let i = 0; i < numberOfInstances; i++ ) {
      const euler = new THREE.Euler(
        time * xSpeed + xRotation * i,
        time * ySpeed + yRotation * i,
        time * zSpeed + zRotation * i,
      );

      const rotation = new THREE.Quaternion().setFromEuler( euler );

      position.add( new THREE.Vector3( offset, 0.0, 0.0 ).applyQuaternion( rotation ) );

      positionSum.add( position );

      const scale = new THREE.Vector3(
        size + xScale * i, 
        size + yScale * i,
        size + zScale * i
      );

      const matrix = new THREE.Matrix4().compose(
        position,
        rotation,
        scale
      );

      instancedObject.setMatrixAt( i, matrix );

      // Update line
      if( i % instancesPerLine === 0 ) {
        const lineIndex = Math.floor( i / instancesPerLine );
        if( lineIndex < lineArray.length ) {
          lineArray[ lineIndex ].rotation.x = euler.x;
          lineArray[ lineIndex ].rotation.y = euler.y;
          lineArray[ lineIndex ].rotation.y = euler.z;
        }
      }
    }

    const averagePosition = positionSum.divideScalar( numberOfInstances );

    instancedObject.position.copy( averagePosition.multiplyScalar( -1 ) );

    instancedObject.instanceMatrix.needsUpdate = true;
  };

  updateMesh( 0, 0 );

  return {
    object: instancedObject,
    lines,
    updateMesh,
  };
};