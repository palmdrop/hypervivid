<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import FlowList from '$components/list/FlowList.svelte';
  import { shuffleArray } from '$utils/general';
  
  export let imageUrls: string[];
  export let description: string[];
  export let name: string;

  type Item = {
    imageUrl: string
  } | {
    text: string[]
  };

  const items: Item[] = [
    { text: description},
    ...shuffleArray(imageUrls.map(img => ({
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
      alt={`${name} ${index}`}
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
  