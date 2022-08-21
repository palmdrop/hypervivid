<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Fragment from '$components/node/templates/Fragment.svelte';
  import Document from './document.svelte.md';
  import Paragraph from '../../components/common/Paragraph.svelte';
  import inspirations from './inspirations.json';
  import PointList from '../../components/list/PointList.svelte';
  import Link from '../../components/common/Link.svelte';

  const images = Object.values(import.meta.globEager('../../assets/pieces/digital-biophilia/*')).map(module => module.default);

  const { metadata, mode } = getNodeContext('digital-biophilia');
</script>

<Fragment
  name={metadata.title}
  { mode }
>
  <Document />
  <Paragraph big wide style="padding-top: 1em;">
    Some inspirations:
  </Paragraph>
  <PointList
    items={inspirations}
    let:item
  >
    <Link 
      href={item.link}
    >
      {item.text}
    </Link>
  </PointList>
  <div slot="extra">
    <Paragraph big wide>
      Below are some of my test renders, experiments, screengrabs, etc:
    </Paragraph>
    {#each images as image, i (i)}
      <img src={image} width="100%" alt=""/>
    {/each}
  </div>
</Fragment>

<style>
</style>
