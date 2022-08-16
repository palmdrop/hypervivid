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

  const program = randomElement(programs);
</script>

<div class="overlay" />

<SubstrateView 
  programData={program}
/>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
