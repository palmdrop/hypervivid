
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Link from '../../components/common/Link.svelte';
  import Paragraph from '../../components/common/Paragraph.svelte';
  import Fragment from '../../components/node/templates/Fragment.svelte';

  const { metadata, mode } = getNodeContext('intro');
</script>

<Fragment
  name={metadata.title}
  { mode }
  limited={false}
>
  <Paragraph big wide>
    This site is an experiment. My personal mind map. A notebook, archive, portfolio, and a space for general exploration.
  </Paragraph>
  <Paragraph big wide>
    Everything here is a node, analogous to the web at large. Nodes are connected. 
    <Link href="/nodes/about">Read more</Link>, browse
    <Link href="/nodes/">all nodes</Link>, or start at a 
    <Link href="/random">random location.</Link>
  </Paragraph>
</Fragment>
  