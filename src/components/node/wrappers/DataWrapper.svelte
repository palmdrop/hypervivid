<script lang="ts">
	import type { NodeMetadata, NodeName } from '$types/nodes';
	import { metadata$ } from '$stores/metadata';
  import { page } from '$app/stores';
  import MetadataFooter from '$components/footer/metadata/Footer.svelte';

  export let name: NodeName;

  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...$metadata$.nodes[name],
    links: $metadata$.links[name]
  }
</script>

<div class="wrapper">
  <main class="node-container">
    <a
      class="fullscreen-button"
      href={`${$page.url.pathname}/fullscreen`}
    >
      □
    </a>

    <slot />
  </main>

  <MetadataFooter 
    { name }
    { nodeMetadata }
  />
</div>

<style>
  .wrapper {
    position: relative;

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

  .fullscreen-button {
    position: absolute;

    top: 2px;
    right: 2px;

    font-size: 2rem;
  }
</style>
