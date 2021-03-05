
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let href = undefined;
export let target = undefined;
export let linkTitle = undefined;
export let iconClassName = undefined;
export let expanded = undefined;
export let current = undefined;
export let styleClasses = undefined;
export let isExternal = undefined;

export const expand = (...args) => __ref.expand(...args);
export const collapse = (...args) => __ref.collapse(...args);
export const toggleExpanded = (...args) => __ref.toggleExpanded(...args);
export const setCurrent = (...args) => __ref.setCurrent(...args);
export const unsetCurrent = (...args) => __ref.unsetCurrent(...args);
export const toggleCurrent = (...args) => __ref.toggleCurrent(...args);
export const registerParent = (...args) => __ref.registerParent(...args);
export const isType = (...args) => __ref.isType(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-nav-item 
  href={href}
  target={target}
  link-title={linkTitle}
  icon-class-name={iconClassName}
  expanded={expanded}
  current={current}
  style-classes={styleClasses}
  is-external={isExternal}
  on:navItemEvent={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-nav-item>
  