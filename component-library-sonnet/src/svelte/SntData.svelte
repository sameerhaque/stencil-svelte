
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let type = undefined;
export let lazyLoad = undefined;
export let src = undefined;
export let data = undefined;

export const getData = (...args) => __ref.getData(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-data 
  type={type}
  lazy-load={lazyLoad}
  src={src}
  data={data}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-data>
  