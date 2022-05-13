<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import { fade } from "svelte/transition";

  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";
  import Paragraph from "$components/text/Paragraph.svelte";

  $: nodeNames = Object.keys($metadata$.nodes) as NodeName[];

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
    <Paragraph wide big>
      Here's a few senteces of dummy text. Nice. Some more.
      Can I always make line breaks where I want? Words.
      Seems like it. I can then make paragraphs. In here.
    </Paragraph>
  </section>

  <section>
    <NodeList
      nodeNames={nodeNames} 
      contextFirst="inline"
      contextRest="preview"
    />
  </section>
</main>

<style>
  main {
    position: relative;
    overflow-y: auto;

    width: 100%;
  }

  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opacity 1s;

    padding-top: 1em;
    padding-bottom: 3em;
  }

  .landing h1 {
    text-align: left;

    font-size: 23vw;

    color: var(--cFgInverted);
    text-shadow: var(--textShadowDisplay);

    padding-bottom: 1.5rem;
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

</style>