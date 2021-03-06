'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const blogFeatureArticlesComponentCss = "snt-blog-feature-articles{display:block;width:100%;}snt-blog-feature-articles snt-layout[viewport=extra-small]>div.spacings{overflow-x:scroll;overflow-y:hidden;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;display:-ms-flexbox;display:flex;}snt-blog-feature-articles snt-layout[viewport=extra-small]>div.spacings:after{content:\"\";padding:calc(1.875em / 2)}snt-blog-feature-articles snt-layout[viewport=extra-small]>div.spacings>*{scroll-snap-align:center;-ms-flex:0 0 calc(100% - 2em);flex:0 0 calc(100% - 2em);margin:0 1em}snt-blog-feature-articles snt-layout[viewport=extra-small]>div.spacings>*:first-child{-ms-flex:0 0 calc(100% - 1em);flex:0 0 calc(100% - 1em);margin:0 1em 0 0}snt-blog-feature-articles snt-layout[viewport=extra-small]>div.spacings>*:last-child{-ms-flex:0 0 calc(100% - 1em);flex:0 0 calc(100% - 1em);margin:0 0 0 1em}snt-blog-feature-articles snt-layout[viewport=small]>div.spacings{overflow-x:scroll;overflow-y:hidden;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;display:-ms-flexbox;display:flex;}snt-blog-feature-articles snt-layout[viewport=small]>div.spacings:after{content:\"\";padding:calc(1.875em / 2)}snt-blog-feature-articles snt-layout[viewport=small]>div.spacings>*{scroll-snap-align:center;-ms-flex:0 0 calc(100% - 2em);flex:0 0 calc(100% - 2em);margin:0 1em}snt-blog-feature-articles snt-layout[viewport=small]>div.spacings>*:first-child{-ms-flex:0 0 calc(100% - 1em);flex:0 0 calc(100% - 1em);margin:0 1em 0 0}snt-blog-feature-articles snt-layout[viewport=small]>div.spacings>*:last-child{-ms-flex:0 0 calc(100% - 1em);flex:0 0 calc(100% - 1em);margin:0 0 0 1em}snt-blog-feature-articles snt-layout[viewport=medium]>div{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);-webkit-column-gap:1.87rem;-moz-column-gap:1.87rem;column-gap:1.87rem;row-gap:1.875rem}snt-blog-feature-articles snt-layout[viewport=medium]>div>*:first-child{grid-column:1;grid-row:1/3}snt-blog-feature-articles snt-layout[viewport=large]>div{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);-webkit-column-gap:1.87rem;-moz-column-gap:1.87rem;column-gap:1.87rem;row-gap:1.875rem}snt-blog-feature-articles snt-layout[viewport=large]>div>*:first-child{grid-column:1;grid-row:1/3}snt-blog-feature-articles snt-layout[viewport=extra-large]>div{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);-webkit-column-gap:1.87rem;-moz-column-gap:1.87rem;column-gap:1.87rem;row-gap:1.875rem}snt-blog-feature-articles snt-layout[viewport=extra-large]>div>*:first-child{grid-column:1;grid-row:1/3}";

const SntBlogFeaturedArticles = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("snt-layout", null, index.h("slot", null))));
    }
    get hostElement() { return index.getElement(this); }
};
SntBlogFeaturedArticles.style = blogFeatureArticlesComponentCss;

exports.snt_blog_feature_articles = SntBlogFeaturedArticles;
