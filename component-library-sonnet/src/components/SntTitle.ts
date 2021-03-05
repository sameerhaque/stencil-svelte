/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntTitleProps {
  
  /**  */
  titleType?: Components.SntTitle["titleType"]
  
  /**  */
  clampLines?: Components.SntTitle["clampLines"]
  
  /**  */
  truncationString?: Components.SntTitle["truncationString"]
}

interface SntTitleEvents {
  
}

interface SntTitleSlots {
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
	let snt_title;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			snt_title = element("snt-title");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_title, "title-type", /*titleType*/ ctx[0]);
			set_custom_element_data(snt_title, "clamp-lines", /*clampLines*/ ctx[1]);
			set_custom_element_data(snt_title, "truncation-string", /*truncationString*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, snt_title, anchor);

			if (default_slot) {
				default_slot.m(snt_title, null);
			}

			/*snt_title_binding*/ ctx[9](snt_title);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*titleType*/ 1) {
				set_custom_element_data(snt_title, "title-type", /*titleType*/ ctx[0]);
			}

			if (!current || dirty & /*clampLines*/ 2) {
				set_custom_element_data(snt_title, "clamp-lines", /*clampLines*/ ctx[1]);
			}

			if (!current || dirty & /*truncationString*/ 4) {
				set_custom_element_data(snt_title, "truncation-string", /*truncationString*/ ctx[2]);
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
			if (detaching) detach(snt_title);
			if (default_slot) default_slot.d(detaching);
			/*snt_title_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { titleType = undefined } = $$props;
	let { clampLines = undefined } = $$props;
	let { truncationString = undefined } = $$props;
	const clampTitle = (...args) => __ref.clampTitle(...args);
	const setTitle = (...args) => __ref.setTitle(...args);
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

	function snt_title_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("titleType" in $$props) $$invalidate(0, titleType = $$props.titleType);
		if ("clampLines" in $$props) $$invalidate(1, clampLines = $$props.clampLines);
		if ("truncationString" in $$props) $$invalidate(2, truncationString = $$props.truncationString);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		titleType,
		clampLines,
		truncationString,
		__ref,
		clampTitle,
		setTitle,
		getWebComponent,
		$$scope,
		slots,
		snt_title_binding
	];
}

class SntTitle extends SvelteComponent {
  $$prop_def: SntTitleProps;
  $$events_def: SntTitleEvents;
  $$slot_def: SntTitleSlots;

  $on<K extends keyof SntTitleEvents>(type: K, callback: (e: SntTitleEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntTitleProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			titleType: 0,
			clampLines: 1,
			truncationString: 2,
			clampTitle: 4,
			setTitle: 5,
			getWebComponent: 6
		});
	}

	
  /**  */
 get clampTitle(): Components.SntTitle["clampTitle"] {
		return this.$$.ctx[4];
	}

	
  /**  */
 get setTitle(): Components.SntTitle["setTitle"] {
		return this.$$.ctx[5];
	}

	get getWebComponent(): HTMLSntTitleElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SntTitle;