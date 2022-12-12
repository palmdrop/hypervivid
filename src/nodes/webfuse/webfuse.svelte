<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/webfuse/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('webfuse');
  const description = [
    `A strange mix of techniques and source material. Memes, internet images, eerie aesthetics, warped and fused with pixel mixing techniques.`,
    'This project became a visualization of remix/mash-up culture: memes that build on memes that build on references that build on references.',
    'Internet culture can be organic and beautiful, but is often so infused with irony and distortion that all meaning is lost.'
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
/>
