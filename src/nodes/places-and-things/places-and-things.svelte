<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/places-and-things/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('places-and-things');
  const description = [
    `Pictures of places and things. A collection, or series, of recent photographs.`,
    `A continuation of the Summer Static node. Another slice of time and vibe.`
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='light'
/>