import * as THREE from 'three';
import { random } from '../../../utils/random';
import type { ColorSettings, DomainWarp, PatternShaderSettings, Source } from '../../shader/builder/pattern/types';
import { ASSETHANDLER } from '../../systems/AssetHandler';

import t1 from '../../../assets/pieces/virtual-imprint/retro-diamond.jpg';
//import t1 from '../../../assets/img/bulbs.jpg';
//import t1 from '../../../assets/img/combi2.png';

const source1 : Source = {
  kind: 'trig',
  types: {
    x: 'sin',
    y: 'sin',
    z: 'cos',
  },
  amplitude: new THREE.Vector3(
    1.0,
    1.0, 
    1.0
  ),
  frequency: new THREE.Vector3( 1, 1.5, 1.5 ),
  combinationOperation: 'mult',
  pow: 1.0,
  // NOTE: try sub with low pow (0.02)! interesting maps
};

const source2 : Source = {
  kind: 'noise',
  frequency: new THREE.Vector3( 0.4, 0.3, 0.5 ),
  amplitude: 1.0,
  octaves: 5,
  lacunarity: 2.2,
  persistance: 0.8,
  pow: 3.0,
  ridge: 0.5,
};


const source3 : Source = {
  kind: 'noise',
  frequency: new THREE.Vector3( 0.5, 0.3, 0.2 ),
  amplitude: 1.0,
  octaves: 5,
  lacunarity: 3.2,
  persistance: 0.5,
  pow: 4.0,
  ridge: 0.4,
};

const source4 : Source = {
  kind: 'trig',
  types: {
    x: 'sin',
    y: 'cos',
    z: 'sin',
  },
  frequency: new THREE.Vector3( 2, 0.02, 0.02 ),
  combinationOperation: 'add',
  pow: 1.0,
};

/*const source1 : Source = {
  kind : 'combined',
  sources : [ source2, source3 ],
  operation : 'add',
  multipliers : [ 0.5, 0.5 ],
  postModifications : [
    {
      kind : 'pow',
      argument : 4.0
    },
    {
      kind : 'mult',
      argument : 1.0,
    }
  ]
}*/

const domainWarp : DomainWarp = {
  sources: { 
    x: source4,
    y: source2,
    z: source3,
  },
  amount: new THREE.Vector3( 1.0, 2.0, 5.0 ),
  iterations: 3,
};

const warpedSource : Source = {
  kind: 'warped',
  source: source1,
  warp: domainWarp
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
      // { kind : 'mod', argument : random( 1.0, 1.5 ) },
    ],
    y: [ 
      { kind: 'mult', argument: 0.6 },
      // { kind : 'add', argument : random( 1.0, 0.8 ) },
    ],
    z: [ 
      { kind: 'mult', argument: 1.1 },
      { kind: 'add', argument: 0.0 },
      { kind: 'pow', argument: 1.0 },
    ],
  }
};

export const shaderSettings1 : PatternShaderSettings = {
  domain: Math.random() > 0.5 ? 'view' : 'vertex',
  scale: 0.015,
  mainSource: textureSource,

  domainWarp: {
    sources: { 
      x: source4,
      y: source3,
      z: source2,
    },
    amount: new THREE.Vector3( 0.5, 0.5, 0.4 ),
    iterations: 3,
  },
  timeOffset: new THREE.Vector3( 0.05, -0.05, 0.05, ),

  colorSettings
}; 