
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let root = undefined;
export let historyType = undefined;
export let titleSuffix = undefined;
export let scrollTopOffset = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<stencil-router 
  root={root}
  history-type={historyType}
  title-suffix={titleSuffix}
  scroll-top-offset={scrollTopOffset}
  
  bind:this={__ref}
>
  <slot></slot>
</stencil-router>
  