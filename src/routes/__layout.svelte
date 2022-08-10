<script lang="ts">
  import { title$ } from '$stores/head';
  import { loading } from '$stores/loading';
  import { navigating } from '$app/stores';
  import { onMount } from 'svelte';

  import '../global.css';
  import '../fonts.css';
  import '../theme.css';

  $: $loading = !!$navigating;

  onMount(() => {
    /*
      Override default addEventListener function to block instagram/facebook/meta from injecting selection listeners.
      Please read more at https://krausefx.com/blog/ios-privacy-instagram-and-facebook-can-track-anything-you-do-on-any-website-in-their-in-app-browser
    */
    const addEventListener = document.addEventListener;
    const newAddEventListener: typeof addEventListener = function (this: any, _, listener) {
      if (listener.toString().indexOf("messageHandlers.fb_getSelection") > -1) {
        return null;
      }

      return addEventListener.apply(this, arguments as any);
    }

    document.addEventListener = newAddEventListener;
  });
</script>

<svelte:head>
  <title>
    { $title$ }
  </title>
</svelte:head>

<slot />

<!-- 
  These spans are inserted to trick instagram/facebook/meta to not inject tracking scripts on the page.
  Please read more at https://krausefx.com/blog/ios-privacy-instagram-and-facebook-can-track-anything-you-do-on-any-website-in-their-in-app-browser
-->
<span id="iab-pcm-sdk" />
<span id="iab-autofill-sdk" />