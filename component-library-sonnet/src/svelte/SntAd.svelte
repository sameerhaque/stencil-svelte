
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleString = undefined;
export let styleClasses = undefined;
export let iconSources = undefined;
export let logoSources = undefined;
export let href = undefined;
export let target = undefined;
export let buttonLabel = undefined;
export let linkLabel = undefined;
export let ariaLabel = undefined;
export let actionReference = undefined;
export let actionData = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-ad 
  title-string={titleString}
  style-classes={styleClasses}
  icon-sources={iconSources}
  logo-sources={logoSources}
  href={href}
  target={target}
  button-label={buttonLabel}
  link-label={linkLabel}
  aria-label={ariaLabel}
  action-reference={actionReference}
  action-data={actionData}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-ad>
  