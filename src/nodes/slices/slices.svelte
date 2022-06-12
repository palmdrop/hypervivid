<script lang="ts">
	import { getNodeContext } from '$utils/useNodeContext';

  const { name, metadata } = getNodeContext('slices');
</script>

<iframe
  src="https://palmdrop.github.io/slices"
  title={metadata.title ?? name}
/>

<style>
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>