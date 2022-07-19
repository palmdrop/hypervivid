<script lang="ts">
	import type { Link } from '$types/nodes';

  export let links: Link[];

  export let formatLink: (link: Link) => string 
    = (link: Link) => `${ link.to } - "${ link.kind }"`;
  
  $: formattedLinks = links.map(link => formatLink(link));
</script>

<div>
{#if links.length}
  <ul>
    {#each links as link, i (link)}
      <li>
        <a
          href={`/nodes/${link.to}`}
        >
          { formattedLinks[i] }
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <slot />
{/if}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }

  li {
    padding-right: 0.5em;
    padding-bottom: 0.5em;

    text-align: left;
  }
</style>

