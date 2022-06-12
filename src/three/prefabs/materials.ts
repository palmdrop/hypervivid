import * as THREE from 'three';
import { random } from '../../utils/random';

import { ASSETHANDLER } from '../systems/AssetHandler';
import { textureFromSmoothGeometry } from '../material/textureFromVertices';
import { getNoise3D } from '../utils/noise';

// import normalTexturePathX1 from '../../assets/normal/normal-texture1.jpg';
import normalTexturePathX2 from '../../assets/normal/normal-texture1_x2.jpg';
import normalTexturePathX4 from '../../assets/normal/normal-texture1_x4.jpg';

import type { Prefab } from './prefabs';

export const SolarChromeMaterialPrefab : Prefab<THREE.MeshStandardMaterial, { geometry : THREE.BufferGeometry }> = ( { geometry } ) => {
  const material = new THREE.MeshStandardMaterial( {
    color: 'white',
    roughness: random( 0.15, 0.4 ),
    metalness: 0.7,

    side: THREE.DoubleSide,
  } );

  const roughnessMap = textureFromSmoothGeometry( 
    geometry,
    ( x, y, z ) => {
      const n = getNoise3D( { x, y, z }, null, 0.8, 0.5, 1.0 );
      return new THREE.Color( n, n, n );
    },
    new THREE.Color( 'red' )
  );

  const metalnessMap = textureFromSmoothGeometry( 
    geometry,
    ( x, y, z ) => {
      const n = getNoise3D( { x, y, z }, { x: 100, y: 0, z: 0 }, 1.0, 0.8, 1.0 );
      return new THREE.Color( n, n, n );
    },
    new THREE.Color( 'red' )
  );
  
  material.roughnessMap = roughnessMap;
  material.metalnessMap = metalnessMap;

  material.envMapIntensity = 0.7;

  ASSETHANDLER.loadTexture( normalTexturePathX4, false, ( texture ) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;

    material.normalMap = texture;
    material.normalScale = new THREE.Vector2( 0.1 );
    material.needsUpdate = true;
  } );

  return material;
};

export const SoftMaterialPrefab : Prefab<THREE.MeshStandardMaterial, { color : THREE.Color }> = ( {
  color
} ) => {
  const material = new THREE.MeshStandardMaterial( {
    color: color,
    roughness: random( 0.3, 0.5 ),
    metalness: 0.5,

    side: THREE.DoubleSide,
  } );

  material.envMapIntensity = 0.4;

  ASSETHANDLER.loadTexture( normalTexturePathX2, false, ( texture ) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;

    material.normalMap = texture;
    material.normalScale = new THREE.Vector2( random( 0.02, 0.11 ) );
    material.needsUpdate = true;
  } );

  return material;
};

export const RoughMetalMaterialPrefab : Prefab<THREE.MeshStandardMaterial, { color : THREE.Color }> = ( {
  color
} ) => {
  const material = new THREE.MeshStandardMaterial( {
    color: color,
    roughness: random( 0.3, 0.5 ),
    metalness: 0.8,

    side: THREE.DoubleSide,
  } );
  
  material.envMapIntensity = 0.5;

  ASSETHANDLER.loadTexture( normalTexturePathX2, false, ( texture ) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;

    // const textureRepeat = random( 5.0, 7.0 );
    // texture.repeat.set( textureRepeat, textureRepeat );

    material.normalMap = texture;
    material.normalScale = new THREE.Vector2( random( 0.2, 0.5 ) );
    material.needsUpdate = true;
  } );

  return material;
};

export const GlowingMaterialPrefab : Prefab<THREE.MeshStandardMaterial, { color : THREE.Color }> = ( {
  color
} ) => {
  const material = new THREE.MeshStandardMaterial( {
    color: color,
    emissive: color,
    emissiveIntensity: 7.0,
    roughness: random( 0.3, 0.5 ),
    metalness: 0.7,

    side: THREE.DoubleSide,
  } );
  
  material.envMapIntensity = 0.5;

  ASSETHANDLER.loadTexture( normalTexturePathX2, false, ( texture ) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;

    // const textureRepeat = random( 5.0, 7.0 );
    // texture.repeat.set( textureRepeat, textureRepeat );

    material.normalMap = texture;
    material.normalScale = new THREE.Vector2( random( 0.1, 0.5 ) );
    material.needsUpdate = true;
  } );

  return material;
};

export const DirtyMetalMaterialPrefab : Prefab<THREE.MeshStandardMaterial, { color : THREE.Color }> = ( {
  color
} ) => {
  const material = new THREE.MeshStandardMaterial( {
    color: color,
    roughness: random( 0.7, 0.9 ),
    metalness: 0.9,

    side: THREE.DoubleSide,
  } );
  
  material.envMapIntensity = 0.5;

  ASSETHANDLER.loadTexture( normalTexturePathX2, false, ( texture ) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;

    // const textureRepeat = random( 5.0, 7.0 );
    // texture.repeat.set( textureRepeat, textureRepeat );

    material.normalMap = texture;
    material.normalScale = new THREE.Vector2( random( 0.2, 0.6 ) );
    material.needsUpdate = true;
  } );

  return material;
};

export const FoldedPlaneMaterialPrefab : Prefab<THREE.MeshStandardMaterial, { geometry : THREE.BufferGeometry }> = () => {
  const material = new THREE.MeshStandardMaterial( {
    color: 'white',
    roughness: 0.0,
    metalness: 0.8,
  } );

  ASSETHANDLER.loadTexture( normalTexturePathX4, false, ( texture ) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.LinearFilter;

    material.normalMap = texture;
    material.normalScale = new THREE.Vector2( 0.1 );
    material.needsUpdate = true;
  } );

  return material;
};