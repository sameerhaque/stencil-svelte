
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let filterItems = undefined;
export let menuAriaLabel = undefined;
export let currentActive = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-faq-filter-slider 
  filter-items={filterItems}
  menu-aria-label={menuAriaLabel}
  current-active={currentActive}
  on:faqFilterClick={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-faq-filter-slider>
  