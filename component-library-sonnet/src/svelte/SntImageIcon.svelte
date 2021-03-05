
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let properties = undefined;
export let imgAlt = undefined;
export let styleClasses = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-image-icon 
  properties={properties}
  img-alt={imgAlt}
  style-classes={styleClasses}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-image-icon>
  