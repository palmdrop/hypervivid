<script lang="ts">
  import ImageProject from '$components/node/templates/ImageProject.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  
  const images = Object.values(import.meta.globEager('../../assets/pieces/chaos-growth/*')).map(module => module.default);
  const { name } = getNodeContext('chaos-growth');
  const description = [
    'Accidental result of a strangely calibrated space-colonization algorithm. Something initially organic and smooth got turned into chaotic, noisy growth.',
    'This piece has been used as input or source material for many other experiments.'
  ];
</script>

<ImageProject
  imageUrls={images}
  name={name}
  description={description}
  theme='light'
/>
