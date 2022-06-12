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
        float dampingAmount = 3.0;

        return 2.0 * (
          bri < dampingThreshold
          ? bri
          : dampingThreshold + pow( bri - dampingThreshold, 3.0 )
        );
        // return 2.0 * ( color.r * 0.3 + color.g * 0.6 + color.b * 0.1 ) * color.a;
      `
    }
  } as Source;

  const redSource = {
    kind: 'texture',
    name: 'tDiffuse',
    texture: null, 
    toFloat: {
      parameters: [ [ 'vec4', 'color' ] ],
      returnType: 'float',
      body: `
        return 2.0 * ( color.r ) * color.a;
      `
    }
  } as Source;

  const blueSource = {
    kind: 'texture',
    name: 'tDiffuse',
    texture: null, 
    toFloat: {
      parameters: [ [ 'vec4', 'color' ] ],
      returnType: 'float',
      body: `
        return 2.0 * ( color.b ) * color.a;
      `
    }
  } as Source;

  const noiseSource1 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 4.0, 10.0 ) ),
    amplitude: 1.0,
    pow: 4.0,
    octaves: Math.floor( random( 4, 5 ) ),
    persistance: {
      kind: 'combined',
      sources: [
        textureSource,
        { kind: 'constant', value: 1.0 },
      ],
      operation: 'pow',
      multipliers: [
        0.8,
        1.5,
      ]
    },
    lacunarity: 2.2,
    ridge: 0.5,
    normalize: false,
    noiseFunctionName: 'voronoi3d'
  };

  const mask = {
    kind: 'combined',
    sources: [
      textureSource,
    ],
    operation: 'add',
    multipliers: [
      1.0,
    ],
  } as Source;

  const warp : DomainWarp = {
    sources: {
      x: noiseSource1,
      y: noiseSource1,
      z: noiseSource1,
    },
    amount: [
      // random( -0.0, 0.0 ),
      // random( -0.0, 0.0 ),
      { kind: 'combined', sources: [ redSource ], operation: 'add', multipliers: [ random( -0.01, 0.01 ) ] },
      { kind: 'combined', sources: [ blueSource ], operation: 'add', multipliers: [ random( -0.01, 0.01 ) ] },
      {
        kind: 'combined',
        sources: [
          mask,
        ],
        operation: 'add',
        multipliers: [
          0.05,
        ]
      }
    ],
    iterations: 3.0
  };

  const warpedSource : WarpedSource = {
    kind: 'warped',
    source: noiseSource1,
    warp,
  };

  const colorSettings1 : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        // { kind: 'mult', argument: noiseModifierSource },
        { kind: 'add', argument: noiseSource1 },
        { kind: 'mult', argument: -1 },
        { kind: 'add', argument: textureSource },
        { kind: 'mult', argument: random( 0.3, 0.6 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) },
        { kind: 'mod', argument: 1.0 }
      ],
      y: [ 
        // { kind: 'add', argument: { kind: 'combined', sources: [ mask ], operation: 'add', multipliers: [ 1.0 ] } },
        { kind: 'add', argument: warpedSource },
        { kind: 'pow', argument: 1.5 },
        { kind: 'add', argument: textureSource },
        { kind: 'mult', argument: random( 0.01, 0.03 ) },
        { kind: 'pow', argument: noiseSource1 },
        { kind: 'add', argument: 0.1 },
      ],
      z: [ 
        { kind: 'mult', argument: 1.3 },
        { kind: 'pow', argument: 1.5 },
      ],
    },
  };

  const colorSettings2 : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: noiseSource1 },
        { kind: 'mult', argument: -1 },
        { kind: 'add', argument: textureSource },
        { kind: 'mult', argument: random( 0.3, 0.6 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) },
        { kind: 'mod', argument: 1.0 }
      ],
      y: [ 
        { kind: 'mult', argument: -4 },
        { kind: 'add', argument: 1.0 },
        { kind: 'mult', argument: 0.8 },
        /*
        { kind: 'add', argument: warpedSource },
        { kind: 'pow', argument: 1.5 },
        { kind: 'add', argument: textureSource },
        { kind: 'mult', argument: random( 0.01, 0.03 ) },
        { kind: 'pow', argument: noiseSource1 },
        { kind: 'add', argument: 0.1 },
        */
      ],
      z: [ 
        { kind: 'mult', argument: -1.3 },
        { kind: 'add', argument: 1.3 },
        { kind: 'pow', argument: 1.5 },
      ],
    },
  };


  return {
    domain: 'uv',
    scale: 1.0,
    mainSource: warpedSource,
    mask: mask,
    timeOffset: new THREE.Vector3( 0.00, -0.00, 0.04, ),
    colorSettings: Math.random() > 0.5 ? colorSettings1 : colorSettings2,
  } as PatternShaderSettings; 
};