/* eslint-disable @typescript-eslint/no-unused-vars */
import * as THREE from 'three';
import { random } from '../../utils/random';
import { distance, domainWarp, noiseWarp, type TransformFunction, twistWarp } from '../geometry/warp/warp';
import { generateWarpGeometryPrefab } from './WarpGeometryPrefab';

import type { GeometryPrefab } from './prefabs';
import { smoothStep } from '../../utils/general';

export const SolarChromeGeometryPrefab : GeometryPrefab = ( () => {
  const solarChromeMaxFrequency = new THREE.Vector3( 0.5 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      return new THREE.SphereBufferGeometry( 1.0, 228, 228 );
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( 0.2, solarChromeMaxFrequency.x ),
        random( 0.2, solarChromeMaxFrequency.y ),
        random( 0.2, solarChromeMaxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return ( solarChromeMaxFrequency.length() - frequency.length() ) * random( 7.0, 9.0 ) + 0.5; 
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 1.9, 2.5 );
    },

    // Persistance
    () => {
      return random( 0.4, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            0.8 * Math.random(), 
            0.8 * Math.random(), 
            0.8 * Math.random() 
          ),
          falloff: random( 0.5, 1.0 ),
        }
      }
    ]
  );
} )();

export const SolarChromeGeometryPrefab2 : GeometryPrefab = ( () => {
  const solarChromeMaxFrequency = new THREE.Vector3( 0.4 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      const geometry = new THREE.TorusBufferGeometry( 1.0, 0.2, 128 * 4, 128 * 4 );

      geometry.applyMatrix4( new THREE.Matrix4().scale( new THREE.Vector3( 
        random( 1.0, 3.0 ),
        random( 1.0, 3.0 ),
        random( 1.0, 3.0 ),
      ) ) );

      return geometry;
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( 0.3, solarChromeMaxFrequency.x ),
        random( 0.3, solarChromeMaxFrequency.y ),
        random( 0.3, solarChromeMaxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return random( 0.02, 0.05 );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 2.9, 4.5 );
    },

    // Persistance
    () => {
      return random( 0.8, 0.9 );
    },

    // Warp entries
    [
      { 
        warpFunction: domainWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            0.8 * Math.random(), 
            0.8 * Math.random(), 
            0.8 * Math.random() 
          ),
          falloff: random( 0.8, 0.8 ),
        }
      }
    ]
  );
} )();

const solarLandscapePrefabDetail = 228;
export const FoldedStoneGeometryPrefab : GeometryPrefab = ( () => {
  const solarChromeMaxFrequency = new THREE.Vector3( 0.23 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      const geometry = new THREE.SphereBufferGeometry( 1.0, solarLandscapePrefabDetail, solarLandscapePrefabDetail );

      const stretch = random( 1.1, 1.8 );

      geometry.applyMatrix4( new THREE.Matrix4().scale(
        new THREE.Vector3( 1.0 / stretch, stretch, 1.0 / stretch )
      ) );

      return geometry;
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( 0.075, solarChromeMaxFrequency.x ), 
        random( 0.075, solarChromeMaxFrequency.y ),
        random( 0.075, solarChromeMaxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return random( 0.3, 0.5 );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 3.5, 5.5 );
    },

    // Persistance
    () => {
      return random( 0.4, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            0.6 * Math.random(), 
            0.6 * Math.random(), 
            0.6 * Math.random() 
          ),
          falloff: random( 0.5, 1.0 ),
        }
      }
    ]
  );
} )();

export const TwistedTorusGeometryPrefab : GeometryPrefab = ( () => {
  const solarChromeMaxFrequency = new THREE.Vector3( 0.30 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      return new THREE.TorusGeometry( 1.0, random( 0.10, 0.3 ), 128, 128 );
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( 0.01, solarChromeMaxFrequency.x ),
        random( 0.01, solarChromeMaxFrequency.y ),
        random( 0.01, solarChromeMaxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return random( 0.3, 1.5 );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 1.5, 2.5 );
    },

    // Persistance
    () => {
      return random( 0.4, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            0.8 * Math.random(), 
            0.8 * Math.random(), 
            0.8 * Math.random() 
          ),
          falloff: random( 0.5, 1.2 ),
        }
      }
    ]
  );
} )();

export const MarbleGeometryPrefab : GeometryPrefab = ( () => {
  const solarChromeMaxFrequency = new THREE.Vector3( 0.45 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      const geometry = new THREE.SphereBufferGeometry( 1.0, solarLandscapePrefabDetail, solarLandscapePrefabDetail );

      geometry.applyMatrix4( new THREE.Matrix4().scale( new THREE.Vector3(
        random( 0.2, 1.4, ),
        random( 0.2, 1.4, ),
        random( 0.2, 1.4, ),
      ) ) );

      return geometry;
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( 0.01, solarChromeMaxFrequency.x ),
        random( 0.01, solarChromeMaxFrequency.y ),
        random( 0.01, solarChromeMaxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return random( 0.6, 0.8 );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 1.5, 1.5 );
    },

    // Persistance
    () => {
      return random( 0.3, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            random( -0.8, 0.8 ),
            random( -0.8, 0.8 ),
            random( -0.8, 0.8 ),
          ),
          falloff: random( 1.3, 0.3 ),
        }
      }
    ]
  );
} )();

export const CurledTubeGeometryPrefab : GeometryPrefab = ( () => {
  const solarChromeMaxFrequency = new THREE.Vector3( 0.25 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      const startWidth = random( 0.1, 0.1 );
      const endWidth = random( 0.1, 0.1 );
      const geometry = new THREE.CylinderBufferGeometry( startWidth, endWidth, random( 8, 12 ), 128, 128, false );

      return geometry;
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( 0.11, solarChromeMaxFrequency.x ),
        random( 0.11, solarChromeMaxFrequency.y ),
        random( 0.11, solarChromeMaxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return random( 2.3, 3.5 );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 1.5, 1.5 );
    },

    // Persistance
    () => {
      return random( 0.3, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            random( -1.8, 1.8 ),
            random( -1.8, 1.8 ),
            random( -1.8, 1.8 ),
          ),
          falloff: random( 0.3, 0.45 ),
        }
      }
    ]
  );
} )();

export const ImprintGeometryPrefab : GeometryPrefab = ( () => {
  const minFrequency = new THREE.Vector3( 0.175, 0.175, 0.175 );
  const maxFrequency = new THREE.Vector3( 0.33, 0.33, 0.33 );
  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      const geometry = new THREE.SphereBufferGeometry( 1.0, 128, 128 );

      const stretch = 5.0 * Math.pow( random( 0.0, 1.0 ), 1.7 ) + 1.0;

      geometry.applyMatrix4( new THREE.Matrix4().scale(
        new THREE.Vector3( 1.0 / stretch, stretch, 1.0 / stretch )
      ) );

      return geometry;
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( minFrequency.x, maxFrequency.x ), 
        random( minFrequency.y, maxFrequency.y ),
        random( minFrequency.z, maxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      return random( 0.3, 0.8 );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 2.0, 3.0 );
    },

    // Persistance
    () => {
      return random( 0.4, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            0.6 * Math.random(), 
            0.6 * Math.random(), 
            0.6 * Math.random() 
          ),
          falloff: random( 0.5, 0.7 ),
        }
      }
    ]
  );
} )();

export const FoldedPlaneGeometryPrefab : GeometryPrefab = ( () => {
  const minFrequency = new THREE.Vector3( 2.3, 2.3, 2.3 );
  const maxFrequency = new THREE.Vector3( 3.1, 3.1, 3.1 );

  const min = random( 0.0, 0.0 );
  const max = 1.0;
  const pow = random( 1.1, 1.3 );
  const threshold = 0.5;

  const weightedNoiseWarp : TransformFunction = ( point, offset, frequency, amount, args ) => {
    const distanceFromCenter = distance( point, { x: 0, y: 0, z: 0 } );
    let scale;
    if( distanceFromCenter > threshold ) {
      scale = min;
    } else {
      scale = ( max - min ) * Math.pow(
        smoothStep( ( threshold - distanceFromCenter ) / threshold, 0.0, 1.0 ),
        pow
      ) + min;
    }

    const warpAmount = typeof amount === 'number' ? amount * scale : {
      x: amount.x * scale,
      y: amount.y * scale,
      z: amount.z * scale,
    };

    return noiseWarp( point, offset, frequency, warpAmount, args );
  };

  const slowNoiseWarp : TransformFunction = ( point, offset, frequency, amount, args ) => {
    const frequencyFactor = 0.1;
    const amountFactor = 0.8;

    const warpFrequency = typeof frequency === 'number' ? frequency * frequencyFactor : {
      x: frequency.x * frequencyFactor,
      y: frequency.y * frequencyFactor,
      z: frequency.z * frequencyFactor,
    };

    const warpAmount = typeof amount === 'number' ? amount * amountFactor : {
      x: amount.x * amountFactor,
      y: amount.y * amountFactor,
      z: amount.z * amountFactor,
    };
    
    return noiseWarp( point, offset, warpFrequency, warpAmount, args );
  };

  return generateWarpGeometryPrefab(
    // Geometry
    () => {
      const geometry = new THREE.PlaneBufferGeometry( 1.0, 1.0, 1028, 1028 );

      geometry.applyMatrix4( new THREE.Matrix4().makeScale(
        0.9,
        1.0, 
        1.2
      ) );

      return geometry;
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( minFrequency.x, maxFrequency.x ),
        random( minFrequency.y, maxFrequency.y ),
        random( minFrequency.z, maxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3 ) => {
      // return ( maxFrequency.length() - frequency.length() ) * random( 7.0, 9.0 ) + 0.5; 
      // return 0.1;
      return new THREE.Vector3( 
        random( 0.03, 0.1 ),
        random( 0.03, 0.1 ),
        random( 0.3, 0.5 ),
      );
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 1.9, 2.5 );
    },

    // Persistance
    () => {
      return random( 0.4, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: weightedNoiseWarp,
      }, 
      {
        warpFunction: slowNoiseWarp,
      }
    ]
  );
} )();

export const ImmerseGeometryPrefab : GeometryPrefab<{ detail : number, warp : number }> = ( () => {
  const minFrequency = new THREE.Vector3( 0.1, 0.1, 0.1 );
  const maxFrequency = new THREE.Vector3( 0.3, 0.3, 0.3 );
  return generateWarpGeometryPrefab(
    // Geometry
    ( args ) => {
      return new THREE.SphereBufferGeometry( 1.0, args.detail, args.detail );
    },

    // Frequency
    () => {
      return new THREE.Vector3( 
        random( minFrequency.x, maxFrequency.x ),
        random( minFrequency.y, maxFrequency.y ),
        random( minFrequency.z, maxFrequency.z )
      );
    },

    // Warp amount
    ( frequency : THREE.Vector3, args ) => {
      return args.warp * (
        ( maxFrequency.length() - frequency.length() ) * random( 2.0, 5.0 ) + 0.5
      ); 
    },

    // Octaves 
    () => {
      return 3;
    },

    // Lacunarity
    () => {
      return random( 1.9, 2.5 );
    },

    // Persistance
    () => {
      return random( 0.4, 0.5 );
    },

    // Warp entries
    [
      { 
        warpFunction: noiseWarp,
      }, 
      {
        warpFunction: twistWarp,
        args: {
          twistAmount: new THREE.Vector3( 
            0.8 * Math.random(), 
            0.8 * Math.random(), 
            0.8 * Math.random() 
          ),
          falloff: random( 0.5, 1.0 ),
        }
      }
    ]
  );
} )();