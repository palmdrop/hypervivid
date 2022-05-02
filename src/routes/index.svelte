<script lang="ts">
  import Node from "$components/node/Node.svelte";

  import { metadata$ } from "$stores/metadata";
  import { useTitle } from "$utils/useTitle";

  $: nodeNames = Object.keys($metadata$.nodes);

  // TODO: add fallback route => display missing route with big text. Add option to go back to previous/home
  useTitle('Hypervivid ~ Hypersoft');
</script>

<ul>
  {#each nodeNames as name, i (name)}
    <li>
      <Node
        name={name}
        context={i === 0 ? 'multiple-primary' : 'multiple'}
      />
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 1em;
    padding: 1em;
    border: 1px solid black;
  }
</style>