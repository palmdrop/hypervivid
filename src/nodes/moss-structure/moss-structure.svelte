<script lang="ts">
	import SubstratesView, { type ProgramImports } from '$components/node/templates/SubstratesView.svelte';
  const imports = import.meta.globEager('../../assets/programs/moss-structure/*') as ProgramImports;
</script>

<SubstratesView 
  programImports={imports}
/>