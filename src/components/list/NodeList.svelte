<script lang="ts">
  import type { NodeContext } from "$types/nodes";
  import Node from "../node/Node.svelte";

  export let showOpenLink: boolean = true;
  export let nodeNames: string[];

  export let contextFirst: NodeContext;
  export let contextRest: NodeContext;
</script>

<ul class="node-list">
  {#each nodeNames as name, i (name)}
    <li>
      <Node
        name={name}
        context={i === 0 ? contextFirst : contextRest}
      />
      {#if showOpenLink}
        <a
          href={`/nodes/${name}`}
        >
          Open 
        </a>
      {/if}
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }

  li {
    position: relative;
    margin: 1em;
    padding: 2em;
    border: var(--borderPrimary);
  }

  li a {
    position: absolute;
    top: 0.2em;
    right: 0.5em;
  }
</style>

<!-- markup (zero or more items) goes here -->