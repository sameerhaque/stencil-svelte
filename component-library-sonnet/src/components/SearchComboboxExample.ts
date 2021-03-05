/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SearchComboboxExampleProps {
  
}

interface SearchComboboxExampleEvents {
  
}

interface SearchComboboxExampleSlots {
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
	let search_combobox_example;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			search_combobox_example = element("search-combobox-example");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, search_combobox_example, anchor);

			if (default_slot) {
				default_slot.m(search_combobox_example, null);
			}

			/*search_combobox_example_binding*/ ctx[4](search_combobox_example);
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
			if (detaching) detach(search_combobox_example);
			if (default_slot) default_slot.d(detaching);
			/*search_combobox_example_binding*/ ctx[4](null);
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

	function search_combobox_example_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [__ref, getWebComponent, $$scope, slots, search_combobox_example_binding];
}

class SearchComboboxExample extends SvelteComponent {
  $$prop_def: SearchComboboxExampleProps;
  $$events_def: SearchComboboxExampleEvents;
  $$slot_def: SearchComboboxExampleSlots;

  $on<K extends keyof SearchComboboxExampleEvents>(type: K, callback: (e: SearchComboboxExampleEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SearchComboboxExampleProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 1 });
	}

	get getWebComponent(): HTMLSearchComboboxExampleElement | undefined {
		return this.$$.ctx[1];
	}
}

export default SearchComboboxExample;