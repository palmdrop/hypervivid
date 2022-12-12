<script lang="ts">
  import { blur } from 'svelte/transition';
  import Paragraph from '$components/common/Paragraph.svelte';
  import FlowList from '$components/list/FlowList.svelte';
  import { shuffleArray } from '$utils/general';
  
  export let imageUrls: string[];
  export let description: string[];
  export let name: string;
  export let shuffleImages = true;

  export let theme: 'light' | 'dark' | 'black' = 'light';
  export let backgroundOverride: string | undefined = undefined;

  let focusedImageIndex: number | undefined = undefined;
  let focusedImage: string | undefined = undefined;

  $: {
    if(shuffleImages) shuffleArray(imageUrls);
  }

  $: {
    focusedImage = typeof focusedImageIndex === 'number' 
      ? imageUrls[focusedImageIndex] 
      : undefined;
  }

  const onKeyDown = (e: KeyboardEvent) => {
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
  {#if (typeof focusedImageIndex === 'number') && focusedImage}
    <img class={`focused-image ${theme}`}
      src={focusedImage}
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
  <div class="container">
    <div class="description">
      <h1>{name}</h1>
      {#each description as line, i (line)}
        <p>
          {line}
        </p>
      {/each}
    </div>
    <ul>
      {#each imageUrls as url, i (url)}
        <div class="image-container">
          <img
            src={url} 
            alt=""
            on:click={() => {
              focusedImageIndex = i;
            }}
          />
        </div>
      {/each}
    </ul>
  </div>
</div>

<style>
  .node {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light {
    background-color: var(--cBg);
    color: var(--cFg);
    --border: var(--borderPrimary);
  }

  .dark {
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);
    --border: 1px solid var(--cBg);
  }

  .black {
    background-color: var(--cBgBlack);
    color: var(--cFgInverted);
    --border: 1px solid var(--cBg);
  }

  .container {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;

    min-height: 100vh;
    border: var(--border);
    width: calc(min(100%, 1200px));

    margin-bottom: 10em;
  }

  .description {
    margin-bottom: 10em;
    background-color: unset;
    border-bottom: var(--border);
  }

  .description h1 {
    text-transform: lowercase;
    padding-left: 1rem;
    padding-top: 2rem;
    padding-bottom: 4rem;
    text-align: left;
    border-bottom: var(--border);
  }

  .description p {
    font-size: 1.5rem;
    padding: 0.5rem 1.2rem;
    max-width: 46ch;
    border-right: var(--border);
  }

  .description p:first-of-type {
    padding-top: 1.5rem;
  }

  .description p:last-child {
    padding-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .image-container {
    border-top: var(--border);
    border-bottom: var(--border);
    margin-bottom: 10em;
    padding: 4em 0em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container:last-child {
    margin-bottom: 0;
    border-bottom: unset;
  }

  img {
    max-width: calc(100vw - 4rem);
    width: calc(100% - 4rem);

    transition: 0.5s;
    cursor: pointer;

    object-fit: contain;
    background-color: transparent;
    color: transparent;

  }

  .focused-image {
    position: fixed;
    width: 100vw;
    max-width: unset;
    height: 100vh;
    inset: 0;

    border-radius: 0px;

    object-fit: contain;

    z-index: 1;

    cursor: pointer;
    box-shadow: unset;
  }
</style>
  