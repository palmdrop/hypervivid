<script lang="ts">
  import Node from "$components/node/Node.svelte";
  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";

  $: nodeNames = Object.keys($metadata$.nodes);

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
  useTitle('Hypervivid ~ Hypersoft');
</script>


<h1>
  HYPERVIVID  HYPERSOFT
</h1>

<NodeList
  nodeNames={nodeNames} 
  contextFirst="multiple-primary"
  contextRest="link"
/>

<style>
  h1 {
    text-align: center;
  }
</style>