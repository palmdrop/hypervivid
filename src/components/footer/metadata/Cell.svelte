<script lang="ts">
  export let title: string;
</script>

<div class="cell">
  <h2>
    { title }
  </h2>
  <div class="content">
    <slot />
  </div>
</div>


<style>
  .cell {
    display: block;
    padding: 0.8em;
    border-left: var(--borderPrimary);
    border-top: var(--borderPrimary);

    flex-grow: 2;
    text-align: center;

    max-width: 200%;
  }

  .cell h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3em;
    text-align: left;
  }

  .content {
    overflow: auto;
    max-height: calc(100% - 1.0em);
  }
</style>