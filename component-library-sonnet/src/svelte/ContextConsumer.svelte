
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let context = undefined;
export let renderer = undefined;
export let subscribe = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('context', context);
$: if (__mounted) setProp('renderer', renderer);
$: if (__mounted) setProp('subscribe', subscribe);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<context-consumer 
  
  
  bind:this={__ref}
>
  <slot></slot>
</context-consumer>
  