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
let FeatureLeftExample = class FeatureLeftExample {
    constructor() {
        this.viewport = "";
    }
    render() {
        return [
            h("h1", null, "Feature Left Example"),
            h("h3", null, "HD Viewport"),
            h("host", { viewport: "extra-large" },
                h("div", { class: "col-6" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
            h("h3", null, "Desktop Viewport"),
            h("host", { viewport: "large" },
                h("div", { class: "col-5" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
            h("h3", null, "Tablet Viewport"),
            h("host", { viewport: "medium" },
                h("div", { class: "col-4" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
            h("h3", null, "Mobile Viewport"),
            h("host", { viewport: "small" },
                h("div", { class: "col-3" },
                    h("snt-feature-left", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))), h("br", null),
        ];
    }
};
FeatureLeftExample.TAG_NAME = "feature-left-example";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FeatureLeftExample.prototype, "viewport", void 0);
FeatureLeftExample = __decorate([
    Component({
        tag: "feature-left-example",
        shadow: false
    })
], FeatureLeftExample);
export { FeatureLeftExample };
