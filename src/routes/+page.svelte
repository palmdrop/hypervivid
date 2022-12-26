<script lang="ts">
	import type { NodeName } from '$types/nodes';
  import NodeList from "$components/list/NodeList.svelte";
  import { useTitle } from "$utils/useTitle";
  import Node from '$components/node/Node.svelte';
  import Hyper from '$nodes/hyper/hyper.svelte';
  import { scrollSelfIntoView } from '$utils/scrollIntoView';
  import Arrow from '$components/ornaments/indicators/ArrowIcon.svelte';
  import { SITE_NAME } from '$constants';
  import Header from '$components/header/Header.svelte';
    import PageFooter from '../components/footer/page/PageFooter.svelte';

  $: nodeNames = [
    'intro',
    'latest'
  ] as NodeName[];

  useTitle(`${SITE_NAME} ~ HYPERSOFT`);
</script>

<Header />
<div class='page'> 
  <section
    class="landing"
  >
    <Node
      name="hyper"
      mode="inline"
      fromSlot={true}
    >
      <Hyper />
    </Node>
  </section>

  <section 
    class="nodes"
  >
    <button
      class="scroll-down-button"
      on:click|preventDefault={scrollSelfIntoView}
    >
      <Arrow 
        direction='down'
        size={'2.1em'}
      />
      <Arrow 
        direction='down'
        size={'2.1em'}
      />
      <Arrow 
        direction='down'
        size={'2.1em'}
      />
    </button>
    <NodeList
      nodeNames={nodeNames} 
      modeFirst="preview"
      modeRest="preview"
    />
    <a 
      href="/nodes"
      class="nodes-link"
    >
      Show more nodes...
    </a>
  </section>
</div>

<PageFooter />

<style>
  .page {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;

    width: 100%;

    z-index: 0;
  }

  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: opacity 1s;

    min-height: 85vh;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .nodes {
    display: flex;
    z-index: 10;

    min-height: 100vh;

    background-color: var(--cBg);
  }

  .scroll-down-button {
    display: flex;
    justify-content: center;
    gap: 1em;

    z-index: 1;

    width: 100%;

    padding-bottom: 4em;
    padding-top: 0em;
  }

  .nodes-link {
    text-align: center;
    padding-bottom: 1em;

    background-color: var(--cBg);
  }
</style>