<script lang="ts">
	import TagList from '$components/list/TagList.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';
  import type { NodeContext, NodeMetadata, NodeName } from '$types/nodes';
  import { formatDate } from '$utils/general';
  import { getContext } from 'svelte';

  export let name: NodeName;
  export let flipped: boolean = false;
  let metadata: NodeMetadata;

  $: {
    const context = getContext<NodeContext>(name);
    metadata = context.metadata;
  }

  let imageLoaded = false;
</script>

<section 
  class="node-preview"
  class:flipped={flipped && metadata.image && metadata.image.length}
>
  <div class="data-container">
    <div class="date">
      { formatDate(metadata.createdAt) }
    </div>
    <a
      href={`/nodes/${name}`}
    >
      <h2>{ metadata.title ?? name }</h2>
    </a>
    {#if metadata.description && metadata.description.length }
      <Paragraph>
        { metadata.description }
      </Paragraph>
    {/if}
    <TagList
      tags={metadata.tags}
      orientation="horizontal"
    />
  </div>
  {#if metadata.image && metadata.image.length }
    <img
      src={metadata.image}
      alt=''
      loading="lazy"
      on:load={() => imageLoaded = true}
      class:loaded={imageLoaded}
    />
  {/if}
</section>

<style>
  .node-preview {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
  }

  .date {
    position: absolute;
    bottom: 1em;

    opacity: 0.5;
  }

  .data-container {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5em;
    text-align: left;
  }

  img {
    width: 100%;
    max-width: 450px;

    margin-bottom: 0.7em;
    border-radius: 15px;

    aspect-ratio: 3/2;
    object-fit: cover;

    background-color: var(--cBgDark);
    border: var(--borderPrimary);

    opacity: 1;
  }

  img.loaded {
    opacity: 1;
  }

  @media ( min-width: 750px )  {
    img {
      width: 60%;
    }

    .node-preview {
      flex-direction: row;
    }

    .flipped {
      flex-direction: row-reverse;
    }

    .flipped .date {
      right: 2.5em;
    }

    img {
      margin-left: 0.7em;
      margin-bottom: unset;
    }

    .flipped img {
      margin-left: unset;
      margin-right: 0.7em;
    }
  }

</style>