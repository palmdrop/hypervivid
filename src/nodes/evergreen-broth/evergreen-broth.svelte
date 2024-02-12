<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Fragment from '../../components/node/templates/Fragment.svelte';
  import Document from './document.svelte.md';

  const { mode, metadata } = getNodeContext('evergreen-broth');
</script>

<Fragment
  name={metadata.title}
  { mode }
>
  <Document />
</Fragment>

<style>
</style>
