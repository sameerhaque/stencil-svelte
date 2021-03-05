/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface SntBlogProps {
  
  /**  */
  imgSrc?: Components.SntBlog["imgSrc"]
  
  /**  */
  imgSrcSet?: Components.SntBlog["imgSrcSet"]
  
  /**  */
  titleText?: Components.SntBlog["titleText"]
  
  /**  */
  timeToRead?: Components.SntBlog["timeToRead"]
  
  /**  */
  tagText?: Components.SntBlog["tagText"]
  
  /**  */
  blogLink?: Components.SntBlog["blogLink"]
  
  /**  */
  imgAltText?: Components.SntBlog["imgAltText"]
  
  /**  */
  openInNewWindow?: Components.SntBlog["openInNewWindow"]
}

interface SntBlogEvents {
  
}

interface SntBlogSlots {
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
	let snt_blog;
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			snt_blog = element("snt-blog");
			if (default_slot) default_slot.c();
			set_custom_element_data(snt_blog, "img-src", /*imgSrc*/ ctx[0]);
			set_custom_element_data(snt_blog, "img-src-set", /*imgSrcSet*/ ctx[1]);
			set_custom_element_data(snt_blog, "title-text", /*titleText*/ ctx[2]);
			set_custom_element_data(snt_blog, "time-to-read", /*timeToRead*/ ctx[3]);
			set_custom_element_data(snt_blog, "tag-text", /*tagText*/ ctx[4]);
			set_custom_element_data(snt_blog, "blog-link", /*blogLink*/ ctx[5]);
			set_custom_element_data(snt_blog, "img-alt-text", /*imgAltText*/ ctx[6]);
			set_custom_element_data(snt_blog, "open-in-new-window", /*openInNewWindow*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, snt_blog, anchor);

			if (default_slot) {
				default_slot.m(snt_blog, null);
			}

			/*snt_blog_binding*/ ctx[12](snt_blog);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1024) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			if (!current || dirty & /*imgSrc*/ 1) {
				set_custom_element_data(snt_blog, "img-src", /*imgSrc*/ ctx[0]);
			}

			if (!current || dirty & /*imgSrcSet*/ 2) {
				set_custom_element_data(snt_blog, "img-src-set", /*imgSrcSet*/ ctx[1]);
			}

			if (!current || dirty & /*titleText*/ 4) {
				set_custom_element_data(snt_blog, "title-text", /*titleText*/ ctx[2]);
			}

			if (!current || dirty & /*timeToRead*/ 8) {
				set_custom_element_data(snt_blog, "time-to-read", /*timeToRead*/ ctx[3]);
			}

			if (!current || dirty & /*tagText*/ 16) {
				set_custom_element_data(snt_blog, "tag-text", /*tagText*/ ctx[4]);
			}

			if (!current || dirty & /*blogLink*/ 32) {
				set_custom_element_data(snt_blog, "blog-link", /*blogLink*/ ctx[5]);
			}

			if (!current || dirty & /*imgAltText*/ 64) {
				set_custom_element_data(snt_blog, "img-alt-text", /*imgAltText*/ ctx[6]);
			}

			if (!current || dirty & /*openInNewWindow*/ 128) {
				set_custom_element_data(snt_blog, "open-in-new-window", /*openInNewWindow*/ ctx[7]);
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
			if (detaching) detach(snt_blog);
			if (default_slot) default_slot.d(detaching);
			/*snt_blog_binding*/ ctx[12](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { imgSrc } = $$props;
	let { imgSrcSet = undefined } = $$props;
	let { titleText } = $$props;
	let { timeToRead } = $$props;
	let { tagText } = $$props;
	let { blogLink } = $$props;
	let { imgAltText = undefined } = $$props;
	let { openInNewWindow = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(8, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function snt_blog_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(8, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("imgSrc" in $$props) $$invalidate(0, imgSrc = $$props.imgSrc);
		if ("imgSrcSet" in $$props) $$invalidate(1, imgSrcSet = $$props.imgSrcSet);
		if ("titleText" in $$props) $$invalidate(2, titleText = $$props.titleText);
		if ("timeToRead" in $$props) $$invalidate(3, timeToRead = $$props.timeToRead);
		if ("tagText" in $$props) $$invalidate(4, tagText = $$props.tagText);
		if ("blogLink" in $$props) $$invalidate(5, blogLink = $$props.blogLink);
		if ("imgAltText" in $$props) $$invalidate(6, imgAltText = $$props.imgAltText);
		if ("openInNewWindow" in $$props) $$invalidate(7, openInNewWindow = $$props.openInNewWindow);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		imgSrc,
		imgSrcSet,
		titleText,
		timeToRead,
		tagText,
		blogLink,
		imgAltText,
		openInNewWindow,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		snt_blog_binding
	];
}

class SntBlog extends SvelteComponent {
  $$prop_def: SntBlogProps;
  $$events_def: SntBlogEvents;
  $$slot_def: SntBlogSlots;

  $on<K extends keyof SntBlogEvents>(type: K, callback: (e: SntBlogEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SntBlogProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			imgSrc: 0,
			imgSrcSet: 1,
			titleText: 2,
			timeToRead: 3,
			tagText: 4,
			blogLink: 5,
			imgAltText: 6,
			openInNewWindow: 7,
			getWebComponent: 9
		});
	}

	get getWebComponent(): HTMLSntBlogElement | undefined {
		return this.$$.ctx[9];
	}
}

export default SntBlog;