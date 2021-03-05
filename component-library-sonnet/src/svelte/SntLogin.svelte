
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let authed = undefined;
export let languageJson = undefined;
export let accountLoginUrl = undefined;
export let accountDashboardUrl = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<snt-login 
  authed={authed}
  language-json={languageJson}
  account-login-url={accountLoginUrl}
  account-dashboard-url={accountDashboardUrl}
  
  bind:this={__ref}
>
  <slot></slot>
</snt-login>
  