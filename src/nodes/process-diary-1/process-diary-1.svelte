<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Paragraph from '../../components/common/Paragraph.svelte';
  import BlogPost from '../../components/node/templates/BlogPost.svelte';
    import ImageProject from '../../components/node/templates/ImageProject.svelte';

  import Document from './document.svelte.md';

  /*
  const images = Object.values(import.meta.glob('../../assets/pieces/process-diary-1/*', { eager: true }))
    .map(module => (module as { default: string }).default);
    */
  const poissonTreeImages = Object.values(import.meta.glob('../../assets/pieces/process-diary-1/poisson-tree*.png', { eager: true }))
    .map(module => (module as { default: string }).default);

  const growthImages = Object.values(import.meta.glob('../../assets/pieces/process-diary-1/growth*.png', { eager: true }))
    .map(module => (module as { default: string }).default);

  const perfectBreathImages = Object.values(import.meta.glob('../../assets/pieces/process-diary-1/perfect-breath*.gif', { eager: true }))
    .map(module => (module as { default: string }).default);

  const bioTerraImages = Object.values(import.meta.glob('../../assets/pieces/process-diary-1/bioTerra*.png', { eager: true }))
    .map(module => (module as { default: string }).default);

  const { name } = getNodeContext('process-diary-1');
</script>

<BlogPost { name }>
  <Document />
</BlogPost>

<ImageProject
  imageUrls={poissonTreeImages}
  name={'Poisson Tree'}
  description={['Packed tree structure based on poisson disk sampling.']}
  theme='light'
  showHeader={false}
  compact={true}
/>

<ImageProject
  imageUrls={growthImages}
  name={'Layered Growth'}
  description={['Graphs, particle systems and layers.']}
  theme='light'
  showHeader={false}
  compact={true}
/>

<ImageProject
  imageUrls={perfectBreathImages}
  name={'Perfect Breath'}
  description={['Very calming breathing animation?']}
  theme='light'
  showHeader={false}
  compact={true}
/>

<ImageProject
  imageUrls={bioTerraImages}
  name={'Bio Terra'}
  description={['Formations and grids.']}
  theme='light'
  showHeader={false}
  compact={true}
/>


<style>
</style>
