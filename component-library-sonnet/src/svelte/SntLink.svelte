
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let linkId = undefined;
export let href = undefined;
export let target = undefined;
export let ariaLabel = undefined;
export let current = undefined;
export let downloadName = undefined;
export let ariaCurrent = undefined;
export let rel = undefined;
export let hiddenTitle = undefined;
export let isExternal = undefined;
export let classNames = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-link 
  link-id={linkId}
  href={href}
  target={target}
  aria-label={ariaLabel}
  current={current}
  download-name={downloadName}
  aria-current={ariaCurrent}
  rel={rel}
  hidden-title={hiddenTitle}
  is-external={isExternal}
  class-names={classNames}
  on:linkEvent={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-link>
  