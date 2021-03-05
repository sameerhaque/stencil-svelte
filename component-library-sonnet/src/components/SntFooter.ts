/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntFooterProps {
  
  /**  */
  styleClasses?: Components.SntFooter["styleClasses"]
}

interface SntFooterEvents {
  
}

interface SntFooterSlots {
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
	let snt_footer;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			snt_footer = element("snt-footer");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_footer, "style-classes", /*styleClasses*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, snt_footer, anchor);

			if (default_slot) {
				default_slot.m(snt_footer, null);
			}

			/*snt_footer_binding*/ ctx[5](snt_footer);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}

			if (!current || dirty & /*styleClasses*/ 1) {
				set_custom_element_data(snt_footer, "style-classes", /*styleClasses*/ ctx[0]);
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
			if (detaching) detach(snt_footer);
			if (default_slot) default_slot.d(detaching);
			/*snt_footer_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { styleClasses = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_footer_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("styleClasses" in $$props) $$invalidate(0, styleClasses = $$props.styleClasses);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [styleClasses, __ref, getWebComponent, $$scope, slots, snt_footer_binding];
}

class SntFooter extends SvelteComponent {
  $$prop_def: SntFooterProps;
  $$events_def: SntFooterEvents;
  $$slot_def: SntFooterSlots;

  $on<K extends keyof SntFooterEvents>(type: K, callback: (e: SntFooterEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntFooterProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { styleClasses: 0, getWebComponent: 2 });
	}

	get getWebComponent(): HTMLSntFooterElement | undefined {
		return this.$$.ctx[2];
	}
}

export default SntFooter;