<script lang="ts">
	import { getStringComparator } from '$utils/general';
	import type { NodeContext, Link, NodeMetadata } from '$types/nodes';

	import { metadata$ } from '$stores/metadata';
  import Footer from './Footer.svelte';

  export let name: string;
  export let context: NodeContext

  $: primary = ['single', 'multiple-primary'].includes(context);

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
  {#if primary }
    <main class="node-container">
      <slot />
    </main>
  {:else}
    <section class="node-container">
      <slot />
    </section>
  {/if}

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
