<script lang="ts">
  import Link from '$components/common/Link.svelte';
  import Paragraph from '$components/common/Paragraph.svelte';
  import PointList from '$components/list/PointList.svelte';
  import Node from '$components/node/Node.svelte';
  import Moons from '$nodes/moons/moons.svelte';
  
  const fonts = [
    {
      text: 'Gulax by Morgan Gilbert (VELVETYNE)',
      href: 'https://velvetyne.fr/fonts/gulax/',
    },
    {
      text: 'Fengardo Neue by Loïc Sander (VELVETYNE)',
      href: 'https://velvetyne.fr/fonts/fengardo-neue/'
    },
    {
      text: 'Syne typeface by Bonjour Monde',
      href: 'https://gitlab.com/bonjour-monde/fonderie/syne-typeface'
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
    'Hosted on Cloudflare pages.',
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
      text: 'palmdrop.github.io',
      href: 'https://palmdrop.github.io',
    },
    {
      text: 'tilde.town',
      href: 'https://tilde.town/~palmdrop'
    },
    {
      text: 'are.na',
      href: 'https://www.are.na/palm-drop'
    },
    {
      text: 'obscured (old site)',
      href: 'https://webspace.pages.dev/'
    }
  ];

  const links = [
    {
      text: 'contact',
      href: '#contact',
      newTab: false
    },
    {
      text: 'credits',
      href: '#credits',
      newTab: false
    },
    {
      text: 'manifesto',
      href: '/nodes/manifesto',
      newTab: true
    },
  ];
</script>

<div class="node">
  <section class="about">
    <div class="img-container">
      <img
        src='/nodes/about.preview.jpg'
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
            big 
            newTab={link.newTab}
            decorated 
            underline={false}
            omitBorder={
              i === links.length - 1 ? 
                'right' : 
                undefined
            }
            showTooltipOnHover={false}
          >
            {link.text}
          </Link>
        </li>
      {/each}
    </ul>
    <div class="content intro">
      <Paragraph wide big>
        I'm Anton, or palmdrop, a Swedish developer and digital artist. This site is multipurpose — it's made for sharing digital art, 
        writing, photography, links, whatever. The site has an experimental structure to accommodate any interlinked content-type: text, image, generative art, random experiments,
        memes, poetry, trash recipes, GPU-frying 3D sketches, and so on, all linked together as <Link href='/nodes' newTab>nodes</Link>.
      </Paragraph>
      <Paragraph wide big>
        Node, as in an interconnected point in a graph. 
        <Link href='https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)' newTab>This kind of graph.</Link>
        Press the bottom "metadata" tab to examine the links. 
        Nodes also have tags, which may help you find what you are looking for. But I doubt you are searching for anything in particular. 
        Just follow the links, explore some paths.
      </Paragraph>
      <Paragraph wide big>
        <Link href='/nodes' newTab>Or start by browsing all nodes.</Link> If you like, follow the <Link href='/rss.xml' newTab>rss feed.</Link>
      </Paragraph>
      <Paragraph wide big>
        The core idea of this page is to 
        <div class='ideas'>
          <PointList
            items={[
              'take control over a small slice of the web,',
              'make it possible to post anything without restriction from limiting site structure,',
              'enable new connections, paths, and map-making, ',
              'encourage ludic web interaction, exploration and play,',
              'and search for a more intimate digital landscape.'
            ]}
            let:item
          >
            { item }
          </PointList>
        </div>
      </Paragraph>
      <Paragraph wide big>
        Also, read the <Link href='/nodes/manifesto' newTab>manifesto page</Link>.
      </Paragraph>
      <Paragraph wide big>
        If you miss my old site, it can be found <Link href='https://webspace.pages.dev/' newTab>here</Link>, at least for a while.
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
  <section class='credits' id="credits">
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
  <section class='contact' id="contact">
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
    font-size: clamp(2rem, 15vw, 3rem);
    padding-bottom: 0.5em;
  }

  h3 {
    font-family: var(--fRegular);
    font-size: clamp(1.2rem, 15vw, 1.4rem);
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

    padding-top: 2.0em;

    width: clamp(300px, 100%, 1100px);

    border: var(--borderPrimary);
    border-bottom: none;
    border-top: none;
  }

  .links {
    display: flex;
    align-items: stretch;
    height: 1.7em;
  }

  .links li {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: -1px;
  }

  img {
    object-fit: cover;
    height: 30vh;
    max-height: 400px;
    width: 100%;

    position: relative;
    margin: 0;
    padding: 0;
  }

  .img-container {
    margin: 0;
    padding: 0;
    height: calc(30vh + 2px);
    max-height: 401px;

    border-bottom: var(--borderPrimary);
    border-top: var(--borderPrimary);
    margin-bottom: 1px;
  }

  .content {
    border-top: var(--borderPrimary);
    padding: clamp(10px, 3vw, 2em);
  }

  .intro {
    border-top: unset;
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
