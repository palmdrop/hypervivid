<script lang="ts">
	import TagList from '$components/list/TagList.svelte';
  import Paragraph from '$components/text/Paragraph.svelte';
  import type { NodeContext, NodeMetadata, NodeName } from '$types/nodes';
import { formatDate } from '$utils/general';
  import { getContext } from 'svelte';

  export let name: NodeName;
  let metadata: NodeMetadata;

  $: {
    const context = getContext<NodeContext>(name);
    metadata = context.metadata;
  }

</script>

<section class="node-preview">
  <div class="data-container">
    <div class="date">
      { formatDate(metadata.createdAt) }
    </div>
    <a
      href={`/nodes/${name}`}
    >
      <h2>{ name }</h2>
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
    />
  {/if}
</section>

<style>
  .node-preview {
    display: flex;
    justify-content: space-between;
  }

  .date {
    position: absolute;
    bottom: 15px;

    opacity: 0.5;

  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5em;
    text-align: left;
  }

  img {
    width: 100%;
    max-width: 500px;

    height: auto;

    padding-left: 0.7em;

    aspect-ratio: 3/2;
    object-fit: cover;
  }
</style>