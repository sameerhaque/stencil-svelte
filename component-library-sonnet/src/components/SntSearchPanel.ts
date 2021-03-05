/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntSearchPanelProps {
  
  /**  */
  active?: Components.SntSearchPanel["active"]
  
  /**  */
  styleClasses?: Components.SntSearchPanel["styleClasses"]
  
  /**  */
  languageJson?: Components.SntSearchPanel["languageJson"]
}

interface SntSearchPanelEvents {
  
}

interface SntSearchPanelSlots {
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
	let snt_search_panel;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			snt_search_panel = element("snt-search-panel");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_search_panel, "active", /*active*/ ctx[0]);
			set_custom_element_data(snt_search_panel, "style-classes", /*styleClasses*/ ctx[1]);
			set_custom_element_data(snt_search_panel, "language-json", /*languageJson*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, snt_search_panel, anchor);

			if (default_slot) {
				default_slot.m(snt_search_panel, null);
			}

			/*snt_search_panel_binding*/ ctx[8](snt_search_panel);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*active*/ 1) {
				set_custom_element_data(snt_search_panel, "active", /*active*/ ctx[0]);
			}

			if (!current || dirty & /*styleClasses*/ 2) {
				set_custom_element_data(snt_search_panel, "style-classes", /*styleClasses*/ ctx[1]);
			}

			if (!current || dirty & /*languageJson*/ 4) {
				set_custom_element_data(snt_search_panel, "language-json", /*languageJson*/ ctx[2]);
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
			if (detaching) detach(snt_search_panel);
			if (default_slot) default_slot.d(detaching);
			/*snt_search_panel_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { active = undefined } = $$props;
	let { styleClasses = undefined } = $$props;
	let { languageJson = undefined } = $$props;
	const toggleActive = (...args) => __ref.toggleActive(...args);
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

	function snt_search_panel_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
		if ("styleClasses" in $$props) $$invalidate(1, styleClasses = $$props.styleClasses);
		if ("languageJson" in $$props) $$invalidate(2, languageJson = $$props.languageJson);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		active,
		styleClasses,
		languageJson,
		__ref,
		toggleActive,
		getWebComponent,
		$$scope,
		slots,
		snt_search_panel_binding
	];
}

class SntSearchPanel extends SvelteComponent {
  $$prop_def: SntSearchPanelProps;
  $$events_def: SntSearchPanelEvents;
  $$slot_def: SntSearchPanelSlots;

  $on<K extends keyof SntSearchPanelEvents>(type: K, callback: (e: SntSearchPanelEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntSearchPanelProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			active: 0,
			styleClasses: 1,
			languageJson: 2,
			toggleActive: 4,
			getWebComponent: 5
		});
	}

	
  /**  */
 get toggleActive(): Components.SntSearchPanel["toggleActive"] {
		return this.$$.ctx[4];
	}

	get getWebComponent(): HTMLSntSearchPanelElement | undefined {
		return this.$$.ctx[5];
	}
}

export default SntSearchPanel;