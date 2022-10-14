<script lang="ts">
  import metadata from '../../nodes/metadata';

  import Select from 'svelte-select';
  import type { Tag } from '../../types/nodes';

  const allTags = Object.keys(metadata.tags) as Tag[];

  export let tags: Tag[] = [];

  const handleSelect = (event: Event & { detail: { index: number, label: string, value: string}[] }) => {
    if(!event.detail) tags = [];
    else tags = event.detail.map(pick => pick.value as Tag);
  }
</script>

<div class="tag-filter">
  <Select
    placeholder="Tag filters..." 
    items={allTags}
    value={tags.length ? tags : null}
    isMulti={true}
    inputStyles="cursor: text;"
    on:select={handleSelect}
  />
</div>

<style global>
  .tag-filter {
    width: 22em;
    max-width: 100%;

    --placeholderOpacity: 0.6;
    --placeholderColor: var(--cFg);

    --background: var(--cBg);
    --border: var(--borderPrimary);
    --borderHoverColor: var(--cFg);
    --borderFocusColor: var(--cFg);
    --borderRadius: var(--borderRadius1);
    --inputFontSize: 1rem;

    --listBorder: var(--borderPrimary);
    --listBorderRadius: var(--borderRadius1);
    --listBackground: var(--cBg);
    --listShadow: 0px 2em 4em -2em var(--cFg);

    --itemHoverColor: var(--cFgInverted);
    --itemHoverBG: var(--cBgInverted);

    --multiItemBorderRadius: var(--borderRadius1);
    --multiItemBorder: var(--borderPrimary);
    --multiItemBG: var(--cBg);
    --multiItemActiveBG: var(--cBg);
    --multiItemActiveColor: var(--cFg);
    
    --multiClearFill: var(--cFg);
    --multiClearBG: var(--cBg);
    --multiClearHoverFill: var(--cFg);
    --multiClearHoverBG: var(--cBg);
  }

  .tag-filter > input {
    cursor: text;
  }

  .selectContainer > input {
    cursor: text;
  }

  .multiSelectItem {
    border: var(--borderPrimary);
    font-family: var(--fMono);
  }

  .multiSelectItem_clear {
    cursor: pointer;
  }

  .listItem, .item {
    cursor: unset;
  }

  .tag-filter .clearSelect {
    cursor: pointer;
    transform: scale(0.8);
  }
</style>