<script lang="ts">
  import { slide } from 'svelte/transition';
	import LinkList from '$components/list/LinkList.svelte';
  import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata, NodeName } from '$types/nodes';
  import { formatDate } from '$utils/general';
  import Paragraph from '$components/text/Paragraph.svelte';
  import Cell from './Cell.svelte';
  import { sineInOut } from 'svelte/easing';
  import Arrow from '$components/ornaments/indicators/ArrowIcon.svelte';

  export let name: NodeName;
  export let nodeMetadata: NodeMetadata;
  export let isExpanded: boolean = true;
  export let onToggle: (() => void) | undefined = undefined;
  export let transitionDuration: number = 400;

  $: links = nodeMetadata.links ?? [];
  $: tags = nodeMetadata.tags ?? [];

  $: expanded = isExpanded;
  $: toggle = onToggle ?? (() => {
    expanded = !expanded;
  })

  $: console.log("oops", isExpanded);

  // $: console.log('Expanded', expanded);
</script>

<footer> 
  <button 
    class="metadata-button"
    on:click={toggle}
  >
    <div class="arrow">
      <Arrow 
        { transitionDuration }
        direction={expanded ? 'down' : 'right'}
        strokeWidth={2}
      />
    </div>
    <h1>Metadata — {name}</h1>
  </button>
  { #if expanded }
    <div 
      class="content"
      transition:slide|local={{ 
        duration: transitionDuration,
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
  }

  h1 {
    font-size: 1.4rem;
  }
</style>
