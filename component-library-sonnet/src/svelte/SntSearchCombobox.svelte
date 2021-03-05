
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let autoComplete = undefined;
export let ariaLabelledby = undefined;
export let ariaLabel = undefined;
export let languageJson = undefined;
export let languageString = undefined;
export let searchFunctionRef = undefined;
export let value = undefined;
export let padding = undefined;
export let activeIndex = undefined;

export const setFocus = (...args) => __ref.setFocus(...args);
export const getInputElement = (...args) => __ref.getInputElement(...args);
export const setSearchSuggestions = (...args) => __ref.setSearchSuggestions(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-search-combobox 
  auto-complete={autoComplete}
  aria-labelledby={ariaLabelledby}
  aria-label={ariaLabel}
  language-json={languageJson}
  language-string={languageString}
  search-function-ref={searchFunctionRef}
  value={value}
  padding={padding}
  active-index={activeIndex}
  on:sntInput={onEvent}
  on:sntFocus={onEvent}
  on:sntBlur={onEvent}
  on:sntSearchSubmitted={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-search-combobox>
  