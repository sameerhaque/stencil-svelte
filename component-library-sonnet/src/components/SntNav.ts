/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntNavProps {
  
  /**  */
  expander?: Components.SntNav["expander"]
  
  /**  */
  separator?: Components.SntNav["separator"]
  
  /**  */
  styleClasses?: Components.SntNav["styleClasses"]
}

interface SntNavEvents {
  
}

interface SntNavSlots {
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
	let snt_nav;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			snt_nav = element("snt-nav");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_nav, "expander", /*expander*/ ctx[0]);
			set_custom_element_data(snt_nav, "separator", /*separator*/ ctx[1]);
			set_custom_element_data(snt_nav, "style-classes", /*styleClasses*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, snt_nav, anchor);

			if (default_slot) {
				default_slot.m(snt_nav, null);
			}

			/*snt_nav_binding*/ ctx[7](snt_nav);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*expander*/ 1) {
				set_custom_element_data(snt_nav, "expander", /*expander*/ ctx[0]);
			}

			if (!current || dirty & /*separator*/ 2) {
				set_custom_element_data(snt_nav, "separator", /*separator*/ ctx[1]);
			}

			if (!current || dirty & /*styleClasses*/ 4) {
				set_custom_element_data(snt_nav, "style-classes", /*styleClasses*/ ctx[2]);
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
			if (detaching) detach(snt_nav);
			if (default_slot) default_slot.d(detaching);
			/*snt_nav_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { expander = undefined } = $$props;
	let { separator = undefined } = $$props;
	let { styleClasses = undefined } = $$props;
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

	function snt_nav_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("expander" in $$props) $$invalidate(0, expander = $$props.expander);
		if ("separator" in $$props) $$invalidate(1, separator = $$props.separator);
		if ("styleClasses" in $$props) $$invalidate(2, styleClasses = $$props.styleClasses);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		expander,
		separator,
		styleClasses,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_nav_binding
	];
}

class SntNav extends SvelteComponent {
  $$prop_def: SntNavProps;
  $$events_def: SntNavEvents;
  $$slot_def: SntNavSlots;

  $on<K extends keyof SntNavEvents>(type: K, callback: (e: SntNavEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntNavProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			expander: 0,
			separator: 1,
			styleClasses: 2,
			getWebComponent: 4
		});
	}

	get getWebComponent(): HTMLSntNavElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SntNav;