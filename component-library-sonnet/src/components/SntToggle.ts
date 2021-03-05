/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntToggleProps {
  
}

interface SntToggleEvents {
  
  /**  */
  toggle: Parameters<JSX.SntToggle["onToggle"]>[0]
}

interface SntToggleSlots {
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
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let snt_toggle;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			snt_toggle = element("snt-toggle");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, snt_toggle, anchor);

			if (default_slot) {
				default_slot.m(snt_toggle, null);
			}

			/*snt_toggle_binding*/ ctx[5](snt_toggle);
			current = true;

			if (!mounted) {
				dispose = listen(snt_toggle, "toggle", /*onEvent*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
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
			if (detaching) detach(snt_toggle);
			if (default_slot) default_slot.d(detaching);
			/*snt_toggle_binding*/ ctx[5](null);
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
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(0, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_toggle_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [__ref, onEvent, getWebComponent, $$scope, slots, snt_toggle_binding];
}

class SntToggle extends SvelteComponent {
  $$prop_def: SntToggleProps;
  $$events_def: SntToggleEvents;
  $$slot_def: SntToggleSlots;

  $on<K extends keyof SntToggleEvents>(type: K, callback: (e: SntToggleEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntToggleProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 2 });
	}

	get getWebComponent(): HTMLSntToggleElement | undefined {
		return this.$$.ctx[2];
	}
}

export default SntToggle;