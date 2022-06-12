
<script lang="ts">
	import { SolarLandscapeRenderScene } from './../../three/renderScenes/solarLandscape/SolarLandscapeRenderScene';
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
</script>

<AnimationCanvas
  renderSceneConstructor={SolarLandscapeRenderScene}
/>

<style>
</style>
  