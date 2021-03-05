
import App from './App.svelte';
import {applyPolyfills, defineCustomElements } from '../sonnet/loader';

export * from '../component-library-sonnet/src/proxies';

if (typeof window !== 'undefined') {
	applyPolyfills().then(() => { 
		defineCustomElements(window);
	});
}


const app = new App({
	target: document.body
});

export default app;
