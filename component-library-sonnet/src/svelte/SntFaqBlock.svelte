
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleText = undefined;
export let bodyText = undefined;
export let articlesCount = undefined;
export let blockLink = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-faq-block 
  title-text={titleText}
  body-text={bodyText}
  articles-count={articlesCount}
  block-link={blockLink}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-faq-block>
  