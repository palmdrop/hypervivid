import * as THREE from 'three';

import { volumePointIntersection, sphereVolumeIntersection, spherePointIntersection, type Volume } from '../math';

type QueryMode = 'entry' | 'point' | 'data';
type Entry<T> = { point : THREE.Vector3, data : T | null };

export class OctreeHelper<T> extends THREE.Object3D {
  private octree : Octree<T>;

  constructor( octree : Octree<T> ) {
    super();

    this.octree = octree;

    const edges = new THREE.EdgesGeometry( 
      new THREE.BoxBufferGeometry( 1, 1, 1 ),
      1
    );

    this.octree.traverseNodes( ( node : Octree<T> ) => {
      const hue = 360 * node.depth / octree.maxDepth;

      const material = new THREE.LineBasicMaterial( { color: `hsl(${ hue }, 100%, 50%)` } );
      const nodeMesh = new THREE.LineSegments( edges, material );
            
      const { x, y, z, w, h, d } = node.volume;

      nodeMesh.position.set(
        x + w / 2,
        y + h / 2,
        z + d / 2
      );

      nodeMesh.scale.set( w, h, d );

      this.add( nodeMesh );
    } );
  }
}

export class Octree<T> {
  volume : Volume;
  capacity : number;
  maxDepth : number;

  size = 0;
  depth = 1;

  subdivided = false;
  nodes : Octree<T>[] = [];
  entries : Entry<T>[] = [];

  constructor( volume : Volume, capacity : number, maxDepth : number ) {
    this.volume = volume;
    this.capacity = capacity;
    this.maxDepth = maxDepth;

    this.size = 0;
    this.depth = 1;

    this.subdivided = false;
    this.nodes = [];
    this.entries = [];
  }

  insertAll( points : THREE.Vector3[], data : T[] ) {
    for( let i = 0; i < points.length; i++ ) {
      let d : T | null = null;
      if( data ) {
        d = data[ i ];
      }

      this.insert( points[ i ], d );
    }
  }

  insert( point : THREE.Vector3, data : T | null ) {
    if( !volumePointIntersection( this.volume, point ) ) {
      return false;
    }

    this.size++;

    // A new point should be added to this node
    if( this.entries.length < this.capacity || this.depth === this.maxDepth ) {
      this.entries.push( { point, data } );
    } 
    // Subdivide
    else {
      if( !this.subdivided ) {
        this._subdivide();
      }

      const node = this._getNode( point );
      node.insert( point, data );

      /*this.nodes.forEach( node => {
                node.insert( point, data );
            });*/
    }

    return true;
  }

  // NOTE: function should only be used if the point is known to be inside the current node volume
  _getNode( point : THREE.Vector3 ) {
    const { x, y, z, w, h, d } = this.volume;

    const ix = Math.floor( 2.0 * ( point.x - x ) / w );
    const iy = Math.floor( 2.0 * ( point.y - y ) / h );
    const iz = Math.floor( 2.0 * ( point.z - z ) / d );

    const index = ix + 2 * ( iy + 2 * iz );

    const node = this.nodes[ index ];

    return node;
  }

  _subdivide() {
    const { x, y, z, w, h, d } = this.volume;

    for( let cz = 0; cz < 2; cz++ ) 
      for( let cy = 0; cy < 2; cy++ ) 
        for( let cx = 0; cx < 2; cx++ ) {
          const volume = {
            x: x + cx * ( w / 2.0 ),
            y: y + cy * ( h / 2.0 ),
            z: z + cz * ( d / 2.0 ),

            w: w / 2.0,
            h: h / 2.0,
            d: d / 2.0,
          };

          const node = new Octree<T>( volume, this.capacity, this.maxDepth );
          node.depth = this.depth + 1;

          this.nodes.push( node );
        }

    this.subdivided = true;
  }

  _sphereInsideVolume( sphere : THREE.Sphere ) {
    return sphereVolumeIntersection( sphere, this.volume );
  }

  // Get all entires/points/data inside a sphere
  // The "found" array holds everything found so far. 

  sphereQuery( sphere : THREE.Sphere, mode : QueryMode = 'entry', found : any[] = [] ) {
    if( !this._sphereInsideVolume( sphere ) ) {
      return found;
    }

    const queryModeConverter = ( () => {
      switch( mode ) {
        case 'entry': return ( entry : Entry<T> ) => entry;
        case 'point': return ( entry : Entry<T> ) => entry.point;
        case 'data': return ( entry : Entry<T> ) => entry.data;
      }
    } )();


    this.entries.forEach( entry => {
      if( spherePointIntersection( sphere, entry.point ) ) {
        found.push( queryModeConverter( entry ) );
      }
    } );

    this.nodes.forEach( node => {
      node.sphereQuery( sphere, mode, found );
    } );

    return found;
  }

  traverseEntries( callback ?: ( entry : Entry<T>, octree : Octree<T> ) => void ) {
    if( !callback ) return;
    this.entries.forEach( entry => callback( entry, this ) );
    this.nodes.forEach( node => node.traverseEntries( callback ) );
  }

  traverseNodes( callback ?: ( node : Octree<T> ) => void ) {
    callback && callback( this );
    this.nodes.forEach( node => node.traverseNodes( callback ) );
  }

  getEntryCount() {
    let count = 0;
    this.traverseNodes( () => count++ );
    return count;
  }
}