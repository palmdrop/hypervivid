import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, DomainWarp, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';
import type { GLSL, GlslFunctions } from '../../shader/core';

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
      .multiplyScalar( random( 5, 6.0 ) ),
    amplitude: 1.0,
    pow: 3,
    // random( 2.0, 4.0 ),
    octaves: Math.floor( random( 5, 7 ) ),
    persistance: 0.5,
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
        0.0,
        2.5
      ]
    },
    ridge: 0.3,
    normalize: false,

    noiseFunctionName: 'simplex3d'
  };

  const warp = {
    kind: 'warp',
    sources: {
      x: blockSource,
      y: blockSource,
      z: feedbackSource,
    },
    amount: [
      random( -0.2, 0.2 ),
      random( -0.2, 0.2 ),
      random( 0.8, 1.6 )
    ],
    iterations: 1
  } as DomainWarp;

  const colorSettings : ColorSettings = {
    mode: 'hsv',
    componentModifications: {
      x: [ 
        { kind: 'add', argument: blockSource },
        { kind: 'mult', argument: random( 0.3, 0.4 ) },
        { kind: 'add', argument: random( -1.0, 1.0 ) }
      ],
      y: [ 
        { kind: 'add', argument: feedbackSource },
        { kind: 'mult', argument: 1.5 },
        { kind: 'pow', argument: blockSource },
        { kind: 'mult', argument: 0.1 },
      ],
      z: [ 
        { kind: 'mult', argument: -0.9 },
        { kind: 'add', argument: 1.2 },
        { kind: 'mult', argument: 0.9 },
        { kind: 'pow', argument: blockSource },
      ],
    }
  };

  // TODO: convert to HSV and vary color brightness!?
  const colors = [
    // Pride 
    { r: 0, g: 0, b: 0 },
    { r: 97, g: 57, b: 21 },
    { r: 228, g: 3, b: 3 },
    { r: 255, g: 140, b: 0 },
    { r: 255, g: 237, b: 3 },
    { r: 0, g: 128, b: 38 },
    { r: 36, g: 64, b: 142 },
    { r: 115, g: 41, b: 130 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 175, b: 200 },
    { r: 116, g: 215, b: 238 },
    
    // Intersex
    /*
    { r: 255, g: 216, b: 0 },
    { r: 121, g: 2, b: 170 },
    */
  ];

  const pow = 3.0;
  const mixAmount = 0;
  const mixPow = 1;

  // TODO: user color settings to output only red! Then use that as brightness controller
  const toVec3 = (color: { r: number, g: number, b: number }) => {
    return `vec3(${color.r / 255}, ${color.g / 255}, ${color.b / 255})`;
  }

  const functions: GlslFunctions = {
    'getColor': {
      parameters : [['float', 'n']],
      returnType : 'vec3',
      body: `
        vec3[] colors = vec3[](${colors.map(toVec3).join(',')});
        int index = int(pow(clamp(n, 0.0, 1.0), ${pow}.0) * ${colors.length}.0);
        vec3 c1 = colors[index];
        vec3 c2 = colors[(index + 1) % ${colors.length}];
        float m = mod(n, ${1.0 / colors.length} * ${colors.length}.0);
        return mix(c1, c2, pow(${mixAmount}.0 * m, ${mixPow}.0));
        // return c1;

        // int values = 3;
        // mix(c1, mix(c2, c3, clamp(n * (values - 1) )), clamp(n * (values - 1), 0, 1)
      `
    }
  }

  const postGLSL : GLSL = `
    vec4 previous = texture2D( tFeedback, vUv );


    gl_FragColor.rgb = getColor( gl_FragColor.r );
    
    gl_FragColor.rgb = mix(gl_FragColor.rgb, previous.rgb, 0.85);
  `;

  return {
    domain: 'uv',
    scale: 1.0,
    mainSource: noiseSource1,
    domainWarp: warp,
    timeOffset: new THREE.Vector3( 
      0.0, 
      0.0, 
      random( 0.05, 0.10 ) * ( Math.random() > 0.3 ? -1.0 : 1.0 )
    ),
    colorSettings,
    functions,
    postGLSL
  } as PatternShaderSettings; 
};