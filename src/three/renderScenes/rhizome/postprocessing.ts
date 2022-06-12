import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { ColorCorrectionShader } from 'three/examples/jsm/shaders/ColorCorrectionShader';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';

import { buildPatternShader } from '../../shader/builder/pattern/patternShaderBuilder';
import { KawaseBlurPass } from '../../effects/kawaseBlur/KawaseBlurPass';

import substrate from './substrate';

export const getPostprocessing = (
  renderer : THREE.WebGLRenderer,
  scene : THREE.Scene,
  camera : THREE.PerspectiveCamera | THREE.OrthographicCamera,
) => {
  // Background composer
  const size = renderer.getSize( new THREE.Vector2() );
  const backgroundRenderTarget = new THREE.WebGLRenderTarget( size.x, size.y, {
  } );

  const backgroundComposer = new EffectComposer( renderer, backgroundRenderTarget );

  const backgroundRenderPass = new RenderPass( scene, camera );
  backgroundComposer.addPass( backgroundRenderPass );

  const kawaseBlurPass = new KawaseBlurPass( { renderer, kernels: [ 1, 1, 2, 3, 3, 5 ] } );
  backgroundComposer.addPass( kawaseBlurPass );

  const colorCorrectionPass = new ShaderPass( ColorCorrectionShader );
  backgroundComposer.addPass( colorCorrectionPass );
  
  backgroundComposer.addPass( new ShaderPass( CopyShader ) );

  backgroundComposer.renderToScreen = false;

  scene.background = backgroundRenderTarget.texture;

  // Main composer
  const composer = new EffectComposer( renderer, );

  const renderPass = new RenderPass( scene, camera );
  composer.addPass( renderPass );

  const shader = buildPatternShader( substrate() );
  shader.uniforms[ 'frequency' ].value = 1.0;

  const shaderPass = new ShaderPass( shader );
  composer.addPass( shaderPass );
  composer.renderToScreen = true;

  colorCorrectionPass.uniforms[ 'powRGB' ]
    .value.set( 1.0, 1.0, 1.0 )
    .multiplyScalar( 0.93 );

  colorCorrectionPass.uniforms[ 'addRGB' ]
    .value.set( 1.0, 1.0, 1.0 )
    .multiplyScalar( -0.026 );

  return { 
    composer, 
    backgroundComposer, 
    shaderPass,
  };
};