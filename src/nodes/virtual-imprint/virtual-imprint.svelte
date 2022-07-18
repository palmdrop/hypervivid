<script lang="ts">
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
  import { VirtualImprintRenderScene } from './../../three/renderScenes/virtualImprint/VirtualImprintRenderScene';
</script>

<AnimationCanvas
  renderSceneConstructor={VirtualImprintRenderScene}
/>

<style>
</style>
  