
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let group = undefined;
export let scrollTopOffset = undefined;
export let location = undefined;
export let routeViewsUpdated = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('location', location);
$: if (__mounted) setProp('routeViewsUpdated', routeViewsUpdated);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<stencil-route-switch 
  group={group}
  scroll-top-offset={scrollTopOffset}
  
  bind:this={__ref}
>
  <slot></slot>
</stencil-route-switch>
  