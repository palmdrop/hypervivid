import { type AnimationCallback, type AnimationLoop, MILLI_SECONDS_PER_SECOND } from '../core';

export class SimpleAnimationLoop implements AnimationLoop {
  private onUpdate : AnimationCallback;
  private running = false;
  private time = 0;
  private animationFrameID = 0;

  constructor( onUpdate : AnimationCallback ) {
    this.onUpdate = onUpdate;
  }

  start() {
    if( this.running ) return;
    this.running = true;

    let then = 0.0;

    const animate = ( now : number ) : void => {
      if( !this.running ) return;

      now /= MILLI_SECONDS_PER_SECOND;
      const delta = now - then;
      this.time += delta;
      then = now;

      this.animationFrameID = requestAnimationFrame( animate );

      this.onUpdate( delta, this.time );
    };

    this.animationFrameID = requestAnimationFrame( animate );
  }

  stop() {
    cancelAnimationFrame( this.animationFrameID );
    this.running = false;
  }
}