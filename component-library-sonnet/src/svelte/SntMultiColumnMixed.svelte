
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let styleClasses = undefined;
export let columnCount = undefined;

export const tagLastRow = (...args) => __ref.tagLastRow(...args);
export const setColumns = (...args) => __ref.setColumns(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-multi-column-mixed 
  style-classes={styleClasses}
  column-count={columnCount}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-multi-column-mixed>
  