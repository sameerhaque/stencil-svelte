
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let opened = undefined;
export let placeholderText = undefined;
export let labelText;
export let itemConfiguration = undefined;
export let required = undefined;
export let name = undefined;

export const open = (...args) => __ref.open(...args);
export const close = (...args) => __ref.close(...args);
export const toggle = (...args) => __ref.toggle(...args);
export const isOpen = (...args) => __ref.isOpen(...args);
export const setValue = (...args) => __ref.setValue(...args);
export const getValue = (...args) => __ref.getValue(...args);
export const setIndex = (...args) => __ref.setIndex(...args);
export const getIndex = (...args) => __ref.getIndex(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('itemConfiguration', itemConfiguration);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-dropdown 
  opened={opened}
  placeholder-text={placeholderText}
  label-text={labelText}
  required={required}
  name={name}
  on:dropdownSelectionChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-dropdown>
  