
<script lang="ts">
import Paragraph from '$components/common/Paragraph.svelte';

  import FlowList from '$components/list/FlowList.svelte';
  import { shuffleArray } from '$utils/general';
  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('fragfuse');

  const images = Object.values(import.meta.globEager('../../assets/pieces/combined/*')).map(module => module.default);

  type Item = {
    imageUrl: string
  } | {
    text: string[]
  };

  const items: Item[] = [
    { text: [
      `I found that zoomed fragments of larger photos carry a calm, grainy aesthetic. 
      I started gathering details, textures and patterns from the peripheries of old images, and
      combined many such photos with various pixel mixing techniques.`,
      'All results, with one exception, are 1000x707 pixels.'
    ]},
    ...shuffleArray(images.map(img => ({
      imageUrl: img
    })))
  ];
</script>

<div class="node">

  <FlowList
    items={items}
    randomXOffset={0.2}
    randomYOffset={0.2}
    let:item
    let:index
  >
  {#if item.imageUrl}
    <img 
      src={item.imageUrl} 
      alt={`hyperimage ${index}`}
      loading="lazy"
      style="
        width: {Math.floor(Math.random() * 400) + 800}px;
      "
    />
  {:else}
    <div class="description">
      {#each item.text as line (line)}
        <Paragraph big>
          {line}
        </Paragraph>
      {/each}
    </div>
  {/if}
  </FlowList>
</div>

<style>
  .node {
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .description {
    padding-bottom: 10em;
    padding-top: 5em;
  }

  img {
    max-width: 90vw;
    margin-bottom: 15em;

    box-shadow: 0px 0px 100px var(--cBgInverted);
    border-radius: 1%;
  }
</style>
  