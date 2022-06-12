
<script lang="ts">
	import { SolarChromeRenderScene } from './../../three/renderScenes/solarChrome/SolarChromeRenderScene';
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';

  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('solar-chrome');

</script>

<AnimationCanvas
  renderSceneConstructor={SolarChromeRenderScene}
/>

<style>
</style>
  