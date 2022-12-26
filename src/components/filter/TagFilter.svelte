<script lang="ts">
  import metadata from '../../nodes/metadata';

  import Select from 'svelte-select';
  import type { Tag } from '../../types/nodes';

  const allTags = Object.keys(metadata.tags) as Tag[];

  export let tags: Tag[] = [];
  export let onChange: ((tags: Tag[]) => void) | undefined = undefined;

  const initialTags = tags;

  const handleSelect = (event: Event & { detail: { value: string}[] }) => {
    tags = (event.detail as { value: string }[]).map(pick => pick.value as Tag);

    if(onChange) onChange(tags);
  }

  const handleClear = (event: Event & { detail?: { value: string }}) => {
    if(!event.detail) tags = [];
    else {
      tags = tags.filter(
        tag => tag !== (event.detail as { value: string }).value
      );
    }

    if(onChange) onChange(tags);
  }
</script>

<div class="tag-filter">
  <Select
    placeholder="Tag filters..." 
    value={initialTags.length ? initialTags : null}
    items={allTags}
    multiple={true}
    inputStyles="cursor: text;"
    on:change={handleSelect}
    on:clear={handleClear}
  />
</div>

<style global>
  .tag-filter {
    width: 22em;
    max-width: 100%;

    --height: 2.2em;
    --input-color: var(--cFg);
    --font-size: 1rem;

    --placeholder-opacity: 0.6;
    --placeholder-color: var(--cFg);

    --background: var(--cBg);
    --border: var(--borderPrimary);
    --border-hover: var(--borderPrimary);
    --border-focused: var(--borderPrimary);;
    --border-radius: var(--borderRadius1);
    --input-font-size: 1rem;

    --border: var(--borderPrimary);
    --list-border: var(--borderPrimary);
    --list-border-radius: var(--borderRadius1);
    --list-background: var(--cBg);
    --list-shadow: 0px 2em 4em -2em var(--cFg);

    --item-hover-color: var(--cFgInverted);
    --item-hover-bg: var(--cBgInverted);

    --multi-item-border-radius: 10px;
    --multi-item-outline: var(--borderPrimary);
    --multi-item-bg: var(--cBg);

    --multi-item-padding: 0.0em 0.7em;
    
    --multi-clear-fill: var(--cFg);
    --multi-clear-bg: var(--cBg);
    --multi-clear-hover-fill: var(--cFg);
    --multi-clear-hover-bg: var(--cBg);
  }

  .tag-filter > input {
    cursor: text;
  }

  .svelte-select > input {
    cursor: text;
  }

  .svelte-select .focused,
  .svelte-select .list-open {
    border: var(--borderPrimary);
  }

  .multi-item {
    border: var(--borderPrimary);
    font-family: var(--fMono);
  }

  .svelte-select-list, 
  .multi-item-clear, 
  .clear-select, 
  .list-item, 
  .item,
  .indicators {
    cursor: pointer;
  }

  .tag-filter .clear-select {
    cursor: pointer;
    transform: scale(0.8);
  }
</style>