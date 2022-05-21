
  <script lang="ts">
    import Paragraph from '$components/text/Paragraph.svelte';
    import { getNodeContext } from '$utils/useNodeContext';
    const { name, metadata } = getNodeContext('about');

  </script>

  <section class="about">
    <img
      src='/img/connections/connections2.jpg'
      alt=''
    />
    <div class="content">
      <h1>
        About
      </h1>
      <Paragraph>
        I'm Anton. Or palmdrop, if you prefer. This page is my personal mindspace, here to let me post anything: 
        text, pictures, generative art, experiments, cringe, political satire, poetry, trash recepies, GPU-frying 3D sketches, etc. 
      </Paragraph>
      <Paragraph>
        This is a public graph of my mind. 
      </Paragraph>
      <Paragraph>
        Most things on this page is a "node". Node, as in a point in a mathy graph. You get it. Nodes are connected. Nodes have tags. 
        The core idea for this page is 1. to enable me to post anything, without restriction, unbound by authoratative page categories, and 2. 
        to encourage a ludic web interaction, exploration, play even.
      </Paragraph>
      <Paragraph>
        Dispite my playful and unquestionably funny way of writing, I want to encourage sinserity. I want a free and open internet. 
        I want to avoid irony poisoning. I want to help bring forth a better internet and a better world. 
      </Paragraph>
    </div>
  </section>

  <style>
    .about {
      display: flex;
      flex-direction: column;
      justify-content: center;

      overflow-x: hidden;
    }

    img {
      object-fit: cover;
      max-height: 300px;
      width: calc(100vw);

      margin: 0px;
    }

    .content {
      margin: 5px;
    }

    br {
      border: 1px solid black;
      width: 10px;
      height: 1px;
    }

    @media ( min-width: 900px )  {
      .about {
        flex-direction: row-reverse;
        margin: 1em;
      }

      img {
        max-width: 500px;
        max-height: unset;
        border-radius: 15px;
      }
    }
  </style>
  