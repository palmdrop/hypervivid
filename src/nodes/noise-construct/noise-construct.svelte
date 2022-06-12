<script lang="ts">
	import { NoiseConstructRenderScene } from './../../three/renderScenes/noiseConstruct/NoiseConstructRenderScene';
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
</script>

<AnimationCanvas
  renderSceneConstructor={NoiseConstructRenderScene}
/>

<style>
</style>