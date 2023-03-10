<script lang="ts">
  import type { MovingImage } from '../../components/image/MovableImage.svelte';
  import TransformableImage from '../../components/image/TransformableImage.svelte';

  import bush1 from '../../assets/pieces/making-comfort/bush1.jpg';
  import bush2 from '../../assets/pieces/making-comfort/bush2.jpg';
  import flare1 from '../../assets/pieces/making-comfort/flare1.jpg';
  import flare2 from '../../assets/pieces/making-comfort/flare2.jpg';
  import flare3 from '../../assets/pieces/making-comfort/flare3.jpg';
  import flare4 from '../../assets/pieces/making-comfort/flare4.jpg';
  import graffiti from '../../assets/pieces/making-comfort/graffiti.jpg';
  import plants1 from '../../assets/pieces/making-comfort/plants1.jpg';
  import plants2 from '../../assets/pieces/making-comfort/plants2.jpg';
  import plants3 from '../../assets/pieces/making-comfort/plants3.jpg';
  import troll from '../../assets/pieces/making-comfort/troll.jpg';
  import MovableImage from '../../components/image/MovableImage.svelte';
  import { onMount } from 'svelte';

  const transitionTime = 3000;
  const timeBetweenTransforms = 4001;
  const textTransitionTime = 8000;
  const movingImages: MovingImage[] = [];

  const mainMovingImage: MovingImage = {
    x: 0,
    y: 0,
    scale: 1,
    url: flare3,
    transitionTime: 80 
  }

  const getRandomTranslation = (scale: number) => {
    return (Math.random() * 100 - 50) * (scale - 1);
  }

  const updateImage = (movingImage: MovingImage, minScale = 1, maxScale = 2) => {
    const scale = Math.random() * (maxScale - minScale) + minScale;
    movingImage.scale = scale;
    movingImage.x = getRandomTranslation(scale);
    movingImage.y = getRandomTranslation(scale);

    return movingImage;
  }

  const addMovingImage = (url: string) => {
    movingImages.push({
      x: 0,
      y: 0,
      scale: 2,
      url,
      transitionTime
    });
  }

  addMovingImage(flare1);
  addMovingImage(flare2);
  addMovingImage(bush1);
  addMovingImage(bush2);
  addMovingImage(flare4);
  addMovingImage(plants1);
  addMovingImage(plants2);
  addMovingImage(plants3);
  addMovingImage(troll);
  addMovingImage(graffiti);

  const updateImages = () => {
    movingImages.forEach((movingImage, i) => {
      movingImages[i] = updateImage(movingImage);
    })
  }

  let noteIndex = 0;
  const updateNoteIndex = () => {
    noteIndex = Math.floor(Math.random() * notes.length);
  }

  onMount(() => {
    setTimeout(() => {
      updateImages();
    }, 1);

    setInterval(() => {
      updateImages();
    }, timeBetweenTransforms);

    setInterval(() => {
      mainMovingImage.scale = Math.random() * 0.2 + 3;
      /*
      mainMovingImage.x = -12;
      mainMovingImage.y = 90;
      */
      mainMovingImage.x = Math.random() * 4 - 20;
      mainMovingImage.y = Math.random() + 4 + 95;
    }, 30);

    updateNoteIndex();
    setInterval(() => {
      updateNoteIndex();
    }, textTransitionTime);
  })

  /*
  */
  const notes: string[] = [
    "Trying to walk slow. Be bored more often. Have been trying for a while.",
    "The mind does not have to be a hyper-loop.",
    "Doing things with care and consideration. Decorating. Maintaining. Restoring.",
    "It's never silent. Why am I listening to music all the time?",
    "So many details, so many shortcuts, so many options for parallell processing. Way too effective.",
    "Instinctive planning, mental delegation, approximations, unconscious stress. And this is my spare time.",
    "Just 5 minutes to feel that I have done something. 5 pointless minutes. Just for show.",
    "Sit here. Comfortable. What a chair.",
    "The phone is left on mute, but I still look at it every other minute. At least I miss some calls.",
    "It used to take time. I allowed it. Coding, play, endless configurations, finding the thing, the aesthetic. It all just grew.",
    "I want to be comfortable with time passing. With fun. Drinking another beer. I'm not in a rush.",
    "I don't need 8 hours of sleep every night. Sometimes, the sludge is welcome.",
    "A more intimate home. Taking proper care of our plants. Yoga. Framing new pictures. Clean, cook, infuse with meaning. Safe. Not static.",
    "Take photos. See texture, patterns, surprising juxtaposition, aesthetically ugly, pleasant chaos. I try not to think about the publish button.",
    "Please, no more perfectly blue buttons.",
    "How much time should I spend on this?",
    "Time well spent. Time well spent. Time well spent. On repeat at the bedside table. In my dreams.",
    "Abandon McMindfullness city. It smells weird. Too much like tar.",
    "\"What do you do?\" Sidestep wrong questions."
  ];
</script>

<div class="node">
  <div class="images">
    {#each movingImages as movingImage (movingImage.url)}
      <a href="{movingImage.url}" target="_blank" rel="noreferrer noopener">
        <MovableImage 
          data={movingImage}
          alt=""
          width={800}
          height={800}
          wrapperStyle="
            aspect-ratio: 1;
            max-width: 800px;
            box-shadow: 0px 0px 100px 50px black;
            border: 1px solid var(--cFgInverted);
            margin: 2em;
          "
          loading="lazy"
        />
      </a>
    {/each}
  </div>

  <!-- TODO: MAKE JITTERING -->
  <!-- TODO: make movable using mouse, dragging around, flowing with momentum? bouncing on edges...-->


  <div class="note">
    <p>
      { notes[noteIndex]}
    </p>
    <a 
      href="{mainMovingImage.url}" 
      target="_blank" 
      rel="noreferrer noopener"
      class="main-flare"
    >
      <MovableImage 
        data={mainMovingImage}
        width={200}
        height={200}
        alt=""
        wrapperStyle="
          box-shadow: 0px 0px 50px 10px #ffffff15;
          border: 1px solid white;
        "
      />
    </a>
  </div>
</div>

<!--
<ImageProject
  imageUrls={images}
  name={metadata.title ?? name}
  description={description}
  theme='light'
/>
-->

<style>
  .node {
    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    background-color: #061310;

    padding-top: 10em;
    padding-bottom: 10em;
  }

  .images {
    display: flex;

    max-width: 1100px;

    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  .main-flare {
    object-fit: cover;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
    margin: 1em;

    transform: translate(50%, 95%);
  }

  .note {
    position: fixed;
    top: 40%;
    left: calc(50% - 1em);
    transform: translate(-50%, -50%);
    width: calc(100% - 2em);
    max-width: calc(1100px - 2em);
    margin: 1em;
    z-index: 1;

    color: var(--cFgInverted);
    font-size: 1.5em;
    font-family: var(--fMono);
    font-style: italic;

    text-shadow: 0px 0px 10px black;
    text-align: left;

    border: 1px solid var(--cFgInverted);
    padding: 1em;

    backdrop-filter: blur(10px) brightness(50%);
  }
</style>