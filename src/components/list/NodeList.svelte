<script lang="ts">
  import type { NodeMode, NodeName } from "$types/nodes";
  import Node from "../node/Node.svelte";
  import throttle from "lodash.throttle";
import { element, onDestroy } from "svelte/internal";

  export let showOpenLink: boolean = true;
  export let nodeNames: NodeName[];

  export let batchCount = -1; // -1 indicates load all at once
  export let autoLoad = false;
  export let scrollElement: HTMLElement | undefined = undefined;
  export let loadMoreOffset = 150;
  export let loadMoreListenerThrottle = 250;

  export let contextFirst: NodeMode
  export let contextRest: NodeMode

  // Loading
  $: loaded = batchCount === -1 
    ? nodeNames.length 
    : Math.min(batchCount, nodeNames.length);

  const loadMore = () => {
    loaded = Math.min(loaded + batchCount, nodeNames.length);
  }

  let loadedNames: NodeName[] = [];
  $: loadedNames = nodeNames.slice(0, loaded);

  $: fulfilled = loaded === nodeNames.length;

  // Listeners
  const handleScroll = throttle((
    event: UIEvent & { target: EventTarget & HTMLElement }
  ) => {
    if(
      event.target.clientHeight + event.target.scrollTop >=
      event.target.scrollHeight - loadMoreOffset
    ) {
      loadMore();
    }
  }, loadMoreListenerThrottle);

  const registerScrollListener = (element: HTMLElement) => {
    element.addEventListener('scroll', handleScroll);
  }

  $: if(scrollElement) registerScrollListener(scrollElement);

  onDestroy(() => {
    scrollElement?.removeEventListener('scroll', handleScroll);
  })
</script>

<ul 
  class="node-list"
  on:scroll={handleScroll}
>
  {#each loadedNames as name, i (name)}
    <li>
      <Node
        name={name}
        mode={i === 0 ? contextFirst : contextRest}
      />
      {#if showOpenLink && (i === 0 ? contextFirst : contextRest) !== 'link'}
        <a
          href={`/nodes/${name}`}
        >
          Open 
        </a>
      {/if}
    </li>
  {/each}
</ul>
{#if !fulfilled && !autoLoad}
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
    overflow-y: auto;

    width: 100%;
  }

  li {
    position: relative;
    margin: 1em;
    padding: 2.5em;
    border: var(--borderPrimary);
    border-radius: var(--borderRadius1);
  }

  li a {
    position: absolute;
    top: 0.7em;
    right: 0.7em;
  }

  .load-more-button {
    text-decoration: underline;
    text-align: center;
    width: 100%;

    margin: 0em;
    padding: 0em;
  }
</style>

<!-- markup (zero or more items) goes here -->