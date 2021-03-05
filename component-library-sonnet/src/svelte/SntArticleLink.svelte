
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let href = undefined;
export let copy = undefined;
export let ariaLabel = undefined;
export let hiddenTitle = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-article-link 
  href={href}
  copy={copy}
  aria-label={ariaLabel}
  hidden-title={hiddenTitle}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-article-link>
  