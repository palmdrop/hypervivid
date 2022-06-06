
<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import links from './data.json';
  const { name, metadata } = getNodeContext('links');

  type Category = typeof links[number]['category'];
  type Link = typeof links[number];

  const linkSections = links.reduce((acc, current) => {
    const category = current.category;
    if(!acc[category]) acc[category] = [];
    acc[category].push(current);
    return acc;
  }, {} as Record<Category, Link[]>)
  /*
    Table of links, title, description, category, time, all in its own cell
    When filtering, just "hide" all other nodes?
    */

  const urlRegex = /https?:\/\/(www\.)?([-a-zA-Z0-9@:%._\+~#=]+\.[a-zA-Z0-9()]+)\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const parseUrl = (url: string) => {
    const match = url.match(urlRegex);
    console.log(match);
    return match && match[2];
  }
</script>

<div class="node">
  <h1>
    Hyperlinks
  </h1>
  <Paragraph big>
    This is a set of links to places I've encountered 
    while exploring the web. View this as my personal set of (public) bookmarks.
  </Paragraph>

  <table>
    <tbody>
      {#each [...links].reverse() as link, i }
        <tr>
          <td class="name">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </td>
          <td class="categories">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {[link.category, ...link.additionalCategories].join(', ')}
            </a>
          </td>
          <td class="site">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {parseUrl(link.url)}
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .node {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    font-size: 1.3rem;
  }

  table {
    margin-bottom: 1em;

    border-collapse: collapse;
  }

  a {
    display: block;
    padding: 0.8em 0.5em;
    color: inherit;
    text-decoration: none;
  }

  tr {
    border-bottom: var(--borderSoft);
  }

  tr, td {
    transition: 0.3s;
  }

  tr:hover > td {
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);
  }

  .categories {
    font-family: var(--fDisplay);
    text-transform: uppercase;
  }

  .categories > a {
    opacity: 0.3;
  }

  .site {
    display: none;
  }


  @media ( min-width: 700px )  {
    .site {
      display: block;
    }
  }
</style>
  