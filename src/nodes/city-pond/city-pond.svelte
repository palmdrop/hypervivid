<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/city-pond/*')).map(module => module.default);
  const { name, metadata } = getNodeContext('city-pond');
  const description = [
    'A simple photography project. I took photos by and around a small pond located nearby an old apartment of mine.',
    'The primary focus was exploring the eerie effect of nightly nature photography with a strong flash. There\'s also a few long expose shots in the mix.'
  ];
</script>

<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='black'
/>
