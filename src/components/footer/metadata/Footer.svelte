<script lang="ts">
  import { slide } from 'svelte/transition';
	import LinkList from '$components/list/LinkList.svelte';
  import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata, NodeName } from '$types/nodes';
  import { formatDate } from '$utils/general';
  import Paragraph from '$components/text/Paragraph.svelte';
  import Cell from './Cell.svelte';
  import { sineInOut } from 'svelte/easing';

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
      transition:slide|local={{ 
        duration: 400,
        easing: sineInOut
      }}
    >
      <Cell
        multi
      >
        <Cell 
          title="NAME"
          nested
          inline
        >
          <Paragraph center wide>
            { nodeMetadata.title ?? name }
          </Paragraph>
        </Cell>
        <Cell
          title="DATE"
          nested
          inline
        >
          <Paragraph center wide>
            { formatDate(nodeMetadata.createdAt) }
          </Paragraph>
        </Cell>
      </Cell>
      
      <Cell
        title="LINKS"
      >
        <LinkList 
          links={links}
          formatLink={link => link.to}
        >
          <Paragraph center faded>
            This node has no links...
          </Paragraph>
        </LinkList>
      </Cell>

      <Cell
        title="TAGS"
      >
        <TagList 
          tags={tags}
          orientation="horizontal"
        >
          <Paragraph center faded>
            This node has no tags...
          </Paragraph>
        </TagList>
      </Cell>
    </div>
  {/if}
</footer>

<style>
  footer {
    overflow: hidden;
  }

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
    transition: 0.8s;
  }

  .expanded .arrow {
    left: 0px;
    top: 3%;
    transform: rotate(90deg);
  }

  h1 {
    font-size: 1.8rem;
  }

</style>
