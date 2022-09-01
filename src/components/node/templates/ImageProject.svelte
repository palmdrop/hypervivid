<script lang="ts">
  import { blur } from 'svelte/transition';
  import Paragraph from '$components/common/Paragraph.svelte';
  import FlowList from '$components/list/FlowList.svelte';
  import { shuffleArray } from '$utils/general';
  
  export let imageUrls: string[];
  export let description: string[];
  export let name: string;

  export let theme: 'light' | 'dark' | 'black' = 'light';
  export let backgroundOverride: string | undefined = undefined;

  let focusedImageIndex: number | undefined = undefined;
  let focusedItem: { imageUrl: string } | undefined = undefined;

  $: {
    focusedItem = focusedImageIndex ? items[focusedImageIndex] as { imageUrl: string } : undefined;
  }

  type Item = {
    imageUrl: string
    width: string
  } | {
    text: string[]
  };

  const items: Item[] = [
    { text: description},
    ...shuffleArray(imageUrls.map(img => ({
      imageUrl: img,
      width: `${Math.floor(Math.random() * 400) + 800}px`
    })))
  ];

  const onKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
    if(['Escape', 'Backspace'].includes(e.key)) {
      focusedImageIndex = undefined;
    }
  }

  $: overrideStyles = `
    ${ backgroundOverride 
      ? `background-color: ${backgroundOverride}`
      : ''
    }
  `;
</script>

<svelte:window on:keydown={onKeyDown} />

<div 
  class={`node ${theme}`}
  style={overrideStyles}
>
  {#if focusedImageIndex && focusedItem}
    <img class={`focused-image ${theme}`}
      src={focusedItem.imageUrl}
      alt={`${name} - ${focusedImageIndex + 1 }.`}
      style={overrideStyles}
      on:click={(e) => {
        e.currentTarget?.blur?.();
        focusedImageIndex = undefined; 
      }}
      on:mousedown|preventDefault={() => {}}
      transition:blur|local
    />
  {/if}
  <FlowList
    items={items}
    randomXOffset={0.2}
    randomYOffset={0.2}
    let:item
    let:index
  >
  {#if item.imageUrl}
    <img 
      class="flow-image"
      src={item.imageUrl} 
      alt={`${name} - ${index + 1}.`}
      style="
        --width: {item.width};
      "
      on:click={() => { focusedImageIndex = index; }}
    />
  {:else}
    <div 
      class={`description ${theme}`}
    >
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
    position: relative;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light {
    background-color: var(--cBg);
    color: var(--cFg);
  }

  .dark {
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);
  }

  .black {
    background-color: var(--cBgBlack);
    color: var(--cFgInverted);
  }

  .description {
    padding-bottom: 10em;
    padding-top: 5em;

    margin: 2.5em;

    background-color: unset;
  }

  .flow-image {
    max-width: calc(100vw - 0.5em);
    width: 100%;
    margin-bottom: 15em;

    border-radius: 1%;

    transition: 0.5s;
    cursor: pointer;
  }

  @media ( min-width: 600px )  {
    .flow-image {
      width: var(--width);
    }
  }

  .light img {
    box-shadow: 0px 0px 100px var(--cBgInverted);
  }

  .dark img, .black img {
    box-shadow: 0px 0px 100px var(--cBgDark);
  }

  .black img {
    box-shadow: 0px 0px 100px var(--cBgInverted);
  }

  .focused-image {
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;

    border-radius: 0px;

    object-fit: contain;

    z-index: 1;

    cursor: pointer;
  }
</style>
  