<script lang="ts">
  export let label: string | undefined = undefined;
  export let value: string = '';
</script>


<div class='form-item'>
  {#if label}
    <label for='text-input'>
      { label }
    </label>
  {/if}
  <textarea type='text' id='text-input' bind:value />
</div>

<style>
  .form-item {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  textarea {
    min-height: 200px;
    height: 300px;
  }
</style>