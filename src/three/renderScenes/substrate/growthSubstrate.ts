import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, CombinedSource, DomainWarp, PatternShaderSettings, Source, WarpedSource } from '../../shader/builder/pattern/types';
import type { GLSL } from '../../shader/core';

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
    pow: random( 2.0, 8.0 ),
    octaves: Math.floor( random( 5, 7 ) ),
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
        -0.0,
        2.5
      ]
    },
    ridge: 0.3,
    normalize: false,

    noiseFunctionName: 'simplex3d'
  };

  const remappedNoise = {
    kind: 'combined',
    sources: [
      noiseSource1,
      {
        kind: 'constant',
        value: 1.0,
      }
    ],
    operation: 'add',
    multipliers: [
      1.0,
      -0.5
    ]
  };

  const warp = {
    kind: 'warp',
    sources: {
      x: remappedNoise,
      y: remappedNoise,
      z: textureSource,
    },
    amount: [
      random( -0.01, 0.01 ),
      random( -0.01, 0.01 ),
      random( 0.3, 0.6 )
    ],
    iterations: 1
  } as DomainWarp;

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: textureSource },
        { kind: 'mult', argument: random( 1.5, 2.0 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) }
      ],
      y: [ 
        { kind: 'mult', argument: 0.1 },
        { kind: 'add', argument: 0.1 },
        { kind: 'pow', argument: textureSource },
      ],
      z: [ 
        { kind: 'mult', argument: -1.0 },
        { kind: 'add', argument: 1.0 },
        { kind: 'pow', argument: 1.8 },
      ],
    }
  };

  const postGLSL : GLSL = `
    vec4 previous = texture2D( tDiffuse, vUv );
    gl_FragColor.rgb = mix(gl_FragColor.rgb, previous.rgb, ${ random( 0.8, 0.9 ) });
  `;

  return {
    domain: 'uv',
    scale: 1.0,
    mainSource: noiseSource1,
    domainWarp: warp,
    timeOffset: new THREE.Vector3( 
      0.0, 
      0.0, 
      random( 0.10, 0.16 ) * ( Math.random() > 0.3 ? -1.0 : 1.0 )
    ),
    colorSettings,
    postGLSL
  } as PatternShaderSettings; 
};