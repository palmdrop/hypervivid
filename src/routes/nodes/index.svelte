<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import NodeList from "$components/list/NodeList.svelte";
  import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "$stores/metadata";
  import { NODE_NAMES, SITE_NAME } from '$constants';
  import Paragraph from '$components/common/Paragraph.svelte';
  import Link from '$components/common/Link.svelte';
  import Header from '$components/header/Header.svelte';

  const nodeNames = Object.keys(
    $metadata$.nodes
  ) as NodeName[];

  let mainRef: HTMLElement;
  const useMainRef = (ref: HTMLElement) => {
    mainRef = ref;
  }
  
  // TODO: add filters and search capabilities
  useTitle(`${NODE_NAMES} ~ ${SITE_NAME}`);
</script>

<Header />
<main
  use:useMainRef
>
  <h1>
    { NODE_NAMES }
  </h1>

  <div class="description-container">
    <Paragraph big>
      Nodes are entries on the page. A node can be anything. Words, art, interactive 3D scenes. Nodes are connected.
    </Paragraph>
    <Paragraph big>
      <Link
        href='/random'
      >
        Open a random node.
      </Link>
    </Paragraph>
  </div>

  <NodeList
    nodeNames={nodeNames}
    modeFirst="preview"
    modeRest="preview"
    batchCount={10}
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 1.2em;
  }

  h1 {
    text-transform: uppercase;
  }
</style>