/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntLinkProps {
  
  /**  */
  linkId?: Components.SntLink["linkId"]
  
  /**  */
  href?: Components.SntLink["href"]
  
  /**  */
  target?: Components.SntLink["target"]
  
  /**  */
  ariaLabel?: Components.SntLink["ariaLabel"]
  
  /**  */
  current?: Components.SntLink["current"]
  
  /**  */
  downloadName?: Components.SntLink["downloadName"]
  
  /**  */
  ariaCurrent?: Components.SntLink["ariaCurrent"]
  
  /**  */
  rel?: Components.SntLink["rel"]
  
  /**  */
  hiddenTitle?: Components.SntLink["hiddenTitle"]
  
  /**  */
  isExternal?: Components.SntLink["isExternal"]
  
  /**  */
  classNames?: Components.SntLink["classNames"]
}

interface SntLinkEvents {
  
  /**  */
  linkEvent: Parameters<JSX.SntLink["onLinkEvent"]>[0]
}

interface SntLinkSlots {
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
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let snt_link;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			snt_link = element("snt-link");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_link, "link-id", /*linkId*/ ctx[0]);
			set_custom_element_data(snt_link, "href", /*href*/ ctx[1]);
			set_custom_element_data(snt_link, "target", /*target*/ ctx[2]);
			set_custom_element_data(snt_link, "aria-label", /*ariaLabel*/ ctx[3]);
			set_custom_element_data(snt_link, "current", /*current*/ ctx[4]);
			set_custom_element_data(snt_link, "download-name", /*downloadName*/ ctx[5]);
			set_custom_element_data(snt_link, "aria-current", /*ariaCurrent*/ ctx[6]);
			set_custom_element_data(snt_link, "rel", /*rel*/ ctx[7]);
			set_custom_element_data(snt_link, "hidden-title", /*hiddenTitle*/ ctx[8]);
			set_custom_element_data(snt_link, "is-external", /*isExternal*/ ctx[9]);
			set_custom_element_data(snt_link, "class-names", /*classNames*/ ctx[10]);
		},
		m(target, anchor) {
			insert(target, snt_link, anchor);

			if (default_slot) {
				default_slot.m(snt_link, null);
			}

			/*snt_link_binding*/ ctx[16](snt_link);
			current = true;

			if (!mounted) {
				dispose = listen(snt_link, "linkEvent", /*onEvent*/ ctx[12]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16384) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[14], dirty, null, null);
				}
			}

			if (!current || dirty & /*linkId*/ 1) {
				set_custom_element_data(snt_link, "link-id", /*linkId*/ ctx[0]);
			}

			if (!current || dirty & /*href*/ 2) {
				set_custom_element_data(snt_link, "href", /*href*/ ctx[1]);
			}

			if (!current || dirty & /*target*/ 4) {
				set_custom_element_data(snt_link, "target", /*target*/ ctx[2]);
			}

			if (!current || dirty & /*ariaLabel*/ 8) {
				set_custom_element_data(snt_link, "aria-label", /*ariaLabel*/ ctx[3]);
			}

			if (!current || dirty & /*current*/ 16) {
				set_custom_element_data(snt_link, "current", /*current*/ ctx[4]);
			}

			if (!current || dirty & /*downloadName*/ 32) {
				set_custom_element_data(snt_link, "download-name", /*downloadName*/ ctx[5]);
			}

			if (!current || dirty & /*ariaCurrent*/ 64) {
				set_custom_element_data(snt_link, "aria-current", /*ariaCurrent*/ ctx[6]);
			}

			if (!current || dirty & /*rel*/ 128) {
				set_custom_element_data(snt_link, "rel", /*rel*/ ctx[7]);
			}

			if (!current || dirty & /*hiddenTitle*/ 256) {
				set_custom_element_data(snt_link, "hidden-title", /*hiddenTitle*/ ctx[8]);
			}

			if (!current || dirty & /*isExternal*/ 512) {
				set_custom_element_data(snt_link, "is-external", /*isExternal*/ ctx[9]);
			}

			if (!current || dirty & /*classNames*/ 1024) {
				set_custom_element_data(snt_link, "class-names", /*classNames*/ ctx[10]);
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
			if (detaching) detach(snt_link);
			if (default_slot) default_slot.d(detaching);
			/*snt_link_binding*/ ctx[16](null);
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
	let { linkId = undefined } = $$props;
	let { href = undefined } = $$props;
	let { target = undefined } = $$props;
	let { ariaLabel = undefined } = $$props;
	let { current = undefined } = $$props;
	let { downloadName = undefined } = $$props;
	let { ariaCurrent = undefined } = $$props;
	let { rel = undefined } = $$props;
	let { hiddenTitle = undefined } = $$props;
	let { isExternal = undefined } = $$props;
	let { classNames = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(11, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_link_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(11, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("linkId" in $$props) $$invalidate(0, linkId = $$props.linkId);
		if ("href" in $$props) $$invalidate(1, href = $$props.href);
		if ("target" in $$props) $$invalidate(2, target = $$props.target);
		if ("ariaLabel" in $$props) $$invalidate(3, ariaLabel = $$props.ariaLabel);
		if ("current" in $$props) $$invalidate(4, current = $$props.current);
		if ("downloadName" in $$props) $$invalidate(5, downloadName = $$props.downloadName);
		if ("ariaCurrent" in $$props) $$invalidate(6, ariaCurrent = $$props.ariaCurrent);
		if ("rel" in $$props) $$invalidate(7, rel = $$props.rel);
		if ("hiddenTitle" in $$props) $$invalidate(8, hiddenTitle = $$props.hiddenTitle);
		if ("isExternal" in $$props) $$invalidate(9, isExternal = $$props.isExternal);
		if ("classNames" in $$props) $$invalidate(10, classNames = $$props.classNames);
		if ("$$scope" in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	return [
		linkId,
		href,
		target,
		ariaLabel,
		current,
		downloadName,
		ariaCurrent,
		rel,
		hiddenTitle,
		isExternal,
		classNames,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		snt_link_binding
	];
}

class SntLink extends SvelteComponent {
  $$prop_def: SntLinkProps;
  $$events_def: SntLinkEvents;
  $$slot_def: SntLinkSlots;

  $on<K extends keyof SntLinkEvents>(type: K, callback: (e: SntLinkEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntLinkProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			linkId: 0,
			href: 1,
			target: 2,
			ariaLabel: 3,
			current: 4,
			downloadName: 5,
			ariaCurrent: 6,
			rel: 7,
			hiddenTitle: 8,
			isExternal: 9,
			classNames: 10,
			getWebComponent: 13
		});
	}

	get getWebComponent(): HTMLSntLinkElement | undefined {
		return this.$$.ctx[13];
	}
}

export default SntLink;