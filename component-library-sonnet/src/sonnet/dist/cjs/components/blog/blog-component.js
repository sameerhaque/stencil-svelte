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
let BlogComponent = class BlogComponent {
    constructor() {
        this.imgSrcSet = StringUtils.empty();
        this.imgAltText = "";
        this.openInNewWindow = false;
    }
    render() {
        return [
            h("a", { href: this.blogLink, target: this.openInNewWindow ? "_blank" : "_self" },
                h("div", { class: "blog-container" },
                    h("div", { class: 'blog-img' },
                        h("snt-image", { "data-src": this.imgSrc, "img-alt": this.imgAltText })),
                    h("div", { class: 'blog-tag' },
                        h("span", null, this.tagText)),
                    h("div", { class: 'blog-content' },
                        h("div", { class: "blog-title" },
                            h("div", { class: "h4" }, this.titleText))),
                    h("span", { class: "blog-min-read" }, this.timeToRead)))
        ];
    }
};
BlogComponent.TAG_NAME = "snt-blog";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], BlogComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "imgSrc", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "imgSrcSet", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "titleText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "timeToRead", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "tagText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "blogLink", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], BlogComponent.prototype, "imgAltText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], BlogComponent.prototype, "openInNewWindow", void 0);
BlogComponent = __decorate([
    Component({
        tag: "snt-blog",
        styleUrl: "./blog-component.scss",
        shadow: false
    })
], BlogComponent);
export { BlogComponent };
