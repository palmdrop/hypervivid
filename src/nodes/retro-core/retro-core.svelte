
<script lang="ts">
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import { RetroCoreRenderScene } from '../../three/renderScenes/retroCore/RetroCoreRenderScene';
  const { name, metadata } = getNodeContext('retro-core');

</script>

<div>
  <AnimationCanvas
    renderSceneConstructor={RetroCoreRenderScene}
  />
</div>

<style>
  div {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      #91949D 0%,
      #E07D7D 100%
    );

    overflow: hidden;

    z-index: -1;
  }
</style>
  