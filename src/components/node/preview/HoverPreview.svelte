<script lang="ts">
  import { NODE_NAMES } from "../../../constants";
  import { metadata$ } from "../../../stores/metadata";
  import type { NodeName } from "../../../types/nodes";
  import { page } from "$app/stores";

  export let nodeName: NodeName;

  $: metadata = $metadata$.nodes[nodeName];
</script>

<div class="hover-preview">
  <h1>
    {metadata.title}
  </h1>
  <p>
    {metadata.description}
  </p>
</div>

<style>
  h1 {
    font-size: 1.5rem;
    padding-bottom: 0.4em;
    text-align: left;
    font-family: var(--fItalic);
    text-transform: lowercase;
    text-decoration: underline;
  }

  .hover-preview {
    max-width: 400px;
    height: 100%;
    padding: 0.2em;
  }
</style>