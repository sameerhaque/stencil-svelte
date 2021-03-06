/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface StencilRouteLinkProps {
  
  /**  */
  url?: Components.StencilRouteLink["url"]
  
  /**  */
  urlMatch?: Components.StencilRouteLink["urlMatch"]
  
  /**  */
  activeClass?: Components.StencilRouteLink["activeClass"]
  
  /**  */
  exact?: Components.StencilRouteLink["exact"]
  
  /**  */
  strict?: Components.StencilRouteLink["strict"]
  
  /** Custom tag to use instead of an anchor */
  custom?: Components.StencilRouteLink["custom"]
  
  /**  */
  anchorClass?: Components.StencilRouteLink["anchorClass"]
  
  /**  */
  anchorRole?: Components.StencilRouteLink["anchorRole"]
  
  /**  */
  anchorTitle?: Components.StencilRouteLink["anchorTitle"]
  
  /**  */
  anchorTabIndex?: Components.StencilRouteLink["anchorTabIndex"]
  
  /**  */
  anchorId?: Components.StencilRouteLink["anchorId"]
  
  /**  */
  history?: Components.StencilRouteLink["history"]
  
  /**  */
  location?: Components.StencilRouteLink["location"]
  
  /**  */
  root?: Components.StencilRouteLink["root"]
  
  /**  */
  ariaHaspopup?: Components.StencilRouteLink["ariaHaspopup"]
  
  /**  */
  ariaPosinset?: Components.StencilRouteLink["ariaPosinset"]
  
  /**  */
  ariaSetsize?: Components.StencilRouteLink["ariaSetsize"]
  
  /**  */
  ariaLabel?: Components.StencilRouteLink["ariaLabel"]
}

interface StencilRouteLinkEvents {
  
}

interface StencilRouteLinkSlots {
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
	let stencil_route_link;
	let current;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	return {
		c() {
			stencil_route_link = element("stencil-route-link");
			if (default_slot) default_slot.c();
			set_custom_element_data(stencil_route_link, "url", /*url*/ ctx[0]);
			set_custom_element_data(stencil_route_link, "url-match", /*urlMatch*/ ctx[1]);
			set_custom_element_data(stencil_route_link, "active-class", /*activeClass*/ ctx[2]);
			set_custom_element_data(stencil_route_link, "exact", /*exact*/ ctx[3]);
			set_custom_element_data(stencil_route_link, "strict", /*strict*/ ctx[4]);
			set_custom_element_data(stencil_route_link, "custom", /*custom*/ ctx[5]);
			set_custom_element_data(stencil_route_link, "anchor-class", /*anchorClass*/ ctx[6]);
			set_custom_element_data(stencil_route_link, "anchor-role", /*anchorRole*/ ctx[7]);
			set_custom_element_data(stencil_route_link, "anchor-title", /*anchorTitle*/ ctx[8]);
			set_custom_element_data(stencil_route_link, "anchor-tab-index", /*anchorTabIndex*/ ctx[9]);
			set_custom_element_data(stencil_route_link, "anchor-id", /*anchorId*/ ctx[10]);
			set_custom_element_data(stencil_route_link, "root", /*root*/ ctx[11]);
			set_custom_element_data(stencil_route_link, "aria-haspopup", /*ariaHaspopup*/ ctx[12]);
			set_custom_element_data(stencil_route_link, "aria-posinset", /*ariaPosinset*/ ctx[13]);
			set_custom_element_data(stencil_route_link, "aria-setsize", /*ariaSetsize*/ ctx[14]);
			set_custom_element_data(stencil_route_link, "aria-label", /*ariaLabel*/ ctx[15]);
		},
		m(target, anchor) {
			insert(target, stencil_route_link, anchor);

			if (default_slot) {
				default_slot.m(stencil_route_link, null);
			}

			/*stencil_route_link_binding*/ ctx[23](stencil_route_link);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2097152) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[21], dirty, null, null);
				}
			}

			if (!current || dirty & /*url*/ 1) {
				set_custom_element_data(stencil_route_link, "url", /*url*/ ctx[0]);
			}

			if (!current || dirty & /*urlMatch*/ 2) {
				set_custom_element_data(stencil_route_link, "url-match", /*urlMatch*/ ctx[1]);
			}

			if (!current || dirty & /*activeClass*/ 4) {
				set_custom_element_data(stencil_route_link, "active-class", /*activeClass*/ ctx[2]);
			}

			if (!current || dirty & /*exact*/ 8) {
				set_custom_element_data(stencil_route_link, "exact", /*exact*/ ctx[3]);
			}

			if (!current || dirty & /*strict*/ 16) {
				set_custom_element_data(stencil_route_link, "strict", /*strict*/ ctx[4]);
			}

			if (!current || dirty & /*custom*/ 32) {
				set_custom_element_data(stencil_route_link, "custom", /*custom*/ ctx[5]);
			}

			if (!current || dirty & /*anchorClass*/ 64) {
				set_custom_element_data(stencil_route_link, "anchor-class", /*anchorClass*/ ctx[6]);
			}

			if (!current || dirty & /*anchorRole*/ 128) {
				set_custom_element_data(stencil_route_link, "anchor-role", /*anchorRole*/ ctx[7]);
			}

			if (!current || dirty & /*anchorTitle*/ 256) {
				set_custom_element_data(stencil_route_link, "anchor-title", /*anchorTitle*/ ctx[8]);
			}

			if (!current || dirty & /*anchorTabIndex*/ 512) {
				set_custom_element_data(stencil_route_link, "anchor-tab-index", /*anchorTabIndex*/ ctx[9]);
			}

			if (!current || dirty & /*anchorId*/ 1024) {
				set_custom_element_data(stencil_route_link, "anchor-id", /*anchorId*/ ctx[10]);
			}

			if (!current || dirty & /*root*/ 2048) {
				set_custom_element_data(stencil_route_link, "root", /*root*/ ctx[11]);
			}

			if (!current || dirty & /*ariaHaspopup*/ 4096) {
				set_custom_element_data(stencil_route_link, "aria-haspopup", /*ariaHaspopup*/ ctx[12]);
			}

			if (!current || dirty & /*ariaPosinset*/ 8192) {
				set_custom_element_data(stencil_route_link, "aria-posinset", /*ariaPosinset*/ ctx[13]);
			}

			if (!current || dirty & /*ariaSetsize*/ 16384) {
				set_custom_element_data(stencil_route_link, "aria-setsize", /*ariaSetsize*/ ctx[14]);
			}

			if (!current || dirty & /*ariaLabel*/ 32768) {
				set_custom_element_data(stencil_route_link, "aria-label", /*ariaLabel*/ ctx[15]);
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
			if (detaching) detach(stencil_route_link);
			if (default_slot) default_slot.d(detaching);
			/*stencil_route_link_binding*/ ctx[23](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { url = undefined } = $$props;
	let { urlMatch = undefined } = $$props;
	let { activeClass = undefined } = $$props;
	let { exact = undefined } = $$props;
	let { strict = undefined } = $$props;
	let { custom = undefined } = $$props;
	let { anchorClass = undefined } = $$props;
	let { anchorRole = undefined } = $$props;
	let { anchorTitle = undefined } = $$props;
	let { anchorTabIndex = undefined } = $$props;
	let { anchorId = undefined } = $$props;
	let { history = undefined } = $$props;
	let { location = undefined } = $$props;
	let { root = undefined } = $$props;
	let { ariaHaspopup = undefined } = $$props;
	let { ariaPosinset = undefined } = $$props;
	let { ariaSetsize = undefined } = $$props;
	let { ariaLabel = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(20, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(16, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function stencil_route_link_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(16, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("url" in $$props) $$invalidate(0, url = $$props.url);
		if ("urlMatch" in $$props) $$invalidate(1, urlMatch = $$props.urlMatch);
		if ("activeClass" in $$props) $$invalidate(2, activeClass = $$props.activeClass);
		if ("exact" in $$props) $$invalidate(3, exact = $$props.exact);
		if ("strict" in $$props) $$invalidate(4, strict = $$props.strict);
		if ("custom" in $$props) $$invalidate(5, custom = $$props.custom);
		if ("anchorClass" in $$props) $$invalidate(6, anchorClass = $$props.anchorClass);
		if ("anchorRole" in $$props) $$invalidate(7, anchorRole = $$props.anchorRole);
		if ("anchorTitle" in $$props) $$invalidate(8, anchorTitle = $$props.anchorTitle);
		if ("anchorTabIndex" in $$props) $$invalidate(9, anchorTabIndex = $$props.anchorTabIndex);
		if ("anchorId" in $$props) $$invalidate(10, anchorId = $$props.anchorId);
		if ("history" in $$props) $$invalidate(17, history = $$props.history);
		if ("location" in $$props) $$invalidate(18, location = $$props.location);
		if ("root" in $$props) $$invalidate(11, root = $$props.root);
		if ("ariaHaspopup" in $$props) $$invalidate(12, ariaHaspopup = $$props.ariaHaspopup);
		if ("ariaPosinset" in $$props) $$invalidate(13, ariaPosinset = $$props.ariaPosinset);
		if ("ariaSetsize" in $$props) $$invalidate(14, ariaSetsize = $$props.ariaSetsize);
		if ("ariaLabel" in $$props) $$invalidate(15, ariaLabel = $$props.ariaLabel);
		if ("$$scope" in $$props) $$invalidate(21, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, history*/ 1179648) {
			$: if (__mounted) setProp("history", history);
		}

		if ($$self.$$.dirty & /*__mounted, location*/ 1310720) {
			$: if (__mounted) setProp("location", location);
		}
	};

	return [
		url,
		urlMatch,
		activeClass,
		exact,
		strict,
		custom,
		anchorClass,
		anchorRole,
		anchorTitle,
		anchorTabIndex,
		anchorId,
		root,
		ariaHaspopup,
		ariaPosinset,
		ariaSetsize,
		ariaLabel,
		__ref,
		history,
		location,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		stencil_route_link_binding
	];
}

class StencilRouteLink extends SvelteComponent {
  $$prop_def: StencilRouteLinkProps;
  $$events_def: StencilRouteLinkEvents;
  $$slot_def: StencilRouteLinkSlots;

  $on<K extends keyof StencilRouteLinkEvents>(type: K, callback: (e: StencilRouteLinkEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<StencilRouteLinkProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			url: 0,
			urlMatch: 1,
			activeClass: 2,
			exact: 3,
			strict: 4,
			custom: 5,
			anchorClass: 6,
			anchorRole: 7,
			anchorTitle: 8,
			anchorTabIndex: 9,
			anchorId: 10,
			history: 17,
			location: 18,
			root: 11,
			ariaHaspopup: 12,
			ariaPosinset: 13,
			ariaSetsize: 14,
			ariaLabel: 15,
			getWebComponent: 19
		});
	}

	get getWebComponent(): HTMLStencilRouteLinkElement | undefined {
		return this.$$.ctx[19];
	}
}

export default StencilRouteLink;