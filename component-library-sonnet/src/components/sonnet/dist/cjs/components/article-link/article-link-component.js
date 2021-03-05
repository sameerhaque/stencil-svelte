var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
let ArticleLinkComponent = class ArticleLinkComponent {
    constructor() {
        this.hiddenTitle = StringUtils.empty();
    }
    render() {
        return (h("a", { href: this.href, "aria-label": this.ariaLabel, "hidden-title": this.hiddenTitle },
            h("span", { class: "article-link" }, this.copy)));
    }
};
ArticleLinkComponent.TAG_NAME = "snt-article-link";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ArticleLinkComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ArticleLinkComponent.prototype, "copy", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ArticleLinkComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ArticleLinkComponent.prototype, "hiddenTitle", void 0);
ArticleLinkComponent = __decorate([
    Component({
        tag: 'snt-article-link',
        styleUrl: "article-link-component.scss",
        shadow: false
    })
], ArticleLinkComponent);
export { ArticleLinkComponent };
