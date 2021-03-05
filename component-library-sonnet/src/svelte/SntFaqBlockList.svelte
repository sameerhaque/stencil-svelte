
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let faqBlockList = undefined;
export let menuAriaLabel = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('faqBlockList', faqBlockList);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-faq-block-list 
  menu-aria-label={menuAriaLabel}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-faq-block-list>
  