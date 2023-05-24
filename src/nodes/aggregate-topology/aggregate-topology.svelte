<script lang="ts">
  import NodeLoader from "../../components/node/loader/NodeLoader.svelte";
	import AggregateTopology from "../../modules/synthetic-grids/src/AggregateTopologyApp.svelte";

  export let isLoaded = false;
</script>

<AggregateTopology 
  interactive={false} 
  bind:isLoaded={isLoaded}
/>

{#if !isLoaded}
  <div class="loader">
    <NodeLoader mode="only"/>
  </div>
{/if}

<style>
  .loader {
    position: absolute;
    inset: 0;
    z-index: 10000;
    overflow: hidden;
    width: 100vw;
    height: 100%;
    background-color: unset;
  }
</style>
