<script lang="ts">
	import { RhizomeRenderScene } from './../../three/renderScenes/rhizome/RhizomeRenderScene';
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
</script>

<AnimationCanvas
  renderSceneConstructor={RhizomeRenderScene}
/>

<style>
</style>