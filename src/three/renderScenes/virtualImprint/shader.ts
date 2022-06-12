import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';
import { ASSETHANDLER } from '../../systems/AssetHandler';

import t1 from '../../../assets/pieces/virtual-imprint/retro-diamond.jpg';

const noiseSource1 : Source = {
  kind: 'noise',
  frequency: new THREE.Vector3( 0.4, 0.3, 0.5 ),
  amplitude: 1.0,
  octaves: 5,
  lacunarity: 2.2,
  persistance: 0.8,
  pow: 3.0,
  ridge: 0.5,
};

const noiseSource2 : Source = {
  kind: 'noise',
  frequency: new THREE.Vector3( 0.5, 0.3, 0.2 ),
  amplitude: 1.5,
  octaves: 5,
  lacunarity: 3.2,
  persistance: 0.5,
  pow: 4.0,
  ridge: 0.4,
};

const trigSource1 : Source = {
  kind: 'trig',
  types: {
    x: 'sin',
    y: 'cos',
    z: 'sin',
  },
  frequency: new THREE.Vector3( 1.93, 0.06, 0.04 ),
  combinationOperation: 'add',
  pow: 1.0,
};

const textureSource : Source = {
  kind: 'texture',
  name: 't1',
  texture: ASSETHANDLER.loadTexture( t1, false, ( texture ) => {
    texture.repeat.set( 10, 10 );
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
  } ),
};

const colorSettings : ColorSettings = {
  mode: 'hsv',
  componentModifications: {
    x: [ 
      { kind: 'mult', argument: random( 0.5, 2.0 ) },
      { kind: 'add', argument: random( 0.0, 1.0 ) },
    ],
    y: [ 
      { kind: 'mult', argument: 0.6 },
    ],
    z: [ 
      { kind: 'mult', argument: 1.1 },
      { kind: 'add', argument: 0.0 },
      { kind: 'pow', argument: 1.0 },
    ],
  }
};

export default {
  domain: Math.random() > 0.5 ? 'view' : 'vertex',
  scale: 0.035,
  mainSource: textureSource,

  domainWarp: {
    sources: { 
      x: trigSource1,
      y: noiseSource2,
      z: noiseSource1,
    },
    amount: new THREE.Vector3( 1.0, 1.0, 1.0 ),
    iterations: 3,
  },
  timeOffset: new THREE.Vector3( 
    random( -0.5, 0.5 ),
    random( -0.5, 0.5 ),
    random( -0.5, 0.5 )
  ),

  colorSettings
} as PatternShaderSettings;