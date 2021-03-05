
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let containerId = undefined;
export let fill = undefined;
export let from = undefined;
export let headline = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<testimonial-quote 
  container-id={containerId}
  fill={fill}
  from={from}
  headline={headline}
  
  bind:this={__ref}
>
  <slot></slot>
</testimonial-quote>
  