<div class="container">
  <div class="fade" />
  <div class="fade" />
  <div class="fade" />
  <div class="fade" />
  <div class="fade" />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .fade {
    height: 20em;
    width: 8em;

    max-width: calc(20vw - 1.0em);

    margin: 0.5em;

    box-shadow: 0px 50px 40px -10px rgba(208, 4, 4, 0.05),
      inset 0px 0px 20px 5px rgba(116, 84, 84, 0.14);
  }

  .fade:nth-child(1) {
    background: linear-gradient(180deg, #b6b9c4 0%, #d77979 97.4%, #e07d7d 100%);
  }

  .fade:nth-child(2) {
    background: linear-gradient(180deg, #72ca9f 0%, #974343 100%, #974343 100%);
  }

  .fade:nth-child(3) {
    background: linear-gradient(180deg, #ca7281 0%, #438397 100%);
  }

  .fade:nth-child(4) {
    background: linear-gradient(180deg, #947fb7 0%, #978f43 100%);
  }

  .fade:nth-child(5) {
    background: linear-gradient(180deg, #a79a78 0%, #1b674c 100%, #1b674c 100%);
  }
</style>
