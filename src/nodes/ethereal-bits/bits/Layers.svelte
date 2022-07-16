<script context="module">
  export const backgroundColor = '#FAFAF8';
</script>

<div class="container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />

  <div class="oval" />
</div>

<style>
  div {
    background: #FAFAF8;
  }

  .container {
    position: relative;
    width: 95vw;
    height: 70vw;
    max-width: 1200px;
    max-height: 900px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .box {
    width: calc(33% - 2em);
    height: calc(50% - 4em);

    margin: 2em;
  }

  div {
    border: 5px solid rgba(251, 243, 254, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 20px 20px 10px rgba(180, 171, 232, 0.19), 40px 40px 15px rgba(155, 241, 46, 0.22);
  }

  .oval {
    position: absolute;
    width: 70vw;
    max-width: 1000px;

    height: 10vw;
    max-height: 150px;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) rotate(-55deg);
    box-shadow: 10px 10px 20px #CFDFED, -3px -3px 10px #FCF1F4, inset -20px -20px 20px rgba(236, 36, 36, 0.52), inset 10px 10px 20px rgba(223, 255, 244, 0.25);
    border: unset;
    border-radius: 100%;
  }

</style>