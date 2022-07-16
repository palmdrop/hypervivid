<script context="module">
  export const background = "linear-gradient(180deg, #91949D 0%, #E07D7D 100%);";
</script>

<div class="container">
  <div />
  <div />
  <div />
</div>

<style>
  .container {
    padding-top: 5em;
  }

  .container > div {
    width: 95vw;
    max-width: 500px;

    height: 50vw;
    max-height: 250px;

    background: radial-gradient(50% 50% at 50% 50%, 
      #022B52 0%, 
      rgb(174, 63, 63) 50%, 
      rgba(255, 0, 0, 0) 100%
    );
    box-shadow: inset 0px 0px 40px rgba(181, 208, 250, 0.13);
    filter: drop-shadow(-40px -20px 50px rgba(236, 250, 252, 0.25)) drop-shadow(20px 40px 40px rgba(239, 75, 75, 0.56));
    border: 1px solid rgba(156, 213, 218, 0.314);
    outline: 1px solid rgba(179, 61, 61, 0.314);
    border-radius: 35%;
    transform: rotate(33.29deg);

    margin-top: -5em;
  }
</style>