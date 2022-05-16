<script lang="ts">
	import { slide } from 'svelte/transition';
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
    <li
    >
      {#if i < (crumbs.length - 1)}
        <a
          href={crumb.path}
        >
        <!--
          { crumb.text }
        -->
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
    font-family: var(--fMono);
  }

  li {
    display: flex;
  }

  a, span {
    min-width: 19px;
    padding: 0.5em;
  }

  a {
    border-radius: var(--borderRadius2);
    box-shadow: var(--pillShadow);
    background-color: var(--cBgInverted);
    display: inline-block;
  }

  span {
    margin: -1px;
    border: var(--borderPrimary);
  }
</style>
