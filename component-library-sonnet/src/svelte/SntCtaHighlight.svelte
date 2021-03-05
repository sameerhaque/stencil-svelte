
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let cta = undefined;
export let actionReference = undefined;
export let actionData = undefined;
export let url = undefined;
export let urlTarget = undefined;
export let buttonId = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-cta-highlight 
  cta={cta}
  action-reference={actionReference}
  action-data={actionData}
  url={url}
  url-target={urlTarget}
  button-id={buttonId}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-cta-highlight>
  