
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let structure = undefined;

export const getTreeitems = (...args) => __ref.getTreeitems(...args);
export const updateExpandedTreeitems = (...args) => __ref.updateExpandedTreeitems(...args);
export const updateVisibleTreeitems = (...args) => __ref.updateVisibleTreeitems(...args);
export const updateFocusedTreeitems = (...args) => __ref.updateFocusedTreeitems(...args);
export const updateSelectedTreeitems = (...args) => __ref.updateSelectedTreeitems(...args);
export const findNodeByProperty = (...args) => __ref.findNodeByProperty(...args);
export const selectNodeByUrlOrKey = (...args) => __ref.selectNodeByUrlOrKey(...args);
export const updateTreeView = (...args) => __ref.updateTreeView(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-treeview 
  structure={structure}
  on:sntChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-treeview>
  