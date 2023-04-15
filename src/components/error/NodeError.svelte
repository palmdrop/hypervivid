<script lang="ts">
  import type { Writable } from "svelte/store";
import Link from "../common/Link.svelte";
import Paragraph from "../common/Paragraph.svelte";
  export let error: Writable<ErrorEvent> | null = null;

  let env = typeof process !== 'undefined' && process.env && process.env.NODE_ENV;
  let dev = env !== 'production';

  $: {
    if(dev && error && $error) {
      console.error($error);
    }
  }
</script>

{#if $error}
  <div class="error-message">
    <Paragraph big center wide>
      Error: node failed to load. If the problem persist, please <Link href="/nodes/contact">contact me.</Link>
    </Paragraph>
    <Paragraph big center wide>
      <Link href="/nodes" showTooltipOnHover={false}>Go back</Link>
    </Paragraph>
  </div>
{:else}
  <slot />
{/if}

<style>
  .error-message {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
