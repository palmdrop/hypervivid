import * as THREE from 'three';
import { random } from '../../../../utils/random';

import { random2dChunk, simplex2dChunk } from '../../chunk/noise';

const vertexShader = `

  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }

`;

const colorAccumulator = ( numberOfColors : number ) => {
  let chunk = '';

  for( let i = 0; i < numberOfColors; i++ ) {
    chunk += `
      noise = ( simplex2d( 
        frequency * vUv + 
        layerOffset * float( ${ i } ) +
        offset
      ) + 1.0 ) / 2.0;

      noise = pow( noise, contrast );

      color += noise * colors[ ${ i } ];
    `;
  }

  return chunk;
};

const fragmentShader = ( numberOfColors : number ) => `
  varying vec2 vUv;
  uniform float opacity;

  uniform int colorMode;
  uniform vec3 colors[ ${ numberOfColors } ];

  uniform float frequency;
  uniform float contrast;
  uniform float staticAmount;
  uniform float brightness;

  uniform vec2 offset;

  ${ simplex2dChunk.content }
  ${ random2dChunk.content }

  vec2 layerOffset = vec2( 13.78, 19.31 );

  vec3 getColor() {
    vec3 color;
    float noise;

    ${ colorAccumulator( numberOfColors ) }

    return brightness * color / float( ${ numberOfColors } );
  }

  void main() {
    vec3 color = getColor();
    color *= ( 1.0 + staticAmount * ( 2.0 * random2d( vUv * 100.0 ) - 1.0 ) );
    gl_FragColor = vec4( color, 1.0 );
  }
`;

enum ColorModes {
  RGB = 0,
  HSB = 0
}

const createWarpGradientShader = ( 
  numberOfColors = 3
) : THREE.Shader => {

  return {
    uniforms: {
      'opacity': { value: 1.0 },
      'colorMode': { value: ColorModes.RGB },
      'colors': { value: [ 
        new THREE.Color( '#30ffdf' ),
        new THREE.Color( '#32ff33' ),
        new THREE.Color( '#af30ff' ),
      ] },

      'frequency': { value: 0.7 },
      'contrast': { value: 2.0 },
      'staticAmount': { value: 0.05 },
      'brightness': { value: 1.0 },

      'offset': { value: new THREE.Vector2(
        random( -31, 31 ),
        random( -31, 31 ),
      ) }

    },

    vertexShader: vertexShader,
    fragmentShader: fragmentShader( Math.floor( numberOfColors ) ),
  };
};

export { createWarpGradientShader };