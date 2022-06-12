import * as THREE from 'three';
import { random, randomElement } from '../../../utils/random';
import { setVertexColors } from '../../geometry/color/color';
import { textureFromSmoothGeometry } from '../../material/textureFromVertices';
import { 
  FoldedStoneGeometryPrefab, 
  TwistedTorusGeometryPrefab, 
  CurledTubeGeometryPrefab, 
  MarbleGeometryPrefab, 
} from '../../prefabs/geometries';

import {
  SolarChromeMaterialPrefab, 
  SoftMaterialPrefab, 
  RoughMetalMaterialPrefab, 
  DirtyMetalMaterialPrefab, 
} from '../../prefabs/materials';

import { varyColorHSL } from '../../utils/color';
import { getNoise3D } from '../../utils/noise';
import { type Domain, type ProbabilityMap, getWeightedRandomPointInDomain, combineProbabilityMaps } from '../../generation/domain/domain';
import { mapLinear } from '../../utils/math';

const materialPrefabs = [
  SolarChromeMaterialPrefab,
  SoftMaterialPrefab,
  RoughMetalMaterialPrefab,
  DirtyMetalMaterialPrefab
];

const geometryPrefabs = [
  MarbleGeometryPrefab,
  FoldedStoneGeometryPrefab,
  TwistedTorusGeometryPrefab,
  CurledTubeGeometryPrefab,
];


export const createMeshes = ( colors : THREE.Color[] ) => {
  const geometries : THREE.BufferGeometry[] = [];
  const materials : THREE.MeshStandardMaterial[] = [];
  const meshes : THREE.Group = new THREE.Group();

  const createMesh = ( numberOfInstances : number ) => {
    const geometry = randomElement( geometryPrefabs )( {} );
    const material = randomElement( materialPrefabs )( { 
      geometry: geometry,
      color: new THREE.Color( 'white' )
    } );

    material.dithering = true;
    material.vertexColors = true;

    const frequency = 
      new THREE.Vector3(
        0.1 + 1.0 * Math.pow( Math.random(), 3.5 ),
      );

    const warp = 0.8;
    const rf = random( 0.1, 0.5 );
    const gf = random( 0.1, 0.5 );
    const bf = random( 0.1, 0.5 );
    setVertexColors( geometry, ( i, x, y, z ) => {
      const ox = warp * getNoise3D( { x: x + 103, y, z }, null, frequency, -1.0, 1.0 );
      const oy = warp * getNoise3D( { x, y: y + 131, z }, null, frequency, -1.0, 1.0 );
      const oz = warp * getNoise3D( { x: x + 131, y: y, z }, null, frequency, -1.0, 1.0 );
      return { 
        r: 1.0 - rf * oz,
        g: 1.0 - gf * ox,
        b: 1.0 - bf * oy 
      };
    } );

    const texture = textureFromSmoothGeometry( geometry, ( x, y, z ) => {
      const ox = warp * getNoise3D( { x: x + 103, y, z }, null, new THREE.Vector3().copy( frequency ).multiplyScalar( 2.0 ), 0.0, 1.0 );
      const oy = warp * getNoise3D( { x, y: y + 131, z }, null, frequency, 0.0, 1.0 );
      const n = getNoise3D( { x: x + ox, y: y + oy, z }, null, frequency, 0.0, 1.0 );

      return new THREE.Color( 
        1.0 - 1.0 * ox, // Ambient occlusion
        0.1 + oy, // Roughness map
        0.5 + 0.5 * n // Metalness map
      );
    }, new THREE.Color() );

    material.roughnessMap = texture;
    material.metalnessMap = texture;
    // material.aoMap = texture;

    material.normalScale.multiplyScalar( 0.3 );

    geometries.push( geometry );
    materials.push( material );

    const mesh = new THREE.InstancedMesh(
      geometry,
      material,
      numberOfInstances
    );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  };

  const size = 34;
  const minScale = 0.6;
  const maxScale = 1.6;

  const domain : Domain = new THREE.Box3( 
    new THREE.Vector3( -size / 2.0, -size / 2, -size / 8.0 ),
    new THREE.Vector3( size / 2.0, size / 2, size / 8.0 ),
  );

  const tempVector = new THREE.Vector3();
  const rotationAmount = 0.0;

  const falloff : ProbabilityMap = ( x, y, z ) => {
    const length = tempVector.set( x, y, z ).length();
    return Math.pow( ( size / 2.0 - length ) / ( size / 2.0 ), 0.3 );
  };


  for( let i = 0; i < 6; i++ ) {
    const numberOfInstances = Math.floor( random( 30, 40 ) );
    const mesh = createMesh( numberOfInstances );

    const frequency = random( 0.02, 0.2 );
    const probabilityMap : ProbabilityMap = combineProbabilityMaps( ( x, y, z ) => {
      tempVector.set( x + i * 0.1, y, z );
      const length = tempVector.length();

      const rotation = length * rotationAmount;
      const euler = new THREE.Euler( 0, rotation, 0 );

      tempVector.applyEuler( euler );

      return Math.pow( getNoise3D( tempVector, null, frequency, 0.0, 1.0 ), 3.5 );
    }, falloff, ( v1, v2 ) => v1 * v2 );

    const positionGenerator = () => {
      return getWeightedRandomPointInDomain( 
        domain,
        probabilityMap,
        30
      );
    };

    const scaleGenerator = ( x : number , y : number, z : number ) => {
      const sx = getNoise3D( tempVector.set( x + 3.1313 * i, y, z ), null, 0.06, 0, 1 );
      const sy = getNoise3D( tempVector.set( y + 2.31 * i, x, z + 1.03 ), null, 0.06, 0, 1 );
      const sz = getNoise3D( tempVector.set( z + -0.31 * i, x + 0.31, y ), null, 0.06, 0, 1 );

      return tempVector.set( 
        mapLinear( Math.pow( sx, 3.0 ), 0, 1.0, minScale, maxScale ),
        mapLinear( Math.pow( sy, 3.0 ), 0, 1.0, minScale, maxScale ),
        mapLinear( Math.pow( sz, 3.0 ), 0, 1.0, minScale, maxScale ),
      );
    };


    for( let j = 0; j < numberOfInstances; j++ ) {
      const position = positionGenerator();
      if( !position ) {
        j--;
        continue;
      }

      const scale = new THREE.Vector3().copy( scaleGenerator( position.x, position.y, position.z ) );


      const f = 0.05;
      const minRotation = -Math.PI;
      const maxRotation = Math.PI;
      const rotation = new THREE.Euler(
        getNoise3D( position, { x: 100, y: 0, z: 0 }, f, minRotation, maxRotation ),
        getNoise3D( position, { x: 0, y: 100, z: 0 }, f, minRotation, maxRotation ),
        getNoise3D( position, { x: 0, y: 0, z: 100 }, f, minRotation, maxRotation ),
      );

      const matrix = new THREE.Matrix4().compose( 
        position,
        new THREE.Quaternion().setFromEuler( rotation ),
        scale
      );

      const hueVariation = getNoise3D( position, undefined, f, -0.2, 0.2 );

      const color = varyColorHSL( 
        randomElement( colors ),
        hueVariation,
        Math.pow( random( -0.1, 0.5 ), 2.0 ),
        random( -0.5, 0.7 )
      );

      mesh.setMatrixAt( j, matrix );
      mesh.setColorAt( j, color );

    }

    meshes.add( mesh );
  }

  return {
    meshes,
    geometries,
    materials
  };
};