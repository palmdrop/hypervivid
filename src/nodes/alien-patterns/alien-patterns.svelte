<script lang="ts">
  import BlogPost from '$components/node/templates/BlogPost.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import Document from './document.svelte.md';
  const { name } = getNodeContext('alien-patterns');

</script>

<BlogPost { name }>
  <Document />
</BlogPost>

<style>
</style>
  