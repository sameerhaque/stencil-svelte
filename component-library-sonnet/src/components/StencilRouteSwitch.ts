/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface StencilRouteSwitchProps {
  
  /**  */
  group?: Components.StencilRouteSwitch["group"]
  
  /**  */
  scrollTopOffset?: Components.StencilRouteSwitch["scrollTopOffset"]
  
  /**  */
  location?: Components.StencilRouteSwitch["location"]
  
  /**  */
  routeViewsUpdated?: Components.StencilRouteSwitch["routeViewsUpdated"]
}

interface StencilRouteSwitchEvents {
  
}

interface StencilRouteSwitchSlots {
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
	let stencil_route_switch;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			stencil_route_switch = element("stencil-route-switch");
			if (default_slot) default_slot.c();
			set_custom_element_data(stencil_route_switch, "group", /*group*/ ctx[0]);
			set_custom_element_data(stencil_route_switch, "scroll-top-offset", /*scrollTopOffset*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, stencil_route_switch, anchor);

			if (default_slot) {
				default_slot.m(stencil_route_switch, null);
			}

			/*stencil_route_switch_binding*/ ctx[9](stencil_route_switch);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*group*/ 1) {
				set_custom_element_data(stencil_route_switch, "group", /*group*/ ctx[0]);
			}

			if (!current || dirty & /*scrollTopOffset*/ 2) {
				set_custom_element_data(stencil_route_switch, "scroll-top-offset", /*scrollTopOffset*/ ctx[1]);
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
			if (detaching) detach(stencil_route_switch);
			if (default_slot) default_slot.d(detaching);
			/*stencil_route_switch_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { group = undefined } = $$props;
	let { scrollTopOffset = undefined } = $$props;
	let { location = undefined } = $$props;
	let { routeViewsUpdated = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(6, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function stencil_route_switch_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("group" in $$props) $$invalidate(0, group = $$props.group);
		if ("scrollTopOffset" in $$props) $$invalidate(1, scrollTopOffset = $$props.scrollTopOffset);
		if ("location" in $$props) $$invalidate(3, location = $$props.location);
		if ("routeViewsUpdated" in $$props) $$invalidate(4, routeViewsUpdated = $$props.routeViewsUpdated);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, location*/ 72) {
			$: if (__mounted) setProp("location", location);
		}

		if ($$self.$$.dirty & /*__mounted, routeViewsUpdated*/ 80) {
			$: if (__mounted) setProp("routeViewsUpdated", routeViewsUpdated);
		}
	};

	return [
		group,
		scrollTopOffset,
		__ref,
		location,
		routeViewsUpdated,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		stencil_route_switch_binding
	];
}

class StencilRouteSwitch extends SvelteComponent {
  $$prop_def: StencilRouteSwitchProps;
  $$events_def: StencilRouteSwitchEvents;
  $$slot_def: StencilRouteSwitchSlots;

  $on<K extends keyof StencilRouteSwitchEvents>(type: K, callback: (e: StencilRouteSwitchEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<StencilRouteSwitchProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			group: 0,
			scrollTopOffset: 1,
			location: 3,
			routeViewsUpdated: 4,
			getWebComponent: 5
		});
	}

	get getWebComponent(): HTMLStencilRouteSwitchElement | undefined {
		return this.$$.ctx[5];
	}
}

export default StencilRouteSwitch;