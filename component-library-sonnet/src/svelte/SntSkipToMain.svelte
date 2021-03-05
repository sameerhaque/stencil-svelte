
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let mainContentId = undefined;
export let linkText = undefined;
export let ariaLabel = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-skip-to-main 
  main-content-id={mainContentId}
  link-text={linkText}
  aria-label={ariaLabel}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-skip-to-main>
  