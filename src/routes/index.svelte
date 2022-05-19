<script lang="ts">
	import type { NodeName } from '$types/nodes';

  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";
  import Node from '$components/node/Node.svelte';
  import Hyper from '$nodes/hyper/hyper.svelte';
  import { scrollIntoView } from '$utils/scrollIntoView';
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
    <button
      class="scroll-down-button"
      on:click|preventDefault={scrollIntoView}
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
  </section>

  <section>
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
    overflow-y: auto;

    width: 100%;
    height: 100%;
  }

  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opacity 1s;

    padding-top: 1em;
    padding-bottom: 3em;
    height: 97%;
  }

  section {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .nodes-link {
    text-align: center;
    padding-bottom: 1em;
  }

  .scroll-down-button {
    display: flex;
    justify-content: center;
    gap: 1em;

    background-color: var(--cBg);
    z-index: 1;

    width: 100vw;
    padding: 0.5em 0em;
  }
</style>