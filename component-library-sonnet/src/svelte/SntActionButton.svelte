
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let actionReference = undefined;
export let actionData = undefined;
export let iconClassName = undefined;
export let linkTitle = undefined;
export let styleClasses = undefined;
export let buttonId = undefined;

export const getEventConfiguration = (...args) => __ref.getEventConfiguration(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-action-button 
  action-reference={actionReference}
  action-data={actionData}
  icon-class-name={iconClassName}
  link-title={linkTitle}
  style-classes={styleClasses}
  button-id={buttonId}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-action-button>
  