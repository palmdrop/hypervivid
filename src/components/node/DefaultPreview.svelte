<script lang="ts">
	import type { NodeMetadata } from '$types/nodes';
  export let name: string;
  export let nodeMetadata: NodeMetadata;
</script>

<div>
  <a
    href={`/nodes/${name}`}
  >
    { name }
  </a>
</div>

<style>
</style>