import * as THREE from 'three';

export const textureFromSmoothGeometry = ( 
  geometry : THREE.BufferGeometry, 
  vertexToColor : ( x : number, y : number, z : number, u : number, v : number ) => THREE.Color,
  baseColor : THREE.Color
) : THREE.Texture => {
  const positionAttribute = geometry.attributes.position;
  const uvAttribute = geometry.attributes.uv;

  const width = Math.floor( Math.sqrt( positionAttribute.count ) ) - 1;
  const height = width + 1;

  const size = width * height;
  const data = new Uint8Array( 4 * size );

  const setColor = ( index : number, color : THREE.Color ) => {
    const stride = index * 4;
    data[ stride + 0 ] = Math.floor( color.r * 255 );
    data[ stride + 1 ] = Math.floor( color.g * 255 );
    data[ stride + 2 ] = Math.floor( color.b * 255 );
    data[ stride + 3 ] = 255;
  };

  // Set default values
  for( let i = 0; i < size; i++ ) {
    setColor( i, baseColor );
  }

  // Set values from vertices
  for( let i = 0; i < positionAttribute.count; i++ ) {
    const u = uvAttribute.getX( i );
    const v = uvAttribute.getY( i );

    const x = positionAttribute.getX( i );
    const y = positionAttribute.getY( i );
    const z = positionAttribute.getZ( i );

    const index = Math.ceil( ( u * width - 1 ) + ( v * height ) * ( width - 1 ) );

    const color = vertexToColor( x, y, z, u, v );
    setColor( index, color );
  }

  // Create texture
  const texture = new THREE.DataTexture( data, width, height );
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  texture.needsUpdate = true;
  return texture;
};