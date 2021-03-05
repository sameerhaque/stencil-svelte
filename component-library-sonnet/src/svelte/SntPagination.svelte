
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let prevLinkLang = undefined;
export let nextLinkLang = undefined;
export let pageNumLang = undefined;
export let pageNumAriaLang = undefined;
export let paginationNavLang = undefined;
export let totalPages = undefined;
export let curr = undefined;

export const setPageNumber = (...args) => __ref.setPageNumber(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-pagination 
  prev-link-lang={prevLinkLang}
  next-link-lang={nextLinkLang}
  page-num-lang={pageNumLang}
  page-num-aria-lang={pageNumAriaLang}
  pagination-nav-lang={paginationNavLang}
  total-pages={totalPages}
  curr={curr}
  on:pageChanged={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</snt-pagination>
  