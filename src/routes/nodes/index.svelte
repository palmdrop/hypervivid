<script>
import NodeList from "$components/list/NodeList.svelte";
import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "../../stores/metadata";

  const nodeNames = Object.keys(
    $metadata$.nodes
  );

  useTitle('Nodes');
</script>

<h1>
  Nodes
</h1>

<NodeList
  nodeNames={nodeNames}
  context="preview-all"
/>

<style>
</style>