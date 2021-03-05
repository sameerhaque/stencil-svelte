
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let imageSrc = undefined;
export let imgAlt = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-image-column 
  image-src={imageSrc}
  img-alt={imgAlt}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-image-column>
  