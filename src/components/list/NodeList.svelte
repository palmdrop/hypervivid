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
      {#if showOpenLink && (i === 0 ? contextFirst : contextRest) !== 'link'}
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

    width: 100%;
  }

  li {
    position: relative;
    margin: 1em;
    padding: 2.5em;
    border: var(--borderPrimary);
    border-radius: var(--borderRadius1);
  }

  li a {
    position: absolute;
    top: 0.7em;
    right: 0.7em;
  }
</style>

<!-- markup (zero or more items) goes here -->