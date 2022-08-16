<script lang="ts">
  import SubstrateRenderer from "../../../modules/substrates/src/components/substrate/SubstrateRenderer.svelte";
  import { decodeProgram, initializeProgramStore, type EncodedProgram } from "../../../modules/substrates/src/stores/programStore";

  export let programData: any;

  $: {
    const program = decodeProgram(programData as EncodedProgram);
    if(program) {
      initializeProgramStore(program);
      // TODO: Error message?
    }
  }
</script>

<SubstrateRenderer />

<style>
</style>