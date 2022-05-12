<script lang="ts">
	import TagList from '$components/list/TagList.svelte';
  import type { NodeContext, NodeName } from '$types/nodes';
  import { getContext } from 'svelte';

  export let name: NodeName;

  $: context = getContext<NodeContext>(name)
</script>

<div class="node-preview">
  <a
    href={`/nodes/${name}`}
  >
    { name }
  </a>
  <TagList
    tags={context.metadata.tags}
    orientation="horizontal"
  />
</div>

<style>
  .node-preview {
    padding: 1em;
  }
</style>