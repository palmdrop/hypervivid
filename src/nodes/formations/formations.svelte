<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import FormationsApp from '../../modules/synthetic-grids/src/FormationsApp.svelte';
  const { name, metadata } = getNodeContext('formations');
</script>

<FormationsApp />

<style>
</style>
