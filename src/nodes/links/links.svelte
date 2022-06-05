
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import links from './data.json';
  const { name, metadata } = getNodeContext('links');

  type Category = typeof links[number]['category'];
  type Link = typeof links[number];

  // type CategoryLinks<T extends Category, L extends Link> = 

    /*
  const linkSections: {
    [category in Category]: Link
  }
  */

</script>

<ul>
{#each links as link}
  <li>
  { link.text }
  </li>
{/each}
</ul>

<style>
</style>
  