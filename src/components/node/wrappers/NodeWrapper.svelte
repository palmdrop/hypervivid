<script lang="ts">
  import { slide } from 'svelte/transition';
	import type { NodeMetadata, NodeName } from '$types/nodes';
	import { metadata$ } from '$stores/metadata';
  import MetadataFooter from '$components/footer/metadata/Footer.svelte';
  import Header from '$components/header/Header.svelte';

  export let name: NodeName;

  let fullscreen = false;
  const toggleFullscreen = () => {
    fullscreen = !fullscreen;
  }

  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...$metadata$.nodes[name],
    links: $metadata$.links[name]
  }
</script>

<div 
  class="wrapper"
  class:fullscreen
>
  {#if !fullscreen}
    <div
      transition:slide|local={{ 
        duration: 400,
      }}
    >
      <Header 
      />
    </div>
  {/if}

  <main class="node-container">
    <button
      class="fullscreen-button"
      on:click={toggleFullscreen}
    >
      □
    </button>

    <slot />
  </main>

  {#if !fullscreen}
    <div
      transition:slide|local={{ 
        duration: 400,
      }}
    >
      <MetadataFooter 
        { name }
        { nodeMetadata }
      />
    </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;

    width: 100%;
    overflow: hidden;
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

    top: 52px;
    right: 2px;
    font-size: 2rem;

    transition: 0.4s;

    transform: rotate(0);
  }

  .fullscreen .fullscreen-button {
    top: 3px;
    right: 3px;

    transform: rotate(135deg);
  }
</style>
