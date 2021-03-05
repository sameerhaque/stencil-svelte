
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let styleClasses = undefined;
export let active = undefined;
export let viewport = undefined;
export let languageString = undefined;

export const toggleActive = (...args) => __ref.toggleActive(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-navbar 
  style-classes={styleClasses}
  active={active}
  viewport={viewport}
  language-string={languageString}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-navbar>
  