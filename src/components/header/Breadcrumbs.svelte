<script lang="ts">
  // based on https://df.id.au/technical/svelte/breadcrumbs/

	import { page } from '$app/stores';

  type Crumb = {
    text: string,
    path: string
  };

  $: path = $page.url.pathname;

  let crumbs: Crumb[];
  $: {
    const tokens = path
      .split('/')
      .filter(token => token.length);
    
    let crumbPath = '';

    crumbs = tokens.map(token => {
      crumbPath += `/${token}`;
      return {
        text: token,
        path: crumbPath
      }
    });

    crumbs.unshift({
      text: 'index',
      path: '/'
    });
  }
</script>

<ol>
  {#each crumbs as crumb, i (crumb.path)}
    <li>
      {#if i !== 0} 
        {">"}
      {/if}
      <a
        href={crumb.path}
      >
        {crumb.text}
      </a> 
    </li>
  {/each}
</ol>

<style>
  ol {
    display: flex;
  }

  li {
    padding-left: 0.4em;
  }

  a {
    padding: 0em 0.1em;
  }
</style>
