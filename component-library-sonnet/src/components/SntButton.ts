/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntButtonProps {
  
  /**  */
  iconClassName?: Components.SntButton["iconClassName"]
  
  /**  */
  styleClasses?: Components.SntButton["styleClasses"]
  
  /**  */
  hiddenTitle?: Components.SntButton["hiddenTitle"]
  
  /**  */
  buttonId?: Components.SntButton["buttonId"]
}

interface SntButtonEvents {
  
  /**  */
  sntButtonClick: Parameters<JSX.SntButton["onSntButtonClick"]>[0]
  
  /**  */
  sntButtonKeyDown: Parameters<JSX.SntButton["onSntButtonKeyDown"]>[0]
}

interface SntButtonSlots {
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
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let snt_button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			snt_button = element("snt-button");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_button, "icon-class-name", /*iconClassName*/ ctx[0]);
			set_custom_element_data(snt_button, "style-classes", /*styleClasses*/ ctx[1]);
			set_custom_element_data(snt_button, "hidden-title", /*hiddenTitle*/ ctx[2]);
			set_custom_element_data(snt_button, "button-id", /*buttonId*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, snt_button, anchor);

			if (default_slot) {
				default_slot.m(snt_button, null);
			}

			/*snt_button_binding*/ ctx[9](snt_button);
			current = true;

			if (!mounted) {
				dispose = [
					listen(snt_button, "sntButtonClick", /*onEvent*/ ctx[5]),
					listen(snt_button, "sntButtonKeyDown", /*onEvent*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*iconClassName*/ 1) {
				set_custom_element_data(snt_button, "icon-class-name", /*iconClassName*/ ctx[0]);
			}

			if (!current || dirty & /*styleClasses*/ 2) {
				set_custom_element_data(snt_button, "style-classes", /*styleClasses*/ ctx[1]);
			}

			if (!current || dirty & /*hiddenTitle*/ 4) {
				set_custom_element_data(snt_button, "hidden-title", /*hiddenTitle*/ ctx[2]);
			}

			if (!current || dirty & /*buttonId*/ 8) {
				set_custom_element_data(snt_button, "button-id", /*buttonId*/ ctx[3]);
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
			if (detaching) detach(snt_button);
			if (default_slot) default_slot.d(detaching);
			/*snt_button_binding*/ ctx[9](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { iconClassName = undefined } = $$props;
	let { styleClasses = undefined } = $$props;
	let { hiddenTitle = undefined } = $$props;
	let { buttonId = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("iconClassName" in $$props) $$invalidate(0, iconClassName = $$props.iconClassName);
		if ("styleClasses" in $$props) $$invalidate(1, styleClasses = $$props.styleClasses);
		if ("hiddenTitle" in $$props) $$invalidate(2, hiddenTitle = $$props.hiddenTitle);
		if ("buttonId" in $$props) $$invalidate(3, buttonId = $$props.buttonId);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		iconClassName,
		styleClasses,
		hiddenTitle,
		buttonId,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		snt_button_binding
	];
}

class SntButton extends SvelteComponent {
  $$prop_def: SntButtonProps;
  $$events_def: SntButtonEvents;
  $$slot_def: SntButtonSlots;

  $on<K extends keyof SntButtonEvents>(type: K, callback: (e: SntButtonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntButtonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			iconClassName: 0,
			styleClasses: 1,
			hiddenTitle: 2,
			buttonId: 3,
			getWebComponent: 6
		});
	}

	get getWebComponent(): HTMLSntButtonElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SntButton;