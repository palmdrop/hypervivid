<script lang="ts">
  import type { NodeMode, NodeName } from '$types/nodes';
  import Node from '../node/Node.svelte';
  import throttle from 'lodash.throttle';
  import { onDestroy, onMount } from 'svelte/internal';
  import FullscreenIcon from '$components/ornaments/indicators/FullscreenIcon.svelte';
  import StarLoader from '$components/ornaments/loaders/StarLoader.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';

  export let showOpenLink: boolean = true;
  export let nodeNames: NodeName[];

  export let itemLabels: string[] = [];

  export let batchCount = -1;
  export let autoLoad = false;
  export let scrollElement: HTMLElement | Window | undefined = undefined;
  export let loadMoreOffset = 600;
  export let loadMoreListenerThrottle = 250;

  export let modeFirst: NodeMode;
  export let modeRest: NodeMode;

  export let emptyText = 'List empty...';

  $: if (batchCount === -1) {
    batchCount = nodeNames.length;
  }

  // Loading
  const isDone = Array(nodeNames.length).fill(false);
  $: count = Math.min(batchCount, nodeNames.length);
  $: includedNodeNames = nodeNames.slice(0, count);
  $: complete = count === nodeNames.length;

  let loadedUpToIndex = 0;
  let allIncludedLoaded = false;

  const loadMore = () => {
    count = Math.min(count + batchCount, nodeNames.length);
  };

  $: {
    let newLoadedToIndex = loadedUpToIndex;
    for (let i = loadedUpToIndex; i < count; i++) {
      newLoadedToIndex = i;
      if (!isDone[i]) {
        break;
      }
    }

    loadedUpToIndex = newLoadedToIndex;
    if(count -1 >= loadedUpToIndex) allIncludedLoaded = true;
  }

  // Listeners
  let windowIsScrollElement = !scrollElement;

  const handleScroll = throttle((event: UIEvent & { target: EventTarget | null }) => {
    const target = event.target as HTMLElement | Document;

    if(!target) return;

    let clientHeight: number;
    let scrollTop: number;
    let scrollHeight: number;

    if(windowIsScrollElement || target instanceof Document) {
      clientHeight = window.innerHeight;
      scrollTop = window.scrollY;
      scrollHeight = document.body.scrollHeight;
    } else {
      clientHeight = target.clientHeight;
      scrollTop = target.scrollTop;
      scrollHeight = target.scrollHeight;
    }
 
    if (clientHeight + scrollTop >= scrollHeight - loadMoreOffset) {
      loadMore();
    }
  }, loadMoreListenerThrottle);

  onMount(() => {
    scrollElement = scrollElement ?? window;
    scrollElement.addEventListener('scroll', handleScroll as any);
  });

  onDestroy(() => {
    scrollElement?.removeEventListener('scroll', handleScroll as any);
  });
</script>

{#if !nodeNames.length}
  <Paragraph center wide big faded>
    {emptyText}
  </Paragraph>
{/if}

<ul class="node-list" on:scroll={handleScroll}>
  {#each includedNodeNames as name, i (`${name}-${i}`)}
    <li class:loading={i > loadedUpToIndex - batchCount && !allIncludedLoaded}>
      <a href={`/nodes/${name}`} sveltekit:prefetch>
        {#if itemLabels.length > i}
          <div class="item-label">
            <Paragraph big wide>{itemLabels[i]}</Paragraph>
          </div>
        {/if}
        <Node
          {name}
          mode={i === 0 ? modeFirst : modeRest}
          index={i}
          bind:isDone={isDone[i]}
          showLoader={false}
        />
      </a>
      {#if showOpenLink && (i === 0 ? modeFirst : modeRest) !== 'link'}
        <a href={`/nodes/${name}`} class="open-link">
          <FullscreenIcon mode="open" size={'clamp(1rem, 3vw, 1.2rem)'} />
        </a>
      {/if}
    </li>
  {/each}
</ul>
{#if !allIncludedLoaded}
  <div class="loading-icon">
    <StarLoader size={'8em'} fadeIn />
  </div>
{/if}

{#if !complete && !autoLoad && allIncludedLoaded}
  <button on:click={loadMore} class="load-more-button"> load more... </button>
{/if}

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-x: hidden;
    overflow-y: auto;

    max-width: 1200px;

    padding-bottom: 1em;
  }

  li {
    position: relative;
    border: var(--borderPrimary);
    margin: 5px 2px;

    flex: 1 1 auto;

    min-width: 30%;

    cursor: pointer;

    box-shadow: 0px 0px 0px transparent;

    transition: 0.2s;
    border-radius: var(--borderRadius1);
  }

  a {
    display: block;
    text-decoration: none;
    padding: 2em 0.8em;
    padding-bottom: 3em;
  }

  a:hover {
    text-decoration: none;
  }

  .loading {
    display: none;
  }

  .loading-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 500px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;

      margin: 5px auto;
    }

    li {
      margin: 5px;
    }

    a {
      padding: 2.5em;
    }
  }

  li:hover {
    box-shadow: var(--hoverShadow);
  }

  .open-link {
    position: absolute;
    top: 0.6em;
    right: 0.6em;

    padding: unset;

    text-decoration: none;
  }

  .load-more-button {
    text-decoration: underline;
    text-align: center;
    width: 100%;

    margin: 0em;
    padding: 0em;
  }

  .item-label {
    padding: 0.5em 0.5em;
    margin: 1em 0em;
    text-transform: uppercase;

    font-family: var(--fDisplay);

    background-color: var(--cBgInverted);
    color: var(--cFgInverted);

    border-radius: 0.5em;
  }
</style>
