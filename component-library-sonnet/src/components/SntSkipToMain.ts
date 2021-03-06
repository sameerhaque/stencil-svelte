/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntSkipToMainProps {
  
  /**  */
  mainContentId?: Components.SntSkipToMain["mainContentId"]
  
  /**  */
  linkText?: Components.SntSkipToMain["linkText"]
  
  /**  */
  ariaLabel?: Components.SntSkipToMain["ariaLabel"]
}

interface SntSkipToMainEvents {
  
}

interface SntSkipToMainSlots {
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
	let snt_skip_to_main;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			snt_skip_to_main = element("snt-skip-to-main");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_skip_to_main, "main-content-id", /*mainContentId*/ ctx[0]);
			set_custom_element_data(snt_skip_to_main, "link-text", /*linkText*/ ctx[1]);
			set_custom_element_data(snt_skip_to_main, "aria-label", /*ariaLabel*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, snt_skip_to_main, anchor);

			if (default_slot) {
				default_slot.m(snt_skip_to_main, null);
			}

			/*snt_skip_to_main_binding*/ ctx[7](snt_skip_to_main);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*mainContentId*/ 1) {
				set_custom_element_data(snt_skip_to_main, "main-content-id", /*mainContentId*/ ctx[0]);
			}

			if (!current || dirty & /*linkText*/ 2) {
				set_custom_element_data(snt_skip_to_main, "link-text", /*linkText*/ ctx[1]);
			}

			if (!current || dirty & /*ariaLabel*/ 4) {
				set_custom_element_data(snt_skip_to_main, "aria-label", /*ariaLabel*/ ctx[2]);
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
			if (detaching) detach(snt_skip_to_main);
			if (default_slot) default_slot.d(detaching);
			/*snt_skip_to_main_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { mainContentId = undefined } = $$props;
	let { linkText = undefined } = $$props;
	let { ariaLabel = undefined } = $$props;
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

	function snt_skip_to_main_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("mainContentId" in $$props) $$invalidate(0, mainContentId = $$props.mainContentId);
		if ("linkText" in $$props) $$invalidate(1, linkText = $$props.linkText);
		if ("ariaLabel" in $$props) $$invalidate(2, ariaLabel = $$props.ariaLabel);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		mainContentId,
		linkText,
		ariaLabel,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_skip_to_main_binding
	];
}

class SntSkipToMain extends SvelteComponent {
  $$prop_def: SntSkipToMainProps;
  $$events_def: SntSkipToMainEvents;
  $$slot_def: SntSkipToMainSlots;

  $on<K extends keyof SntSkipToMainEvents>(type: K, callback: (e: SntSkipToMainEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntSkipToMainProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			mainContentId: 0,
			linkText: 1,
			ariaLabel: 2,
			getWebComponent: 4
		});
	}

	get getWebComponent(): HTMLSntSkipToMainElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SntSkipToMain;