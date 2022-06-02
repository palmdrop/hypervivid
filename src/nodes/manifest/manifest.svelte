
  <script lang="ts">
    import StarLoader from "$components/ornaments/loaders/StarLoader.svelte";
import { getNodeContext } from "$utils/useNodeContext";
    const { name, metadata } = getNodeContext('manifest');
  </script>

  <div style="node">
    {name}
  </div>

  <style>
    .node {
    }
  </style>
  