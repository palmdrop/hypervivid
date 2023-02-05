<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Link from '../../components/common/Link.svelte';
  import BlogPost from '../../components/node/templates/BlogPost.svelte';
  import Document from './document.svelte.md';
  const { name, metadata } = getNodeContext('substrate-catalogue');

</script>

<BlogPost
  { name }
  showImageFromMetadata={false}
>
  <Document />
  <div class="catalogue-container">
    <p>
      <Link 
        href="https://palmdrop.github.io/catalogue"
        newTab
      >
        visit palmdrop.github.io/catalogue
      </Link>
    </p>
    <iframe
      src="https://palmdrop.github.io/catalogue"
      title={metadata.title ?? name}
    >
    </iframe>
  </div>
</BlogPost>

<style>
  .catalogue-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1em 0em;
  }

  iframe {
    width: 1500px;
    max-width: 100vw;
    max-height: 1500px;
    aspect-ratio: 2/3;

    border: 20px solid var(--cFg);
    border-radius: 50px;

    box-shadow: 0px 0px 20px var(--cFg);
  }

  p {
    padding-top: 2em;
    padding-bottom: 2em;
  }
</style>
