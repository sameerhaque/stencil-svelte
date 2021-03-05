
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let offerAvailable = undefined;
export let logoSources = undefined;
export let altTag = undefined;
export let offerTitle = undefined;
export let titleString = undefined;
export let href = undefined;
export let target = undefined;
export let description = undefined;
export let buttonLabel = undefined;
export let ariaLabel = undefined;
export let actionReference = undefined;
export let actionData = undefined;
export let modalData = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-connect-offers 
  offer-available={offerAvailable}
  logo-sources={logoSources}
  alt-tag={altTag}
  offer-title={offerTitle}
  title-string={titleString}
  href={href}
  target={target}
  description={description}
  button-label={buttonLabel}
  aria-label={ariaLabel}
  action-reference={actionReference}
  action-data={actionData}
  modal-data={modalData}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-connect-offers>
  