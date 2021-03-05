
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleString = undefined;
export let styleClasses = undefined;
export let propertiesSrc = undefined;
export let properties = undefined;
export let resizeEl = undefined;
export let logoIsSet = undefined;
export let linkHref = undefined;
export let linkTitle = undefined;
export let linkTarget = undefined;
export let linkRel = undefined;
export let linkActionReference = undefined;
export let linkActionData = undefined;
export let linkId = undefined;

export const registerViewport = (...args) => __ref.registerViewport(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('resizeEl', resizeEl);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-icon-copy 
  title-string={titleString}
  style-classes={styleClasses}
  properties-src={propertiesSrc}
  properties={properties}
  logo-is-set={logoIsSet}
  link-href={linkHref}
  link-title={linkTitle}
  link-target={linkTarget}
  link-rel={linkRel}
  link-action-reference={linkActionReference}
  link-action-data={linkActionData}
  link-id={linkId}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-icon-copy>
  