<script lang="ts">
  import Lazy from "$components/util/Lazy.svelte";
  import type { GlobComponentImport } from "$types/imports";

  const components: GlobComponentImport = import.meta.glob('./../nodes/*/[^.]+.svelte');

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
</script>

{#each Object.values(components) as component}
  <Lazy
    component={component}
  >
    <div>Loading!</div>
  </Lazy>
{/each}