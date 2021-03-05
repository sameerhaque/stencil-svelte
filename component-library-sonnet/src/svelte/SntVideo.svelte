
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let headline = undefined;
export let shareUrl;
export let oembedUrl;
export let playUrl;
export let transcriptSummaryOpen = undefined;
export let transcriptSummaryClose = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-video 
  headline={headline}
  share-url={shareUrl}
  oembed-url={oembedUrl}
  play-url={playUrl}
  transcript-summary-open={transcriptSummaryOpen}
  transcript-summary-close={transcriptSummaryClose}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-video>
  