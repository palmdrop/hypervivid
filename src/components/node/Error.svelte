<script lang="ts">
  import Paragraph from "$components/common/Paragraph.svelte";
  import type { NodeName } from "$types/nodes";

  export let nodeName: NodeName;
</script>

<div>
  <Paragraph wide big>
    Node "{nodeName}" failed to load. Refresh to try again.
  </Paragraph>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    min-height: 100vh; 

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>