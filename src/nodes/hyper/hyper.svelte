<script lang="ts">
	import { wrapSlice } from './../../utils/general';
  import { getNodeContext } from '$utils/useNodeContext';
import { onDestroy } from 'svelte';

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
  ].map(word => `hyper${word}`);

  const boxHeight = 7;
  const wordLength = 9;
  const interval = 500;

  const getRandomIndex = (previous: number | undefined = undefined) => {
    const get = () => Math.floor(Math.random() * hyperwords.length);

    let contendor: number;
    do {
      contendor = get();
    } while(previous !== undefined && contendor === previous);

    return contendor;
  }

  const indices = Array(boxHeight).fill(0).map(
    () => getRandomIndex()
  );

  const offsets = Array(boxHeight).fill(0);

  $: currentWords = indices
    .map((wordIndex, i) => {
      const word = hyperwords[wordIndex];
      return wrapSlice(word, offsets[i], wordLength + offsets[i]).toUpperCase();
    });

  const handleHover = (listIndex: number) => {
    const previous = indices[listIndex];
    indices[listIndex] = getRandomIndex(previous);
  }

  const intervals: NodeJS.Timer[] = [];

  offsets.forEach((_, i) => {
    const delay = 2.0 * i * interval / boxHeight;
    setTimeout(() => {
      intervals[i] = setInterval(() => {
        offsets[i] = (offsets[i] + 1) % wordLength;
      }, interval)
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
    {#each currentWords as word, i (`${word}-${i}`)}
      <li
        on:mouseenter={() => handleHover(i)}
        on:touchstart={() => handleHover(i)}
        on:focus={() => {}}
      >
        <span>{word}</span>
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
    font-size: 3rem;
    line-height: 1.0em;
    letter-spacing: 0.3em;
    text-align: center;
    font-family: var(--fDisplay);

    background-color: var(--cBgInverted);
    color: var(--cFgInverted);
  } 
</style>
  