<script lang="ts">
  import { goto } from "$app/navigation";
  import type { NodeMode, NodeName } from "$types/nodes";
  import Node from "../node/Node.svelte";
  import throttle from "lodash.throttle";
  import { onDestroy } from "svelte/internal";
  import ExpandIcon from "$components/ornaments/indicators/ExpandIcon.svelte";

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
  {#each loadedNames as name, i (name)}
    <li
      on:click={() => onItemClick(name)}
    >
      <Node
        name={name}
        mode={i === 0 ? contextFirst : contextRest}
      />
      {#if showOpenLink && (i === 0 ? contextFirst : contextRest) !== 'link'}
        <a
          href={`/nodes/${name}`}
          class="open-link"
        >
          <ExpandIcon />
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
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    overflow-y: auto;

    margin: 0em auto;

    max-width: 1100px;

    padding-bottom: 1em;
  }

  li {
    position: relative;
    margin: 5px;
    padding: 2.5em;
    border: var(--borderPrimary);
    border-radius: var(--borderRadius1);

    flex: 1 1 auto;

    min-width: 30%;

    cursor: pointer;
  }

  li:hover {
    box-shadow: var(--hoverShadow);
  }

  .open-link {
    position: absolute;
    top: 0.7em;
    right: 0.7em;

    text-decoration: none;
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