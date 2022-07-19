
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Fragment from '$components/node/templates/Fragment.svelte';
  import Document from './document.svelte.md';

  const { mode } = getNodeContext('less-flat');
</script>

<Fragment
  { mode }
>
  <Document />
</Fragment>

<style>
</style>
