<script lang="ts">
	import type { NodeMetadata, NodeName } from '$types/nodes';

	import { metadata$ } from '$stores/metadata';
  import MetadataFooter from '$components/footer/metadata/Footer.svelte';

  export let name: NodeName;

  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...$metadata$.nodes[name],
    links: $metadata$.links[name]
  }

  // TODO: make wrapper read node file?
</script>

<div class="wrapper">
  <main class="node-container">
    <slot />
  </main>

  <MetadataFooter 
    { name }
    { nodeMetadata }
  />
</div>

<style>
  .wrapper {
    width: 100%;
    overflow-y: hidden;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .node-container {
    flex-grow: 1;

    overflow: auto;
  }
</style>
