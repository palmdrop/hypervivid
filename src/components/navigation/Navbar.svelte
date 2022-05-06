<script lang="ts">
  export let entries: { path: string, text: string }[];
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
  }

  nav a {
    width: 100%;
    text-align: center;
  }
</style>