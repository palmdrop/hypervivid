<script lang="ts">
	import { getStringComparator } from '$utils/general';
	import type { Link, NodeMetadata } from '$types/nodes';

	import { metadata$ } from '$stores/metadata';
  import Footer from './Footer.svelte';

  export let name: string;

  let metadata: Record<string, any>
  $: metadata = $metadata$.nodes[name];

  let links: Link[];
  $: links = $metadata$.links[name].sort((a, b) => getStringComparator(a.to, b.to));

  let tags: string[];
  $: tags = metadata.tags;

  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...metadata,
    links,
    tags
  };

  // TODO: make wrapper read node file?

  // TODO: Pass links/tags down to node using context? 
  // TODO: Show consumed nodes in separate category? 
</script>

<!-- Section or main depending on context? -->
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
  }
</style>
