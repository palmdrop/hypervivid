<script lang="ts">
	import SubstratesView, { type ProgramImports } from '$components/node/templates/SubstratesView.svelte';
  const imports = import.meta.glob('../../assets/programs/liquid-cathedral/*', { eager: true }) as ProgramImports;
</script>

<SubstratesView 
  programImports={imports}
/>