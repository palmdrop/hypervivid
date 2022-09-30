<script lang="ts">
	import { random } from '$utils/random';
  import { onDestroy } from "svelte";
  import { hyperwords } from '../hyper.svelte';

  const maxLength = hyperwords.reduce(
    (acc, word) => Math.max(acc, word.length), 
    0
  );

  let word: string;
  const setRandomWord = () => {
    const hyperword = hyperwords[Math.floor(Math.random() * hyperwords.length)];
    const padding = '.'.repeat(maxLength - hyperword.length + 1);
    word = 
      hyperword + 
      padding + 
      String.fromCharCode(Math.floor(random(1000, 9999)));
  };

  setRandomWord();
  const interval = setInterval(() => setRandomWord(), 100);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div>
  <span>
    { word }
  </span>
</div>

<style>
  div {
    margin: 5em;
    margin-top: 8em;
    padding: 5em;

    width: 28em;

    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #FF0000 100%);
    color: var(--cFg);

    border-radius: 1em;

    box-shadow: 
      inset 0px 0px 50px yellow,
      0px 40px 20px -20px var(--cFgFaded),
      0px 0px 10px #00000026;
  }

  span {
    font-size: 2em;
    text-align: left;
    font-family: var(--fMono);
    white-space: nowrap;
  }
</style>