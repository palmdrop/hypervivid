<script lang="ts">
	import { FlatCloudsRenderScene } from './../../three/renderScenes/flatClouds/FlatCloudsRenderScene';
  import AnimationCanvas from "$components/graphics/AnimationCanvas.svelte";
</script>

<AnimationCanvas
  renderSceneConstructor={FlatCloudsRenderScene}
/>

<style>
</style>
  