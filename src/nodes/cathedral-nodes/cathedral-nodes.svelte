<script lang="ts">
	import SubstratesView, { type ProgramImports } from '$components/node/templates/SubstratesView.svelte';
  const imports = import.meta.glob('../../assets/programs/cathedral-nodes/*', { eager: true }) as ProgramImports;
</script>

<SubstratesView 
  programImports={imports}
/>