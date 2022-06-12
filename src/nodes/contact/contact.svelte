<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import EmailInput from '$components/form/EmailInput.svelte';
  import TextInput from '$components/form/TextInput.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import { sendEmail } from './utils';

  const { mode } = getNodeContext('contact');

  let email: string = '';
  let message: string = '';

  let status: string = '';

  $: {
    if(email || message) status = '';
  }

  const onSubmit = () => {
    if(!status.length) return;

    if(!message) {
      status = "Please write something.";
      return;
    };

    status = "Sending...";
    sendEmail(
      email,
      message
    ).then(
      result => result.json()
    ).then(
      result => {
        if(result === 200) {
          status = "Email sent successfully.";
          setTimeout(() => {
            email = "";
            message = "";
            status = "";
          }, 2000);
        } else {
          throw new Error();
        }
      }
    ).catch(
      () => {
        status = "Something went wrong. Try again."
        setTimeout(() => {
          status = "";
        }, 2000);
      }
    );
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
    <EmailInput label="Your email" bind:value={email}/>
    <TextInput label="Your message" bind:value={message}/>
    <input 
      class="submit"
      type="submit"
      value={!status.length ? 'Send' : status}
      disabled={!email || !message}
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
