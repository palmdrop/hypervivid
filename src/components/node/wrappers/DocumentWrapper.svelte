<script lang="ts">
	import type { NodeMetadata, NodeName } from '$types/nodes';
	import { metadata$ } from '$stores/metadata';
  import MetadataFooter from '$components/footer/metadata/Footer.svelte';
  import Link from '$components/common/Link.svelte';
  import Point from '$components/ornaments/Point.svelte';
  import { onMount } from 'svelte';

  export let name: NodeName;
  export let isDone: boolean;

  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...$metadata$.nodes[name],
    links: $metadata$.links[name],
    mode: 'only'
  }

  const scrollIntoView = (element: HTMLElement) => {
    element.scrollIntoView();
  }
</script>

<div 
  class="wrapper"
>
  <div
    class="back-button"
    use:scrollIntoView
  >
    <Link 
      href="/nodes"
    >
      <Point size={35}/>
    </Link>
  </div>
  <main 
    class="node-container"
  >
    <slot />
  </main>

  {#if isDone}
    <div
      class="footer-container"
    >
      <MetadataFooter 
        { name }
        { nodeMetadata }
        isExpanded={true}
        showArrow={false}
        toggleEnabled={false}
      />
    </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
    overflow-y: scroll;

    width: 100%;
  }

  .back-button {
    margin: 0.1em;
    position: absolute;
  }

  .node-container {
    overflow: hidden;
  }
</style>
