<script lang="ts">
	import TagList from '$components/list/TagList.svelte';
  import Paragraph from '$components/text/Paragraph.svelte';
  import type { NodeContext, NodeMetadata, NodeName } from '$types/nodes';
  import { getContext } from 'svelte';

  export let name: NodeName;
  let metadata: NodeMetadata;
  $: {
    const context = getContext<NodeContext>(name);
    metadata = context.metadata;
  }
  
</script>

<div class="node-preview">
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

<style>
  .node-preview {
    padding: 1em;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5em;
    text-align: left;
  }
</style>