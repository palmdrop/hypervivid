
<script lang="ts">
  import Link from '$components/common/Link.svelte';
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
    <thead>
      <tr>
        <th>
        </th>
        <th>
          name
        </th>
        <th>
          categories
        </th>
        <th>
          site
        </th>
      </tr>
    </thead>
    <tbody>
      {#each [...links].reverse() as link, i }
        <tr>
          <td>
            <a href={link.url} rel="noopener noreferrer">
              {i}
            </a>
          </td>
          <td>
            <a href={link.url} rel="noopener noreferrer">
              {link.text}
            </a>
          </td>
          <td>
            <a href={link.url} rel="noopener noreferrer">
              {[link.category, ...link.additionalCategories].join(', ')}
            </a>
          </td>
          <td>
            <a href={link.url} rel="noopener noreferrer">
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
    border: var(--borderPrimary);
    margin-bottom: 1em;

    border-collapse: collapse;
  }

  th {
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);

    font-family: var(--fMono);
    text-transform: uppercase;
  }

  a {
    display: block;
    padding: 0.2em 0.0em;
  }

  th, td {
    text-align: left;
    padding: 0em 0.3em;
  }

  td:first-child {
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);
    text-align: center;
    font-family: var(--fMono);
  }

  td:first-child > a {
    color: var(--cFgInverted);
  }

  td {
    border-top: var(--borderPrimary);
  }
</style>
  