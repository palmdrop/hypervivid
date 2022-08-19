<script lang="ts">
  import BlogPost from '$components/node/templates/BlogPost.svelte';
  import Document from './document.svelte.md';
  import { getNodeContext } from '$utils/useNodeContext';
  import NodeCluster from '../../components/node/cluster/NodeCluster.svelte';

  const { name } = getNodeContext('substrates');
</script>

<BlogPost { name } fullsizeImage={true}>
  <Document />
  <NodeCluster
    tagFilter={{
      matchOn: ['substrate', 'live'],
      matchMode: 'all'
    }}
  />
</BlogPost>

<style>
</style>
  