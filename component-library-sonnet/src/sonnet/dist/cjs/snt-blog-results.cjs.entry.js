'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');

const blogResultsComponentCss = "snt-blog-results snt-multi-column-mixed snt-image img{position:unset;top:unset}snt-blog-results snt-multi-column-mixed.first-row .column.last-row{margin-bottom:20px}snt-blog-results snt-multi-column-mixed.result-rows .spacings{padding-top:10px}";

const SntBlogResultsComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blogResults = [];
        this.blogResultsString = StringUtils.StringUtils.empty();
    }
    componentWillRender() {
        this.blogResults = JSON.parse(this.blogResultsString);
    }
    async componentDidRender() {
        let viewport;
        const firstRowEl = document.querySelector('snt-multi-column-mixed[class*="first-row"]');
        if (firstRowEl) {
            viewport = firstRowEl
                .querySelector("snt-layout")
                .getAttribute("viewport");
            await firstRowEl.tagLastRow(viewport);
            await firstRowEl.setColumns();
            const resultRowsEl = document.querySelector('snt-multi-column-mixed[class*="result-rows"]');
            if (resultRowsEl) {
                await resultRowsEl.setColumns();
                await resultRowsEl.tagLastRow(viewport);
            }
        }
    }
    render() {
        return (index.h(index.Host, null, this.renderFirstRow(), this.blogResults.length > 2 ? this.renderRows() : null));
    }
    renderFirstRow() {
        const firstRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}';
        return (index.h("snt-multi-column-mixed", { class: "first-row no-bottom with-gutter", "column-count": firstRowJson }, this.blogResults.slice(0, 2).map((blog) => {
            return (index.h("div", { class: "column" }, index.h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    }
    renderRows() {
        const resultRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';
        return (index.h("snt-multi-column-mixed", { class: "result-rows with-gutter", "column-count": resultRowJson, "aria-live": "polite" }, this.blogResults
            .slice(2, this.blogResults.length)
            .map((blog) => {
            return (index.h("div", { class: "column" }, index.h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    }
    get hostElement() { return index.getElement(this); }
};
SntBlogResultsComponent.style = blogResultsComponentCss;

exports.snt_blog_results = SntBlogResultsComponent;
