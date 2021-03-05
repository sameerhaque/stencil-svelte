import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';

const faqBlockListComponentCss = "";

const FAQBlockListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("snt-multi-column-mixed", { ref: (el) => (this.multiColumnEl = el), "aria-label": this.menuAriaLabel, class: "with-gutter", "column-count": columnJson }, this.faqBlockList.map((item) => (h("div", { class: "column" }, h("snt-faq-block", { "title-text": item.titleText, "body-text": item.bodyText, "block-link": item.blockLink, "articles-count": item.articlesCount }))))),
        ];
    }
    get host() { return getElement(this); }
};
FAQBlockListComponent.TAG_NAME = "snt-faq-block-list";
FAQBlockListComponent.style = faqBlockListComponentCss;

export { FAQBlockListComponent as snt_faq_block_list };
