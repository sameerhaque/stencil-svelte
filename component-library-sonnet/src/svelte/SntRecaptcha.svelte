
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let sitekey = undefined;
export let language = undefined;

export const reset = (...args) => __ref.reset(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-recaptcha 
  sitekey={sitekey}
  language={language}
  on:grecaptchaLoaded={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-recaptcha>
  