<script lang="ts">
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
        / 
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
  }

  a {
    width: 100%;
    text-align: center;

    padding: 0em 1.5em;
  }
</style>