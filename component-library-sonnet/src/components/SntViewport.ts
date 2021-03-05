/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntViewportProps {
  
  /**  */
  name?: Components.SntViewport["name"]
  
  /**  */
  devices?: Components.SntViewport["devices"]
  
  /**  */
  height?: Components.SntViewport["height"]
  
  /**  */
  spacing?: Components.SntViewport["spacing"]
}

interface SntViewportEvents {
  
}

interface SntViewportSlots {
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
	let snt_viewport;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			snt_viewport = element("snt-viewport");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_viewport, "name", /*name*/ ctx[0]);
			set_custom_element_data(snt_viewport, "devices", /*devices*/ ctx[1]);
			set_custom_element_data(snt_viewport, "height", /*height*/ ctx[2]);
			set_custom_element_data(snt_viewport, "spacing", /*spacing*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, snt_viewport, anchor);

			if (default_slot) {
				default_slot.m(snt_viewport, null);
			}

			/*snt_viewport_binding*/ ctx[8](snt_viewport);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*name*/ 1) {
				set_custom_element_data(snt_viewport, "name", /*name*/ ctx[0]);
			}

			if (!current || dirty & /*devices*/ 2) {
				set_custom_element_data(snt_viewport, "devices", /*devices*/ ctx[1]);
			}

			if (!current || dirty & /*height*/ 4) {
				set_custom_element_data(snt_viewport, "height", /*height*/ ctx[2]);
			}

			if (!current || dirty & /*spacing*/ 8) {
				set_custom_element_data(snt_viewport, "spacing", /*spacing*/ ctx[3]);
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
			if (detaching) detach(snt_viewport);
			if (default_slot) default_slot.d(detaching);
			/*snt_viewport_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { name = undefined } = $$props;
	let { devices = undefined } = $$props;
	let { height = undefined } = $$props;
	let { spacing = undefined } = $$props;
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

	function snt_viewport_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("devices" in $$props) $$invalidate(1, devices = $$props.devices);
		if ("height" in $$props) $$invalidate(2, height = $$props.height);
		if ("spacing" in $$props) $$invalidate(3, spacing = $$props.spacing);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		name,
		devices,
		height,
		spacing,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_viewport_binding
	];
}

class SntViewport extends SvelteComponent {
  $$prop_def: SntViewportProps;
  $$events_def: SntViewportEvents;
  $$slot_def: SntViewportSlots;

  $on<K extends keyof SntViewportEvents>(type: K, callback: (e: SntViewportEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntViewportProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			name: 0,
			devices: 1,
			height: 2,
			spacing: 3,
			getWebComponent: 5
		});
	}

	get getWebComponent(): HTMLSntViewportElement | undefined {
		return this.$$.ctx[5];
	}
}

export default SntViewport;