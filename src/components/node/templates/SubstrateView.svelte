<script lang="ts">
  import SubstrateRenderer from "../../../modules/substrates/src/components/substrate/SubstrateRenderer.svelte";
  import { decodeProgram, initializeProgramStore, type EncodedProgram } from "../../../modules/substrates/src/stores/programStore";
  import StarLoader from "../../ornaments/loaders/StarLoader.svelte";

  export let programData: any;
  export let showLoader = true;

  let loading = true;

  $: {
    loading = true;
    decodeProgram(programData as EncodedProgram)
      .then(program => {
        if(program) initializeProgramStore(program)
        loading = false;
      });
  }
</script>

{#if !loading || !showLoader}
  <SubstrateRenderer />
{:else}
  <div class="loading">
    <StarLoader fadeIn={false} />
  </div>
{/if}

<style>
  .loading {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>