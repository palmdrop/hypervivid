<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import EmailInput from '$components/form/EmailInput.svelte';
  import TextInput from '$components/form/TextInput.svelte';
  import { getNodeContext } from '$utils/useNodeContext';

  const { mode } = getNodeContext('contact');

  let emailValue: string = '';
  let message: string = '';

  const onSubmit = () => {
    console.log(emailValue, message);
  }
</script>

<div class={mode}>
  <form 
    class='contact-form'
    on:submit|preventDefault={onSubmit}
  >
    <Paragraph big>
      CONTACT ME
    </Paragraph> 
    <EmailInput label="Your email" bind:value={emailValue}/>
    <TextInput label="Your message" bind:value={message}/>
    <input 
      class="submit"
      type='submit' 
      value='Send' 
      disabled={!emailValue || !message}
    />
  </form>
</div>

<style>
  div {
    width: 100%;
    height: 100%;

    padding: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .only form {
    padding: 1em;
  }

  form {
    max-width: 700px;
    width: 100%;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
  }

  input[type=submit]:not(:disabled) {
    cursor: pointer;

    transition: 0.3s;
  }

  input[type=submit]:hover:not(:disabled) {
    background-color: var(--cBgInverted);
    color: var(--cFgInverted);

    box-shadow: var(--pillShadow);
  }
</style>
