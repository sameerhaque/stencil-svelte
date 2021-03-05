
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleString;
export let copyText;
export let imagePath;
export let imageAltText = undefined;
export let imagePosition = undefined;
export let primaryButtonText = undefined;
export let primaryButtonAction = undefined;
export let primaryButtonData = undefined;
export let secondaryButtonText = undefined;
export let secondaryButtonAction = undefined;
export let secondaryButtonData = undefined;
export let linkTitle = undefined;
export let linkUrl = undefined;
export let openLinkInNewWindow = undefined;
export let properties = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-two-column-feature 
  title-string={titleString}
  copy-text={copyText}
  image-path={imagePath}
  image-alt-text={imageAltText}
  image-position={imagePosition}
  primary-button-text={primaryButtonText}
  primary-button-action={primaryButtonAction}
  primary-button-data={primaryButtonData}
  secondary-button-text={secondaryButtonText}
  secondary-button-action={secondaryButtonAction}
  secondary-button-data={secondaryButtonData}
  link-title={linkTitle}
  link-url={linkUrl}
  open-link-in-new-window={openLinkInNewWindow}
  properties={properties}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-two-column-feature>
  