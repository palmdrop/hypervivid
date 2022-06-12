import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

const camera = new THREE.OrthographicCamera( -1, 1, 1 - 1, 0, 1 );
const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( [ -1, 3, 0, -1, -1, 0, 3, -1, 0 ], 3 ) );
geometry.setAttribute( 'uv', new THREE.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

const createScene = ( texture : THREE.Texture ) : THREE.Scene => {
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial( {
      map: texture,
      fog: false,
      depthTest: false,
      depthWrite: false
    } )
  );

  const scene = new THREE.Scene();
  scene.add( mesh );
  
  return scene;
};

export class RenderTexturePass extends RenderPass {
  constructor( texture : THREE.Texture ) {
    super( createScene( texture ), camera );
  }
}