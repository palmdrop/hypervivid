<script lang="ts">
	import { wrapSlice } from './../../utils/general';
  import { onDestroy } from 'svelte';
  import { useTitle } from '$utils/useTitle';

  const images = [
    '/img/combined/comb1.jpg',
    '/img/combined/comb2.jpg',
    '/img/combined/mirror2.jpg',
  ];

  const index = Math.floor((images.length * new Date().getSeconds() / 10) % images.length);

  $: imageSrc = images[
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
  ].map(word => `hyper${word}`.toUpperCase());

  const boxHeight = 7;
  const wordLength = 9;
  const interval = 600;
  
  // TODO: optimize with CSS transitions? https://stackoverflow.com/questions/45847392/pure-css-continuous-horizontal-text-scroll-without-break
  // https://codepen.io/julianofreitas/pen/BayKper

  // TODO: or optimize by precalculating all offset strings

  const getRandomIndex = () => {
    return Math.floor(Math.random() * hyperwords.length);
  }

  const indices = Array(boxHeight).fill(0).map(getRandomIndex);
  const offsets = Array(boxHeight).fill(0);
  const currentWords = indices.map(i => wrapSlice(hyperwords[i], 0, wordLength));

  const handleHover = (listIndex: number) => {
    indices[listIndex] = getRandomIndex();
    currentWords[listIndex] = wrapSlice(hyperwords[indices[listIndex]], 0, wordLength);
  }

  const intervals: NodeJS.Timer[] = [];

  offsets.forEach((_, i) => {
    const delay = 2.0 * i * interval / boxHeight;
    const offsetWord = () => {
      offsets[i] = (offsets[i] + 1) % wordLength;
      const word = hyperwords[indices[i]];
      currentWords[i] = wrapSlice(word, offsets[i], wordLength + offsets[i]);
    }
    setTimeout(() => {
      intervals[i] = setInterval(offsetWord, interval)
    }, delay);
  });

  onDestroy(() => {
    intervals.forEach(interval => 
      clearInterval(interval)
    );
  });

  $: {
    useTitle(currentWords[0]);
  }
</script>

<div>
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
        <span>{currentWords[i]}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--fMono);
  }

  ul {
    padding: 1em;
    font-size: clamp(18px, 7vw, 2.1rem);
    line-height: 0.9em;
    letter-spacing: 0.45em;
    text-align: center;

    background-color:rgb(240, 240, 12);
    color: var(--cFg);
  } 
  
  img {
    position: absolute;
    height: 100%;
    max-height: 75%;
    object-fit: cover;
    aspect-ratio: 3/2;
    z-index: -1;
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
  