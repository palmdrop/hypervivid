<script lang="ts">
  export let label: string | undefined = undefined;
  export let value: string = '';
</script>

<div class='form-item'>
  {#if label}
    <label for='email-input'>
      { label }
    </label>
  {/if}
  <input type='email' id='email-input' bind:value={value}/>
</div>

<style>
  .form-item {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-bottom: 1em;
  }
</style>