<script lang="ts" context="module">
  import type { GlobImport } from '$types/imports';
  export type ProgramImports = GlobImport<{ default: EncodedProgram }>;
</script>

<script lang="ts">
	import SubstrateView from '$components/node/templates/SubstrateView.svelte';
  import { randomElement } from '$utils/random';
  import type { EncodedProgram } from '../../../modules/substrates/src/stores/programStore';

  export let programImports: ProgramImports;

  const programs = Object.values(
    programImports
  ).map(module => module.default);

  let program: EncodedProgram | undefined = undefined;

  const randomizeProgram = () => {
    let newProgram: EncodedProgram;

    // Do not randomize the same program two times in a row
    while((newProgram = randomElement(programs)) === program) {};

    program = newProgram;
  }

  randomizeProgram();
</script>

<div 
  class="overlay" 
  on:click={randomizeProgram}
/>

<SubstrateView 
  programData={program}
/>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;

    z-index: 0;

    cursor: pointer;
  }
</style>
