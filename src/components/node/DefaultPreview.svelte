<script lang="ts">
	import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata } from '$types/nodes';
  export let name: string;
  export let nodeMetadata: NodeMetadata;
</script>

<div class="node-preview">
  <a
    href={`/nodes/${name}`}
  >
    { name }
  </a>
  <TagList
    tags={nodeMetadata.tags}
    orientation="horizontal"
  />
</div>

<style>
  .node-preview {
    padding: 1em;
  }
</style>