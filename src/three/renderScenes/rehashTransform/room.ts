import * as THREE from 'three';
import { random } from '../../../utils/random';
import { geometryWarp, type TransformFunction, type WarpEntry } from '../../geometry/warp/warp';

const getBaseGeometry = () => new THREE.BoxBufferGeometry(
  1.0, 1.0, 1.0
);

export const generateRoom = () => {
  const geometry = getBaseGeometry();

  const transformFunction : TransformFunction = (
    point,
    offset,
    frequency,
    amount,
  ) => {
    const displacementAmount = ( amount as number ) * point.y;

    const towardsCenter = { x: -point.x, y: point.y, z: -point.z };

    const x = point.x + displacementAmount * towardsCenter.x;
    const y = point.y;
    const z = point.z + displacementAmount * towardsCenter.z;
    return { x, y, z };
  };

  const warpEntries : WarpEntry[] = [
    {
      warpFunction: transformFunction
    }
  ];

  const tilt = Math.pow( random( 0.0, 1.0 ), 1.3 ) * 2.2;

  geometryWarp(
    geometry,
    0.1,
    tilt,
    1.1,
    2.0,
    0.8,
    warpEntries,
  );

  geometry.applyMatrix4(
    new THREE.Matrix4().makeScale(
      random( 0.5, 2.0 ),
      random( 0.5, 2.0 ),
      random( 0.5, 2.0 )
    )
  );

  return geometry;
};
