import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

const fragmentShader = `
  uniform vec2 viewport;

  uniform float opacity;
  uniform float darkness;
  uniform float brightness;
  uniform vec2 offset;

  uniform float staticAmount;

  uniform float zoom;
  uniform vec2 zoomOrigin;

  uniform vec3 tint;

  uniform sampler2D tDiffuse;
  varying vec2 vUv;

  vec2 calculateSamplePosition( vec2 uv ) {
    vec2 samplePosition = uv;

    samplePosition -= zoomOrigin;
    samplePosition *= 1.0 / zoom;
    samplePosition += zoomOrigin;

    return samplePosition + offset / viewport;
  }

  float random ( vec2 st ) {
    return fract( sin( dot( st.xy, vec2( 12.9898,78.233 ) ) ) * 43758.5453123 );
  }

  float getStatic( vec2 uv, int channel ) {
    return staticAmount * ( random( uv + vec2( channel ) ) - 0.5 );
  }

  vec3 applyStatic( vec3 color, vec2 uv ) {
    color.r += getStatic( uv, 0 );
    color.g += getStatic( uv, 1 );
    color.b += getStatic( uv, 2 );

    return color;
  }

  void main() {
    vec4 texel = texture2D( tDiffuse, calculateSamplePosition( vUv ) );

    vec3 color = texel.rgb;

    float caustics = 0.0;

    if( texel.a > 0.1 ) {
      float caustics = color.r / texel.a;
    }

    color = applyStatic( color, vUv );
    color *= vec3( brightness );
    color -= vec3( darkness );

    color *= tint;

    gl_FragColor = opacity * vec4( color * texel.a, texel.a );
  }
`;

const ShadowTransformShader : THREE.Shader = {
  uniforms: {
    'tDiffuse': { value: null },
    'viewport': { value: new THREE.Vector2() },

    'darkness': { value: -0.2 },
    'brightness': { value: 1.0 },
    'opacity': { value: 2.9 },
    'offset': { value: new THREE.Vector2( -0, 0 ) },

    'staticAmount': { value: 0.07 },

    'zoom': { value: 1.0 },
    'zoomOrigin': { value: new THREE.Vector2( 0.5, 0.5 ) },

    'tint': { value: new THREE.Color().setRGB( 1.0, 1.0, 1.0 ) }
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
};

export { ShadowTransformShader };