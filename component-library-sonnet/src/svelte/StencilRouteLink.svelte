
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let url = undefined;
export let urlMatch = undefined;
export let activeClass = undefined;
export let exact = undefined;
export let strict = undefined;
export let custom = undefined;
export let anchorClass = undefined;
export let anchorRole = undefined;
export let anchorTitle = undefined;
export let anchorTabIndex = undefined;
export let anchorId = undefined;
export let history = undefined;
export let location = undefined;
export let root = undefined;
export let ariaHaspopup = undefined;
export let ariaPosinset = undefined;
export let ariaSetsize = undefined;
export let ariaLabel = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('history', history);
$: if (__mounted) setProp('location', location);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<stencil-route-link 
  url={url}
  url-match={urlMatch}
  active-class={activeClass}
  exact={exact}
  strict={strict}
  custom={custom}
  anchor-class={anchorClass}
  anchor-role={anchorRole}
  anchor-title={anchorTitle}
  anchor-tab-index={anchorTabIndex}
  anchor-id={anchorId}
  root={root}
  aria-haspopup={ariaHaspopup}
  aria-posinset={ariaPosinset}
  aria-setsize={ariaSetsize}
  aria-label={ariaLabel}
  
  bind:this={__ref}
>
  <slot></slot>
</stencil-route-link>
  