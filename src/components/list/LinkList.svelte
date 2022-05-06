<script lang="ts">
	import type { Link } from '$types/nodes';

  export let links: Link[];

  export let formatLink: (link: Link) => string 
    = (link: Link) => `${ link.to } - "${ link.kind }"`;

  
  $: formattedLinks = links.map(link => formatLink(link));
</script>

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

<style>
  li {
    padding-right: 0.5em;
    padding-bottom: 0.5em;
  }
</style>

