<script lang="ts">
  import Node from "$components/node/Node.svelte";
  import NodeList from "$components/node/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";

  $: nodeNames = Object.keys($metadata$.nodes);

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
  useTitle('Hypervivid ~ Hypersoft');
</script>

<NodeList
  nodeNames={nodeNames} 
  context="inline-first"
/>

<style>
</style>