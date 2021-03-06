/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface LegalComponentProps {
  
}

interface LegalComponentEvents {
  
}

interface LegalComponentSlots {
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
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let legal_component;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			legal_component = element("legal-component");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, legal_component, anchor);

			if (default_slot) {
				default_slot.m(legal_component, null);
			}

			/*legal_component_binding*/ ctx[4](legal_component);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
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
			if (detaching) detach(legal_component);
			if (default_slot) default_slot.d(detaching);
			/*legal_component_binding*/ ctx[4](null);
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

	function legal_component_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [__ref, getWebComponent, $$scope, slots, legal_component_binding];
}

class LegalComponent extends SvelteComponent {
  $$prop_def: LegalComponentProps;
  $$events_def: LegalComponentEvents;
  $$slot_def: LegalComponentSlots;

  $on<K extends keyof LegalComponentEvents>(type: K, callback: (e: LegalComponentEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<LegalComponentProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 1 });
	}

	get getWebComponent(): HTMLLegalComponentElement | undefined {
		return this.$$.ctx[1];
	}
}

export default LegalComponent;