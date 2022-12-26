<script lang="ts">
	import { slide } from 'svelte/transition';
  import type { NavEntry } from '$types/general';
  import RssIcon from '$components/ornaments/indicators/RssIcon.svelte';
  import { onMount } from 'svelte';

  export let entries: NavEntry[];

  let expanded = false;
  let windowWidth = -1;
  const breakpoint = 750;

  const handleEscape = (event: KeyboardEvent) => {
    if(event.key !== 'Escape' || !expanded) return;
    expanded = false;
  }

  $: {
    if(expanded && windowWidth > breakpoint) {
      expanded = false;
    }
  }

  const toggleExpanded = () => {
    expanded = !expanded;
  }

  onMount(() => {
    window.addEventListener('keydown', handleEscape);
  });
</script>

<svelte:window 
  bind:innerWidth={windowWidth}
/>

<nav>
  {#if windowWidth < breakpoint}
    <button 
      class="expand-button clickable"
      on:click={toggleExpanded}
    >
      Menu
    </button>
    {#if expanded}
      <div 
        class='click-outside'
        on:click={toggleExpanded}
      />
      <ul
        transition:slide|local
        class="mobile"
      >
        {#each entries as {path, text}, i (path)}
          <li
            class="clickable"
          >
            <a
              href={path}
              on:click={toggleExpanded}
            >
              { text }
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  {:else}
    <ul
      class="wide" 
    >
      {#each entries as {path, text}, i (path)}
        <li
          class="clickable"
        >
          <a
            href={path}
          >
            { text }
          </a>
        </li>
      {/each}
    </ul>
  {/if}
  <div 
    class="rss"
  >
    <a href="/rss.xml" data-sveltekit-reload>
      <RssIcon size="1.2rem" />
    </a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    position: relative;
  }

  .expand-button {
    position: relative;
    display: flex;

    border-left: var(--borderPrimary);
    border-right: var(--borderPrimary);
    padding: 0.5em 1.7em;

    background-color: unset;

    z-index: 3;
  }

  .expand-button:hover {
    color: var(--cFgInverted);
  }

  .click-outside {
    position: fixed;
    inset: 0;

    z-index: 2;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: absolute;
    right: 0;
    left: 100%;
    top: calc(100% + 1px);

    transform: translateX(-100vw);
    width: 100vw;

    z-index: 100;

    background-color: var(--cBg);

    border-bottom: var(--borderPrimary);
  }

  .mobile {
    box-shadow: 0px 6em 6em 1em #00000077;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-left: var(--borderPrimary);
    border-bottom: var(--borderPrimary);
    z-index: 0;

    margin-left: -1px;

    font-size: 1.2rem;

    width: 100%;
    height: 100px;
  }

  li:last-child {
    border-bottom: unset;
  }

  .clickable::before {
    position: absolute;
    display: block;
    content: '';

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: var(--borderRadius1);
    outline: var(--borderPrimary);

    z-index: -1;

    transition: 0.3s;
  }

  a {
    display: inline-block;
    text-align: center;
    width: 100%;
    z-index: 1;
    text-decoration: none;

    padding: 2em;
  }

  .clickable:hover > * {
    color: var(--cFgInverted);
  }

  .clickable:hover::before {
    background-color: var(--cBgInverted);
    box-shadow: var(--pillShadow);
  }

  @media ( min-width: 750px )  {
    ul {
      position: relative;
      flex-direction: row;

      right: unset;
      top: unset;

      border-bottom: unset;
      padding-bottom: 0px;

      width: 100%;
      transform: unset;
      left: unset;
    }

    li {
      border-bottom: unset;
      width: auto;
      height: auto;
      font-size: 1.0rem;
      margin-left: unset;
    }

    li:last-child {
      border-right: var(--borderPrimary);
    }

    a {
      padding: 0.5em 1.7em;
    }
  }

  .rss > a {
    padding: 0.31em 0.4em;
    outline: var(--borderPrimary);
    border-radius: var(--borderRadius1);
  }
</style>