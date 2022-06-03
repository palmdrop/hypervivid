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

</style>