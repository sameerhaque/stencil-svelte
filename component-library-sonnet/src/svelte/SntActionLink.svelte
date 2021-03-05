
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let actionReference = undefined;
export let actionData = undefined;
export let linkTitle = undefined;
export let iconClassName = undefined;
export let styleClasses = undefined;
export let linkId = undefined;

export const getEventConfiguration = (...args) => __ref.getEventConfiguration(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-action-link 
  action-reference={actionReference}
  action-data={actionData}
  link-title={linkTitle}
  icon-class-name={iconClassName}
  style-classes={styleClasses}
  link-id={linkId}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-action-link>
  