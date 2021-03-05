/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntShoppingCartProps {
  
  /**  */
  cartValue?: Components.SntShoppingCart["cartValue"]
}

interface SntShoppingCartEvents {
  
}

interface SntShoppingCartSlots {
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
	let snt_shopping_cart;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			snt_shopping_cart = element("snt-shopping-cart");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_shopping_cart, "cart-value", /*cartValue*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, snt_shopping_cart, anchor);

			if (default_slot) {
				default_slot.m(snt_shopping_cart, null);
			}

			/*snt_shopping_cart_binding*/ ctx[5](snt_shopping_cart);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}

			if (!current || dirty & /*cartValue*/ 1) {
				set_custom_element_data(snt_shopping_cart, "cart-value", /*cartValue*/ ctx[0]);
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
			if (detaching) detach(snt_shopping_cart);
			if (default_slot) default_slot.d(detaching);
			/*snt_shopping_cart_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { cartValue = undefined } = $$props;
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

	function snt_shopping_cart_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("cartValue" in $$props) $$invalidate(0, cartValue = $$props.cartValue);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [cartValue, __ref, getWebComponent, $$scope, slots, snt_shopping_cart_binding];
}

class SntShoppingCart extends SvelteComponent {
  $$prop_def: SntShoppingCartProps;
  $$events_def: SntShoppingCartEvents;
  $$slot_def: SntShoppingCartSlots;

  $on<K extends keyof SntShoppingCartEvents>(type: K, callback: (e: SntShoppingCartEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntShoppingCartProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { cartValue: 0, getWebComponent: 2 });
	}

	get getWebComponent(): HTMLSntShoppingCartElement | undefined {
		return this.$$.ctx[2];
	}
}

export default SntShoppingCart;