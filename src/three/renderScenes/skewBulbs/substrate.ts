import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, PatternShaderSettings, Source, TrigSource } from '../../shader/builder/pattern/types';


export default () => {
  const coreModifier : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 10.0, 50.0 ) ),
    amplitude: 0.5,
    pow: 2.0,
    octaves: Math.floor( random( 4, 5 ) ),
    persistance: 0.5,
    lacunarity: 2.2,
    ridge: 0.5,
    normalize: false,
    noiseFunctionName: 'simplex3d',
  };

  const modifier1 : TrigSource = {
    kind: 'trig',
    types: {
      x: 'cos',
      y: 'sin',
      z: 'cos'
    },
    frequency: {
      x: random( 30, 150 ),
      y: random( 30, 150 ),
      z: random( 30, 150 ),
    },
    amplitude: {
      x: 1.1,
      y: Math.random() > 0.5 ? Math.pow( random( 0.0, 1.0 ), 3.0 ) : 0.0,
      z: 1.0
    },
    combinationOperation: 'add',
    pow: Math.random() > 0.5 ? random( 0.5, 1.0 ) : 1.0,
    normalize: true,
    ditheringAmount: 0.1 / 255
  };

  const modifier2 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 5.0, 10.0 ) ),
    amplitude: random( 1, 3 ),
    pow: 2.0,
    octaves: Math.floor( random( 4, 5 ) ),
    persistance: 0.5,
    lacunarity: 2.2,
    ridge: modifier1,
    normalize: true,
    noiseFunctionName: 'simplex3d',
    ditheringAmount: 0.1 / 255
  };

  const mainSource : TrigSource = {
    kind: 'trig',
    types: {
      x: 'sin',
      y: 'cos',
      z: 'sin'
    },
    frequency: {
      x: {
        kind: 'combined',
        sources: [
          modifier1,
          {
            kind: 'constant',
            value: 1
          }
        ],
        operation: 'avg',
        multipliers: [
          1.0, // NOTE: high values (around 100) are pretty cool
          random( 100, 300 )
        ]
      },
      y: {
        kind: 'combined',
        sources: [
          modifier1,
          {
            kind: 'constant',
            value: 1
          }
        ],
        operation: 'avg',
        multipliers: [
          10.0,
          random( 100, 300 )
        ]
      },
      z: {
        kind: 'combined',
        sources: [
          modifier2,
          {
            kind: 'constant',
            value: 1
          }
        ],
        operation: 'avg',
        multipliers: [
          4.0,
          random( 100, 300 )
        ]
      }
    },
    amplitude: {
      x: modifier2,
      y: coreModifier,
      z: modifier1,
    },
    combinationOperation: 'avg',
    pow: 2.0,
    normalize: true,
  };

  const warp = {
    sources: {
      x: mainSource,
      y: mainSource,
      z: modifier1,
    },
    amount: [
      random( 0.03, 0.05 ),
      random( 0.03, 0.05 ),
      random( 0.03, 0.07 ),
    ],
    iterations: 3.0
  };

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: mainSource },
        { kind: 'pow', argument: modifier2 },
        { kind: 'mult', argument: random( 0.2, 0.5 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) },
        { kind: 'mod', argument: 1.0 }
      ],
      y: [ 
        { kind: 'add', argument: mainSource },
        { kind: 'add', argument: modifier1 },
        { kind: 'mult', argument: random( 0.01, 0.2 ) },
      ],
      z: [ 
        { kind: 'mult', argument: 1.0 },
        { kind: 'add', argument: 0.0 },
      ],
    },
  };

  return {
    domain: 'uv', 
    scale: 1.0,
    mainSource: mainSource,
    domainWarp: warp,
    timeOffset: new THREE.Vector3( random( -0.01, 0.01 ), random( -0.01, 0.01 ), random( -0.01, -0.03 ) ),
    normalMapConverterSettings: {
      offset: 1,
      strength: 10.0
    },
    colorSettings,
    ditherAmount: 1.0 / 255,
  } as PatternShaderSettings; 
};