<script lang="ts">
  import { hyperwords } from "../../../nodes/hyper/hyper.svelte";
  import type { NavEntry } from "../../../types/general";
  import ExternalLink from "../../common/ExternalLink.svelte";
  import Link from "../../common/Link.svelte";
  import Paragraph from "../../common/Paragraph.svelte";

  const navEntries: NavEntry[] = [
    {
      path: '/nodes/contact',
      text: 'contact'
    },
    {
      path: '/nodes/about',
      text: 'about'
    },
    {
      path: '/nodes',
      text: 'nodes'
    }
  ];

  const links: NavEntry[] = [
    {
      path: 'https://github.com/palmdrop',
      text: 'github'
    },
    {
      path: 'https://instagram.com/palmdrop',
      text: 'instagram'
    },
    {
      path: 'https://www.are.na/palm-drop',
      text: 'are.na'
    },
  ];

  let hyperword: string;
  setInterval(() => {
    hyperword = hyperwords[Math.floor(Math.random() * hyperwords.length)];
  }, 200);
</script>

<footer>
  <div class="section">
    <h1>
      /// { hyperword ?? 'hypervivid' } ///
    </h1>
    <Paragraph>
      A mind map, generative garden, aimless web node. Created by 
      <ExternalLink 
        href="https://github.com/palmdrop"
      >
        palmdrop.
      </ExternalLink>
    </Paragraph>
    <Paragraph>
      This site does not store any cookies.
      <Link href="/nodes/about">
         Read more.
      </Link>
    </Paragraph>
  </div>
  <div class="section">
    <nav>
      <h1>
        /// in here ///
      </h1>
      <ul>
        {#each navEntries as { path, text }, i (path)}
          <li>
            <Link href={path}>
              {text} 
            </Link>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="section">
    <div>
      <h1>
        /// elsewhere ///
      </h1>
      <ul>
        {#each links as { path, text }, i (path)}
          <li>
            <Link href={path}>
              {text} 
            </Link>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    min-height: 100px;

    border-top: var(--borderPrimary);
    padding: 2em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 2em;
  }

  .section {
    padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .section:first-child {
    max-width: 40ch;
  }

  @media ( min-width: 600px )  {
    footer {
      flex-direction: row;
      padding: 2em 0em;
    }

    .section {
      width: 100%;
      padding: 0em 2em;
      align-items: center;
    }

    .section:first-child {
      align-items: flex-start;
    }
  }
  

  h1 {
    font-size: 1em;
    padding-bottom: 1em;
    font-family: var(--fItalic);

    text-transform: lowercase;
    text-align: left;
  }


  ul {
    text-align: left;
  }

  li {
    padding-bottom: 0.5em;
  }
</style>