
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Fragment from '$components/node/templates/Fragment.svelte';
  import Document from './document.svelte.md';

  const { metadata, mode } = getNodeContext('cringe-core');
</script>

<Fragment
  name={metadata.title}
  { mode }
>
  <Document />
</Fragment>

<style>
</style>
