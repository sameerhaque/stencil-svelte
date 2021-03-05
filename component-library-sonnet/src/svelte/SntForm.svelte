
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let text = undefined;
export let submitCallBackhandler = undefined;

export const openErrorModal = (...args) => __ref.openErrorModal(...args);
export const openSuccessModal = (...args) => __ref.openSuccessModal(...args);
export const reset = (...args) => __ref.reset(...args);
export const getData = (...args) => __ref.getData(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-form 
  text={text}
  submit-call-backhandler={submitCallBackhandler}
  on:formSubmit={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-form>
  