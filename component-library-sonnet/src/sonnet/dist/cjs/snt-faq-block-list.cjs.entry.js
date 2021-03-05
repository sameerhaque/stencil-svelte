'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const faqBlockListComponentCss = "";

const FAQBlockListComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.faqBlockList = [];
        this.menuAriaLabel = "";
    }
    async componentDidRender() {
        const layout = this.multiColumnEl.querySelector('snt-layout');
        await this.multiColumnEl.tagLastRow(layout.getAttribute('viewport'));
        await this.multiColumnEl.setColumns();
    }
    render() {
        const columnJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';
        return [
            index.h("snt-multi-column-mixed", { ref: (el) => (this.multiColumnEl = el), "aria-label": this.menuAriaLabel, class: "with-gutter", "column-count": columnJson }, this.faqBlockList.map((item) => (index.h("div", { class: "column" }, index.h("snt-faq-block", { "title-text": item.titleText, "body-text": item.bodyText, "block-link": item.blockLink, "articles-count": item.articlesCount }))))),
        ];
    }
    get host() { return index.getElement(this); }
};
FAQBlockListComponent.TAG_NAME = "snt-faq-block-list";
FAQBlockListComponent.style = faqBlockListComponentCss;

exports.snt_faq_block_list = FAQBlockListComponent;
