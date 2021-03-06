/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntPaginationProps {
  
  /**  */
  prevLinkLang?: Components.SntPagination["prevLinkLang"]
  
  /**  */
  nextLinkLang?: Components.SntPagination["nextLinkLang"]
  
  /**  */
  pageNumLang?: Components.SntPagination["pageNumLang"]
  
  /**  */
  pageNumAriaLang?: Components.SntPagination["pageNumAriaLang"]
  
  /**  */
  paginationNavLang?: Components.SntPagination["paginationNavLang"]
  
  /**  */
  totalPages?: Components.SntPagination["totalPages"]
  
  /**  */
  curr?: Components.SntPagination["curr"]
}

interface SntPaginationEvents {
  
  /**  */
  pageChanged: Parameters<JSX.SntPagination["onPageChanged"]>[0]
}

interface SntPaginationSlots {
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
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let snt_pagination;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	return {
		c() {
			snt_pagination = element("snt-pagination");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_pagination, "prev-link-lang", /*prevLinkLang*/ ctx[0]);
			set_custom_element_data(snt_pagination, "next-link-lang", /*nextLinkLang*/ ctx[1]);
			set_custom_element_data(snt_pagination, "page-num-lang", /*pageNumLang*/ ctx[2]);
			set_custom_element_data(snt_pagination, "page-num-aria-lang", /*pageNumAriaLang*/ ctx[3]);
			set_custom_element_data(snt_pagination, "pagination-nav-lang", /*paginationNavLang*/ ctx[4]);
			set_custom_element_data(snt_pagination, "total-pages", /*totalPages*/ ctx[5]);
			set_custom_element_data(snt_pagination, "curr", /*curr*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, snt_pagination, anchor);

			if (default_slot) {
				default_slot.m(snt_pagination, null);
			}

			/*snt_pagination_binding*/ ctx[13](snt_pagination);
			current = true;

			if (!mounted) {
				dispose = listen(snt_pagination, "pageChanged", /*onEvent*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2048) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}

			if (!current || dirty & /*prevLinkLang*/ 1) {
				set_custom_element_data(snt_pagination, "prev-link-lang", /*prevLinkLang*/ ctx[0]);
			}

			if (!current || dirty & /*nextLinkLang*/ 2) {
				set_custom_element_data(snt_pagination, "next-link-lang", /*nextLinkLang*/ ctx[1]);
			}

			if (!current || dirty & /*pageNumLang*/ 4) {
				set_custom_element_data(snt_pagination, "page-num-lang", /*pageNumLang*/ ctx[2]);
			}

			if (!current || dirty & /*pageNumAriaLang*/ 8) {
				set_custom_element_data(snt_pagination, "page-num-aria-lang", /*pageNumAriaLang*/ ctx[3]);
			}

			if (!current || dirty & /*paginationNavLang*/ 16) {
				set_custom_element_data(snt_pagination, "pagination-nav-lang", /*paginationNavLang*/ ctx[4]);
			}

			if (!current || dirty & /*totalPages*/ 32) {
				set_custom_element_data(snt_pagination, "total-pages", /*totalPages*/ ctx[5]);
			}

			if (!current || dirty & /*curr*/ 64) {
				set_custom_element_data(snt_pagination, "curr", /*curr*/ ctx[6]);
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
			if (detaching) detach(snt_pagination);
			if (default_slot) default_slot.d(detaching);
			/*snt_pagination_binding*/ ctx[13](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { prevLinkLang = undefined } = $$props;
	let { nextLinkLang = undefined } = $$props;
	let { pageNumLang = undefined } = $$props;
	let { pageNumAriaLang = undefined } = $$props;
	let { paginationNavLang = undefined } = $$props;
	let { totalPages = undefined } = $$props;
	let { curr = undefined } = $$props;
	const setPageNumber = (...args) => __ref.setPageNumber(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(7, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_pagination_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(7, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("prevLinkLang" in $$props) $$invalidate(0, prevLinkLang = $$props.prevLinkLang);
		if ("nextLinkLang" in $$props) $$invalidate(1, nextLinkLang = $$props.nextLinkLang);
		if ("pageNumLang" in $$props) $$invalidate(2, pageNumLang = $$props.pageNumLang);
		if ("pageNumAriaLang" in $$props) $$invalidate(3, pageNumAriaLang = $$props.pageNumAriaLang);
		if ("paginationNavLang" in $$props) $$invalidate(4, paginationNavLang = $$props.paginationNavLang);
		if ("totalPages" in $$props) $$invalidate(5, totalPages = $$props.totalPages);
		if ("curr" in $$props) $$invalidate(6, curr = $$props.curr);
		if ("$$scope" in $$props) $$invalidate(11, $$scope = $$props.$$scope);
	};

	return [
		prevLinkLang,
		nextLinkLang,
		pageNumLang,
		pageNumAriaLang,
		paginationNavLang,
		totalPages,
		curr,
		__ref,
		onEvent,
		setPageNumber,
		getWebComponent,
		$$scope,
		slots,
		snt_pagination_binding
	];
}

class SntPagination extends SvelteComponent {
  $$prop_def: SntPaginationProps;
  $$events_def: SntPaginationEvents;
  $$slot_def: SntPaginationSlots;

  $on<K extends keyof SntPaginationEvents>(type: K, callback: (e: SntPaginationEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntPaginationProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			prevLinkLang: 0,
			nextLinkLang: 1,
			pageNumLang: 2,
			pageNumAriaLang: 3,
			paginationNavLang: 4,
			totalPages: 5,
			curr: 6,
			setPageNumber: 9,
			getWebComponent: 10
		});
	}

	
  /**  */
 get setPageNumber(): Components.SntPagination["setPageNumber"] {
		return this.$$.ctx[9];
	}

	get getWebComponent(): HTMLSntPaginationElement | undefined {
		return this.$$.ctx[10];
	}
}

export default SntPagination;