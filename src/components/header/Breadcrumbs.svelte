<script lang="ts">
  // based on https://df.id.au/technical/svelte/breadcrumbs/

	import { page } from '$app/stores';
import Point from '$components/ornaments/Point.svelte';

  export let showHome: boolean = false;
  export let homeName: string = 'index';

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

    if(showHome) {
      crumbs.unshift({
        text: homeName,
        path: '/'
      });
    }
  }
</script>

<ol>
  {#each crumbs as crumb, i (crumb.path)}
    <li>
      {#if i !== 0} 
        {":"}
      {/if}
      {#if i < (crumbs.length - 1)}
        <a
          href={crumb.path}
        >
          { crumb.text }
        </a> 
      {:else}
        <span>
          { crumb.text }
        </span> 
      {/if}
    </li>
  {/each}
</ol>

<style>
  ol {
    display: flex;
  }

  li {
    display: flex;
  }

  a, span {
    padding: 0em 0.8em;
  }
</style>
