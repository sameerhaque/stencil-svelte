
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let styleClasses = undefined;
export let discountText = undefined;
export let ctaText = undefined;
export let href = undefined;
export let target = undefined;
export let ariaLabel = undefined;
export let leftIconSources = undefined;
export let rightIconSources = undefined;
export let linkId = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-enhanced-button 
  style-classes={styleClasses}
  discount-text={discountText}
  cta-text={ctaText}
  href={href}
  target={target}
  aria-label={ariaLabel}
  left-icon-sources={leftIconSources}
  right-icon-sources={rightIconSources}
  link-id={linkId}
  on:sntButtonClick={onEvent}
  on:sntButtonKeyDown={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-enhanced-button>
  