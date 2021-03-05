
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let viewport = undefined;
export let padding = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-layout 
  viewport={viewport}
  padding={padding}
  on:viewportChanged={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-layout>
  