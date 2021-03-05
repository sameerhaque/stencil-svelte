/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface TreeviewExampleProps {
  
}

interface TreeviewExampleEvents {
  
}

interface TreeviewExampleSlots {
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
	let treeview_example;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			treeview_example = element("treeview-example");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, treeview_example, anchor);

			if (default_slot) {
				default_slot.m(treeview_example, null);
			}

			/*treeview_example_binding*/ ctx[4](treeview_example);
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
			if (detaching) detach(treeview_example);
			if (default_slot) default_slot.d(detaching);
			/*treeview_example_binding*/ ctx[4](null);
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

	function treeview_example_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [__ref, getWebComponent, $$scope, slots, treeview_example_binding];
}

class TreeviewExample extends SvelteComponent {
  $$prop_def: TreeviewExampleProps;
  $$events_def: TreeviewExampleEvents;
  $$slot_def: TreeviewExampleSlots;

  $on<K extends keyof TreeviewExampleEvents>(type: K, callback: (e: TreeviewExampleEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<TreeviewExampleProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 1 });
	}

	get getWebComponent(): HTMLTreeviewExampleElement | undefined {
		return this.$$.ctx[1];
	}
}

export default TreeviewExample;