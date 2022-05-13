<script lang="ts">
  import { useTitle } from '$utils/useTitle';

	import N2 from '../N2/N2.svelte';

  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('N1');

  let count = 0;

  setInterval(() => {
    count += 1;
  }, 100)

  useTitle('custom title');
</script>

<div>Count: {count}</div>

<style>
</style>
