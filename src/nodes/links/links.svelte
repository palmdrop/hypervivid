
<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import ExternalLink from '../../components/common/ExternalLink.svelte';
  import links from './data.json';

  const urlRegex = /https?:\/\/(www\.)?([-a-zA-Z0-9@:%._\+~#=]+\.[a-zA-Z0-9()]+)\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const parseUrl = (url: string) => {
    const match = url.match(urlRegex);
    return match && match[2];
  }

  const parseDescription = (description: string) => {
    if(!description) return [];

    const startsWithQuote = description.trim().startsWith("\"");
    return description.split("\"").map((text, index) => ({
      text, 
      emphazised: (startsWithQuote && index % 2 == 0) || (!startsWithQuote && index % 2 == 1)
    }));
  }
</script>

<div class="node">
  <h1>
    Hyperlinks
  </h1>
  <div class="node-description">
    <Paragraph big>
      A collection of links to places and people I've encountered on the web. A set of personal (public) bookmarks.
    </Paragraph>
    <Paragraph big>
      While not a traditional <ExternalLink href="https://en.wikipedia.org/wiki/Webring">webring</ExternalLink>, I think we should preserve the tradition of sharing the things we find and enjoy on the internet. Exploring the "small internet" is diffcult without a net of links, branching outwards.
    </Paragraph>
  </div>

  <table>
    <tbody>
      {#each [...links].reverse() as link (link) }
        <tr>
          <td class="name">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span>{link.text}</span>
              <span>{parseUrl(link.url)}</span>
            </a>
          </td>
          <td class="description">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              { #each parseDescription(link.description) as { text, emphazised }, i (i) }
                { #if emphazised } 
                  <em>"{ text }"</em>
                { :else }
                  <span>{ text }</span>
                { /if }
              { /each }
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
  }

  .node-description {
    padding: 1em;
  }

  h1 {
    padding-top: 1rem;
  }

  table {
    margin-bottom: 1em;
    border-collapse: collapse;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 1.2em;
  }

  @media ( min-width: 500px )  {
    a {
      padding: 2.2em;
    }
  }
  .name a {
    display: flex;
    flex-direction: column;
  }

  .name a span:nth-child(2) {
    font-family: var(--fItalic);
    opacity: 0.5;
    padding-top: 0.5em;
  }

  tr {
    box-shadow: 0px 0px 0px transparent;
  }

  tr:hover {
    background-color: var(--cBgBright);
    box-shadow: var(--hoverShadow);
  }

  tr, td {
    transition: 0.2s;
    border: var(--borderSoft);
    max-width: 50vw;
  }

  .description {
    width: 35vw;
    max-width: 50ch;
  }

</style>
  