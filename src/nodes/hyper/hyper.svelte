<script lang="ts">
  import { useTitle } from '$utils/useTitle';
  import { getNodeContext } from '$utils/useNodeContext';
  import Flicker from './extra/Flicker.svelte';
  import LoopingScrollBanner from '../../components/ornaments/LoopingScrollBanner.svelte';
import { random } from '../../utils/random';

  const { mode } = getNodeContext('hyper');

  const images = [
    '/img/combined/comb1.jpg',
    '/img/combined/comb2.jpg',
  ];

  const index = Math.floor((images.length * new Date().getSeconds() / 10) % images.length);

  const imageSrc = images[
    index
  ];

  const hyperwords = [
    'vivid',
    'soft',
    'human',
    'verse',
    'quiet',
    'smart',
    'flat',
    'sensorium',
    'sensitive',
    'chrome',
    'irony',
    'ironic',
    'space',
    'liminal',
    'alien',
    'familiar',
    'connected',
    'seduced',
    'sleep',
    'dream',
    'fool',
    'pool',
    'numb',
    'void',
    'tube',
    'blank',
    'world',
    'mold',
    'dump',
    'dumb',
    'calm',
    'real',
    'feed',
    'damp',
    'sexy',
    'work',
    'stench',
    'loop',
    'cell',
    'zen',
    'life',
    'mind',
    'honest',
    'synthetic',
    'ads',
    'core',
    'light',
    'clear',
    'worm',
    'meta',
    'guys',
    'node',
    'idiot',
    'violence',
    'soothing',
    'breath',
    'dick',
    'sex',
    'rest',
    'talk',
    'fuck',
    'cringe',
    'gagement',
    'politics',
    'culture',
    'imposed',
    'leisure',
    'exposed',
    'rich'
  ].map(word => `hyper${word}`.toUpperCase());

  const boxHeight = 7;
  const wordLength = 9;
  const interval = random(200, 600);
  
  const getRandomIndex = () => {
    return Math.floor(Math.random() * hyperwords.length);
  }

  const indices = Array(boxHeight).fill(0).map(getRandomIndex);
  const currentWords = indices.map(i => hyperwords[i]);

  const handleHover = (listIndex: number) => {
    indices[listIndex] = getRandomIndex();
    currentWords[listIndex] = hyperwords[indices[listIndex]];
  }

  $: {
    useTitle(currentWords[0]);
  }
</script>

<div class="node">
  <div class="frame" class:only={mode === 'only'}>
    <img
      src={imageSrc}
      alt=''
    />
    <ul>
      {#each { length: boxHeight } as _, i (i)}
        <li
          on:mouseenter={() => handleHover(i)}
          on:touchend={() => handleHover(i)}
          on:focus={() => {}}
        >
          <LoopingScrollBanner
            style="width: {2.0 * wordLength}rem;"
            steps={currentWords[i].length}
            delay={2.0 * interval * i / (1000 * wordLength)}
            speed={interval * currentWords[i].length}
          >
            {currentWords[i]}
          </LoopingScrollBanner>
        </li>
      {/each}
    </ul>
  </div>
  {#if mode === 'only'}
    <Flicker words={hyperwords} />
  {/if}
</div>

<style>
  .node {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .frame {
    font-family: var(--fMono);
    position: relative;
  }

  .only {
    margin-top: 5em;
  }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1.2em;
    font-size: clamp(18px, 7vw, 2.1rem);
    line-height: 0.9em;
    letter-spacing: 0.45em;
    text-align: center;

    background-color:rgb(240, 240, 12);
    color: var(--cFg);
  } 
  
  img {
    height: 100%;
    max-height: 75vh;
    object-fit: cover;
    aspect-ratio: 3/2;
    z-index: -1;

    box-shadow: 0px 0px 20px -5px var(--cBgInverted);
  }

  @media ( min-width: 500px )  {
    img {
      min-width: 300px;
      width: 100%;
      max-width: 1100px;
      min-height: 600px;

      height: unset;
    }
  }
</style>
  