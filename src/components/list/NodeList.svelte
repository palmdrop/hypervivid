<script lang="ts">
  import type { NodeContext } from "$types/nodes";

  import Node from "../node/Node.svelte";

  export let context: 'inline-all' | 'inline-first' | 'preview-all' | 'preview-first' | 'link' = 'inline-first';
  export let showOpenLink: boolean = true;
  export let nodeNames: string[];

  let nodeContextFirst: NodeContext;
  let nodeContextRest: NodeContext;

  $: {
    switch(context) {
      case 'inline-all': {
        nodeContextFirst = nodeContextRest = 'multiple';
      } break;
      case 'inline-first': {
        nodeContextFirst = 'multiple-primary';
        nodeContextRest = 'multiple-secondary';
      } break;
      case 'preview-all': {
        nodeContextFirst = nodeContextRest = 'multiple-secondary';
      } break;
      case 'preview-first': {
        nodeContextFirst = 'multiple-secondary';
        nodeContextRest = 'link';
      } break;
      case 'link': 
      default: {
        nodeContextFirst = nodeContextRest = 'link';
      }
    }
  }
</script>

<ul class="node-list">
  {#each nodeNames as name, i (name)}
    <li>
      <Node
        name={name}
        context={i === 0 ? nodeContextFirst : nodeContextRest }
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
  }

  li {
    position: relative;
    margin: 1em;
    padding: 2em;
    border: 1px solid black;
  }

  li a {
    position: absolute;
    top: 0.2em;
    right: 0.5em;
  }
</style>

<!-- markup (zero or more items) goes here -->