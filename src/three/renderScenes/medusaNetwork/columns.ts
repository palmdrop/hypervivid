import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, CombinedSource, PatternShaderSettings, Source, TrigSource } from '../../shader/builder/pattern/types';

export default () => {
  const gridFrequencyX = random( 50, 150 );
  const gridFrequencyY = random( 50, 200 );
  const gridPow = random( 15, 60 );

  const trig1 : TrigSource = {
    kind: 'trig',
    types: {
      x: 'cos',
      y: 'sin',
      z: 'cos'
    },
    frequency: {
      x: gridFrequencyX,
      y: 1000.0,
      z: 1000.0
    },
    amplitude: {
      x: 1.0,
      y: 0.0,
      z: 0.0
    },
    combinationOperation: 'add',
    normalize: true,
    pow: gridPow,
    // ditheringAmount: 0.2,
  };

  const trig2 : TrigSource = {
    kind: 'trig',
    types: {
      x: 'cos',
      y: 'cos',
      z: 'cos'
    },
    frequency: {
      x: 2000.0,
      y: gridFrequencyY,
      z: 1000.0
    },
    amplitude: {
      x: 0.0,
      y: 1.0,
      z: 0.0
    },
    combinationOperation: 'add',
    normalize: true,
    pow: gridPow,
    ditheringAmount: random( 0.1, 0.2 )
  };

  const mainSource : CombinedSource = {
    kind: 'combined',
    sources: [
      trig1,
      trig2
    ],
    // TODO TODO TOD: Explore mult combinatioN! really satisfying, calm, ethereal!
    operation: 'mult',
    multipliers: [
      2.0, 2.0
    ],
  };

  const coreModifier : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 0.5, 1.0 ) ),
    amplitude: 1.0,
    pow: 1.0,
    octaves: Math.floor( random( 4, 5 ) ),
    persistance: 0.5,
    lacunarity: 2.2,
    ridge: Math.random() > 0.7 ? random( 0.5, 1.0 ) : 1.0,
    normalize: false,
    noiseFunctionName: 'simplex3d',
    ditheringAmount: random( 5.0, 10 ) / 255,
  };

  const modifier2 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3(
      1.0, 1.0, 1.0
    ).multiplyScalar( random( 0.5, 1.5 ) ),
    amplitude: random( 1, 1 ),
    pow: random( 1.0, 2.5 ),
    octaves: Math.floor( random( 4, 6 ) ),
    persistance: 0.5,
    lacunarity: 2.1,
    ridge: mainSource,
    normalize: false,
    noiseFunctionName: 'simplex3d',
    ditheringAmount: 1.1 / 255
  };

  // NOTE: mainSource as all sources creates nice geometric noise stuff
  const warp = {
    sources: {
      x: coreModifier,
      y: modifier2,
      z: mainSource,
    },
    amount: [
      random( -0.3, 0.3 ),
      random( -0.3, 0.3 ),
      random( 0.15, 0.2 ),
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
        { kind: 'mult', argument: -0.5 },
        { kind: 'add', argument: modifier2 },
        { kind: 'mult', argument: random( 1.0, 2.0 ) },
        { kind: 'pow', argument: 1.0 },
      ],
      z: Math.random() > 0.3 
        ? [ 
          { kind: 'mult', argument: 1.0 },
          { kind: 'add', argument: 0.001 },
          { kind: 'pow', argument: random( 0.1, 1.3 ) }
        ]
        : [
          { kind: 'mult', argument: -1.0 },
          { kind: 'add', argument: 1.0 },
          { kind: 'pow', argument: 0.5 },
        ]
    },
  };

  return {
    domain: 'uv', 
    scale: 1.0,
    mainSource: mainSource,
    domainWarp: warp,
    timeOffset: new THREE.Vector3( random( -0.0, 0.0 ), random( -0.03, 0.03 ), random( -0.02, -0.05 ) ),
    colorSettings,
  } as PatternShaderSettings; 
};