
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let imgSrc;
export let imgSrcSet = undefined;
export let titleText;
export let timeToRead;
export let tagText;
export let blogLink;
export let imgAltText = undefined;
export let openInNewWindow = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-blog 
  img-src={imgSrc}
  img-src-set={imgSrcSet}
  title-text={titleText}
  time-to-read={timeToRead}
  tag-text={tagText}
  blog-link={blogLink}
  img-alt-text={imgAltText}
  open-in-new-window={openInNewWindow}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-blog>
  