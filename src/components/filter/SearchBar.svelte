<script lang="ts">
  import _ from "lodash";

  export let debounceTimeout = 500;
  export let placeholder = "Search...";
  export let trim = true;

  // For data binding
  export let searchPhrase = "";
  export let onChange: ((searchPhrase: string) => void) | undefined = undefined;

  let value = searchPhrase;

  const handleSearch = _.debounce((event: Event & { currentTarget: EventTarget }) => {
    if(!event.target) return;
    let newSearchPhrase: string = (event.target as any).value ?? "";
    if(trim) newSearchPhrase = newSearchPhrase.trim();
    searchPhrase = newSearchPhrase;

    if(onChange) onChange(searchPhrase);
  }, debounceTimeout);
</script>

<div class="search-bar">
  <input 
    type="text" 
    placeholder={placeholder} 
    bind:value={value}
    on:input={handleSearch}
  />
  <button
    class:active={value.length > 0}
    disabled={value.length === 0}
    on:click={() => {
      searchPhrase = ""
      value = "";

      if(onChange) onChange(searchPhrase);
    }}
  >
    ×
  </button>
</div>

<style>
  .search-bar {
    position: relative;
    margin: 0.5em;
  }

  input {
    width: 20em;
    max-width: calc(100vw - 0.8em);
    margin: 0;
    padding: 0em 16px;

    height: 2.42em;
    min-height: 40px;
  }

  button {
    position: absolute;
    right: 0;
    top: 47%;

    font-size: 1.4rem;

    height: 70%;
    width: 1.55em;
    background: linear-gradient(
      -90deg, 
      var(--cBg) 0%, 
      var(--cBg) 75%, 
      rgba(255,255,255,0) 100%
    );

    transform: translate(-2px, -50%);

    transition: 0.3s;
    visibility: hidden;
  }

  button:disabled,
  button[disabled] {
    opacity: 0.3;
  }

  button.active {
    visibility: visible;
  }
</style>