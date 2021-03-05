/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntEventProps {
  
  /**  */
  type?: Components.SntEvent["type"]
  
  /**  */
  filters?: Components.SntEvent["filters"]
}

interface SntEventEvents {
  
}

interface SntEventSlots {
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
	let snt_event;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			snt_event = element("snt-event");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_event, "type", /*type*/ ctx[0]);
			set_custom_element_data(snt_event, "filters", /*filters*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, snt_event, anchor);

			if (default_slot) {
				default_slot.m(snt_event, null);
			}

			/*snt_event_binding*/ ctx[6](snt_event);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*type*/ 1) {
				set_custom_element_data(snt_event, "type", /*type*/ ctx[0]);
			}

			if (!current || dirty & /*filters*/ 2) {
				set_custom_element_data(snt_event, "filters", /*filters*/ ctx[1]);
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
			if (detaching) detach(snt_event);
			if (default_slot) default_slot.d(detaching);
			/*snt_event_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { type = undefined } = $$props;
	let { filters = undefined } = $$props;
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

	function snt_event_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("type" in $$props) $$invalidate(0, type = $$props.type);
		if ("filters" in $$props) $$invalidate(1, filters = $$props.filters);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [type, filters, __ref, getWebComponent, $$scope, slots, snt_event_binding];
}

class SntEvent extends SvelteComponent {
  $$prop_def: SntEventProps;
  $$events_def: SntEventEvents;
  $$slot_def: SntEventSlots;

  $on<K extends keyof SntEventEvents>(type: K, callback: (e: SntEventEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntEventProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { type: 0, filters: 1, getWebComponent: 3 });
	}

	get getWebComponent(): HTMLSntEventElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SntEvent;