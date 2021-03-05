
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleString = undefined;
export let linkTitle = undefined;
export let url = undefined;
export let urlTarget = undefined;
export let actionReference = undefined;
export let actionData = undefined;
export let styleClasses = undefined;
export let buttonId = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-cta-reminder 
  title-string={titleString}
  link-title={linkTitle}
  url={url}
  url-target={urlTarget}
  action-reference={actionReference}
  action-data={actionData}
  style-classes={styleClasses}
  button-id={buttonId}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-cta-reminder>
  