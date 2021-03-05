
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let expanded = undefined;

export const isCollapsed = (...args) => __ref.isCollapsed(...args);
export const isExpanded = (...args) => __ref.isExpanded(...args);
export const collapse = (...args) => __ref.collapse(...args);
export const expand = (...args) => __ref.expand(...args);
export const toggle = (...args) => __ref.toggle(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-accordion 
  expanded={expanded}
  on:accordionEvent={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-accordion>
  