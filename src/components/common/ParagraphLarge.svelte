<script lang="ts">
  import Paragraph from "./Paragraph.svelte";

  export let style = "";
</script>

<Paragraph wide big { style }>
  <slot />
</Paragraph>