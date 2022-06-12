import * as THREE from 'three';

export const createFullScreenTextureRenderer = ( 
  renderer : THREE.WebGLRenderer, 
  texture : THREE.Texture, 
  renderTarget : THREE.WebGLRenderTarget
) => {
  return new FullscreenQuadRenderer( 
    renderer, 
    new THREE.MeshBasicMaterial( { map: texture } ), 
    renderTarget 
  );
};

export class FullscreenQuadRenderer {
  private renderer : THREE.WebGLRenderer;
  public renderTarget : THREE.WebGLRenderTarget | undefined;
  private quad : THREE.Mesh;

  private scene : THREE.Scene;
  private camera : THREE.OrthographicCamera;

  constructor( 
    renderer : THREE.WebGLRenderer, 
    material : THREE.Material, 
    renderTarget ?: THREE.WebGLRenderTarget
  ) {
    this.renderer = renderer; 

    if( renderTarget ) {
      this.renderTarget = renderTarget;
    } 

    /*else {
      const size = this.renderer.getSize( new THREE.Vector2() );
      this.renderTarget = new THREE.WebGLRenderTarget( size.x, size.y, {
      } );
    }
    */

    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(
      -1, 1, -1, 1, 0, 10000 
    );

    const geometry = new THREE.PlaneBufferGeometry( 1, 1 );

    const quad = new THREE.Mesh(
      geometry,
      material
    );

    quad.position.set( 0, 0, -10 );

    this.quad = quad;

    this.scene.add(
      quad
    );
  }

  setSize( width : number, height : number ) {

    this.camera.left = -width / 2;
    this.camera.right = width / 2;
    this.camera.top = height / 2;
    this.camera.bottom = -height / 2;
    this.camera.updateProjectionMatrix();

    this.quad.scale.set( width, height, 1.0 );

    if( this.renderTarget ) this.renderTarget.setSize( width, height );
  }

  render() {
    if( this.renderTarget ) this.renderer.setRenderTarget( this.renderTarget );
    else this.renderer.setRenderTarget( null );

    this.renderer.render( this.scene, this.camera );
  }
}
