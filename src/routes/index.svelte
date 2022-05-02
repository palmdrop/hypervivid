<script lang="ts">
  import Node from "$components/node/Node.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";

  $: nodeNames = Object.keys($metadata$.nodes);

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
  useTitle('Hypervivid ~ Hypersoft');
</script>

{#each nodeNames as name, i (name)}
  <Node
    name={name}
    context={i === 0 ? 'multiple-primary' : 'multiple'}
  />
{/each}

<!--
{#each Object.values(components) as component}
  <Lazy
    component={component}
  >
    <div>Loading!</div>
  </Lazy>
{/each}
-->