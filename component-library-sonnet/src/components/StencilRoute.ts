/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface StencilRouteProps {
  
  /**  */
  group?: Components.StencilRoute["group"]
  
  /**  */
  componentUpdated?: Components.StencilRoute["componentUpdated"]
  
  /**  */
  match?: Components.StencilRoute["match"]
  
  /**  */
  url?: Components.StencilRoute["url"]
  
  /**  */
  component?: Components.StencilRoute["component"]
  
  /**  */
  componentProps?: Components.StencilRoute["componentProps"]
  
  /**  */
  exact?: Components.StencilRoute["exact"]
  
  /**  */
  routeRender?: Components.StencilRoute["routeRender"]
  
  /**  */
  scrollTopOffset?: Components.StencilRoute["scrollTopOffset"]
  
  /**  */
  routeViewsUpdated?: Components.StencilRoute["routeViewsUpdated"]
  
  /**  */
  location?: Components.StencilRoute["location"]
  
  /**  */
  history?: Components.StencilRoute["history"]
  
  /**  */
  historyType?: Components.StencilRoute["historyType"]
}

interface StencilRouteEvents {
  
}

interface StencilRouteSlots {
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
	let stencil_route;
	let current;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	return {
		c() {
			stencil_route = element("stencil-route");
			if (default_slot) default_slot.c();
			set_custom_element_data(stencil_route, "group", /*group*/ ctx[0]);
			set_custom_element_data(stencil_route, "url", /*url*/ ctx[1]);
			set_custom_element_data(stencil_route, "component", /*component*/ ctx[2]);
			set_custom_element_data(stencil_route, "exact", /*exact*/ ctx[3]);
			set_custom_element_data(stencil_route, "scroll-top-offset", /*scrollTopOffset*/ ctx[4]);
			set_custom_element_data(stencil_route, "history-type", /*historyType*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, stencil_route, anchor);

			if (default_slot) {
				default_slot.m(stencil_route, null);
			}

			/*stencil_route_binding*/ ctx[18](stencil_route);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 65536) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[16], dirty, null, null);
				}
			}

			if (!current || dirty & /*group*/ 1) {
				set_custom_element_data(stencil_route, "group", /*group*/ ctx[0]);
			}

			if (!current || dirty & /*url*/ 2) {
				set_custom_element_data(stencil_route, "url", /*url*/ ctx[1]);
			}

			if (!current || dirty & /*component*/ 4) {
				set_custom_element_data(stencil_route, "component", /*component*/ ctx[2]);
			}

			if (!current || dirty & /*exact*/ 8) {
				set_custom_element_data(stencil_route, "exact", /*exact*/ ctx[3]);
			}

			if (!current || dirty & /*scrollTopOffset*/ 16) {
				set_custom_element_data(stencil_route, "scroll-top-offset", /*scrollTopOffset*/ ctx[4]);
			}

			if (!current || dirty & /*historyType*/ 32) {
				set_custom_element_data(stencil_route, "history-type", /*historyType*/ ctx[5]);
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
			if (detaching) detach(stencil_route);
			if (default_slot) default_slot.d(detaching);
			/*stencil_route_binding*/ ctx[18](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { group = undefined } = $$props;
	let { componentUpdated = undefined } = $$props;
	let { match = undefined } = $$props;
	let { url = undefined } = $$props;
	let { component = undefined } = $$props;
	let { componentProps = undefined } = $$props;
	let { exact = undefined } = $$props;
	let { routeRender = undefined } = $$props;
	let { scrollTopOffset = undefined } = $$props;
	let { routeViewsUpdated = undefined } = $$props;
	let { location = undefined } = $$props;
	let { history = undefined } = $$props;
	let { historyType = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(15, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function stencil_route_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("group" in $$props) $$invalidate(0, group = $$props.group);
		if ("componentUpdated" in $$props) $$invalidate(7, componentUpdated = $$props.componentUpdated);
		if ("match" in $$props) $$invalidate(8, match = $$props.match);
		if ("url" in $$props) $$invalidate(1, url = $$props.url);
		if ("component" in $$props) $$invalidate(2, component = $$props.component);
		if ("componentProps" in $$props) $$invalidate(9, componentProps = $$props.componentProps);
		if ("exact" in $$props) $$invalidate(3, exact = $$props.exact);
		if ("routeRender" in $$props) $$invalidate(10, routeRender = $$props.routeRender);
		if ("scrollTopOffset" in $$props) $$invalidate(4, scrollTopOffset = $$props.scrollTopOffset);
		if ("routeViewsUpdated" in $$props) $$invalidate(11, routeViewsUpdated = $$props.routeViewsUpdated);
		if ("location" in $$props) $$invalidate(12, location = $$props.location);
		if ("history" in $$props) $$invalidate(13, history = $$props.history);
		if ("historyType" in $$props) $$invalidate(5, historyType = $$props.historyType);
		if ("$$scope" in $$props) $$invalidate(16, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, componentUpdated*/ 32896) {
			$: if (__mounted) setProp("componentUpdated", componentUpdated);
		}

		if ($$self.$$.dirty & /*__mounted, match*/ 33024) {
			$: if (__mounted) setProp("match", match);
		}

		if ($$self.$$.dirty & /*__mounted, componentProps*/ 33280) {
			$: if (__mounted) setProp("componentProps", componentProps);
		}

		if ($$self.$$.dirty & /*__mounted, routeRender*/ 33792) {
			$: if (__mounted) setProp("routeRender", routeRender);
		}

		if ($$self.$$.dirty & /*__mounted, routeViewsUpdated*/ 34816) {
			$: if (__mounted) setProp("routeViewsUpdated", routeViewsUpdated);
		}

		if ($$self.$$.dirty & /*__mounted, location*/ 36864) {
			$: if (__mounted) setProp("location", location);
		}

		if ($$self.$$.dirty & /*__mounted, history*/ 40960) {
			$: if (__mounted) setProp("history", history);
		}
	};

	return [
		group,
		url,
		component,
		exact,
		scrollTopOffset,
		historyType,
		__ref,
		componentUpdated,
		match,
		componentProps,
		routeRender,
		routeViewsUpdated,
		location,
		history,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		stencil_route_binding
	];
}

class StencilRoute extends SvelteComponent {
  $$prop_def: StencilRouteProps;
  $$events_def: StencilRouteEvents;
  $$slot_def: StencilRouteSlots;

  $on<K extends keyof StencilRouteEvents>(type: K, callback: (e: StencilRouteEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<StencilRouteProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			group: 0,
			componentUpdated: 7,
			match: 8,
			url: 1,
			component: 2,
			componentProps: 9,
			exact: 3,
			routeRender: 10,
			scrollTopOffset: 4,
			routeViewsUpdated: 11,
			location: 12,
			history: 13,
			historyType: 5,
			getWebComponent: 14
		});
	}

	get getWebComponent(): HTMLStencilRouteElement | undefined {
		return this.$$.ctx[14];
	}
}

export default StencilRoute;