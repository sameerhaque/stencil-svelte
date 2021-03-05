
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let href = undefined;
export let target = undefined;
export let ariaLabel = undefined;
export let rel = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-source-link 
  href={href}
  target={target}
  aria-label={ariaLabel}
  rel={rel}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-source-link>
  