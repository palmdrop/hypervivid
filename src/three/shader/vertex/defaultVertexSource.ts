import type { GLSL } from '../core';

export const defaultVertexMain : GLSL = `
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
`;