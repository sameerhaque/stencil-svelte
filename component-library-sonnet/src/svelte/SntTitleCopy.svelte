
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleString = undefined;
export let styleClasses = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-title-copy 
  title-string={titleString}
  style-classes={styleClasses}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-title-copy>
  