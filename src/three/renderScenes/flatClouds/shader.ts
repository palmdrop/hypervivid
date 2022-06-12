import * as THREE from 'three';
import { weightedRandomElement } from '../../../utils/general';
import { random, randomElement } from '../../../utils/random';
import type { ColorSettings, CombinedSource, DomainWarp, Fog, NoiseSource, PatternShaderSettings, SoftParticleSettings, Source } from '../../shader/builder/pattern/types';
import { numToGLSL } from '../../shader/builder/utils';

const sources : Source[] = [];

export const noiseSource1 : NoiseSource = {
  kind: 'noise',
  frequency: new THREE.Vector3(
    random( 0.5, 1.0 ),
    random( 0.5, 1.0 ),
    random( 0.5, 1.0 ),
  ),
  amplitude: 1.0,
  pow: 5.0,
  octaves: Math.floor( random( 3, 5 ) ),
  persistance: 0.5,
  lacunarity: 2.2,
  ridge: random( 0.3, 1.0 ),
  normalize: false,
};

sources.push( noiseSource1 );

const noiseSource2 : NoiseSource = {
  kind: 'noise',
  frequency: new THREE.Vector3(
    random( 0.6, 1.3 ),
    random( 0.6, 1.3 ),
    random( 0.6, 1.3 ),
  ),
  amplitude: 1.0,
  pow: 5.1,
  octaves: Math.floor( random( 3, 5 ) ),
  persistance: 0.8,
  lacunarity: 2.2,
  ridge: random( 0.3, 1.0 )
};

sources.push( noiseSource2 );

const trigSource1 : Source = {
  kind: 'trig',
  types: {
    x: weightedRandomElement( [
      [ 'sin', 0.5 ],
      [ 'cos', 0.4 ],
      // [ 'tan', 0.01 ],
    ] ),
    y: weightedRandomElement( [
      [ 'sin', 0.4 ],
      [ 'cos', 0.5 ],
      // [ 'tan', 0.01 ],
    ] ),
    z: weightedRandomElement( [
      [ 'sin', 0.4 ],
      [ 'cos', 0.5 ],
      // [ 'tan', 0.01 ],
    ] ),
  },
  frequency: new THREE.Vector3( 
    random( 0.1, 2.0 ),
    random( 0.1, 2.0 ),
    random( 0.1, 2.0 ),
  ),
  combinationOperation: 'mult',
  pow: 1.0,
  normalize: true,
};

sources.push( trigSource1 );

const trigSource2 : Source = {
  kind: 'trig',
  types: {
    x: weightedRandomElement( [
      [ 'sin', 0.5 ],
      [ 'cos', 0.4 ],
      // [ 'tan', 0.01 ],
    ] ),
    y: weightedRandomElement( [
      [ 'sin', 0.4 ],
      [ 'cos', 0.5 ],
      // [ 'tan', 0.01 ],
    ] ),
    z: weightedRandomElement( [
      [ 'sin', 0.4 ],
      [ 'cos', 0.5 ],
      // [ 'tan', 0.01 ],
    ] ),
  },
  frequency: new THREE.Vector3( 
    random( 0.01, 2.0 ),
    random( 0.01, 2.0 ),
    random( 0.01, 2.0 ),
  ),
  combinationOperation: 'mult',
  pow: 1.0,
  normalize: true
};

sources.push( trigSource2 );

const maskSource1 : Source = {
  kind: 'custom',
  body: `
    float min = 0.0;
    float max = 1.0;

    float p = 2.0;

    float r = ${ numToGLSL( Math.sqrt( 0.2 ) ) };

    float d = sqrt( pow( vUv.x - 0.5, 2.0 ) + pow( vUv.y - 0.5, 2.0 ) );

    float n = smoothstep( min, max, 1.0 - d / r );

    return pow( n, p );
  `,
};

const alphaMaskSource : CombinedSource = {
  kind: 'combined',
  sources: [ noiseSource1, maskSource1 ],
  operation: 'mult',
  multipliers: [ 1.0, 1.0 ],
};

const source1Warp : DomainWarp = {
  sources: {
    x: randomElement( sources ),
    y: randomElement( sources ),
    z: randomElement( sources ),
  },
  amount: new THREE.Vector3( 
    random( 0.5, 1.0 ),
    random( 0.5, 1.0 ),
    random( 0.5, 1.0 ),
  ).multiplyScalar( 0.5 ),
  iterations: Math.floor( random( 3, 5 ) )
};

const minHue = random( 0.0, 1.0 );
const maxHue = minHue + random( 0.0, 0.3 );

const colorSettings = () : ColorSettings => { return {
  mode: 'hsv',
  componentModifications: {
    x: [ 
      { kind: 'add', argument: random( minHue, maxHue ) }
    ],
    y: [ 
      { kind: 'add', argument: random( 0.5, 0.6 ) },
      { kind: 'mult', argument: random( -0.5, -0.7 ) }
    ],
    z: [ 
      { kind: 'add', argument: 0.4 },
      { kind: 'pow', argument: 1.0 },
      { kind: 'mult', argument: 1.1 },
    ],
  }
}; };

const softParticleSettings = ( 
  camera : THREE.OrthographicCamera | THREE.PerspectiveCamera, 
  depthTexture : THREE.DepthTexture,
) : SoftParticleSettings => { return {
  camera,
  depthTexture,
  pow: 1.0,
  falloffRange: 0.5,
  smooth: true
}; };

const randomColor = ( brightness : number ) => {
  return new THREE.Color().setHSL( Math.random(), random( 0.1, 0.2 ), brightness );
};

const createFog = ( camera ?: THREE.OrthographicCamera | THREE.PerspectiveCamera ) : Fog => { return {
  near: camera?.near ?? 0.1,
  far: camera?.far ?? 100,
  nearColor: randomColor( random( 0.2, 0.8 ) ),
  farColor: randomColor( random( 0.1, 0.4 ) ),
  pow: 0.8,
  opacity: random( 0.4, 0.8 ),
}; };

export default ( 
  camera ?: THREE.OrthographicCamera | THREE.PerspectiveCamera,
  depthTexture ?: THREE.DepthTexture
) => { 
  return {
    domain: 'vertex',
    scale: random( 1.5, 5 ),
    mainSource: randomElement( sources ),
    domainWarp: source1Warp,
    alphaMask: alphaMaskSource,
    timeOffset: new THREE.Vector3( 
      random( -0.8, 0.8 ),
      random( -0.8, 0.8 ),
      random( -0.8, 0.8 )
    ),
    colorSettings: colorSettings(),
    fog: createFog( camera ),
    softParticleSettings: ( camera && depthTexture ) ? softParticleSettings( camera, depthTexture ) : undefined
  } as PatternShaderSettings; 
};