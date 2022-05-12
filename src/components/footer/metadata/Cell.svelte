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
    padding: 0.8em;
    border-left: var(--borderPrimary);
    border-top: var(--borderPrimary);

    flex-grow: 1;
    margin: -0.5px;

    text-align: center;
  }

  .cell h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3em;
    text-align: left;
  }

  .content {
    overflow: scroll;
  }
</style>