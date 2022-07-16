
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Link from '../../components/common/Link.svelte';
  import Paragraph from '../../components/common/Paragraph.svelte';
</script>

<div class="node">
  <section>
    <Paragraph big wide>
      This site is an experiment. My personal mind map. A notebook, archive, portfolio, and a space for general exploration.
    </Paragraph>
    <Paragraph big wide>
      Everything here is a node, analogous to the web at large. Nodes are connected. <Link href="/nodes/about">Read more</Link>, or start at a <Link href="/random">random location.</Link>
    </Paragraph>
  </section>
</div>

<style>
  .node {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    padding: 1em;
    max-width: 900px;
  }
</style>
  