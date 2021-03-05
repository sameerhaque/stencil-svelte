
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let iconClassName = undefined;
export let styleClasses = undefined;
export let hiddenTitle = undefined;
export let buttonId = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-button 
  icon-class-name={iconClassName}
  style-classes={styleClasses}
  hidden-title={hiddenTitle}
  button-id={buttonId}
  on:sntButtonClick={onEvent}
  on:sntButtonKeyDown={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-button>
  