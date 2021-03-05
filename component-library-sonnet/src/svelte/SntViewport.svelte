
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let name = undefined;
export let devices = undefined;
export let height = undefined;
export let spacing = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-viewport 
  name={name}
  devices={devices}
  height={height}
  spacing={spacing}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-viewport>
  