<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import BlogPost from '../../components/node/templates/BlogPost.svelte';
  import Document from './document.svelte.md';
  const { name, metadata } = getNodeContext('maps-of-the-web');

</script>

<BlogPost { name }>
  <Document />
</BlogPost>

<style>
</style>
