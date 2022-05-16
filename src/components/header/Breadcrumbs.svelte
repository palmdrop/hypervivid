<script lang="ts">
  // based on https://df.id.au/technical/svelte/breadcrumbs/
	import { page } from '$app/stores';

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
    margin-left: 0.5em;
  }

  li {
    display: flex;

    min-width: 20px;
    padding: 0.5em;
    border-radius: 25px;

    box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.2);
  }

  a, span {
    padding: 0em 0.8em;
    opacity: 0.7;
  }

  a {
    width: 0px;
    opacity: 0;
  }
</style>
