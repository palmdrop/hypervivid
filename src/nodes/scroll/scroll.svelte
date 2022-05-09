
  <script lang="ts">
    import type { NodeMetadata } from "$types/nodes";

    export let name: string;
    export let nodeMetadata: NodeMetadata;

  </script>

  <div style="node">
    Scrolling all night
    {#each { length: 100 } as _, i (i) }
      <p>
        Another line
      </p>
    {/each}
  </div>

  <style>
    .node {
      overflow: scroll;
    }
  </style>
  