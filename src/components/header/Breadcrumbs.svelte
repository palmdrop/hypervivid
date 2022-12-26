<script lang="ts">
  // based on https://df.id.au/technical/svelte/breadcrumbs/
	import { page } from '$app/stores';
  import { NODE_NAMES } from '$constants';

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
          <div class="link-text">
            { crumb.text === 'nodes' ? NODE_NAMES : crumb.text }
          </div>
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
    font-family: var(--fItalic);

    height: 100%;
  }

  li {
    display: flex;
  }

  a, span {
    min-width: 2.0em;
  }

  a {
    border-radius: var(--borderRadius2);
    box-shadow: var(--pillShadow);
    background-color: var(--cBgInverted);
    display: inline-block;

    position: relative;
  }

  a .link-text {
    visibility: hidden;

    position: absolute;
    top: 100%;
    left: -1px;

    padding: 0.5em;

    background-color: var(--cBg);
    border: var(--borderPrimary);

    z-index: 1;

    box-shadow: 0px 0.5em 1em #0003;
  }

  a:hover .link-text {
    visibility: visible;
  }

  span {
    box-sizing: border-box;
    border-left: var(--borderPrimary);
    border-right: var(--borderPrimary);

    max-width: 210px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    padding: 0.0em 0.5em;
    text-align: center;
    display: flex;
    align-items: center;
  }
</style>
