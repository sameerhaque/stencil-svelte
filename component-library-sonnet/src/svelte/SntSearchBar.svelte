
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let active = undefined;
export let styleClasses = undefined;
export let languageJson = undefined;

export const toggleActive = (...args) => __ref.toggleActive(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-search-bar 
  active={active}
  style-classes={styleClasses}
  language-json={languageJson}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-search-bar>
  