
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleSuffix = undefined;
export let pageTitle = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<stencil-route-title 
  title-suffix={titleSuffix}
  page-title={pageTitle}
  
  bind:this={__ref}
>
  <slot></slot>
</stencil-route-title>
  