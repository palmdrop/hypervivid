<script lang="ts">
  import Link from "$components/common/Link.svelte";
  import Paragraph from "$components/common/Paragraph.svelte";

  export let data: { rest: string };
</script>

<div>
  <div>
    {#each { length: 5 } as _, i (i) }
      <h2>
        { data.rest }
      </h2>
    {/each}
  </div>

  <div class="message">
    <Paragraph big wide>
      This route does not exist. <Link href="/">Return.</Link>
    </Paragraph>
  </div>

</div>

<style>
  h2 {
    font-family: var(--fMono);
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);

    padding: 0.4em;
    margin: 0.3em;

    word-wrap: break-word;
  }

  div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .message {
    position: absolute;
    background-color: var(--cBg);
    height: 100px;
    border: var(--borderPrimary);
  }
</style>
