<script lang="ts">
  export let title: string = '';
  export let multi = false;
  export let nested = false;
  export let inline = false;
  export let wide = false;
  export let style = "";
</script>

<div 
  class="cell"
  class:multi
  class:nested
  class:inline
  class:wide
  style={style}
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
    padding-bottom: unset;
    border-left: var(--borderPrimary);
    border-top: var(--borderPrimary);

    max-height: 250px;

    flex-grow: 2;
    text-align: center;

    margin-left: -1px;
    margin-top: -1px;
    max-width: 100%;

    flex-direction: column;
    justify-content: unset;

    overflow-y: auto;
  }

  .cell h2 {
    font-size: 1.2rem;
    margin-bottom: 0.3em;
    text-align: left;
  }

  .content {
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
      max-width: 34%;
    }

    .wide {
      max-width: 100%;
      width: 100%;
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
    padding-bottom: 0.8em;
  }
</style>