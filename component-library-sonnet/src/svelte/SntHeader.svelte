
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let styleClasses = undefined;
export let fixed = undefined;
export let languageJson = undefined;
export let mainContentId = undefined;
export let active = undefined;

export const toggleActive = (...args) => __ref.toggleActive(...args);
export const setActive = (...args) => __ref.setActive(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-header 
  style-classes={styleClasses}
  fixed={fixed}
  language-json={languageJson}
  main-content-id={mainContentId}
  active={active}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-header>
  