/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntSearchTypeaheadProps {
  
  /**  */
  languageJson?: Components.SntSearchTypeahead["languageJson"]
  
  /**  */
  searchComboboxId?: Components.SntSearchTypeahead["searchComboboxId"]
}

interface SntSearchTypeaheadEvents {
  
}

interface SntSearchTypeaheadSlots {
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
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let snt_search_typeahead;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			snt_search_typeahead = element("snt-search-typeahead");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_search_typeahead, "language-json", /*languageJson*/ ctx[0]);
			set_custom_element_data(snt_search_typeahead, "search-combobox-id", /*searchComboboxId*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, snt_search_typeahead, anchor);

			if (default_slot) {
				default_slot.m(snt_search_typeahead, null);
			}

			/*snt_search_typeahead_binding*/ ctx[6](snt_search_typeahead);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*languageJson*/ 1) {
				set_custom_element_data(snt_search_typeahead, "language-json", /*languageJson*/ ctx[0]);
			}

			if (!current || dirty & /*searchComboboxId*/ 2) {
				set_custom_element_data(snt_search_typeahead, "search-combobox-id", /*searchComboboxId*/ ctx[1]);
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
			if (detaching) detach(snt_search_typeahead);
			if (default_slot) default_slot.d(detaching);
			/*snt_search_typeahead_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { languageJson = undefined } = $$props;
	let { searchComboboxId = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_search_typeahead_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("languageJson" in $$props) $$invalidate(0, languageJson = $$props.languageJson);
		if ("searchComboboxId" in $$props) $$invalidate(1, searchComboboxId = $$props.searchComboboxId);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		languageJson,
		searchComboboxId,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_search_typeahead_binding
	];
}

class SntSearchTypeahead extends SvelteComponent {
  $$prop_def: SntSearchTypeaheadProps;
  $$events_def: SntSearchTypeaheadEvents;
  $$slot_def: SntSearchTypeaheadSlots;

  $on<K extends keyof SntSearchTypeaheadEvents>(type: K, callback: (e: SntSearchTypeaheadEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntSearchTypeaheadProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			languageJson: 0,
			searchComboboxId: 1,
			getWebComponent: 3
		});
	}

	get getWebComponent(): HTMLSntSearchTypeaheadElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SntSearchTypeahead;