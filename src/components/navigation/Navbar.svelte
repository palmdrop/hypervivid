<script lang="ts">
	import Point from '$components/ornaments/Point.svelte';
import type { NavEntry } from '$types/general';
  export let entries: NavEntry[];
</script>

<nav>
  <ul>
  {#each entries as {path, text}, i (path)}
    <li>
      <a
        href={path}
      >
        { text }
      </a>
    </li>
  {/each}
  </ul>
</nav>

<style>
  nav {
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  li {
    position: relative;

    border-left: var(--borderPrimary);
    z-index: 0;
  }

  li::before {
    position: absolute;
    content: '';

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);

    margin: -1px;
    z-index: -1;

    transition: 0.3s;

  }

  a {
    display: inline-block;
    text-align: center;
    z-index: 10;
    text-decoration: none;

    padding: 0.5em 1.7em;
  }

  li:hover > a {
    color: var(--cFgInverted);
  }

  li:hover::before {
    background-color: var(--cBgInverted);
    box-shadow: var(--pillShadow);
  }
</style>