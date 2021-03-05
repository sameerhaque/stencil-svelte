
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let tappable = undefined;
export let stopPropagation = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('tappable', tappable);
$: if (__mounted) setProp('stopPropagation', stopPropagation);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-backdrop 
  
  on:sntBackdropTap={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-backdrop>
  