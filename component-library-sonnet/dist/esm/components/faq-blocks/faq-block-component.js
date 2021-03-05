var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h } from "@stencil/core";
let FAQBlockComponent = class FAQBlockComponent {
    constructor() {
        this.titleText = "";
        this.bodyText = "";
        this.articlesCount = "";
        this.blockLink = "";
    }
    render() {
        return [
            h("a", { href: this.blockLink },
                h("div", { class: "faq-block-wrapper" },
                    h("h3", null, this.titleText),
                    h("div", { class: "faq-block-body" }, this.bodyText),
                    h("div", { class: "faq-articles-count" }, this.articlesCount)))
        ];
    }
};
FAQBlockComponent.TAG_NAME = "snt-faq-block";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQBlockComponent.prototype, "titleText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQBlockComponent.prototype, "bodyText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQBlockComponent.prototype, "articlesCount", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQBlockComponent.prototype, "blockLink", void 0);
FAQBlockComponent = __decorate([
    Component({
        tag: 'snt-faq-block',
        styleUrl: './faq-block-component.scss',
        shadow: false
    })
], FAQBlockComponent);
export { FAQBlockComponent };
