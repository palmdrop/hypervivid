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

  const tools = [
    {
      text: 'SvelteKit',
      href: 'https://kit.svelte.dev/'
    },
    {
      text: 'Three.js',
      href: 'https://threejs.org/',
    }
  ];

  const notes = [
    'No tracking, cookies or analytics.',
    'Built using only free and open software.',
    'Hosted on cloudflare pages.',
    'Always a work in progress'
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
        I'm Anton, or palmdrop. This is my personal webspace. I made this place for sharing digital art, writing, occasional photography,  
        links, whatever. The site has an experimental structure to accomodate any interlinked content: text, image, generative art, random experiments,
        memes, poetry, trash recepies, GPU-frying 3D sketches, etc, all linked together as nodes.
      </Paragraph>
      <Paragraph wide big>
        Building things help me think.
      </Paragraph>
      <Paragraph wide big>
        Most pages and components are "nodes". Nodes may be connected. Press the bottom "metadata" tab to find out. 
        Nodes have tags. This may help you find the content you are looking for, but I encourage you to just follow the metadata links.
      </Paragraph>
      <Paragraph wide big>
        The core idea of this page is to 
        <div class='ideas'>
          <PointList
            items={[
              'make it possible to post anything without artifical restriction by limiting site structure,',
              'and to encourage ludic web interaction, exploration and play.'
            ]}
            let:item
          >
            { item }
          </PointList>
        </div>
      </Paragraph>
      <Paragraph wide big>
        Read more about the idea behind this webspace on the <Link href='/nodes/manifest' newTab>manifest page</Link>.
      </Paragraph>
    </div>
  </section>
  <section class='info'>
    <div class='content'>
      <h2>
        MORE ABOUT THIS SITE
      </h2>
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
      <h2>
        CREDITS
      </h2>
      <h3>
        FONTS
      </h3>
      <!-- TODO: autogenerate this list based on fonts in theme.css -->
      <PointList
        items={fonts}
        let:item
      >
        <Link href={item.href} newTab>{ item.text }</Link>
      </PointList>
      <h3>
        TOOLS
      </h3>
      <PointList
        items={tools}
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

  .ideas {
    padding-left: 1em;
    padding-top: 0.5em;
  }

  h2 {
    font-size: 3.0rem;
    padding-bottom: 0.5em;
  }

  h3 {
    font-family: var(--fRegular);
    font-size: 1.4rem;
    padding-bottom: 1.0em;
    text-align: left;
  }

  h3:last-of-type {
    padding-top: 1em;
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
    margin-top: -1px;
  }

  img {
    object-fit: cover;
    height: 300px;
    width: 100%;

    position: relative;
    margin: 0;
    padding: 0;

    border-radius: var(--borderRadius1);
  }

  .img-container {
    margin: 0;
    padding: 0;
    height: 301px;

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
