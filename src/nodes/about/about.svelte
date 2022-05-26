<script lang="ts">
  import Link from '$components/common/Link.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';
import { scrollIntoView } from '$utils/scrollIntoView';
  import { getNodeContext } from '$utils/useNodeContext';

  const links = [
    {
      text: 'contact',
      onClick: () => scrollIntoView('contact')
    },
    {
      // href: '/nodes/credits',
      text: 'credits',
      onClick: () => scrollIntoView('credits')
    },
    {
      href: '/nodes/manifest',
      text: 'manifest'
    },
  ] as {
    href?: string,
    text: string,
    onClick?: (event: Event) => void
  }[];
</script>

<div class="node">
  <section class="about">
    <div class="img-container">
      <img
        src='/img/connections/connections1.jpg'
        alt=''
      />
    </div>
    <h1>
      About
    </h1>
    <ul class="links">
      {#each links as link, i (link.text)}
        <li>
          <Link 
            href={link.href} 
            onClick={link.onClick}
            big 
            newTab 
            decorated 
            underline={false}
            omitBorder={i === links.length - 1 ? 'right' : undefined}
          >
            {link.text}
          </Link>
        </li>
      {/each}
    </ul>
    <div class="content">
      <!--TODO: Move a lot of this to manifest page-->
      <Paragraph wide big>
        I'm Anton, or palmdrop. I dabble in digital and generative art, creative writing, and occasional photography. This page is my personal mindspace, here to let me post anything: 
        text, pictures, generative art, experiments, cringe, political satire, poetry, trash recepies, GPU-frying 3D sketches, etc. 
      </Paragraph>
      <Paragraph wide big>
        This is a public graph of my mind. 
      </Paragraph>
      <Paragraph wide big>
        Most things on this page is a "node". Node, as in a point in a mathy graph. You get it. Nodes are connected. Nodes have tags. 
        The core idea for this page is 1. to enable me to post anything, without restriction, unbound by authoratative page categories, and 2. 
        to encourage a ludic web interaction, exploration, and play.
      </Paragraph>
      <Paragraph wide big>
        I want to encourage sinserity. I want a free and open internet. 
        I want to avoid irony poisoning. I want to help bring forth a better internet and a better world. I want to create and share things of beauty and fascination.
      </Paragraph>
      <Paragraph wide big>
        Read more about the idea behind this webspace on the <Link href='/nodes/manifest' newTab bold>manifest page</Link>.
      </Paragraph>
    </div>
  </section>
  <section class='info'>
    <div class='content'>
      <Paragraph wide big>
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
    </div>
  </section>
  <section class='credits'>
    <div class='content'>
      <Paragraph 
        wide 
        big
      >
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
  <section class='contact'>
    <Paragraph big bold>
      Contact me
    </Paragraph> 
    <form class='contact-form'>
      <div class='form-item'>
        <label for='email-input'>
          Email
        </label>
        <input type='email' id='email-input'/>
      </div>
      <div class='form-item'>
        <label for='message-input'>
          Message
        </label>
        <textarea type='text' id='message-input'/>
      </div>

    </form>
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

    /* max-width: 1000px; */
    width: clamp(300px, 100%, 1000px);

    border: var(--borderPrimary);
    border-bottom: none;
    border-top: none;
  }

  .links {
    display: flex;
  }

  .links li {
    width: 100%;
    height: clamp(20px, 3.5vh, 2em);

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

    border-bottom: var(--borderPrimary);
    border-top: var(--borderPrimary);
  }

  .content {
    border-top: var(--borderPrimary);
    padding: clamp(10px, 3vw, 2em);
  }

  .point-list li {
    list-style-type: disc;
    list-style-position: inside;

    padding-left: 1em;
    padding-bottom: 1em;

    font-size: clamp(1rem, 3vw, 30px);
  }

  .contact {
    width: 100vw;
    border-top: var(--borderPrimary);

    padding: 15px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
  }

  @media ( min-width: 700px )  {
    .form-item:not(:last-child) {
    }

  }

  .form-item {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  form {
  }

  input, textarea {
    border: none;
    outline: none;
    resize: none;

    margin: 0.5em 0.0em;

    border: var(--borderPrimary);
    border-radius: var(--borderRadius1);

    padding: 0.5em;
    padding-left: 1rem;

    background-color: unset;
  }

  input[type=email] {
    font: var(--fMono);
  }

  textarea {
    height: 100px;

    font-size: 1rem;
  }
</style>
