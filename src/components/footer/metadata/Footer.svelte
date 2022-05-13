<script lang="ts">
  import { slide } from 'svelte/transition';
	import LinkList from '$components/list/LinkList.svelte';
  import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata, NodeName } from '$types/nodes';
  import { formatDate } from '$utils/general';
  import Cell from './Cell.svelte';

  export let name: NodeName;
  export let nodeMetadata: NodeMetadata;

  $: links = nodeMetadata.links ?? [];
  $: tags = nodeMetadata.tags ?? [];

  let expanded = true;
  const toggle = () => {
    expanded = !expanded;
  }
</script>

<footer
  class:expanded
> 
  <button 
    class="metadata-button"
    on:click={toggle}
  >
    <span class="arrow">➺</span>
    <h1>Metadata — {name}</h1>
  </button>
  { #if expanded }
  <div 
    class="content"
    transition:slide|local={{ duration: 300 }}
  >
    <div class="multi-cell">
      <Cell 
        title="NAME"
      >
        <p>{ nodeMetadata.title ?? name }</p>
      </Cell>
      <Cell
        title="DATE"
      >
        <p>
          { formatDate(nodeMetadata.createdAt) }
        </p>
      </Cell>
    </div>
    
    <Cell
      title="LINKS"
    >
      <LinkList 
        links={links}
      />
    </Cell>

    <Cell
      title="TAGS"
    >
      <TagList 
        tags={tags}
        orientation="horizontal"
      />
    </Cell>
  </div>
  {/if}
</footer>

<style>
  .content {
    display: flex;
    flex-direction: row;
  }

  .metadata-button {
    width: 100%;
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);

    padding: 0.3em;

    text-align: center;

    position: relative;
  }

  .arrow {
    position: absolute;
    left: 5px;
    top: 13%;

    font-size: 2.3rem;

    transform: rotate(0);
    transition: 0.3s;
  }

  .expanded .arrow {
    left: 0px;
    top: 4%;
    transform: rotate(90deg);
  }

  h1 {
    font-size: 1.8rem;
  }

</style>
