import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, PatternShaderSettings, Source, TrigSource } from '../../shader/builder/pattern/types';

export default () => {
  const mainSource : TrigSource = {
    kind: 'trig',
    types: {
      x: 'cos',
      y: 'sin',
      z: 'cos'
    },
    frequency: {
      x: 70,
      y: 0.0,
      z: 0.0
    },
    amplitude: {
      x: random( 1.1, 2.0 ),
      // y: Math.random() > 0.5 ? Math.pow( random( 0.0, 2.0 ), 3.0 ) : 0.0,
      y: 0.0,
      z: 0.0
    },
    combinationOperation: 'add',
    pow: random( 10, 20 ),
    normalize: false,
    ditheringAmount: 10.0 / 255
  };

  const coreModifier : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 0.5, 1.0 ) ),
    amplitude: 1.0,
    pow: 2.0,
    octaves: Math.floor( random( 4, 5 ) ),
    persistance: 0.5,
    lacunarity: 2.2,
    ridge: Math.random() > 0.7 ? random( 0.5, 1.0 ) : 1.0,
    normalize: false,
    noiseFunctionName: 'simplex3d',
    ditheringAmount: random( 10.0, 20 ) / 255,
  };

  const modifier2 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 4.0, 10.0 ) ),
    amplitude: random( 3, 6 ),
    pow: random( 1.5, 4.0 ),
    octaves: Math.floor( random( 4, 6 ) ),
    persistance: 0.5,
    lacunarity: 2.1,
    ridge: mainSource,
    normalize: false,
    noiseFunctionName: 'simplex3d',
    ditheringAmount: 1.1 / 255
  };

  const warp = {
    sources: {
      x: coreModifier,
      y: coreModifier,
      z: modifier2,
    },
    amount: [
      random( -0.8, 0.8 ),
      random( -0.8, 0.8 ),
      random( 0.3, 0.7 ),
    ],
    iterations: 3.0
  };

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: mainSource },
        { kind: 'pow', argument: modifier2 },
        { kind: 'mult', argument: random( 0.1, 0.3 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) },
        { kind: 'mod', argument: 1.0 }
      ],
      y: [ 
        { kind: 'add', argument: mainSource },
        { kind: 'add', argument: coreModifier },
        { kind: 'mult', argument: random( 1.1, 2.1 ) },
      ],
      z: [ 
        { kind: 'pow', argument: 0.1 },
        { kind: 'mult', argument: 10.0 },
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
    colorSettings,
  } as PatternShaderSettings; 
};