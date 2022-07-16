<script context="module">
  export const name = "work/rest in red";
</script>

<div class="box">
  <div class="column">
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
  <div class="column">
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
  <span>
    HYPERWORK<br>
    HYPERREST
  </span>
</div>

<style>
  .box {
    width: 30em;
    height: 20em;

    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #FF0000 100%);

    display: flex;
    padding-top: 0.5em;
    justify-content: center;
    position: relative;
  }

  .column {
    position: relative;
    z-index: 1;
  }

  .column > div {
    position: relative;
    margin-bottom: -1.5em;
    width: 5em;
    height: 5em;
    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #FF0000 100%);
    border-radius: 100%;
  }

  .column:last-child {
    transform: rotate(180deg) translateY(0.5em);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: var(--fMono);
    font-size: 5.5em;
    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #FF0000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
