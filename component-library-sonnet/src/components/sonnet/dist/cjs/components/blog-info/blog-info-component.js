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
let SntBlogInfo = class SntBlogInfo {
    componentWillLoad() {
        if (StringUtils.hasValue(this.accessibilityText)) {
            this.ariaTextJson = JSON.parse(this.accessibilityText);
        }
    }
    render() {
        return (h("snt-layout", null,
            h("div", { id: "blog-info-bar" },
                h("div", { class: "left-info" },
                    h("div", { class: "schedule-info" },
                        h("span", { class: "icons-container icon-font iconCalendar" }),
                        h("p", null, this.publishedTime)),
                    h("div", { class: "read-time-info" },
                        h("span", { class: "icons-container icon-font iconClock" }),
                        h("p", null, this.timeToRead))),
                h("div", { class: "social-icons" },
                    h("div", null,
                        h("a", { href: `http://www.linkedin.com/shareArticle?mini=true&url=${this.blogLink}&title=${this.titleText}`, "aria-label": this.ariaTextJson.linkedIn },
                            h("i", { class: "icon-font iconLinkedin" }))),
                    h("div", null,
                        h("a", { href: `https://www.facebook.com/sharer/sharer.php?u=${this.blogLink}`, "aria-label": this.ariaTextJson.facebook },
                            h("i", { class: "icon-font iconFacebookPlain" }))),
                    h("div", null,
                        h("a", { href: `https://twitter.com/intent/tweet?url=${this.blogLink}&text=${this.titleText}`, "aria-label": this.ariaTextJson.twitter },
                            h("i", { class: "icon-font iconTwitter" }))),
                    h("div", null,
                        h("a", { href: `mailto:?subject=${this.titleText}&body=${this.blogLink}`, "aria-label": this.ariaTextJson.email },
                            h("i", { class: "icon-font iconMail" })))))));
    }
};
SntBlogInfo.TAG_NAME = "snt-blog-info";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], SntBlogInfo.prototype, "hostElement", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SntBlogInfo.prototype, "titleText", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SntBlogInfo.prototype, "blogLink", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SntBlogInfo.prototype, "publishedTime", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SntBlogInfo.prototype, "timeToRead", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SntBlogInfo.prototype, "accessibilityText", void 0);
SntBlogInfo = __decorate([
    Component({
        tag: "snt-blog-info",
        styleUrl: "./blog-info-component.scss",
        shadow: false
    })
], SntBlogInfo);
export { SntBlogInfo };
