var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Host, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
let AdComponent = class AdComponent {
    constructor() {
        this.titleString = "";
        this.styleClasses = StringUtils.empty();
        this.logoIsSet = false;
        this.iconIsSet = false;
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.iconSources)) {
            this.iconSourceJson = JSON.parse(this.iconSources);
            if (this.iconSourceJson.largeIconUrl || this.iconSourceJson.smallIconUrl) {
                this.iconIsSet = true;
            }
        }
        if (StringUtils.hasValue(this.logoSources)) {
            this.logoSourceJson = JSON.parse(this.logoSources);
            if (Object.keys(this.logoSourceJson).length > 0) {
                this.logoIsSet = true;
            }
        }
    }
    componentDidLoad() {
        if (this.logoIsSet || this.iconIsSet) {
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    }
    render() {
        var content;
        if (this.logoIsSet) {
            content = (h("div", { class: "logo" },
                h("picture", null,
                    h("source", { "data-srcSet": this.logoSourceJson.extraLargeLogoUrl, media: "(min-width: 1440px)" }),
                    h("source", { "data-srcSet": this.logoSourceJson.largeLogoUrl, media: "(min-width: 1024px)" }),
                    h("source", { "data-srcSet": this.logoSourceJson.mediumLogoUrl, media: "(min-width: 768px)" }),
                    h("source", { "data-srcSet": this.logoSourceJson.smallLogoUrl, media: "(min-width: 0px)" }),
                    h("img", { class: "logo-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
        }
        else if (this.iconIsSet) {
            content = (h("div", { class: "icon" },
                h("picture", { class: "icon-image" },
                    h("source", { "data-srcSet": this.iconSourceJson.largeIconUrl, media: "(min-width: 1024px)" }),
                    h("source", { "data-srcSet": this.iconSourceJson.smallIconUrl, media: "(min-width: 0px)" }),
                    h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
        }
        const buttonContent = this.buildButtonContent();
        const titleContent = StringUtils.hasValue(this.titleString)
            ? h("h3", null, this.titleString)
            : null;
        return (h(Host, null,
            h("snt-layout", null,
                h("div", { class: "ad-panel" },
                    content,
                    titleContent,
                    h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) },
                        h("slot", null)),
                    buttonContent))));
    }
    buildButtonContent() {
        if (this.href && this.buttonLabel) {
            return (h("button-link-group", null,
                h("button-link", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, this.buttonLabel)));
        }
        else if (this.actionReference && this.actionData && this.buttonLabel) {
            return (h("button-link-group", null,
                h("snt-action-button", { "action-reference": this.actionReference, "action-data": this.actionData, "style-classes": "cta", "link-title": this.buttonLabel })));
        }
        else if (this.linkLabel && this.href) {
            return (h("snt-link", { "class-names": "theme-link theme-action", "aria-label": this.linkLabel, href: this.href },
                " ",
                h("span", { class: "link-content" }, this.linkLabel),
                "  "));
        }
        else {
            return null;
        }
    }
};
AdComponent.TAG_NAME = "snt-ad";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], AdComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "titleString", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], AdComponent.prototype, "iconSources", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], AdComponent.prototype, "logoSources", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "target", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "buttonLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "linkLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "actionReference", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AdComponent.prototype, "actionData", void 0);
AdComponent = __decorate([
    Component({
        tag: "snt-ad",
        styleUrl: "./ad-component.scss",
        shadow: false,
    })
], AdComponent);
export { AdComponent };
