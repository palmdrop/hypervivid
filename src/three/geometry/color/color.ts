import * as THREE from 'three';

export const setVertexColors = ( 
  geometry : THREE.BufferGeometry, 
  colorSetter : ( index : number, x : number, y : number, z : number ) => { r : number, g : number, b : number }
) => {
  const vertexCount = geometry.attributes.position.count;

  geometry.setAttribute(
    'color',
    new THREE.BufferAttribute( new Float32Array( vertexCount * 3 ), 3 )
  );

  const colorAttribute = geometry.attributes.color;
  const positionAttribute = geometry.attributes.position;

  let x, y, z;
  for( let i = 0; i < vertexCount; i++ ) {
    x = positionAttribute.getX( i );
    y = positionAttribute.getY( i );
    z = positionAttribute.getZ( i );
    const { r, g, b } = colorSetter( i, x, y, z );

    colorAttribute.setXYZ( i, r, g, b );
  }
};