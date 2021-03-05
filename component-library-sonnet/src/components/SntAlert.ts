/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntAlertProps {
  
  /**  */
  dismissible?: Components.SntAlert["dismissible"]
  
  /**  */
  animatable?: Components.SntAlert["animatable"]
  
  /**  */
  type?: Components.SntAlert["type"]
  
  /**  */
  explorerOnly?: Components.SntAlert["explorerOnly"]
}

interface SntAlertEvents {
  
  /**  */
  dismissed: Parameters<JSX.SntAlert["onDismissed"]>[0]
}

interface SntAlertSlots {
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
	let snt_alert;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	return {
		c() {
			snt_alert = element("snt-alert");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_alert, "dismissible", /*dismissible*/ ctx[0]);
			set_custom_element_data(snt_alert, "animatable", /*animatable*/ ctx[1]);
			set_custom_element_data(snt_alert, "type", /*type*/ ctx[2]);
			set_custom_element_data(snt_alert, "explorer-only", /*explorerOnly*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, snt_alert, anchor);

			if (default_slot) {
				default_slot.m(snt_alert, null);
			}

			/*snt_alert_binding*/ ctx[10](snt_alert);
			current = true;

			if (!mounted) {
				dispose = listen(snt_alert, "dismissed", /*onEvent*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*dismissible*/ 1) {
				set_custom_element_data(snt_alert, "dismissible", /*dismissible*/ ctx[0]);
			}

			if (!current || dirty & /*animatable*/ 2) {
				set_custom_element_data(snt_alert, "animatable", /*animatable*/ ctx[1]);
			}

			if (!current || dirty & /*type*/ 4) {
				set_custom_element_data(snt_alert, "type", /*type*/ ctx[2]);
			}

			if (!current || dirty & /*explorerOnly*/ 8) {
				set_custom_element_data(snt_alert, "explorer-only", /*explorerOnly*/ ctx[3]);
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
			if (detaching) detach(snt_alert);
			if (default_slot) default_slot.d(detaching);
			/*snt_alert_binding*/ ctx[10](null);
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
	let { dismissible = undefined } = $$props;
	let { animatable = undefined } = $$props;
	let { type = undefined } = $$props;
	let { explorerOnly = undefined } = $$props;
	const dismiss = (...args) => __ref.dismiss(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_alert_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("dismissible" in $$props) $$invalidate(0, dismissible = $$props.dismissible);
		if ("animatable" in $$props) $$invalidate(1, animatable = $$props.animatable);
		if ("type" in $$props) $$invalidate(2, type = $$props.type);
		if ("explorerOnly" in $$props) $$invalidate(3, explorerOnly = $$props.explorerOnly);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		dismissible,
		animatable,
		type,
		explorerOnly,
		__ref,
		onEvent,
		dismiss,
		getWebComponent,
		$$scope,
		slots,
		snt_alert_binding
	];
}

class SntAlert extends SvelteComponent {
  $$prop_def: SntAlertProps;
  $$events_def: SntAlertEvents;
  $$slot_def: SntAlertSlots;

  $on<K extends keyof SntAlertEvents>(type: K, callback: (e: SntAlertEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntAlertProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			dismissible: 0,
			animatable: 1,
			type: 2,
			explorerOnly: 3,
			dismiss: 6,
			getWebComponent: 7
		});
	}

	
  /**  */
 get dismiss(): Components.SntAlert["dismiss"] {
		return this.$$.ctx[6];
	}

	get getWebComponent(): HTMLSntAlertElement | undefined {
		return this.$$.ctx[7];
	}
}

export default SntAlert;