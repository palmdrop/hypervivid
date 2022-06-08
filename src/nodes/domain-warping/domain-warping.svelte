
<script lang="ts">
import BlogPost from '$components/node/templates/BlogPost.svelte';

  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('domain-warping');

  import Document from './document.svelte.md';

</script>

<BlogPost { name }>
  <Document />
</BlogPost>

<style>
</style>
  