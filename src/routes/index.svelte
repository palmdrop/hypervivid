<script lang="ts">
	import type { NodeName } from '$types/nodes';

  import NodeList from "$components/list/NodeList.svelte";

  import { useTitle } from "$utils/useTitle";
  import Node from '$components/node/Node.svelte';
  import Hyper from '$nodes/hyper/hyper.svelte';
  import { scrollSelfIntoView } from '$utils/scrollIntoView';
  import Arrow from '$components/ornaments/indicators/ArrowIcon.svelte';

  /*
  $: nodeNames = (
    Object.keys($metadata$.nodes).slice(0, 3)
   ) as NodeName[];
   */

  // TODO: featured + a few of the latest nodes?
  // TODO: or always show the latest one first, then featured
  $: nodeNames = [
    'N2',
    'manifest',
    'N3'
  ] as NodeName[];

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
  useTitle('Hypervivid ~ Hypersoft');
</script>


<main> 
  <section
    class="landing"
  >
    <Node
      name="hyper"
      mode="inline"
      fromSlot={true}
    >
      <Hyper />
    </Node>
  </section>

  <section 
    class="nodes"
  >
    <button
      class="scroll-down-button"
      on:click|preventDefault={scrollSelfIntoView}
    >
      <Arrow 
        direction='down'
        size={35}
      />
      <Arrow 
        direction='down'
        size={35}
      />
      <Arrow 
        direction='down'
        size={35}
      />
    </button>
    <NodeList
      nodeNames={nodeNames} 
      modeFirst="inline"
      modeRest="preview"
    />
    <a 
      href="/nodes"
      class="nodes-link"
    >
      Show more...
    </a>
  </section>
</main>

<style>
  main {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;

    width: 100%;
    height: 100%;

    z-index: 0;
  }

  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: opacity 1s;

    min-height: 94%;
  }

  section {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .nodes {
    display: flex;
    z-index: 10;

    background-color: var(--cBg);
  }

  .scroll-down-button {
    display: flex;
    justify-content: center;
    gap: 1em;

    z-index: 1;

    width: 100vw;

    padding-bottom: 2em;
  }

  .nodes-link {
    text-align: center;
    padding-bottom: 1em;

    background-color: var(--cBg);
  }
</style>