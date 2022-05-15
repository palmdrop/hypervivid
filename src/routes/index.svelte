<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import { fade } from "svelte/transition";

  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";
  import Paragraph from "$components/text/Paragraph.svelte";
  import Node from '$components/node/Node.svelte';
  import Hyper from '$nodes/hyper/hyper.svelte';
  import { scrollIntoView } from '$utils/scrollIntoView';

  $: nodeNames = (
    Object.keys($metadata$.nodes).slice(0, 3)
   ) as NodeName[];

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
  useTitle('Hypervivid ~ Hypersoft');


  let fadeIn = false;

  const useFadeIn = (img: HTMLImageElement) => {
    img.onload = () => {
      fadeIn = true;
      console.log(fadeIn)
    }

    if(img.complete) {
      fadeIn = true;
    }
  }

  $: console.log(fadeIn)
</script>


<main> 
  <section
    class="landing"
  >
    <!--
    <img 
      src="/png/wings.png"
      alt=""
      use:useFadeIn
      in:fade
      class:fadeIn
    />

    <h1>
      HYPERVIVID<br>HYPERBLANK
    </h1>
    -->
    <Node
      name="hyper"
      mode="inline"
      fromSlot={true}
    >
      <Hyper />
    </Node>
    <!--
    <Paragraph wide big>
      Here's a few senteces of dummy text. Nice. Some more.
      Can I always make line breaks where I want? Words.
      Seems like it. I can then make paragraphs. In here.
    </Paragraph>
    -->
    <button
      class="scroll-down-button"
      on:click|preventDefault={scrollIntoView}
    >
      <div class="arrow">➺</div>
      <div class="arrow">➺</div>
      <div class="arrow">➺</div>
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