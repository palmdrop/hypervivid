
  <script lang="ts">
    import { getNodeContext } from "$utils/useNodeContext";
    const { name, metadata } = getNodeContext('info');

  </script>

  <div style="node">
    {name}
  </div>

  <style>
    .node {


    }
  </style>
  