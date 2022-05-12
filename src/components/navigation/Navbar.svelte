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
      {#if i !== (entries.length - 1) } 
        |
      {/if}
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
    display: flex;
  }

  a {
    text-align: center;
    padding: 0em 1.5em;
  }
</style>