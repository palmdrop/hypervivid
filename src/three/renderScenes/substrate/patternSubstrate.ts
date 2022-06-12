import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, DomainWarp, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';
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
      .multiplyScalar( random( 2.0, 2.5 ) ),
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
        2.1
      ]
    },
    ridge: random( 0.3, 0.8 ),
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
      1.9,
    ],
    iterations: 1
  } as DomainWarp;

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: noiseSource1 },
        { kind: 'mult', argument: textureSource },
        { kind: 'mult', argument: 0.3 },
        { kind: 'add', argument: random( -1.0, 1.0 ) }
      ],
      y: [ 
        { kind: 'mult', argument: 0.2 },
        { kind: 'add', argument: 0.1 },
        { kind: 'pow', argument: textureSource },
      ],
      z: [ 
        { kind: 'mult', argument: -1 },
        { kind: 'add', argument: 1 },
        { kind: 'pow', argument: 1.5 },
        { kind: 'pow', argument: {
          kind: 'combined',
          sources: [ textureSource, { kind: 'constant', value: 1.0 } ],
          operation: 'add',
          multipliers: [ -1.0, 1.2 ]
        } }
      ],
    }
  }; 

  const postGLSL : GLSL = `
    vec4 previous = texture2D( tDiffuse, vUv );
    gl_FragColor.rgb = mix(gl_FragColor.rgb, previous.rgb, 0.5);
  `;

  return {
    domain: 'uv',
    scale: Math.floor( random( 1.5, 6 ) ),
    mainSource: noiseSource1,
    domainWarp: warp,
    timeOffset: new THREE.Vector3( 0.0, 0.0, -1.1 ),
    colorSettings,
    postGLSL
  } as PatternShaderSettings; 
};