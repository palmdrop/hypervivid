<script lang="ts">
	import type { NodeName } from '$types/nodes';

  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";
  import Node from '$components/node/Node.svelte';
  import Hyper from '$nodes/hyper/hyper.svelte';
  import { scrollIntoView } from '$utils/scrollIntoView';
  import Arrow from '$components/ornaments/indicators/ArrowIcon.svelte';

  $: nodeNames = (
    Object.keys($metadata$.nodes).slice(0, 3)
   ) as NodeName[];

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
      />
      <Arrow 
        direction='down'
      />
      <Arrow 
        direction='down'
      />
    </button>
  </section>

  <section>
    <NodeList
      nodeNames={nodeNames} 
      contextFirst="inline"
      contextRest="preview"
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

    padding-top: 1em;
  }

  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opacity 1s;

    padding-top: 1em;
    padding-bottom: 3em;
    height: 92%;
  }

  .landing h1 {
    text-align: left;

    font-size: 23vw;

    /*
    color: var(--cFgInverted);
    text-shadow: var(--textShadowDisplay);
    */
    color: var(--cFg);


    padding-bottom: 1.5rem;
    opacity: 0.3;
  }

  .landing img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -15%);

    height: 60vw;

    aspect-ratio: 1/1;

    z-index: 1;
    transition: 0.5s opacity;

    opacity: 0.0;
  }

  .landing .fadeIn {
    opacity: 1.0; 
  }

  .landing img:hover {
    opacity: 0.7;
  }

  section {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .nodes-link {
    text-align: center;
  }

  .scroll-down-button {
    display: flex;
  }

  .arrow {
    font-size: 2em;
    transform: rotateZ(90deg);
  }
</style>