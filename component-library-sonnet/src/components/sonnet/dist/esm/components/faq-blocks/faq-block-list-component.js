var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Element } from "@stencil/core";
let FAQBlockListComponent = class FAQBlockListComponent {
    constructor() {
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
            h("snt-multi-column-mixed", { ref: (el) => (this.multiColumnEl = el), "aria-label": this.menuAriaLabel, class: "with-gutter", "column-count": columnJson }, this.faqBlockList.map((item) => (h("div", { class: "column" },
                h("snt-faq-block", { "title-text": item.titleText, "body-text": item.bodyText, "block-link": item.blockLink, "articles-count": item.articlesCount }))))),
        ];
    }
};
FAQBlockListComponent.TAG_NAME = "snt-faq-block-list";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], FAQBlockListComponent.prototype, "host", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Array)
], FAQBlockListComponent.prototype, "faqBlockList", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQBlockListComponent.prototype, "menuAriaLabel", void 0);
FAQBlockListComponent = __decorate([
    Component({
        tag: "snt-faq-block-list",
        styleUrl: "./faq-block-list-component.scss",
        shadow: false,
    })
], FAQBlockListComponent);
export { FAQBlockListComponent };
