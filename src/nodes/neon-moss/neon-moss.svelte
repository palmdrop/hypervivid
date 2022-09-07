<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import NeonMossApp from '../../modules/synthetic-grids/src/NeonMossApp.svelte';
  const { name, metadata } = getNodeContext('neon-moss');

</script>

<NeonMossApp />

<style>
</style>
