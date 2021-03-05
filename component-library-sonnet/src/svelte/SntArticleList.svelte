
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let articlesJson = undefined;
export let articles = undefined;
export let heading = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('articles', articles);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-article-list 
  articles-json={articlesJson}
  heading={heading}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-article-list>
  