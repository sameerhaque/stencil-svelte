
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let panelId = undefined;
export let sourceHeading = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-source-list 
  panel-id={panelId}
  source-heading={sourceHeading}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-source-list>
  