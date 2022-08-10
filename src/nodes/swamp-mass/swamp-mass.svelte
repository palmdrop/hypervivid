<script lang="ts">
	import SubstrateView from './../../components/node/templates/SubstrateView.svelte';
  import { randomElement } from '../../utils/random';

  const programs = Object.values(
    import.meta.globEager('../../assets/programs/swamp-mass/*')
  ).map(module => module.default);

  const program = randomElement(programs);
</script>

<SubstrateView 
  programData={program}
/>
