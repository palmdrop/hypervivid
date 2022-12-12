<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/summer-static/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('summer-static');
  const description = [
    'A couple of photographs from this summer. Nothing special. Just trying to capture that sweet endless summer vibe.',
    'I\'ve realized I want to create collections or series. Something rich and interesting occurs when objects are placed in context. An isolated image becomes part of a landscape.'
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='light'
  backgroundOverride='#b3b59c'
/>