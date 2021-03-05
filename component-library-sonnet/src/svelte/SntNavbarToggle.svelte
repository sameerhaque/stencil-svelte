
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let collapsed = undefined;
export let ariaControls = undefined;
export let languageString = undefined;

export const toggleCollapsed = (...args) => __ref.toggleCollapsed(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-navbar-toggle 
  collapsed={collapsed}
  aria-controls={ariaControls}
  language-string={languageString}
  on:navbarToggled={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-navbar-toggle>
  