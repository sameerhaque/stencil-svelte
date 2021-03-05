var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Host, Listen, Event, Prop, } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
let EnhancedButtonComponent = class EnhancedButtonComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.leftIconSources)) {
            this.leftIconJson = JSON.parse(this.leftIconSources);
        }
        if (StringUtils.hasValue(this.rightIconSources)) {
            this.rightIconJson = JSON.parse(this.rightIconSources);
        }
    }
    componentDidLoad() {
        if (this.leftIconJson || this.rightIconJson) {
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        }
    }
    render() {
        const iconContent = this.buildIconContent();
        const discountContent = this.buildDiscountContent();
        const linkContent = this.buildLinkContent();
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("a", { href: this.href, "aria-label": this.ariaLabel, target: this.target, id: this.linkId },
                h("div", { class: `link-panel ${StringUtils.isEmpty(this.discountText)
                        ? ""
                        : "discount"}` },
                    discountContent,
                    h("div", { class: "content-panel" },
                        iconContent,
                        h("h4", { class: "link-text" }, linkContent))))));
    }
    buildLinkContent() {
        let content = h("span", null, this.ctaText);
        if (this.target === "_blank" && StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [
                this.ctaText,
                h("span", { class: "icon-font icon-new-window", title: title },
                    h("span", { class: "sr-only" },
                        " ",
                        text)),
            ];
        }
        return content;
    }
    buildDiscountContent() {
        if (StringUtils.isEmpty(this.discountText)) {
            return null;
        }
        return h("div", { class: "discount-panel" }, this.discountText);
    }
    buildIconContent() {
        if (!this.leftIconJson && !this.rightIconJson) {
            return null;
        }
        else if (!this.leftIconJson || !this.rightIconJson) {
            const iconSources = this.leftIconJson || this.rightIconJson;
            return (h("div", { class: "icon-panel" }, this.buildPictureContent(iconSources.largeIconUrl, iconSources.smallIconUrl)));
        }
        else {
            return (h("div", { class: "icon-panel" },
                this.buildPictureContent(this.leftIconJson.largeIconUrl, this.leftIconJson.smallIconUrl),
                h("div", { class: "icon plus-sign" },
                    h("i", { class: "icon-font iconPlus" })),
                this.buildPictureContent(this.rightIconJson.largeIconUrl, this.rightIconJson.smallIconUrl)));
        }
    }
    buildPictureContent(largeIconUrl, smallIconUrl) {
        return (h("div", { class: "icon" },
            h("picture", { class: "icon-image" },
                h("source", { "data-srcSet": largeIconUrl, media: "(min-width: 1024px)" }),
                h("source", { "data-srcSet": smallIconUrl, media: "(min-width: 0px)" }),
                h("img", { class: "icon-image", src: "", "data-src": "", alt: "", "aria-hidden": "true" }))));
    }
};
EnhancedButtonComponent.TAG_NAME = "snt-enhanced-button";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], EnhancedButtonComponent.prototype, "element", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], EnhancedButtonComponent.prototype, "sntButtonClick", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], EnhancedButtonComponent.prototype, "sntButtonKeyDown", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "discountText", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "ctaText", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "href", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "target", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "leftIconSources", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "rightIconSources", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EnhancedButtonComponent.prototype, "linkId", void 0);
__decorate([
    Listen("keydown"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], EnhancedButtonComponent.prototype, "handleKeyDown", null);
__decorate([
    Listen("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], EnhancedButtonComponent.prototype, "handleClick", null);
EnhancedButtonComponent = __decorate([
    Component({
        tag: "snt-enhanced-button",
        styleUrl: "enhanced-button-component.scss",
        shadow: false,
    })
], EnhancedButtonComponent);
export { EnhancedButtonComponent };
