
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let titleText = undefined;
export let blogLink = undefined;
export let publishedTime = undefined;
export let timeToRead = undefined;
export let accessibilityText = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-blog-info 
  title-text={titleText}
  blog-link={blogLink}
  published-time={publishedTime}
  time-to-read={timeToRead}
  accessibility-text={accessibilityText}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-blog-info>
  