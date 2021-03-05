
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let group = undefined;
export let componentUpdated = undefined;
export let match = undefined;
export let url = undefined;
export let component = undefined;
export let componentProps = undefined;
export let exact = undefined;
export let routeRender = undefined;
export let scrollTopOffset = undefined;
export let routeViewsUpdated = undefined;
export let location = undefined;
export let history = undefined;
export let historyType = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('componentUpdated', componentUpdated);
$: if (__mounted) setProp('match', match);
$: if (__mounted) setProp('componentProps', componentProps);
$: if (__mounted) setProp('routeRender', routeRender);
$: if (__mounted) setProp('routeViewsUpdated', routeViewsUpdated);
$: if (__mounted) setProp('location', location);
$: if (__mounted) setProp('history', history);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<stencil-route 
  group={group}
  url={url}
  component={component}
  exact={exact}
  scroll-top-offset={scrollTopOffset}
  history-type={historyType}
  
  bind:this={__ref}
>
  <slot></slot>
</stencil-route>
  