import * as THREE from 'three';
import { random, randomElement } from '../../../utils/random';
import type { ColorSettings, DomainWarp, Fog, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';
import { ASSETHANDLER } from '../../systems/AssetHandler';

const images = Object.values(import.meta.globEager('../../../assets/pieces/rehash-transform/*')).map(module => module.default);

const sourceImage = randomElement( Object.values( images ) ) as string;

export const noiseSource1 : Source = {
  kind: 'noise',
  frequency: new THREE.Vector3(
    random( 0.1, 1.0 ),
    random( 0.1, 1.0 ),
    random( 0.1, 1.0 ),
  ),
  amplitude: 1.5,
  pow: 5.0,
  octaves: Math.floor( random( 3, 5 ) ),
  persistance: 0.5,
  lacunarity: 2.2,
  ridge: random( 0.3, 1.0 )
};

const source1Warp : DomainWarp = {
  sources: {
    x: noiseSource1,
    y: noiseSource1,
    z: noiseSource1,
  },
  amount: new THREE.Vector3( 
    random( 0.5, 1.0 ),
    random( 0.5, 1.0 ),
    random( 0.5, 1.0 ),
  ).multiplyScalar( 1.0 ),
  iterations: Math.floor( random( 3, 5 ) )
};

const maskSource1 : Source = {
  kind: 'custom',
  body: `
    float min = 0.2;
    float max = 1.0;

    float threshold = 0.5;
    float p = 0.8;

    float value = 1.0;

    {
      float n = 1.0;
      if( vUv.x < threshold ) {
        n = vUv.x / threshold;
      } else if( vUv.x > ( 1.0 - threshold ) ) {
        n = ( 1.0 - vUv.x ) / threshold;
      }

      if( n > 0.0000001 ) {
        n = pow( n, p );
      }

      value *= n;
    }

    {
      float n = 1.0;
      if( vUv.y < threshold ) {
        n = vUv.y / threshold;
      } else if( vUv.y > ( 1.0 - threshold ) ) {
        n = ( 1.0 - vUv.y ) / threshold;
      }

      if( n > 0.0000001 ) {
        n = pow( n, p );
      }

      value *= n;
    }

    return ( max - min ) * value + min;
  `,
};

const getTextureSource = ( textureName : string ) : Source => {
  return {
    kind: 'texture',
    name: textureName,
    texture: ASSETHANDLER.loadTexture( 
      sourceImage,
      false, 
      ( texture ) => {
        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
      } 
    ),
    repeat: new THREE.Vector2( 1.2, 1.2 )
  };
};

const colorSettings : ColorSettings = {
  mode: 'hsv',
  componentModifications: {
    x: [],
    y: [ 
      { kind: 'mult', argument: 0.5 },
      { kind: 'add', argument: 0.1 },
    ],
    z: [ 
      { kind: 'mult', argument: 1.0 },
      { kind: 'add', argument: 0.2 },
      { kind: 'pow', argument: 0.8 },
    ],
  }
};

const randomColor = ( brightness : number ) => {
  return new THREE.Color().setHSL( Math.random(), random( 0.1, 0.2 ), brightness );
};

const fog : Fog = {
  near: 400,
  far: 1500,
  nearColor: randomColor( random( 0.2, 0.8 ) ),
  farColor: randomColor( random( 0.1, 0.4 ) ),
  pow: 0.8,
  opacity: random( 0.4, 0.8 ),
};

export default ( mainTextureName : string ) => { 
  return {
    domain: 'vertex',
    scale: 0.010,
    mainSource: getTextureSource( mainTextureName ),
    domainWarp: source1Warp,
    mask: maskSource1,
    fog,
    timeOffset: new THREE.Vector3( 0.05, -0.05, 0.05, ),
    colorSettings
  } as PatternShaderSettings; 
};