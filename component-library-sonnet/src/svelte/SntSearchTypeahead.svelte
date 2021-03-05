
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let languageJson = undefined;
export let searchComboboxId = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-search-typeahead 
  language-json={languageJson}
  search-combobox-id={searchComboboxId}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-search-typeahead>
  