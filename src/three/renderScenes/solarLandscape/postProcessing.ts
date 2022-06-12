import type * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

export const createPostProcessing = ( renderer : THREE.WebGLRenderer, scene : THREE.Scene, camera : THREE.Camera ) => {
  const composer = new EffectComposer( renderer );
  
  const renderPass = new RenderPass( scene, camera );
  composer.addPass( renderPass );

  /*const bloomPass = new UnrealBloomPass( 
    new THREE.Vector2( this.canvas.width, this.canvas.height ),
    1.2,
    0.05,
    0.5
  );

  const bloomFolder = this.gui.addFolder( 'bloom' );
  bloomFolder.add( bloomPass, 'strength' ).min( 0.0 ).max( 2.0 );
  bloomFolder.add( bloomPass, 'radius' ).min( 0.0 ).max( 2.0 );
  bloomFolder.add( bloomPass, 'threshold' ).min( 0.0 ).max( 1.0 );

  this.composer.addPass( bloomPass );*/

  return {
    composer
  };
};