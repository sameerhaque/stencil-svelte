
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let groupId = undefined;
export let groupHeadline = undefined;
export let selected = undefined;
export let slideSelector = undefined;
export let indicatorSelector = undefined;
export let prevSelector = undefined;
export let nextSelector = undefined;
export let cycleType = undefined;
export let ride = undefined;
export let wrap = undefined;

export const onShow = (...args) => __ref.onShow(...args);
export const onHide = (...args) => __ref.onHide(...args);
export const next = (...args) => __ref.next(...args);
export const prev = (...args) => __ref.prev(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<testimonials-group 
  group-id={groupId}
  group-headline={groupHeadline}
  selected={selected}
  slide-selector={slideSelector}
  indicator-selector={indicatorSelector}
  prev-selector={prevSelector}
  next-selector={nextSelector}
  cycle-type={cycleType}
  ride={ride}
  wrap={wrap}
  on:showSlide={onEvent}
  on:hideSlide={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</testimonials-group>
  