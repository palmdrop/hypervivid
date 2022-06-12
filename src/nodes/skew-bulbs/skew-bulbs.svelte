<script lang="ts">
  import AnimationCanvas from '$components/graphics/AnimationCanvas.svelte';
  import { SkewBulbsRenderScene } from '../../three/renderScenes/skewBulbs/SkewBulbsRenderScene';
</script>

<AnimationCanvas
  renderSceneConstructor={SkewBulbsRenderScene}
/>

<style>
</style>