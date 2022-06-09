<script context="module">
	import p from './../components/common/ParagraphLarge.svelte';

  export { p };
</script>

<div class="markdown-container">
  <slot />
</div>

<style global>
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
</style>