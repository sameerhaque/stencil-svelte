
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let href = undefined;
export let imgAlt = undefined;
export let imgSrc = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-navbar-brand 
  href={href}
  img-alt={imgAlt}
  img-src={imgSrc}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-navbar-brand>
  