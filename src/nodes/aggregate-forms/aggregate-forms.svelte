<script lang="ts">
  import NodeLoader from "../../components/node/loader/NodeLoader.svelte";
	import AggregateApp from "../../modules/synthetic-grids/src/AggregateApp.svelte";

  export let isLoaded = false;
</script>

<AggregateApp 
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
    width: 100vw;
    height: 100%;
    background-color: unset;
  }
</style>
