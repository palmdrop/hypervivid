<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import Node from '$components/node/Node.svelte';
  import { NODE_NAME } from '$constants';

  const { name, metadata } = getNodeContext('N2');
</script>

<div>
  <Paragraph>
    This { NODE_NAME } contains a bunch of stuff.<br>
    It also contains another { NODE_NAME }. How is this possible?
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
