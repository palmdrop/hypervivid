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
    links: $metadata$.links[name],
    mode: 'only'
  }
</script>

<div 
  class="wrapper"
  class:fullscreen
>
  {#if !fullscreen}
    <div
      class="header-container"
      transition:slide|local={{ 
        duration: transitionDuration
      }}
    >
      <Header />
    </div>
  {/if}

  <main 
    class="node-container"
    class:fullscreen
    class:hideOverflow={!!nodeMetadata.hideOverflow}
  >
    <button
      class="fullscreen-button"
      on:click={toggleFullscreen}
    >
      <FullscreenIcon 
        mode={!fullscreen ? 'open' : 'close'}
        size={'1.3em'}
      />
    </button>

    <slot />
  </main>

  {#if !fullscreen}
    <div
      class="footer-container"
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
    min-height: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }

  .header-container, .footer-container {
    z-index: 1;
  }

  .node-container {
    position: relative;
    flex-grow: 2;
    margin-top: -1px;

    overflow-y: auto;
    overflow-x: hidden;
  }

  .hideOverflow {
    overflow-y: hidden;
  }

  .fullscreen-button {
    position: absolute;

    top: 6px;
    right: 8px;

    transition: 0.4s;

    z-index: 1;

    background-color: unset;
  }
</style>
