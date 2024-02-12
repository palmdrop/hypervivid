<script lang="ts" context="module">
  import p from '../components/common/ParagraphLarge.svelte';
  import a from '../components/common/ExternalLink.svelte';

  export { p, a };
</script>

<div class="markdown-container">
  <slot />
</div>

<style global>
  .markdown-container h1, 
  .markdown-container h2,
  .markdown-container h3,
  .markdown-container h4,
  .markdown-container h5 {
    padding-top: 0.5em;
  }

  .markdown-container h2 {
    font-size: 3rem;
    padding-bottom: 1rem;
    padding-top: 2rem;
  }

  .markdown-container a {
    text-decoration: underline;
  }

  .markdown-container img {
    width: 100%;
  }

  .markdown-container ul {
    list-style: disc;
    list-style-position: inside;

    font-size: var(--fontSizeLarge);
    font-family: var(--fRegular);
  }

  .markdown-container li {
    padding-bottom: 1.0em;
  }

  .markdown-container hr {
    border: unset;
    margin-top: 1.5em;
    margin-bottom: 5em;
  }

  .markdown-container hr::after {
    position: absolute;
    box-sizing: border-box;
    content: "***";
    font-size: 2em;
    left: 50%;
    transform: translate(-50%);
  }
</style>