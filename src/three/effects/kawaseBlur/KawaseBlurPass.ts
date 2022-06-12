// https://ycw.github.io/three-kawase-blur/

import * as THREE from 'three';

import { EffectComposer, Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/EffectComposer';
import { KawaseBlurPassGen } from 'three-kawase-blur';

export const KawaseBlurPass = KawaseBlurPassGen( { 
  THREE, 
  EffectComposer, 
  Pass, 
  FullScreenQuad 
} );