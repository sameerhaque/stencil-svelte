/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntCtaHighlightProps {
  
  /**  */
  cta?: Components.SntCtaHighlight["cta"]
  
  /**  */
  actionReference?: Components.SntCtaHighlight["actionReference"]
  
  /**  */
  actionData?: Components.SntCtaHighlight["actionData"]
  
  /**  */
  url?: Components.SntCtaHighlight["url"]
  
  /**  */
  urlTarget?: Components.SntCtaHighlight["urlTarget"]
  
  /**  */
  buttonId?: Components.SntCtaHighlight["buttonId"]
}

interface SntCtaHighlightEvents {
  
}

interface SntCtaHighlightSlots {
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
	let snt_cta_highlight;
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	return {
		c() {
			snt_cta_highlight = element("snt-cta-highlight");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_cta_highlight, "cta", /*cta*/ ctx[0]);
			set_custom_element_data(snt_cta_highlight, "action-reference", /*actionReference*/ ctx[1]);
			set_custom_element_data(snt_cta_highlight, "action-data", /*actionData*/ ctx[2]);
			set_custom_element_data(snt_cta_highlight, "url", /*url*/ ctx[3]);
			set_custom_element_data(snt_cta_highlight, "url-target", /*urlTarget*/ ctx[4]);
			set_custom_element_data(snt_cta_highlight, "button-id", /*buttonId*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, snt_cta_highlight, anchor);

			if (default_slot) {
				default_slot.m(snt_cta_highlight, null);
			}

			/*snt_cta_highlight_binding*/ ctx[10](snt_cta_highlight);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*cta*/ 1) {
				set_custom_element_data(snt_cta_highlight, "cta", /*cta*/ ctx[0]);
			}

			if (!current || dirty & /*actionReference*/ 2) {
				set_custom_element_data(snt_cta_highlight, "action-reference", /*actionReference*/ ctx[1]);
			}

			if (!current || dirty & /*actionData*/ 4) {
				set_custom_element_data(snt_cta_highlight, "action-data", /*actionData*/ ctx[2]);
			}

			if (!current || dirty & /*url*/ 8) {
				set_custom_element_data(snt_cta_highlight, "url", /*url*/ ctx[3]);
			}

			if (!current || dirty & /*urlTarget*/ 16) {
				set_custom_element_data(snt_cta_highlight, "url-target", /*urlTarget*/ ctx[4]);
			}

			if (!current || dirty & /*buttonId*/ 32) {
				set_custom_element_data(snt_cta_highlight, "button-id", /*buttonId*/ ctx[5]);
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
			if (detaching) detach(snt_cta_highlight);
			if (default_slot) default_slot.d(detaching);
			/*snt_cta_highlight_binding*/ ctx[10](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { cta = undefined } = $$props;
	let { actionReference = undefined } = $$props;
	let { actionData = undefined } = $$props;
	let { url = undefined } = $$props;
	let { urlTarget = undefined } = $$props;
	let { buttonId = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_cta_highlight_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("cta" in $$props) $$invalidate(0, cta = $$props.cta);
		if ("actionReference" in $$props) $$invalidate(1, actionReference = $$props.actionReference);
		if ("actionData" in $$props) $$invalidate(2, actionData = $$props.actionData);
		if ("url" in $$props) $$invalidate(3, url = $$props.url);
		if ("urlTarget" in $$props) $$invalidate(4, urlTarget = $$props.urlTarget);
		if ("buttonId" in $$props) $$invalidate(5, buttonId = $$props.buttonId);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		cta,
		actionReference,
		actionData,
		url,
		urlTarget,
		buttonId,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_cta_highlight_binding
	];
}

class SntCtaHighlight extends SvelteComponent {
  $$prop_def: SntCtaHighlightProps;
  $$events_def: SntCtaHighlightEvents;
  $$slot_def: SntCtaHighlightSlots;

  $on<K extends keyof SntCtaHighlightEvents>(type: K, callback: (e: SntCtaHighlightEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntCtaHighlightProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			cta: 0,
			actionReference: 1,
			actionData: 2,
			url: 3,
			urlTarget: 4,
			buttonId: 5,
			getWebComponent: 7
		});
	}

	get getWebComponent(): HTMLSntCtaHighlightElement | undefined {
		return this.$$.ctx[7];
	}
}

export default SntCtaHighlight;