<script lang="ts">
  import { getNodeContext } from "$utils/useNodeContext";
  const { name, metadata } = getNodeContext('manifesto');

  import Document from './document.svelte.md';
</script>

<div class="node">
  <Document />
</div>

<style>
  .node {
    max-width: 1000px;
    margin: auto;
    padding: 0.5em;

    border: var(--borderPrimary);

    text-align: justify;
  }
</style>
