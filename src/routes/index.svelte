<script lang="ts">
  import metadata from "../nodes/metadata.json";
  import Lazy from "../components/util/Lazy.svelte";

  const components = import.meta.glob('./../nodes/*.svelte');

  // TODO: use own preprocessor step to iterate over all nodes and generate an index file containing a list of dynamic imports  
  // TODO: similar to this: https://svelte.dev/repl/09abb8c287f745169f66f62d51f766d5?version=3.47.0
  console.log(metadata);
</script>

<div>
  hmm
</div>

{#each Object.values(components) as component}
  <Lazy
    component={component}
  >
    <div>Loading!</div>
  </Lazy>
{/each}