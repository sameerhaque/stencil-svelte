/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntVideoProps {
  
  /**  */
  headline?: Components.SntVideo["headline"]
  
  /**  */
  shareUrl?: Components.SntVideo["shareUrl"]
  
  /**  */
  oembedUrl?: Components.SntVideo["oembedUrl"]
  
  /**  */
  playUrl?: Components.SntVideo["playUrl"]
  
  /**  */
  transcriptSummaryOpen?: Components.SntVideo["transcriptSummaryOpen"]
  
  /**  */
  transcriptSummaryClose?: Components.SntVideo["transcriptSummaryClose"]
}

interface SntVideoEvents {
  
}

interface SntVideoSlots {
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
	let snt_video;
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	return {
		c() {
			snt_video = element("snt-video");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_video, "headline", /*headline*/ ctx[0]);
			set_custom_element_data(snt_video, "share-url", /*shareUrl*/ ctx[1]);
			set_custom_element_data(snt_video, "oembed-url", /*oembedUrl*/ ctx[2]);
			set_custom_element_data(snt_video, "play-url", /*playUrl*/ ctx[3]);
			set_custom_element_data(snt_video, "transcript-summary-open", /*transcriptSummaryOpen*/ ctx[4]);
			set_custom_element_data(snt_video, "transcript-summary-close", /*transcriptSummaryClose*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, snt_video, anchor);

			if (default_slot) {
				default_slot.m(snt_video, null);
			}

			/*snt_video_binding*/ ctx[10](snt_video);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*headline*/ 1) {
				set_custom_element_data(snt_video, "headline", /*headline*/ ctx[0]);
			}

			if (!current || dirty & /*shareUrl*/ 2) {
				set_custom_element_data(snt_video, "share-url", /*shareUrl*/ ctx[1]);
			}

			if (!current || dirty & /*oembedUrl*/ 4) {
				set_custom_element_data(snt_video, "oembed-url", /*oembedUrl*/ ctx[2]);
			}

			if (!current || dirty & /*playUrl*/ 8) {
				set_custom_element_data(snt_video, "play-url", /*playUrl*/ ctx[3]);
			}

			if (!current || dirty & /*transcriptSummaryOpen*/ 16) {
				set_custom_element_data(snt_video, "transcript-summary-open", /*transcriptSummaryOpen*/ ctx[4]);
			}

			if (!current || dirty & /*transcriptSummaryClose*/ 32) {
				set_custom_element_data(snt_video, "transcript-summary-close", /*transcriptSummaryClose*/ ctx[5]);
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
			if (detaching) detach(snt_video);
			if (default_slot) default_slot.d(detaching);
			/*snt_video_binding*/ ctx[10](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { headline = undefined } = $$props;
	let { shareUrl } = $$props;
	let { oembedUrl } = $$props;
	let { playUrl } = $$props;
	let { transcriptSummaryOpen = undefined } = $$props;
	let { transcriptSummaryClose = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_video_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("headline" in $$props) $$invalidate(0, headline = $$props.headline);
		if ("shareUrl" in $$props) $$invalidate(1, shareUrl = $$props.shareUrl);
		if ("oembedUrl" in $$props) $$invalidate(2, oembedUrl = $$props.oembedUrl);
		if ("playUrl" in $$props) $$invalidate(3, playUrl = $$props.playUrl);
		if ("transcriptSummaryOpen" in $$props) $$invalidate(4, transcriptSummaryOpen = $$props.transcriptSummaryOpen);
		if ("transcriptSummaryClose" in $$props) $$invalidate(5, transcriptSummaryClose = $$props.transcriptSummaryClose);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		headline,
		shareUrl,
		oembedUrl,
		playUrl,
		transcriptSummaryOpen,
		transcriptSummaryClose,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_video_binding
	];
}

class SntVideo extends SvelteComponent {
  $$prop_def: SntVideoProps;
  $$events_def: SntVideoEvents;
  $$slot_def: SntVideoSlots;

  $on<K extends keyof SntVideoEvents>(type: K, callback: (e: SntVideoEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntVideoProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			headline: 0,
			shareUrl: 1,
			oembedUrl: 2,
			playUrl: 3,
			transcriptSummaryOpen: 4,
			transcriptSummaryClose: 5,
			getWebComponent: 7
		});
	}

	get getWebComponent(): HTMLSntVideoElement | undefined {
		return this.$$.ctx[7];
	}
}

export default SntVideo;