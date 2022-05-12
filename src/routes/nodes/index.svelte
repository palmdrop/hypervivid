<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import NodeList from "$components/list/NodeList.svelte";
  import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "$stores/metadata";

  const nodeNames = Object.keys(
    $metadata$.nodes
  ) as NodeName[];

  useTitle('Nodes');
</script>

<main>
  <h1>
    Nodes
  </h1>

  <NodeList
    nodeNames={nodeNames}
    contextFirst="multiple-secondary"
    contextRest="link"
  />
</main>

<style>
  main {
    padding-top: 1em;
    width: 100%;
  }
</style>