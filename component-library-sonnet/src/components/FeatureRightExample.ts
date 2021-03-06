/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface FeatureRightExampleProps {
  
  /**  */
  viewport?: Components.FeatureRightExample["viewport"]
}

interface FeatureRightExampleEvents {
  
}

interface FeatureRightExampleSlots {
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
	let feature_right_example;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			feature_right_example = element("feature-right-example");
			if (default_slot) default_slot.c();
			set_custom_element_data(feature_right_example, "viewport", /*viewport*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, feature_right_example, anchor);

			if (default_slot) {
				default_slot.m(feature_right_example, null);
			}

			/*feature_right_example_binding*/ ctx[5](feature_right_example);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}

			if (!current || dirty & /*viewport*/ 1) {
				set_custom_element_data(feature_right_example, "viewport", /*viewport*/ ctx[0]);
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
			if (detaching) detach(feature_right_example);
			if (default_slot) default_slot.d(detaching);
			/*feature_right_example_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { viewport = undefined } = $$props;
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

	function feature_right_example_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("viewport" in $$props) $$invalidate(0, viewport = $$props.viewport);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [
		viewport,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		feature_right_example_binding
	];
}

class FeatureRightExample extends SvelteComponent {
  $$prop_def: FeatureRightExampleProps;
  $$events_def: FeatureRightExampleEvents;
  $$slot_def: FeatureRightExampleSlots;

  $on<K extends keyof FeatureRightExampleEvents>(type: K, callback: (e: FeatureRightExampleEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<FeatureRightExampleProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { viewport: 0, getWebComponent: 2 });
	}

	get getWebComponent(): HTMLFeatureRightExampleElement | undefined {
		return this.$$.ctx[2];
	}
}

export default FeatureRightExample;