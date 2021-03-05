/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface TestimonialQuoteProps {
  
  /**  */
  containerId?: Components.TestimonialQuote["containerId"]
  
  /**  */
  fill?: Components.TestimonialQuote["fill"]
  
  /**  */
  from?: Components.TestimonialQuote["from"]
  
  /**  */
  headline?: Components.TestimonialQuote["headline"]
}

interface TestimonialQuoteEvents {
  
}

interface TestimonialQuoteSlots {
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
	let testimonial_quote;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			testimonial_quote = element("testimonial-quote");
			if (default_slot) default_slot.c();
			set_custom_element_data(testimonial_quote, "container-id", /*containerId*/ ctx[0]);
			set_custom_element_data(testimonial_quote, "fill", /*fill*/ ctx[1]);
			set_custom_element_data(testimonial_quote, "from", /*from*/ ctx[2]);
			set_custom_element_data(testimonial_quote, "headline", /*headline*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, testimonial_quote, anchor);

			if (default_slot) {
				default_slot.m(testimonial_quote, null);
			}

			/*testimonial_quote_binding*/ ctx[8](testimonial_quote);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*containerId*/ 1) {
				set_custom_element_data(testimonial_quote, "container-id", /*containerId*/ ctx[0]);
			}

			if (!current || dirty & /*fill*/ 2) {
				set_custom_element_data(testimonial_quote, "fill", /*fill*/ ctx[1]);
			}

			if (!current || dirty & /*from*/ 4) {
				set_custom_element_data(testimonial_quote, "from", /*from*/ ctx[2]);
			}

			if (!current || dirty & /*headline*/ 8) {
				set_custom_element_data(testimonial_quote, "headline", /*headline*/ ctx[3]);
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
			if (detaching) detach(testimonial_quote);
			if (default_slot) default_slot.d(detaching);
			/*testimonial_quote_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { containerId = undefined } = $$props;
	let { fill = undefined } = $$props;
	let { from = undefined } = $$props;
	let { headline = undefined } = $$props;
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

	function testimonial_quote_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("containerId" in $$props) $$invalidate(0, containerId = $$props.containerId);
		if ("fill" in $$props) $$invalidate(1, fill = $$props.fill);
		if ("from" in $$props) $$invalidate(2, from = $$props.from);
		if ("headline" in $$props) $$invalidate(3, headline = $$props.headline);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		containerId,
		fill,
		from,
		headline,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		testimonial_quote_binding
	];
}

class TestimonialQuote extends SvelteComponent {
  $$prop_def: TestimonialQuoteProps;
  $$events_def: TestimonialQuoteEvents;
  $$slot_def: TestimonialQuoteSlots;

  $on<K extends keyof TestimonialQuoteEvents>(type: K, callback: (e: TestimonialQuoteEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<TestimonialQuoteProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			containerId: 0,
			fill: 1,
			from: 2,
			headline: 3,
			getWebComponent: 5
		});
	}

	get getWebComponent(): HTMLTestimonialQuoteElement | undefined {
		return this.$$.ctx[5];
	}
}

export default TestimonialQuote;