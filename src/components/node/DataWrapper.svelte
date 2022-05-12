<script lang="ts">
	import type { NodeMetadata, NodeName } from '$types/nodes';

	import { metadata$ } from '$stores/metadata';
  import Footer from './Footer.svelte';

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

  <Footer 
    nodeMetadata={nodeMetadata}
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
