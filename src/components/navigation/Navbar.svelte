<script lang="ts">
	import { slide } from 'svelte/transition';
  import type { NavEntry } from '$types/general';
  export let entries: NavEntry[];

  let expanded = false;
  let windowWidth = -1;
  const breakpoint = 750;

  $: {
    if(expanded && windowWidth > breakpoint) {
      expanded = false;
    }
  }

  const toggleExpanded = () => {
    expanded = !expanded;
  }
</script>

<svelte:window 
  bind:innerWidth={windowWidth}
/>

<nav>
  <button 
    class="expand-button clickable"
    on:click={toggleExpanded}
  >
    Menu
  </button>
  {#if windowWidth < breakpoint}
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
</nav>

<style>
  nav {
    position: relative;
  }

  .expand-button {
    position: relative;
    display: flex;

    border-left: var(--borderPrimary);
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
    top: 100%;

    z-index: 3;

    background-color: var(--cBg);

    border-bottom: var(--borderPrimary);
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-left: var(--borderPrimary);
    border-bottom: var(--borderPrimary);
    z-index: 0;

    font-size: 1.2rem;

    width: 100vw;
    height: 100px;
  }

  li:last-child {
    border-bottom: unset;
  }

  .clickable::before {
    position: absolute;
    content: '';

    inset: 0;

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
    .expand-button {
      display: none;
    }

    ul {
      position: relative;
      flex-direction: row;

      right: unset;
      top: unset;

      border-bottom: unset;
      padding-bottom: 0px;
    }

    li {
      border-bottom: unset;
      width: auto;
      height: auto;
      font-size: 1.0rem;

    }

    a {
      padding: 0.5em 1.7em;
    }
  }

</style>