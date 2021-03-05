
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let searchResultListJson = undefined;
export let noResultMsg = undefined;
export let separator = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-search-result-list 
  search-result-list-json={searchResultListJson}
  no-result-msg={noResultMsg}
  separator={separator}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-search-result-list>
  