/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntSearchResultListProps {
  
  /**  */
  searchResultListJson?: Components.SntSearchResultList["searchResultListJson"]
  
  /**  */
  noResultMsg?: Components.SntSearchResultList["noResultMsg"]
  
  /**  */
  separator?: Components.SntSearchResultList["separator"]
}

interface SntSearchResultListEvents {
  
}

interface SntSearchResultListSlots {
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
	let snt_search_result_list;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			snt_search_result_list = element("snt-search-result-list");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_search_result_list, "search-result-list-json", /*searchResultListJson*/ ctx[0]);
			set_custom_element_data(snt_search_result_list, "no-result-msg", /*noResultMsg*/ ctx[1]);
			set_custom_element_data(snt_search_result_list, "separator", /*separator*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, snt_search_result_list, anchor);

			if (default_slot) {
				default_slot.m(snt_search_result_list, null);
			}

			/*snt_search_result_list_binding*/ ctx[7](snt_search_result_list);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*searchResultListJson*/ 1) {
				set_custom_element_data(snt_search_result_list, "search-result-list-json", /*searchResultListJson*/ ctx[0]);
			}

			if (!current || dirty & /*noResultMsg*/ 2) {
				set_custom_element_data(snt_search_result_list, "no-result-msg", /*noResultMsg*/ ctx[1]);
			}

			if (!current || dirty & /*separator*/ 4) {
				set_custom_element_data(snt_search_result_list, "separator", /*separator*/ ctx[2]);
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
			if (detaching) detach(snt_search_result_list);
			if (default_slot) default_slot.d(detaching);
			/*snt_search_result_list_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { searchResultListJson = undefined } = $$props;
	let { noResultMsg = undefined } = $$props;
	let { separator = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_search_result_list_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("searchResultListJson" in $$props) $$invalidate(0, searchResultListJson = $$props.searchResultListJson);
		if ("noResultMsg" in $$props) $$invalidate(1, noResultMsg = $$props.noResultMsg);
		if ("separator" in $$props) $$invalidate(2, separator = $$props.separator);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		searchResultListJson,
		noResultMsg,
		separator,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_search_result_list_binding
	];
}

class SntSearchResultList extends SvelteComponent {
  $$prop_def: SntSearchResultListProps;
  $$events_def: SntSearchResultListEvents;
  $$slot_def: SntSearchResultListSlots;

  $on<K extends keyof SntSearchResultListEvents>(type: K, callback: (e: SntSearchResultListEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntSearchResultListProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			searchResultListJson: 0,
			noResultMsg: 1,
			separator: 2,
			getWebComponent: 4
		});
	}

	get getWebComponent(): HTMLSntSearchResultListElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SntSearchResultList;