
  <script lang="ts">
    import type { NodeMetadata } from "$types/nodes";

    export let name: string;
    export let nodeMetadata: NodeMetadata;
  </script>

  <div style="node">
    {name}
  </div>

  <style>
    .node {


    }
  </style>
  