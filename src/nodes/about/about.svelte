
  <script lang="ts">
import Paragraph from '$components/text/Paragraph.svelte';

    import { getNodeContext } from '$utils/useNodeContext';
    const { name, metadata } = getNodeContext('about');

  </script>

  <div class="about">
    <img
      src='/img/connections/connections2.jpg'
      alt=''
      width={300}
      height={300}
    />
    <Paragraph>
      My name is Anton. On the internet, I usually call myself "Palmdrop".
      This is my experimental webspace. I made this site to have somewhere to place my digital art, scattered thoughts, web experiments, photographs, whatever.
    </Paragraph>
    <Paragraph>
      This is a public graph of my mind. 
    </Paragraph>
  </div>

  <style>
    .about {

    }

    img {
      object-fit: cover;
      max-width: 700px;
    }
  </style>
  