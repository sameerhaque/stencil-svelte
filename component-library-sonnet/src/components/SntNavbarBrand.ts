/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntNavbarBrandProps {
  
  /**  */
  href?: Components.SntNavbarBrand["href"]
  
  /**  */
  imgAlt?: Components.SntNavbarBrand["imgAlt"]
  
  /**  */
  imgSrc?: Components.SntNavbarBrand["imgSrc"]
}

interface SntNavbarBrandEvents {
  
}

interface SntNavbarBrandSlots {
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
	let snt_navbar_brand;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			snt_navbar_brand = element("snt-navbar-brand");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_navbar_brand, "href", /*href*/ ctx[0]);
			set_custom_element_data(snt_navbar_brand, "img-alt", /*imgAlt*/ ctx[1]);
			set_custom_element_data(snt_navbar_brand, "img-src", /*imgSrc*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, snt_navbar_brand, anchor);

			if (default_slot) {
				default_slot.m(snt_navbar_brand, null);
			}

			/*snt_navbar_brand_binding*/ ctx[7](snt_navbar_brand);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*href*/ 1) {
				set_custom_element_data(snt_navbar_brand, "href", /*href*/ ctx[0]);
			}

			if (!current || dirty & /*imgAlt*/ 2) {
				set_custom_element_data(snt_navbar_brand, "img-alt", /*imgAlt*/ ctx[1]);
			}

			if (!current || dirty & /*imgSrc*/ 4) {
				set_custom_element_data(snt_navbar_brand, "img-src", /*imgSrc*/ ctx[2]);
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
			if (detaching) detach(snt_navbar_brand);
			if (default_slot) default_slot.d(detaching);
			/*snt_navbar_brand_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { href = undefined } = $$props;
	let { imgAlt = undefined } = $$props;
	let { imgSrc = undefined } = $$props;
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

	function snt_navbar_brand_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("href" in $$props) $$invalidate(0, href = $$props.href);
		if ("imgAlt" in $$props) $$invalidate(1, imgAlt = $$props.imgAlt);
		if ("imgSrc" in $$props) $$invalidate(2, imgSrc = $$props.imgSrc);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		href,
		imgAlt,
		imgSrc,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_navbar_brand_binding
	];
}

class SntNavbarBrand extends SvelteComponent {
  $$prop_def: SntNavbarBrandProps;
  $$events_def: SntNavbarBrandEvents;
  $$slot_def: SntNavbarBrandSlots;

  $on<K extends keyof SntNavbarBrandEvents>(type: K, callback: (e: SntNavbarBrandEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntNavbarBrandProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			href: 0,
			imgAlt: 1,
			imgSrc: 2,
			getWebComponent: 4
		});
	}

	get getWebComponent(): HTMLSntNavbarBrandElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SntNavbarBrand;