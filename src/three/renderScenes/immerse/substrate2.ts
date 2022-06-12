import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, DomainWarp, PatternShaderSettings, Source, WarpedSource } from '../../shader/builder/pattern/types';

export default () => {
  const textureSource = {
    kind: 'texture',
    name: 'tDiffuse',
    texture: null, 
    toFloat: {
      parameters: [ [ 'vec4', 'color' ] ],
      returnType: 'float',
      body: `
        float bri = ( color.r * 0.3 + color.g * 0.6 + color.b * 0.1 ) * color.a;
        float dampingThreshold = 0.5;
        float dampingAmount = 4.0;

        return (
          bri < dampingThreshold
          ? bri
          : dampingThreshold + pow( bri - dampingThreshold, 3.0 )
        );
      `
    }
  } as Source;

  const noiseModifierSource : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      random( 2.2, 4.0 ),
      random( 2.2, 4.0 ),
      random( 2.2, 4.0 ),
    ),
    amplitude: 1.0,
    pow: 1.0,
    octaves: Math.floor( random( 3, 5 ) ),
    persistance: 0.4,
    lacunarity: 5.2,
    ridge: 0.4
  };

  const maskNoiseSource : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3( 1.0, 1.0, 1.0 )
      .multiplyScalar( random( 1.5, 3.0 ) ),
    amplitude: 1.3,
    pow: 1.0,
    octaves: 4,
    persistance: 0.4,
    lacunarity: 2.2,
    ridge: 0.5,
    normalize: false
  };

  const noiseSource1 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3( 1.0, 1.0, 1.0 )
      .multiplyScalar( random( 2.5, 5.0 ) ),
    amplitude: 0.7,
    pow: 2.0,
    octaves: 5.0,
    persistance: { 
      kind: 'combined',
      sources: [
        textureSource,
        {
          kind: 'constant',
          value: 1.0
        },
        noiseModifierSource,
      ],
      operation: 'add',
      multipliers: [
        -0.35,
        0.55,
        -0.3,
      ],
    },
    lacunarity: {
      kind: 'combined',
      sources: [
        textureSource,
        {
          kind: 'constant',
          value: 1.0
        },
        noiseModifierSource,
      ],
      operation: 'add',
      multipliers: [
        0.1,
        2.2,
        0.01
      ]
    },
    ridge: random( 0.3, 0.6 ),
    normalize: false,
  };

  const warp : DomainWarp = {
    sources: {
      x: noiseSource1,
      y: noiseSource1,
      z: noiseSource1,
    },
    amount: [
      random( -0.01, 0.01 ),
      random( -0.01, 0.01 ),
      {
        kind: 'combined',
        sources: [
          textureSource,
        ],
        operation: 'add',
        multipliers: [
          0.2,
        ]
      }
    ],
    iterations: 3.0
  };

  const mask = {
    kind: 'combined',
    sources: [
      textureSource,
      maskNoiseSource,
    ],
    operation: 'add',
    multipliers: [
      0.8,
      0.5,
    ],
  };

  const warpedSource : WarpedSource = {
    kind: 'warped',
    source: noiseSource1,
    warp,
  };

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'mult', argument: noiseModifierSource },
        { kind: 'mult', argument: random( 0.4, 1.3 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) }
      ],
      y: [ 
        { kind: 'mult', argument: 1.0 },
        { kind: 'pow', argument: random( 1.2, 2.0 ) },
        { kind: 'add', argument: {
          kind: 'combined',
          sources: [
            textureSource,
          ],
          operation: 'add',
          multipliers: [
            random( 0.2, 0.4 )
          ]
        } }
      ],
      z: [ 
        { kind: 'mult', argument: -1 },
        { kind: 'add', argument: 1 },
        { kind: 'mult', argument: 1.1 },
        { kind: 'pow', argument: 3 },
      ],
    }
  };

  return {
    domain: 'uv',
    scale: 1.0,
    mainSource: warpedSource,
    mask,
    timeOffset: new THREE.Vector3( 0.00, -0.00, 0.02, ),
    colorSettings
  } as PatternShaderSettings; 
};