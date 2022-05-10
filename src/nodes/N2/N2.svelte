<script lang="ts">
  import Paragraph from '$components/text/Paragraph.svelte';
import type { NodeMetadata } from '$types/nodes';
	import N3 from './../N3/N3.svelte';

  export let name: string;
  export let nodeMetadata: NodeMetadata;
</script>

<div>
  <Paragraph>
    This node contains a bunch of stuff.<br>
    It also contains another node. How is this possible?
  </Paragraph>

  <!-- TODO: Context wrapper for nodes, pass node as argument -->
  <N3 />

  <Paragraph>
    Pretty cool.
  </Paragraph>
</div>

<style>
</style>
