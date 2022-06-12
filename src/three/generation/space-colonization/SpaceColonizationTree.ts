import * as THREE from 'three';
import { Octree } from '../../utils/tree/Octree';
import { randomUnitVector3, remap, type Volume } from '../../utils/math';

type ArgumentFunction = ( value : THREE.Vector3 ) => number;

const toArgumentFunction = ( argument : ArgumentFunction | number ) => {
  if( typeof argument === 'function' ) {
    return argument;
  } else {
    return () => argument;
  }
};

/*
class Segment {
  constructor( origin, direction ) {
    this.origin = origin;
    this.direction = direction;

    this.children = [];
  }
}
*/

type Segment = {
  origin : THREE.Vector3,
  direction : THREE.Vector3,
  position ?: THREE.Vector3,
  object ?: THREE.Object3D,
  children : Segment[],
  depth ?: number,
  reverseDepth ?: number,
}

class SegmentData {
  segment : Segment; 
  newDirection : THREE.Vector3;
  interactions : number;

  constructor( segment : Segment ) {
    this.segment = segment;
    this.newDirection = new THREE.Vector3().copy( segment.direction );
    this.interactions = 0;
  }

  normalize() {
    this.newDirection.divideScalar( this.interactions );
  }

  reset() {
    this.newDirection = new THREE.Vector3().copy( this.segment.direction );
    this.interactions = 1;
  }
}

export class SpaceColonizationTree {
  private minDistance : ArgumentFunction;
  private maxDistance : ArgumentFunction;
  private dynamics : ArgumentFunction;
  private stepSize : ArgumentFunction;
  private randomDeviation : ArgumentFunction;

  private tempVector0 : THREE.Vector3;
  private tempVector1 : THREE.Vector3;

  private volume : Volume;

  private leaves : THREE.Vector3[];
  // private leavesToDelete : THREE.Vector3[];

  private exhausted = false;

  private segments ?: Octree<SegmentData>;
  private root ?: Segment;
  private maxDepth ?: number;

  private object ?: THREE.Object3D;

  constructor( 
    minDistance : ArgumentFunction | number, 
    maxDistance : ArgumentFunction | number, 
    dynamics : ArgumentFunction | number, 
    stepSize : ArgumentFunction | number, 
    randomDeviation : ArgumentFunction | number 
  ) {

    this.minDistance = toArgumentFunction( minDistance );
    this.maxDistance = toArgumentFunction( maxDistance );
    this.dynamics = toArgumentFunction( dynamics );
    this.stepSize = toArgumentFunction( stepSize );
    this.randomDeviation = toArgumentFunction( randomDeviation );

    this.tempVector0 = new THREE.Vector3();
    this.tempVector1 = new THREE.Vector3();

    this.volume = {
      x: 0, y: 0, z: 0, w: 0, h: 0, d: 0
    };

    this.leaves = [];
    // this.leavesToDelete = [];
  }

  _createOctree() {
    return new Octree<SegmentData>( this.volume, 8, 3 );
  }


  generate( leaves : THREE.Vector3[], volume : Volume, origin : THREE.Vector3, startDirection : THREE.Vector3, iterations : number ) {
    this.exhausted = false;
    this.volume = volume;
    this.leaves = leaves;
    // this.leavesToDelete = [];

    const root : Segment = {
      origin, 
      direction: startDirection.clone().normalize(), 
      children: [],
    };

    this.segments = this._createOctree();
    this.segments.insert( origin, new SegmentData( root ) );

    for( let i = 0; i < iterations && !this.exhausted; i++ ) this.grow();

    this.root = root;

    return root;
  }

  grow() {
    // If the tree is exhausted, do nothing
    if( this.exhausted ) return true;

    // Set true if at least one segment found a leaf to interact with
    let foundOne = false;

    // Octree of new segments
    const nextSegmentData = this._createOctree();

    // All segments that interacted with a leaf (living segments)
    const interactingSegmentData = new Set<SegmentData>();

    // Iterate over all leaves and check if there's a segment that can interact with it
    for( let i = this.leaves.length - 1; i >= 0; i-- ) {
      const leaf = this.leaves[ i ];

      // Find the closest segment (within the maxDistance)
      const closestSegmentData = this._closestSegmentData( leaf );

      // If none is found, continue to next leaf
      if( !closestSegmentData ) continue;
      foundOne = true;

      const segmentOrigin = closestSegmentData.segment.origin;

      const minDistance = this.minDistance( segmentOrigin );
      const dynamics = this.dynamics( segmentOrigin );

      const distSq = leaf.distanceToSquared( segmentOrigin );

      // If the segment is sufficiently close to the leaf, remove the leaf
      if( distSq < minDistance * minDistance ) {
        this.leaves.splice( i, 1 );
      } else {
        // Otherwise, prepare for creating a new segment
                
        // Calculate the desired direction
        const dir = this.tempVector0.lerpVectors( 
          closestSegmentData.segment.direction, 
          this.tempVector1.subVectors( leaf, closestSegmentData.segment.origin ).normalize(),
          dynamics
        );

        // and accumulate (a segment might be attracted by multiple leaves)
        closestSegmentData.newDirection.add( dir );
        closestSegmentData.interactions++;

        interactingSegmentData.add( closestSegmentData );
      }
    }

    // If no segment is close enough to a leaf, then the tree is exhausted
    if( !foundOne ) {
      this.exhausted = true;
      return true;
    }

    // Iterate over all the segments that interacted with a leaf
    interactingSegmentData.forEach( segmentData => {
      segmentData.normalize();

      const randomDeviation = this.randomDeviation( segmentData.segment.origin );
      const stepSize = this.stepSize( segmentData.segment.origin );

      const newPosition = new THREE.Vector3().addVectors( 
        segmentData.segment.origin,
        this.tempVector0.copy( segmentData.newDirection ).multiplyScalar( stepSize )
      );
      newPosition.add( 
        randomUnitVector3( this.tempVector0 ).multiplyScalar( randomDeviation ) 
      );

      const newSegment : Segment = {
        origin: newPosition,
        direction: segmentData.newDirection,
        children: []
      };
            
      segmentData.reset();
      segmentData.segment.children.push( newSegment );

      nextSegmentData.insert( segmentData.segment.origin, segmentData );
      nextSegmentData.insert( newSegment.origin, new SegmentData( newSegment ) );
    } );

    this.segments = nextSegmentData;

    return false;
  }

  _closestSegmentData( leaf : THREE.Vector3 ) : SegmentData | null {
    let closest : SegmentData | null = null;

    const maxDistance = this.maxDistance( leaf );

    const nearbySegmentsData = this.segments!.sphereQuery( 
      new THREE.Sphere( leaf, maxDistance ),
    ) as { point : THREE.Vector3, data : SegmentData }[];

    let minDistSq = maxDistance * maxDistance;

    nearbySegmentsData.forEach( ( { point, data } ) => {
      const distSq = leaf.distanceToSquared( point );
      if( distSq < minDistSq ) {
        closest = data;
        minDistSq = distSq;
      }
    } );

    return closest;
  }

  traverse( callback : ( segment : Segment, parent : Segment | null, depth : number ) => void ) {
    const traverseSegment = ( segment : Segment, parent : Segment | null, depth : number ) => {
      callback( segment, parent, depth );

      segment.children.forEach( child => {
        traverseSegment( child, segment, depth + 1 );
      } );
    };

    this.root && traverseSegment( this.root, null, 1 );
  }

  calculateDepths() {
    // Calculate max depth
    let maxDepth = -1;

    this.traverse( ( segment : Segment, parent : Segment | null, depth : number ) => {
      // And set the depth of each segment
      segment.depth = depth;

      maxDepth = Math.max( maxDepth, depth );
    } );
    this.maxDepth = maxDepth;

    // Calculate the reverse depth (number of segments from a leaf)
    const calculateReverseDepth = ( segment : Segment ) => {
      let count = 0;

      segment.children.forEach( child => {
        count = Math.max( count, calculateReverseDepth( child ) );
      } );

      segment.reverseDepth = 1 + count;

      return segment.reverseDepth;
    };

    this.root && calculateReverseDepth( this.root );
  }

  toSkeleton( threshold : number | ( ( segment : Segment, maxDepth : number ) => number ) ) {
    this.calculateDepths();

    let thresholdFunction : ( segment : Segment, maxDepth : number ) => number;
    if( typeof threshold !== 'function' ) thresholdFunction = () => threshold as number;
    else thresholdFunction = threshold;

    const convert = ( segment : Segment ) => {
      let current = segment;

      //TODO what to do if segment has multiple children at start?

      if( current.children.length === 0 ) return;

      if( current.children.length > 1 ) {
        current.children.forEach( child => {
          convert( child );
        } );

        return;
      }

      while( current.children.length === 1 ) {
        const child = current.children[ 0 ];

        const dotDirection = current.direction.dot( child.direction );
        const angle = remap( dotDirection, -1, 1, Math.PI * 2, 0 );

        const t = thresholdFunction( child, this.maxDepth || 0 );

        if( angle > t ) {
          segment.position = current.position;
          segment.direction = current.direction;
          segment.children = current.children;

          convert( child );
          return;
        }
        current = child;
      }

      segment.position = current.position;
      segment.direction = current.direction;
      segment.children = current.children;

      convert( segment );
    };

    this.root && convert( this.root );
  }

  buildThreeObject( material : THREE.Material, minWidth = 0.01, maxWidth = 0.2, protrude = 0.0, detail = 5.0 ) {
    if( !this.root ) return;
    this.calculateDepths();

    const treeObject = new THREE.Object3D();

    const geometry = new THREE.CylinderGeometry( 1.0, 1.0, 1.0, detail );

    geometry.applyMatrix4( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) );

    this.traverse( ( segment, parent, depth ) => {
      if( !parent ) {
        this.root!.object = treeObject;
        return;
      } 

      const segmentObject = new THREE.Object3D();
      const segmentMesh = new THREE.Mesh( geometry, material );

      const relativePosition = this.tempVector0.subVectors( segment.origin, parent.origin );
      const length = relativePosition.length();

      segmentMesh.lookAt( relativePosition );
      segmentMesh.position.copy( relativePosition ).divideScalar( -2.0 );

      const width = remap( segment.reverseDepth || 0, this.maxDepth || 0, 1, maxWidth, minWidth );
      segmentMesh.scale.set( width, width, ( 1.0 + protrude ) * length );

      segmentObject.position.copy( relativePosition );
      segmentObject.add( segmentMesh );

      parent.object!.add( segmentObject );

      segment.object = segmentObject;
    } );

    return treeObject;
  }

  buildInstancedThreeObject( material : THREE.Material, minWidth = 0.01, maxWidth = 0.2, protrude = 0.0, detail = 5.0 ) {
    if( !this.root ) return;
    this.calculateDepths();

    const geometry = new THREE.CylinderGeometry( 1.0, 1.0, 1.0, detail );
    geometry.applyMatrix4( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) );

    let count = 0;
    this.traverse( () => count++ );

    const instancedMesh = new THREE.InstancedMesh(
      geometry,
      material,
      count
    );

    let index = 0;
    this.traverse( ( segment, parent, depth ) => {
      if( !parent ) {
        this.root!.object = instancedMesh ;
        return;
      } 

      const vector = this.tempVector0.subVectors( segment.origin, parent.origin );
      const length = vector.length();

      const position = new THREE.Vector3()
        .copy( vector )
        .divideScalar( -2.0 )
        .add( segment.origin );

      const width = remap( segment.reverseDepth || 0, this.maxDepth || 0, 1, maxWidth, minWidth );
      const scale = new THREE.Vector3( width, width, ( 1.0 + protrude ) * length );

      const lookAtMatrix = new THREE.Matrix4().lookAt(
        segment.origin, parent.origin,
        new THREE.Vector3( 0, 1, 0 )
      );

      const rotation = new THREE.Quaternion();
      lookAtMatrix.decompose( new THREE.Vector3(), rotation, new THREE.Vector3() );

      const matrix = new THREE.Matrix4().compose(
        position,
        rotation,
        scale
      );

      instancedMesh.setMatrixAt( index, matrix );

      index++;
    } );

    return instancedMesh;
  }

}