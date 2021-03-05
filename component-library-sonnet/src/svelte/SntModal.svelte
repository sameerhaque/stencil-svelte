
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let shown = undefined;
export let modalTitle = undefined;
export let options = undefined;
export let styleClasses = undefined;
export let languageString = undefined;

export const show = (...args) => __ref.show(...args);
export const hide = (...args) => __ref.hide(...args);
export const toggle = (...args) => __ref.toggle(...args);
export const isShown = (...args) => __ref.isShown(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('options', options);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-modal 
  shown={shown}
  modal-title={modalTitle}
  style-classes={styleClasses}
  language-string={languageString}
  on:modalEvent={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-modal>
  