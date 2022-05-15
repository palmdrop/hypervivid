<script lang="ts">
	import { wrapSlice } from './../../utils/general';
  import { getNodeContext } from '$utils/useNodeContext';
import { onDestroy } from 'svelte';
import { fade } from 'svelte/transition';

  const { name, metadata } = getNodeContext('hyper');

  const hyperwords = [
    'vivid',
    'soft',
    'human',
    'quiet',
    'intelligent',
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
    'void',
    'left',
    'tube',
    'blank',
    'world',
    'dump',
    'calm',
    'real',
    'feed',
    'damp',
    'sexy',
    'life',
    'mind',
    'ads',
  ].map(word => `hyper${word}`.toUpperCase());

  const boxHeight = 7;
  const wordLength = 9;
  const interval = 2000;
  
  // TODO: optimize with CSS transitions? https://stackoverflow.com/questions/45847392/pure-css-continuous-horizontal-text-scroll-without-break
  // https://codepen.io/julianofreitas/pen/BayKper

  const getRandomIndex = (previous: number | undefined = undefined) => {
    const get = () => Math.floor(Math.random() * hyperwords.length);

    let contendor: number;
    do {
      contendor = get();
    } while(previous !== undefined && contendor === previous);

    return contendor;
  }

  const indices = Array(boxHeight).fill(0).map(getRandomIndex);
  const offsets = Array(boxHeight).fill(0);
  const currentWords = indices.map(i => wrapSlice(hyperwords[i], 0, wordLength));

  const handleHover = (listIndex: number) => {
    const previous = indices[listIndex];
    indices[listIndex] = getRandomIndex(previous);
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
  })
</script>

<div>
  <ul>
    {#each { length: boxHeight } as _, i (i)}
      <li
        on:mouseleave={() => handleHover(i)}
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
  }

  ul {
    padding: 1em;
    font-size: 2.5rem;
    line-height: 1.0em;
    letter-spacing: 0.3em;
    text-align: center;
    font-family: var(--fDisplay);

    background-color: var(--cBgInverted);
    color: var(--cFgInverted);
  } 
</style>
  