<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/weave/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('weave');
  const description = [
    'Combining various unrelated techniques often produce the most unexpected results. Here I delved into eerie organic flowfields and fabric patterns, controlled by underlying images, plant-like generative growth, and noise.',
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='dark'
/>
