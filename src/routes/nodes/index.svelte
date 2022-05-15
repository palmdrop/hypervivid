<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import NodeList from "$components/list/NodeList.svelte";
  import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "$stores/metadata";

  const nodeNames = Object.keys(
    $metadata$.nodes
  ) as NodeName[];

  let mainRef: HTMLElement;
  const useMainRef = (ref: HTMLElement) => {
    mainRef = ref;
  }

  useTitle('Nodes');
</script>

<main
  use:useMainRef
>
  <h1>
    NODES
  </h1>

  <NodeList
    nodeNames={nodeNames}
    contextFirst="inline"
    contextRest="link"
    batchCount={5}
    scrollElement={mainRef}
  />
</main>

<style>
  main {
    padding-top: 1em;
    width: 100%;
    height: 100%;

    overflow-y: auto;
  }
</style>