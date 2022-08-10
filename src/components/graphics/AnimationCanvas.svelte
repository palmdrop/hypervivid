<script context="module" lang="ts">
  export type MouseMoveCallback = (
    x: number, y: number, deltaX: number, deltaY: number, renderScene: RenderScene
  ) => void;

  export type MouseScrollCallback = (deltaScroll: number, renderScene: RenderScene) => void;
</script>

<script lang="ts">
  import { promptDownload } from '$utils/file';

  import throttle from 'lodash.throttle';
	import type { RenderScene, RenderSceneConstructor } from './../../three/core';

  // Props
  export let renderSceneConstructor: RenderSceneConstructor;
  export let onMouseMove: MouseMoveCallback
    = (x, y, deltaX, deltaY, renderScene) => {
      renderScene.onMouseMove?.(x, y, deltaX, deltaY);
    }

  export let onScroll: MouseScrollCallback 
    = (deltaScroll, renderScene) => {
      renderScene.onScroll?.(deltaScroll);
    }

  export let onLoad: (() => void) | undefined = undefined;
  export let renderSceneCallback: ((renderScene: RenderScene) => void) | undefined = undefined;

  export let resizeThrottle = 0;
  export let mouseMoveThrottle = 0;
  export let scrollThrottle = 0;

  // Setup
  let renderScene: RenderScene | undefined = undefined;
  let canvas: HTMLCanvasElement;
  const setup = (canvasElement: HTMLCanvasElement) => {
    canvas = canvasElement;
    renderScene = new renderSceneConstructor(canvas, onLoad);
    renderSceneCallback?.(renderScene);

    renderScene.start();

    handleResize();

    return {
      destroy() {
        renderScene?.stop();
        renderScene?.dispose?.();
      }
    }
  }

  // Resize
  $: handleResize = throttle(() => {
    if(renderScene) {
      renderScene.resize();
    }
  }, resizeThrottle);

  // Mouse move
  let mousePosition: { x: number, y: number } | undefined = undefined;
  $: handleMouseMove = throttle((event: MouseEvent) => {
    let previousX: number;
    let previousY: number;

    if(!mousePosition) {
      previousX = event.clientX;
      previousY = event.clientY;
      mousePosition = { x: 0, y: 0 };
    } else {
      previousX = mousePosition.x;
      previousY = mousePosition.y;
    }

    const deltaX = event.clientX - previousX;
    const deltaY = event.clientY - previousY;

    renderScene && onMouseMove?.( event.clientX, event.clientY, deltaX, deltaY, renderScene );

    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
    
  }, mouseMoveThrottle);

  // Scroll
  $: handleMouseScroll = throttle((event: WheelEvent) => {
    const deltaScroll = Math.sign( -event.deltaY );
    renderScene && onScroll?.( deltaScroll, renderScene );
  }, scrollThrottle);

  // Shortcuts
  const handleKeyDown = (event: KeyboardEvent) => {
    if(event.type !== 'keydown') return;

    switch(event.key) {
      case 'c': {
        if(import.meta.env.DEV && renderScene) {
          renderScene.captureFrame(dataURL => {
            promptDownload(dataURL, 'canvas.png');
          })
        }
      } break;
      case ' ': {
        renderScene?.stop();
        renderScene?.dispose?.();
        setup(canvas);
      } break;
      case 'h': {
        if(import.meta.env.DEV && renderScene) {
          renderScene.toggleGUI?.();
        }
      }
    }
  }
</script>

<svelte:window 
  on:resize={handleResize}
  on:mousemove={handleMouseMove}
  on:wheel={handleMouseScroll}
  on:keydown={handleKeyDown}
/>

<canvas use:setup />

<style>
  canvas {
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;

    overflow: hidden;
  }
</style>
