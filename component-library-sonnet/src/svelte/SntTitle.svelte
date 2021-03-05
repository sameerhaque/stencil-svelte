
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleType = undefined;
export let clampLines = undefined;
export let truncationString = undefined;

export const clampTitle = (...args) => __ref.clampTitle(...args);
export const setTitle = (...args) => __ref.setTitle(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-title 
  title-type={titleType}
  clamp-lines={clampLines}
  truncation-string={truncationString}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-title>
  