<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Link from '../../components/common/Link.svelte';
  import ExternalIframe from '../../components/iframe/ExternalIframe.svelte';
  import BlogPost from '../../components/node/templates/BlogPost.svelte';
  import Document from './document.svelte.md';
  const { name, metadata } = getNodeContext('journal-artifacts');
</script>

<BlogPost
  { name }
  showImageFromMetadata={false}
>
  <Document />
  <div class="artifacts-container">
    <p>
      <Link 
        href="https://palmdrop.github.io/artifacts"
        newTab
      >
        visit palmdrop.github.io/artifacts
      </Link>
    </p>
    <ExternalIframe
      src="https://palmdrop.github.io/artifacts"
      title={metadata.title ?? name}
      width="500px"
      height="1000px"
      style="
        max-width: 100vw;
        max-height: 200vw;
      "
    />
  </div>
</BlogPost>

<style>
  .artifacts-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1em 0em;
  }

  p {
    padding-top: 2em;
    padding-bottom: 2em;
  }
</style>
