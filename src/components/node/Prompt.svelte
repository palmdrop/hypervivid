<script lang="ts">
  import ParagraphLarge from '$components/common/ParagraphLarge.svelte';
  import Link from '$components/common/Link.svelte';

  export let message: string; 
  export let onIgnore: () => void;
</script>

<div class="container">
  <div class="prompt">
    <ParagraphLarge style="padding: 2em">
      { message }
    </ParagraphLarge>
    <div class="choices">
      <a 
        class="choice"
        href="/nodes"
      >
        Go back
      </a>
      <button 
        class="choice" 
        on:click={onIgnore}
      >
        Ignore
      </button>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    min-height: 100vh; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font: unset;
  }

  .prompt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: var(--borderPrimary);

    max-width: 700px;

    text-align: center;
  }

  .choices {
    display: flex;
    flex-direction: row;

    width: 100%;
  }

  .choice {
    display: block;
    appearance: none;
    margin: 0;
    padding: 2em;
    text-decoration: none;

    transition: 0.3s;
    width: 50%;
    border-top: var(--borderPrimary);
  }

  .choice:first-child {
    border-right: var(--borderPrimary);
  }

  .choice:hover {
    background-color: var(--cFg);
    color: var(--cBg);
  }
</style>