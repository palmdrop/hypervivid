import type * as THREE from 'three';

export const varyColorRGB = ( sourceColor : THREE.Color, red : number, green : number, blue : number ) => {
  const color = sourceColor.clone(); 
  color.r += red;
  color.g += green;
  color.b += blue;
  return color;
};

export const varyColorHSL = ( sourceColor : THREE.Color, hue : number, saturation : number, luminance : number ) => {
  const color = sourceColor.clone();
  return color.offsetHSL( hue, saturation, luminance );
};