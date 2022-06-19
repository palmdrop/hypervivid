<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/combined/*')).map(module => module.default);
  const { name } = getNodeContext('fragfuse');
  const description = [
    `I found that zoomed fragments of larger photos carry a calm, grainy aesthetic. 
    I started gathering details, textures and patterns from the peripheries of old images, and
    combined them with various pixel mixing techniques.`,
    'The results are less calm.'
  ];
</script>

<ImageProject
  imageUrls={images}
  name={name}
  description={description}
/>