<script lang="ts">
  import type { NodeMetadata } from '$types/nodes';
import { useTitle } from '$utils/useTitle';

	import N2 from '../N2/N2.svelte';

  export let name: string;
  export let nodeMetadata: NodeMetadata;

  useTitle('custom title');
</script>

<div>Test 1</div>

<style>
</style>
