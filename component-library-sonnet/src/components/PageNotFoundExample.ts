/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface PageNotFoundExampleProps {
  
}

interface PageNotFoundExampleEvents {
  
}

interface PageNotFoundExampleSlots {
  default: any
}
  
/* generated by Svelte v3.35.0 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let page_not_found_example;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			page_not_found_example = element("page-not-found-example");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, page_not_found_example, anchor);

			if (default_slot) {
				default_slot.m(page_not_found_example, null);
			}

			/*page_not_found_example_binding*/ ctx[4](page_not_found_example);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(page_not_found_example);
			if (default_slot) default_slot.d(detaching);
			/*page_not_found_example_binding*/ ctx[4](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(0, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function page_not_found_example_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [__ref, getWebComponent, $$scope, slots, page_not_found_example_binding];
}

class PageNotFoundExample extends SvelteComponent {
  $$prop_def: PageNotFoundExampleProps;
  $$events_def: PageNotFoundExampleEvents;
  $$slot_def: PageNotFoundExampleSlots;

  $on<K extends keyof PageNotFoundExampleEvents>(type: K, callback: (e: PageNotFoundExampleEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<PageNotFoundExampleProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 1 });
	}

	get getWebComponent(): HTMLPageNotFoundExampleElement | undefined {
		return this.$$.ctx[1];
	}
}

export default PageNotFoundExample;