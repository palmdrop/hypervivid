<script lang="ts">
  import { blur } from 'svelte/transition';
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
    <button class="focused-image-container"
      on:click={(e) => {
        e.currentTarget?.blur?.();
        focusedImageIndex = undefined; 
      }}
      on:mousedown|preventDefault={() => {}}
      transition:blur|local
    >
      <img class={`focused-image ${theme}`}
        src={focusedImage}
        alt={`${name} - ${focusedImageIndex + 1 }.`}
        style={overrideStyles}
      />
    </button>
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
        <button 
          class="image-container"
          on:click={() => {
            focusedImageIndex = i;
          }}
        >
          <img
            src={url} 
            alt=""
          />
          </button>
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
    padding-left: 0.8rem;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    text-align: center;
    border-bottom: var(--border);
  }

  .description p {
    font-size: 1.2rem;
    padding: 0.3rem 1.2rem;
    max-width: 46ch;
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
    margin-bottom: 5em;
    padding: 2em 0em;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: unset;
  }

  .image-container:last-child {
    margin-bottom: 0;
    border-bottom: unset;
  }

  img {
    width: 100%;

    transition: 0.5s;
    cursor: pointer;

    object-fit: contain;
    background-color: transparent;
    color: transparent;
  }

  @media ( min-width: 700px )  {
    .image-container {
      margin-bottom: 10em;
      padding: 4em 0em;
    }

    img {
      width: calc(100% - 4rem);
    }

    .description p {
      border-right: var(--border);
    }
  }

  .focused-image-container {
    position: fixed;
    width: 100vw;
    max-width: unset;
    height: 100vh;
    inset: 0;

    z-index: 1;

    cursor: pointer;
    box-shadow: unset;
  }

  .focused-image {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
</style>
  