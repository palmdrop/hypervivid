<script lang="ts">
  import Link from '$components/common/Link.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';
  import { getNodeContext } from '$utils/useNodeContext';

  const links = [
    {
      href: '/nodes/contact',
      text: 'contact'
    },
    {
      href: '/nodes/manifest',
      text: 'manifest'
    },
    {
      href: '/nodes/credits',
      text: 'credits'
    }
  ];
</script>

<div class="node">
  <section class="about">
    <div class="img-container">
      <img
        src='/img/connections/connections1.jpg'
        alt=''
      />
    </div>
    <div class="content">
      <h1>
        About
      </h1>
      <ul class="links">
        {#each links as link (link.text)}
          <li>
            <Link href={link.href} newTab bold>{link.text}</Link>
          </li>
        {/each}
      </ul>
      <!--TODO: Move a lot of this to manifest page-->
      <Paragraph wide>
        I'm Anton, or palmdrop. I dabble in digital and generative art, creative writing, and occasional photography. This page is my personal mindspace, here to let me post anything: 
        text, pictures, generative art, experiments, cringe, political satire, poetry, trash recepies, GPU-frying 3D sketches, etc. 
      </Paragraph>
      <Paragraph wide>
        This is a public graph of my mind. 
      </Paragraph>
      <Paragraph wide>
        Most things on this page is a "node". Node, as in a point in a mathy graph. You get it. Nodes are connected. Nodes have tags. 
        The core idea for this page is 1. to enable me to post anything, without restriction, unbound by authoratative page categories, and 2. 
        to encourage a ludic web interaction, exploration, and play.
      </Paragraph>
      <Paragraph wide>
        I want to encourage sinserity. I want a free and open internet. 
        I want to avoid irony poisoning. I want to help bring forth a better internet and a better world. I want to create and share things of beauty and fascination.
      </Paragraph>
      <Paragraph wide>
        Read more about the idea behind this webspace on the <Link href='/nodes/manifest' newTab bold>manifest page</Link>.
      </Paragraph>
    </div>
  </section>
  <section class='info'>
    <div class="img-container">
      <img
        src='/img/connections/connections2.jpg'
        alt=''
      />
    </div>
    <div class='content'>
      <Paragraph wide>
        Some important notes about this place:
      </Paragraph>
      <ul class="point-list">
        <li>
          None of your data is tracked. There are no cookies or analytics.
        </li>
        <li>
          This page is built using only free and open software. <Link href='https://github.com/palmdrop/hypervivid' newTab bold>Check out the github repository</Link>.
        </li>
        <li>
          The page is hosted on cloudflare pages. A "good coorporation" is an oxymoron, but they at least seem to care the most about a free and open internet.
        </li>
      </ul>
      <Paragraph wide>
        Fonts used:
      </Paragraph>
      <!-- TODO: autogenerate this list based on fonts in theme.css -->
      <ul class="point-list">
        <li>
          <Link href="https://gitlab.com/bonjour-monde/fonderie/syne-typeface" newTab>Syne typeface by Bonjour Monde</Link>
        </li>
        <li>
          <Link href='https://velvetyne.fr/fonts/gulax/' newTab>Gulax by Morgan Gilbert (VELVETYNE)</Link>
        </li>
        <li>
          <Link href='https://fonts.floriankarsten.com/space-grotesk' newTab>Space Grotesk by Květoslav Bartoš (Florian Karsten Typefaces)</Link>
        </li>
      </ul>
    </div>
  </section>
</div>

<style>
  .node {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow: hidden;

    max-width: 900px;

    border: var(--borderPrimary);
    margin-top: -1px;
  }

  .links {
    display: flex;
    padding-bottom: 1em;

    margin-right: -11px;
    margin-left: -10px;
  }

  .links li {
    border: 1px solid black;
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: -1px;
  }

  img {
    object-fit: cover;
    max-height: 300px;
    width: 100%;

    position: relative;
    margin: 0;
    padding: 0;

    border-radius: var(--borderRadius1);
  }

  .img-container {
    margin: 0;
    padding: 0;
    height: 300px;
  }

  .content {
    border-top: var(--borderPrimary);
    padding: 10px;
  }

  .point-list li {
    list-style-type: disc;
    list-style-position: inside;

    padding-left: 1em;
    padding-bottom: 1em;
  }

  /*
  @media ( min-width: 900px )  {
    .about {
      flex-direction: row-reverse;
      margin: 1em;
    }

    .info {
      flex-direction: row;
    }

    .content {
      max-width: 600px;
    }

    .img-container {
      border: var(--borderPrimary);
    }

    img {
      max-width: 600px;
      max-height: unset;
      height: 100%;

      border-radius: var(--borderRadius1);
    }
  }
  */
</style>
