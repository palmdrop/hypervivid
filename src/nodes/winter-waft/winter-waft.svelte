<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.glob('../../assets/pieces/winter-waft/*', { eager: true }))
    .map(module => (module as { default: string }).default);

  const { name, metadata } = getNodeContext('winter-waft');
  const description = [
    `Pictures from winter. Experimenting with (slightly) more aggressive editing and a dramatic flash.`,
    `Tried to make it coherent, although we've got a few outliers.`
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='light'
/>