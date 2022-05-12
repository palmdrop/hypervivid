<script lang="ts">
  import { useTitle } from '$utils/useTitle';

	import N2 from '../N2/N2.svelte';

  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('N1');

  useTitle('custom title');
</script>

<div>Test 1</div>

<style>
</style>
