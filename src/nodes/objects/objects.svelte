<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/objects/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('objects');
  const description = [
    'I\'d like to explore the use of space and negative space more in my generative works. Domain warped noise fields/surfaces may produce fascinating textures and environments, but nothing as impactful as these strange entities.',
    'Once wrote a short story inspired by these things. In Swedish, unfortunately, but one day I may publish it here anyway.'
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='dark'
/>
