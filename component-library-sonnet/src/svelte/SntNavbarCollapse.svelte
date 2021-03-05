
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let shown = undefined;
export let viewport = undefined;
export let logoUrl = undefined;

export const toggleShown = (...args) => __ref.toggleShown(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-navbar-collapse 
  shown={shown}
  viewport={viewport}
  logo-url={logoUrl}
  on:navbarToggled={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-navbar-collapse>
  