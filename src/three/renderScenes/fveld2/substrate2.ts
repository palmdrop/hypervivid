import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, DomainWarp, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';
import type { GLSL } from '../../shader/core';

export default () => {
  const feedbackSource = {
    kind: 'texture',
    name: 'tFeedback',
    texture: null, 
    toFloat: {
      parameters: [ [ 'vec4', 'color' ] ],
      returnType: 'float',
      body: `
        float bri = ( color.r * 0.3 + color.g * 0.6 + color.b * 0.1 ) * color.a;
        float dampingThreshold = 0.5;
        float dampingAmount = 10.0;

        // return 1.0 * bri;
        return (
          bri < dampingThreshold
          ? bri
          : dampingThreshold + pow( bri - dampingThreshold, 3.0 )
        );
      `
    }
  } as Source;

  const blockSource = {
    kind: 'texture',
    name: 'tBlock',
    texture: null, 
    toFloat: {
      parameters: [ [ 'vec4', 'color' ] ],
      returnType: 'float',
      body: `
        return ( color.r * 0.3 + color.g * 0.6 + color.b * 0.1 ) * color.a;
      `
    }
  } as Source;

  const noiseSource1 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3( 1.0, 1.0, 1.0 )
      .multiplyScalar( random( 5, 10.0 ) ),
    amplitude: 2.5,
    pow: random( 3.0, 7.0 ),
    octaves: Math.floor( random( 5, 7 ) ),
    persistance: 0.6,
    lacunarity: {
      kind: 'combined',
      sources: [
        feedbackSource,
        {
          kind: 'constant',
          value: 1.0,
        }
      ],
      operation: 'add',
      multipliers: [
        0.5,
        2.0
      ]
    },
    ridge: 0.4,
    normalize: true,

    noiseFunctionName: 'simplex3d'
  };

  const noiseSource2 : Source = {
    kind: 'noise',
    frequency: new THREE.Vector3( 1.0, 1.0, 1.0 )
      .multiplyScalar( random( 5, 10.0 ) ),
    amplitude: 1.0,
    pow: random( 1.0, 2.0 ),
    octaves: Math.floor( random( 3, 5 ) ),
    persistance: noiseSource1,
    lacunarity: 2.5,
    ridge: 0.3,
    normalize: false,

    noiseFunctionName: 'simplex3d'
  };


  const warp = {
    kind: 'warp',
    sources: {
      x: feedbackSource,
      y: feedbackSource ,
      z: blockSource,
    },
    amount: [
      random( -0.2, 0.2 ),
      random( -0.2, 0.2 ),
      random( 1.2, 2.6 )
    ],
    iterations: Math.round( 1 + 2 * Math.pow( Math.random(), 2.0 ) )
  } as DomainWarp;

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: feedbackSource },
        { kind: 'mult', argument: random( 0.8, 0.9 ) },
        { kind: 'pow', argument: blockSource },
        { kind: 'add', argument: random( -1.0, 1.0 ) }
      ],
      y: [ 
        { kind: 'add', argument: 0.0 }
      ],
      z: [ 
        { kind: 'mult', argument: -1.0 },
        { kind: 'add', argument: 1.2 },
      ],
    },
    sanitizeHSV: true
  };

  const postGLSL : GLSL = `
    vec4 previous = texture2D( tFeedback, vUv );
    gl_FragColor.rgb = mix(gl_FragColor.rgb, previous.rgb, ${ random( 0.7, 0.8 ) });
  `;

  return {
    domain: 'uv',
    scale: 1.0,
    mainSource: noiseSource2,
    domainWarp: warp,
    timeOffset: new THREE.Vector3( 
      0.0, 
      0.0, 
      random( 0.05, 0.10 ) * ( Math.random() > 0.3 ? -1.0 : 1.0 )
    ),
    colorSettings,
    postGLSL
  } as PatternShaderSettings; 
};