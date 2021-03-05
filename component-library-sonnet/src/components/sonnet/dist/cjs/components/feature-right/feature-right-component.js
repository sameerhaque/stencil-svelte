var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, Element, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
let FeatureRightComponent = class FeatureRightComponent {
    constructor() {
        this.imgSrcSet = StringUtils.empty();
        this.imgAltText = "";
        this.openInNewWindow = false;
    }
    render() {
        return [
            h("a", { href: this.blogLink, target: this.openInNewWindow ? "_blank" : "_self" },
                h("div", { class: "article-container" },
                    h("div", { class: 'article-img' },
                        h("snt-image", { "data-src": this.imgSrc, "img-alt": this.imgAltText })),
                    h("div", { class: 'article-content' },
                        h("div", { class: 'article-tag' },
                            h("span", null, this.tagText)),
                        h("div", { class: "article-title" },
                            h("div", { class: "h4" }, this.titleText)),
                        h("span", { class: "article-min-read" }, this.timeToRead))))
        ];
    }
};
FeatureRightComponent.TAG_NAME = "snt-feature-right";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], FeatureRightComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "imgSrc", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "imgSrcSet", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "titleText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "timeToRead", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "tagText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "blogLink", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureRightComponent.prototype, "imgAltText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], FeatureRightComponent.prototype, "openInNewWindow", void 0);
FeatureRightComponent = __decorate([
    Component({
        tag: "snt-feature-right",
        styleUrl: "./feature-right-component.scss",
        shadow: false
    })
], FeatureRightComponent);
export { FeatureRightComponent };
