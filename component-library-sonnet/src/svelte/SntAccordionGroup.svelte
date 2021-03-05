
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let multiExpand = undefined;

export const expandAll = (...args) => __ref.expandAll(...args);
export const collapseAll = (...args) => __ref.collapseAll(...args);
export const addAccordion = (...args) => __ref.addAccordion(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-accordion-group 
  multi-expand={multiExpand}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-accordion-group>
  