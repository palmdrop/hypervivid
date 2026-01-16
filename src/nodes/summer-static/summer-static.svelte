<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/summer-static/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('summer-static');
  const description = [
    'A couple of photographs from this summer. Just that endless summer vibe.',
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='light'
  backgroundOverride='#b3b59c'
/>