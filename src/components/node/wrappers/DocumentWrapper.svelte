<script lang="ts">
	import type { NodeMetadata, NodeName } from '$types/nodes';
	import { metadata$ } from '$stores/metadata';
  import MetadataFooter from '$components/footer/metadata/Footer.svelte';
  import Link from '$components/common/Link.svelte';
  import Point from '$components/ornaments/Point.svelte';
  import Header from '../../header/Header.svelte';

  export let name: NodeName;
  export let isDone: boolean;

  export let showHeader = false;

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

{#if showHeader}
  <Header sticky={false} />
{/if}
<div 
  class="wrapper"
>
  {#if !showHeader}
    <div
      class="back-button"
      use:scrollIntoView
    >
      <Link 
        href="/nodes"
        showTooltipOnHover={false}
      >
        <Point size={35}/>
      </Link>
    </div>
  {/if}
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
    overflow: hidden;

    width: 100%;
  }

  .back-button {
    margin: 0.1em;
    position: absolute;
    z-index: 2;
  }

  .node-container {
    overflow: hidden;
  }
</style>
