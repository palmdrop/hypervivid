<script lang="ts">
	import { MedusaNetworkRenderScene } from './../../three/renderScenes/medusaNetwork/MedusaNetworkRenderScene';
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
</script>

<AnimationCanvas
  renderSceneConstructor={MedusaNetworkRenderScene}
/>

<style>
</style>