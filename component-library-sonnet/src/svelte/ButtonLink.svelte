
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let href = undefined;
export let target = undefined;
export let ariaLabel = undefined;
export let ariaDescribedByText = undefined;
export let classNames = undefined;
export let buttonId = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<button-link 
  href={href}
  target={target}
  aria-label={ariaLabel}
  aria-described-by-text={ariaDescribedByText}
  class-names={classNames}
  button-id={buttonId}
  on:linkEvent={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</button-link>
  