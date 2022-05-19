<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import NodeList from "$components/list/NodeList.svelte";
  import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "$stores/metadata";
  import { NODE_NAMES } from '$constants';
  import Paragraph from '$components/text/Paragraph.svelte';

  const nodeNames = Object.keys(
    $metadata$.nodes
  ) as NodeName[];

  let mainRef: HTMLElement;
  const useMainRef = (ref: HTMLElement) => {
    mainRef = ref;
  }
  
  // TODO: add filters and search capabilities

  useTitle(NODE_NAMES);
</script>

<main
  use:useMainRef
>
  <h1>
    { NODE_NAMES }
  </h1>

  <div class="description-container">
    <Paragraph center>
      Nodes are entries on the page. A node can be anything. Words, art, interactive 3D scenes. Nodes are connected.
    </Paragraph>
  </div>

  <NodeList
    nodeNames={nodeNames}
    modeFirst="inline"
    modeRest="preview"
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

  .description-container {
    display: flex;
    justify-content: center;

    padding-bottom: 1.2em;
  }

  h1 {
    text-transform: uppercase;
  }
</style>