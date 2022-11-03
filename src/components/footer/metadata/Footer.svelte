<script lang="ts">
	import { NODE_NAME } from '$constants';
  import { slide } from 'svelte/transition';
	import LinkList from '$components/list/LinkList.svelte';
  import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata, NodeName } from '$types/nodes';
  import { formatDate } from '$utils/general';
  import Paragraph from '$components/common/Paragraph.svelte';
  import Cell from './Cell.svelte';
  import { sineInOut } from 'svelte/easing';
  import Arrow from '$components/ornaments/indicators/ArrowIcon.svelte';

  export let name: NodeName;
  export let nodeMetadata: NodeMetadata;
  export let isExpanded: boolean = true;
  export let onToggle: (() => void) | undefined = undefined;
  export let transitionDuration: number = 400;
  export let showArrow = true;
  export let toggleEnabled = true;

  $: links = nodeMetadata.links ?? [];
  $: tags = nodeMetadata.tags ?? [];
  $: description = nodeMetadata.description ?? "";

  $: expanded = isExpanded;
  $: toggle = onToggle ?? (() => {
    if(toggleEnabled) {
      expanded = !expanded;
    }
  })

  $: shadow = expanded && !isExpanded;

  $: title = nodeMetadata.title ?? name;
</script>

<footer class:expanded class:shadow> 
  <button 
    class="metadata-button"
    class:toggleEnabled
    on:click={toggle}
  >
    {#if showArrow}
      <div class="arrow">
        <Arrow 
          { transitionDuration }
          direction={expanded ? 'down' : 'right'}
          strokeWidth={1.5}
          size={'1.0rem'}
        />
      </div>
    {/if}
    <h1>Metadata — {title}</h1>
  </button>
  { #if expanded }
    <div 
      class="content"
      transition:slide|local={{ 
        duration: transitionDuration,
        easing: sineInOut
      }}
    >
      <div class="cell-container">
        <Cell
          multi
        >
          <Cell 
            title="NAME"
            nested
            inline
          >
            <Paragraph 
              center wide
              tooltip={title.length > 10 ? title : undefined }
            >
              { title }
            </Paragraph>
          </Cell>
          <Cell
            title="CREATED"
            nested
            inline
          >
            <Paragraph center wide>
              { formatDate(nodeMetadata.createdAt) }
            </Paragraph>
          </Cell>
          <Cell
            title="UPDATED"
            nested
            inline
          >
            <Paragraph center wide>
              { formatDate(nodeMetadata.updatedAt) }
            </Paragraph>
          </Cell>
        </Cell>
        
        <Cell
          title="LINKS"
        >
          <LinkList 
            links={links}
            formatLink={link => `${link.to} (${link.kind})`}
          >
            <Paragraph center faded wide>
              This { NODE_NAME } has no links...
            </Paragraph>
          </LinkList>
        </Cell>

        <Cell
          title="TAGS"
        >
          <TagList 
            tags={tags}
            stretch
            orientation="horizontal"
          >
            <Paragraph center faded wide>
              This node has no tags...
            </Paragraph>
          </TagList>
        </Cell>
      </div>
      <div class="cell-container">
        <Cell
          title="DESCRIPTION"
          wide
          style="
            padding-bottom: 0.5em; 
          "
        >
          <Paragraph style="
            text-align: left; 
          ">
            { description }
          </Paragraph>
        </Cell>
      </div>
    </div>
  {/if}
</footer>

<style>
  button {
    cursor: initial;
  }

  .toggleEnabled {
    cursor: pointer;
  }

  footer {
    overflow: hidden;
    background-color: var(--cBg);
    box-shadow: 0px 0em 0em 0em #00000000;
    transition: 1s box-shadow;
  }

  footer.shadow {
    box-shadow: 0px -1em 4em 0em #00000077;
  }

  .content {
    display: flex;
    flex-direction: column;

    max-height: 87vh;
    overflow-y: auto;

    padding-bottom: 1em;
  }

  .cell-container {
    display: flex;
    flex-direction: column;
  }

  @media ( min-width: 500px )  {
    .cell-container {
      flex-direction: row; 
      width: unset;
    }

    .content {
      padding-bottom: unset;
    }
  }

  @media ( min-width: 900px ) {
    .content {
      flex-direction: row;
    }

    .cell-container {
      width: 63%;
    }

    .cell-container:last-child {
      width: 34%;
    }
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
    top: 51%;
    transform: translate(0, -50%);
  }

  h1 {
    font-size: 1.1rem;
    margin: 0.1em;
  }
</style>
