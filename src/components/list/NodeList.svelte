<script lang="ts">
  import { goto } from "$app/navigation";
  import type { NodeMode, NodeName } from "$types/nodes";
  import Node from "../node/Node.svelte";
  import throttle from "lodash.throttle";
  import { onDestroy } from "svelte/internal";
  import FullscreenIcon from "$components/ornaments/indicators/FullscreenIcon.svelte";
  import StarLoader from "$components/ornaments/loaders/StarLoader.svelte";
  import Paragraph from "$components/common/Paragraph.svelte";

  export let showOpenLink: boolean = true;
  export let nodeNames: NodeName[];

  export let itemLabels: string[] = [];

  export let batchCount = -1;
  export let autoLoad = false;
  export let scrollElement: HTMLElement | undefined = undefined;
  export let loadMoreOffset = 150;
  export let loadMoreListenerThrottle = 250;

  export let modeFirst: NodeMode
  export let modeRest: NodeMode

  $: if(batchCount === -1) {
    batchCount = nodeNames.length;
  }

  // Loading
  $: count = Math.min(batchCount, nodeNames.length);

  const isDone: boolean[] = Array(nodeNames.length).fill(false);

  const loadMore = () => {
    count = Math.min(count + batchCount, nodeNames.length);
  }

  $: includedNodeNames = nodeNames.slice(0, count);
  $: complete = count === nodeNames.length;

  let loadedUpToIndex = 0;
  let allIncludedLoaded = false;

  $: {
    let newLoadedToIndex = loadedUpToIndex;
    for(let i = loadedUpToIndex; i < count; i++) {
      newLoadedToIndex = i;
      if(!isDone[i]) {
        break;
      }
    }

    loadedUpToIndex = newLoadedToIndex;
    if(count - 1 === loadedUpToIndex) {
      allIncludedLoaded = true;
    }
  }

  // Navigating
  const onItemClick = (name: string) => {
    // TODO: avoid programmatic navigation. Make list item an a tag
    goto(`/nodes/${name}`);
  }

  // Listeners
  const handleScroll = throttle((
    event: UIEvent & { target: EventTarget | null }
  ) => {
    const target = event.target as HTMLElement;
    if(
      target &&
      target.clientHeight + target.scrollTop >=
      target.scrollHeight - loadMoreOffset
    ) {
      loadMore();
    }
  }, loadMoreListenerThrottle);

  const registerScrollListener = (element: HTMLElement) => {
    element.addEventListener('scroll', handleScroll as any);
  }

  $: if(scrollElement) registerScrollListener(scrollElement);

  onDestroy(() => {
    scrollElement?.removeEventListener('scroll', handleScroll as any);
  })
</script>

<ul 
  class="node-list"
  on:scroll={handleScroll}
>
  {#each includedNodeNames as name, i (`${name}-${i}`)}
    <li
      on:click={() => onItemClick(name)}
      class:loading={i > (loadedUpToIndex - batchCount) && !allIncludedLoaded}
    >
      {#if itemLabels.length > i}
        <div class="item-label">
          <Paragraph big wide>{itemLabels[i]}</Paragraph>
        </div>
      {/if}
      <Node
        name={name}
        mode={i === 0 ? modeFirst : modeRest}
        index={i}
        bind:isDone={isDone[i]}
        showLoader={false}
      />
      {#if showOpenLink && (i === 0 ? modeFirst : modeRest) !== 'link'}
        <a
          href={`/nodes/${name}`}
          class="open-link"
        >
          <FullscreenIcon 
            mode='open'
            size={'clamp(1rem, 3vw, 1.2rem)'}
          />
        </a>
      {/if}
    </li>
  {/each}
</ul>
{#if !allIncludedLoaded}
  <div 
    class='loading-icon'
  >
    <StarLoader 
      size={'8em'}
      fadeIn
    />
  </div>
{/if}

{#if !complete && !autoLoad && allIncludedLoaded}
  <button
    on:click={loadMore}
    class="load-more-button"
  >
    load more...
  </button>
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
    padding: 2.0em 0.8em;
    padding-bottom: 3em;
    border: var(--borderPrimary);
    margin: 5px 2px;

    flex: 1 1 auto;

    min-width: 30%;

    cursor: pointer;

    box-shadow: 0px 0px 0px transparent;

    transition: 0.2s;
    border-radius: var(--borderRadius1);
  }

  .loading {
    display: none;
  }

  .loading-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media ( min-width: 500px )  {
    ul {
      flex-direction: row;
      flex-wrap: wrap;

      margin: 5px auto;
    }

    li {
      padding: 2.5em;
      margin: 5px;
    }
  }

  li:hover {
    box-shadow: var(--hoverShadow);
  }

  .open-link {
    position: absolute;
    top: 0.6em;
    right: 0.6em;

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
    margin: 1.0em 0.0em;
    text-transform: uppercase;

    font-family: var(--fDisplay);

    background-color: var(--cBgInverted);
    color: var(--cFgInverted);

    border-radius: 0.5em;
  }
</style>