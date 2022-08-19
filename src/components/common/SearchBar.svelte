<script lang="ts">
  import _ from "lodash";

  export let debounceTimeout = 500;
  export let placeholder = "Search...";

  // For data banding
  export let searchPhrase = "";

  const handleSearch = _.debounce((event: Event & { currentTarget: EventTarget }) => {
    if(!event.target) return;
    searchPhrase = (event.target as any).value ?? "";
  }, debounceTimeout);
</script>

<input 
  type="text" 
  placeholder={placeholder} 
  on:input={handleSearch}
/>

<style>
  input {
    width: 20em;
    max-width: 100%;
  }
</style>