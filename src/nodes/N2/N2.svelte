<script lang="ts">
  import Paragraph from '$components/text/Paragraph.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import Node from '$components/node/Node.svelte';

  const { name, metadata } = getNodeContext('N2');
</script>

<div>
  <Paragraph>
    This node contains a bunch of stuff.<br>
    It also contains another node. How is this possible?
  </Paragraph>

  <!-- TODO: Context wrapper for nodes, pass node as argument -->
  <Node 
    name='N3'
    mode='inline'
  />

  <Paragraph>
    Pretty cool.
  </Paragraph>
</div>

<style>
</style>
