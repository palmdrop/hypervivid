
<script lang="ts">
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
  import { RehashTransformRenderScene } from './../../three/renderScenes/rehashTransform/RehashTransformRenderScene';
</script>

<div>
  <AnimationCanvas
    renderSceneConstructor={RehashTransformRenderScene}
  />
</div>

<style>
  div {
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100vh;
  }
</style>
  