<script lang="ts">
  import Link from '$components/common/Link.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';
  import PointList from '$components/list/PointList.svelte';
  import { scrollIntoView } from '$utils/scrollIntoView';
  import Node from '$components/node/Node.svelte';
  import Moons from '$nodes/moons/moons.svelte';
  
  const fonts = [
    {
      text: 'Syne typeface by Bonjour Monde',
      href: 'https://gitlab.com/bonjour-monde/fonderie/syne-typeface'
    },
    {
      text: 'Gulax by Morgan Gilbert (VELVETYNE)',
      href: 'https://velvetyne.fr/fonts/gulax/',
    },
    {
      text: 'Space Grotesk by Květoslav Bartoš (Florian Karsten Typefaces)',
      href: 'https://fonts.floriankarsten.com/space-grotesk'
    }
  ];

  const notes = [
    'None of your data is tracked. There are no cookies or analytics.',
    'This page is built using only free and open software.',
    'The page is hosted on cloudflare pages. A "good coorporation" is an oxymoron, but they at least seem to care the most about a free and open internet.',
    'This page is always a work in progress'
  ];

  const elsewhere = [
    {
      text: 'instagram',
      href: 'https://instagram.com/palmdrop'
    },
    {
      text: 'github',
      href: 'https://github.com/palmdrop',
    },
    {
      text: 'palmdrop.github.io/',
      href: 'https://palmdrop.github.io',
    },
    {
      text: 'tilde.town',
      href: 'https://tilde.town/~palmdrop'
    },
    {
      text: 'are.na',
      href: 'https://www.are.na/palm-drop'
    }
  ];

  const links = [
    {
      text: 'contact',
      onClick: () => scrollIntoView('contact')
    },
    {
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
            omitBorder={
              i === 0 ? 
                'left' :
                i === links.length - 1 ? 
                  'right' : 
                  undefined
            }
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
        Read more about the idea behind this webspace on the <Link href='/nodes/manifest' newTab>manifest page</Link>.
      </Paragraph>
    </div>
  </section>
  <section class='info'>
    <div class='content'>
      <Paragraph big >
        NOTES
      </Paragraph>
      <PointList 
        items={notes}
        let:item
      >
        { item }
      </PointList>
      <Paragraph
        big 
      >
        <Link href='https://github.com/palmdrop/hypervivid'>
          Check out the github repository.
        </Link>
      </Paragraph>
    </div>
  </section>
  <section class='credits'>
    <div class='content'>
      <Paragraph 
        wide 
        big
      >
        FONTS
      </Paragraph>
      <!-- TODO: autogenerate this list based on fonts in theme.css -->
      <PointList
        items={fonts}
        let:item
      >
        <Link href={item.href} newTab>{ item.text }</Link>
      </PointList>
    </div>
  </section>
  <section class='contact'>
    <div class='contact-piece'>
      <Node name='contact' mode='inline' />
    </div>
    <Node name='moons' mode='inline' fromSlot={true}>
      <Moons 
        direction='horizontal' 
        alternativeDirection='vertical'
        breakpoint={1000}
      />
    </Node>
    <div class='contact-piece'>
      <div>
        <Paragraph big>
          YOU MAY ALSO FIND ME AT
        </Paragraph>
        <PointList
          items={elsewhere}
          let:item
        >
          <Link href={item.href} newTab>{ item.text }</Link>
        </PointList>
      </div>
    </div>
  </section>
</div>

<style>
  .node {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow-x: hidden;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow: hidden;

    width: clamp(300px, 100%, 1100px);

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

  .contact {
    width: 100vw;
    border: var(--borderPrimary);

    padding: 15px;

    display: flex;
    flex-direction: column;
  }

  .contact-piece {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5em 5px;
  }

  @media ( min-width: 1000px )  {
    .contact {
      flex-direction: row;
      justify-content: center;
    }

    .contact-piece {
      padding: 2em;
      align-items: unset;
    }
  }
</style>
