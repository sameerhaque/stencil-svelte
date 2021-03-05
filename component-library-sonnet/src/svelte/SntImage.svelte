
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let dataSrc = undefined;
export let srcImage = undefined;
export let width = undefined;
export let height = undefined;
export let srcset = undefined;
export let imgAlt = undefined;
export let sizes = undefined;
export let styleClasses = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-image 
  data-src={dataSrc}
  src-image={srcImage}
  width={width}
  height={height}
  srcset={srcset}
  img-alt={imgAlt}
  sizes={sizes}
  style-classes={styleClasses}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-image>
  