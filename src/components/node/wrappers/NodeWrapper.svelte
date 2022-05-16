<script lang="ts">
  import { slide } from 'svelte/transition';
	import type { NodeMetadata, NodeName } from '$types/nodes';
	import { metadata$ } from '$stores/metadata';
  import MetadataFooter from '$components/footer/metadata/Footer.svelte';
  import Header from '$components/header/Header.svelte';
  import FullscreenIcon from '$components/ornaments/indicators/FullscreenIcon.svelte';

  export let name: NodeName;

  const transitionDuration = 400;

  // TODO: fix this ugly workaround to transition flickers
  // TODO: also, store 400ms as theme variable somewhere
  let fullscreen = false;
  let previousMetadataExpaned = false;
  const toggleFullscreen = () => {
    if(!fullscreen) {
      previousMetadataExpaned = metadataExpanded;
      setTimeout(() => {
        fullscreen = true;
      }, metadataExpanded ? transitionDuration : 0);

      metadataExpanded = false;
    } else {
      fullscreen = false;
      if(previousMetadataExpaned) {
        setTimeout(() => {
          metadataExpanded = true;
        }, transitionDuration)
      }
    }
  }

  let metadataExpanded = false;
  const toggleMetadata = () => {
    metadataExpanded = !metadataExpanded;
  }

  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...$metadata$.nodes[name],
    links: $metadata$.links[name]
  }

  $: console.log("Re...", nodeMetadata)
</script>

<div 
  class="wrapper"
  class:fullscreen
>
  {#if !fullscreen}
    <div
      transition:slide|local={{ 
        duration: transitionDuration
      }}
    >
      <Header />
    </div>
  {/if}

  <main class="node-container">
    <button
      class="fullscreen-button"
      on:click={toggleFullscreen}
    >
      <FullscreenIcon />
    </button>

    <slot />
  </main>

  {#if !fullscreen}
    <div
      transition:slide|local={{ 
        duration: transitionDuration,
      }}
    >
      <MetadataFooter 
        { name }
        { nodeMetadata }
        { transitionDuration }
        isExpanded={metadataExpanded}
        onToggle={toggleMetadata}
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

    transition: 0.4s;

    transform: rotate(0);
  }

  .fullscreen .fullscreen-button {
    top: 3px;
    right: 3px;

    transform: rotate(135deg);
  }
</style>
