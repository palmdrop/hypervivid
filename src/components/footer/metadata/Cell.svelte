<script lang="ts">
  export let title: string = '';
  export let multi = false;
  export let nested = false;
  export let inline = false;
</script>

<div 
  class="cell"
  class:multi
  class:nested
  class:inline
>
  {#if !multi}
    <h2>
      { title }
    </h2>
  {/if}
  <div class="content">
    <slot />
  </div>
</div>


<style>
  .cell {
    display: flex;
    padding: 0.8em;
    border-left: var(--borderPrimary);
    border-top: var(--borderPrimary);

    max-height: 200px;

    flex-grow: 2;
    text-align: center;

    margin-left: -1px;
    margin-top: -1px;
    max-width: 100%;

    flex-direction: column;
    justify-content: unset;
  }

  .cell h2 {
    font-size: 1.2rem;
    margin-bottom: 0.3em;
    text-align: left;
  }

  .content {
    overflow: auto;
    max-height: calc(100% - 1.0em);
  }

  .multi {
    padding: 0;
    border: unset;
  }

  .multi .content {
    overflow: hidden;
  }

  .inline {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4px;
  }

  @media ( min-width: 500px )  {
    .cell {
      max-width: 33%;
    }

    .inline {
      flex-direction: column;
    }
  }

  @media ( min-width: 700px )  {
    .inline {
      flex-direction: row;
    }
  }

  .nested {
    max-width: unset;
  }

</style>