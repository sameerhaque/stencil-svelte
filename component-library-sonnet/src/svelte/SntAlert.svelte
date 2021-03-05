
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let dismissible = undefined;
export let animatable = undefined;
export let type = undefined;
export let explorerOnly = undefined;

export const dismiss = (...args) => __ref.dismiss(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-alert 
  dismissible={dismissible}
  animatable={animatable}
  type={type}
  explorer-only={explorerOnly}
  on:dismissed={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-alert>
  