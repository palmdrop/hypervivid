<script lang="ts">
	import TagList from '$components/list/TagList.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';
  import type { NodeContext, NodeMetadata, NodeName } from '$types/nodes';
  import { formatDate } from '$utils/general';
  import { getContext } from 'svelte';
  import Link from '$components/common/Link.svelte';
  import data from './data.json';

  let metadata: NodeMetadata;
  let name: string;

  const latestLink = data[data.length - 1];

  $: {
    const context = getContext<NodeContext>('links');
    metadata = context.metadata;
    name = context.name;
  }

</script>

<section 
  class="node-preview"
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
    <div>
      Latest link:
      <Link
        href={latestLink.url}
        newTab 
      >
        {latestLink.text}
      </Link>
    </div>
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

    padding-bottom: 0.5em;

    border-radius: 15px;

    aspect-ratio: 3/2;
    object-fit: cover;
  }

  @media ( min-width: 650px )  {
    .node-preview {
      flex-direction: row;
    }

    img {
      margin-left: 0.7em;
      padding-bottom: unset;
    }
  }

</style>