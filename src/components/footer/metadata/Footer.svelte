<script lang="ts">
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
  const onToggle = () => {
    expanded = !expanded;
  }

</script>

<footer
  class:expanded
> 
  {#if expanded}
    <div class="multi-cell">
      <Cell 
        title={name}
      >
        <p>{ nodeMetadata.title ?? name }</p>
      </Cell>
      <Cell
        title="Date"
      >
        <p>
          { formatDate(nodeMetadata.createdAt) }
        </p>
      </Cell>
    </div>
    
    <Cell
      title="Links"
    >
      <LinkList 
        links={links}
      />
    </Cell>

    <Cell
      title="Tags"
    >
      <TagList 
        tags={tags}
        orientation="vertical"
      />
    </Cell>
  {:else}
    <button 
      class="metadata-button"
      on:click={onToggle}
    >
      Metadata
    </button>
  {/if}
</footer>

<style>
  .expander {
    position: absolute;
    top: 0.25em;
    left: 0.2em;

    font-size: 1.5rem;

    background: unset;
    border: none;

    cursor: pointer;
  }

  .expanded {
  }

  footer {
    position: relative;
    display: flex;
    flex-direction: row;

    justify-content: space-around;

    max-height: 150px;
  }

  .metadata-button {
    width: 100%;
  }
</style>
