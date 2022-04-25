<script context="module" lang="ts">
  /** @type {import('./index.svelte').Load} */
  export async function load ({ params }) {
    const imports = import.meta.globEager('../../nodes/*.svelte');
    const { slug } = params;

    const path = `../../nodes/${slug}.svelte`;

    if(path in imports) {
      const node = imports[path].default;
      return {
        props: {
          slug,
          node
        }
      }
    } else {
      return {
        status: 302,
        redirect: '/'
      }
    }
  }
</script>

<script lang="ts">
  import type { SvelteComponent } from "svelte";
  export let slug: string;
  export let node: SvelteComponent;
</script>

<div>{slug}</div>

<svelte:component this={node} />

<style>
</style>
