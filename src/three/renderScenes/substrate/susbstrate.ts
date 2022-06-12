import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, DomainWarp, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';

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

        return 1.0 * bri;
        /*
        return (
          bri < dampingThreshold
          ? bri
          : dampingThreshold + pow( bri - dampingThreshold, 3.0 )
        );
        */
        // return 0.0;
      `
    }
  } as Source;

  const noiseSource1 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3( 1.0, 1.0, 1.0 )
      .multiplyScalar( random( 3, 6.0 ) ),
    amplitude: 1.0,
    pow: 4,
    octaves: 5.0,
    persistance: 0.5,
    lacunarity: {
      kind: 'combined',
      sources: [
        textureSource,
        {
          kind: 'constant',
          value: 1.0,
        }
      ],
      operation: 'add',
      multipliers: [
        -0.00,
        2.5
      ]
    },
    ridge: 0.3,
    // random( 0.3, 0.6 ),
    normalize: false,
  };

  const warp = {
    kind: 'warp',
    sources: {
      x: noiseSource1,
      y: noiseSource1,
      z: textureSource,
    },
    amount: [
      0.01,
      0.01,
      0.3,
    ],
    iterations: 1
  } as DomainWarp;

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'mult', argument: 1.1 },
        { kind: 'add', argument: random( -1.0, 1.0 ) }
      ],
      y: [ 
        { kind: 'mult', argument: 0.2 },
        { kind: 'add', argument: 0.1 },
      ],
      z: [ 
      ],
    }
  };

  return {
    domain: 'uv',
    scale: 1.0,
    // mainSource: warpedSource,
    mainSource: {
      kind: 'combined',
      sources: [
        noiseSource1, 
        textureSource
      ],
      operation: 'add',
      multipliers: [
        1.0,
        0.0
      ]
    },
    domainWarp: warp,
    // mask,
    // timeOffset: new THREE.Vector3( 0.05, -0.05, 0.05 ),
    // TODO add time offset in x and y as well for strange shifting effects
    timeOffset: new THREE.Vector3( 0.0, -0.0, -0.07 ),
    // colorSettings
  } as PatternShaderSettings; 
};