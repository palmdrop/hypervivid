<script lang="ts">
	import type { NavEntry } from '$types/general';
  export let entries: NavEntry[];
</script>

<nav>
  {#each entries as {path, text} (path)}
    <a
      href={path}
    >
      { text }
    </a>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    flex-grow: 1;
    max-width: 400px;
  }

  nav a {
    width: 100%;
    text-align: center;
  }
</style>