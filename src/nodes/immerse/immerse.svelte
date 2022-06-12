
<script lang="ts">
	import { ImmerseRenderScene } from './../../three/renderScenes/immerse/ImmerseRenderScene';
  import AnimationCanvas from "$components/graphics/AnimationCanvas.svelte";
</script>

<AnimationCanvas
  renderSceneConstructor={ImmerseRenderScene}
/>

<style>
</style>
  