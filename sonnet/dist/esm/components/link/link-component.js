var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Event, h, Listen, Prop } from "@stencil/core";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
let LinkComponent = class LinkComponent {
    constructor() {
        this.hiddenTitle = StringUtils.empty();
        this.isExternal = false;
        this.classNames = StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.linkEvent.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    handleMouseover(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    componentWillLoad() {
        this.content = h("slot", null);
        const isExternalLink = AccessibilityUtils.isAccessibilityLinkRequired(this.element, this.href, this.target);
        if (isExternalLink) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            this.content = [h("span", { class: "link-content" }, this.content),
                h("span", { class: 'icon-font icon-new-window', title: title },
                    h("span", { class: 'sr-only' },
                        " ",
                        text))
            ];
            if (this.rel) {
                if (!this.rel.includes('noopener')) {
                    this.rel = this.rel.concat(' noopener ');
                }
            }
            else {
                this.rel = 'noopener';
            }
        }
    }
    render() {
        return [
            h("a", { id: this.linkId, rel: this.rel, href: this.href, target: this.target, download: this.downloadName, "aria-label": this.ariaLabel, class: WebUtils.generateClasses([], this.classNames), "hidden-title": this.hiddenTitle }, this.content)
        ];
    }
};
LinkComponent.TAG_NAME = "snt-link";
__decorate([
    Prop(),
    __metadata("design:type", String)
], LinkComponent.prototype, "linkId", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], LinkComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], LinkComponent.prototype, "target", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], LinkComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], LinkComponent.prototype, "current", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], LinkComponent.prototype, "downloadName", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Object)
], LinkComponent.prototype, "ariaCurrent", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], LinkComponent.prototype, "rel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], LinkComponent.prototype, "hiddenTitle", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], LinkComponent.prototype, "isExternal", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], LinkComponent.prototype, "classNames", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], LinkComponent.prototype, "element", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], LinkComponent.prototype, "linkEvent", void 0);
__decorate([
    Listen('keydown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], LinkComponent.prototype, "handleKeyDown", null);
__decorate([
    Listen('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], LinkComponent.prototype, "handleClick", null);
__decorate([
    Listen('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], LinkComponent.prototype, "handleMouseover", null);
LinkComponent = __decorate([
    Component({
        tag: "snt-link",
        styleUrl: "link-component.scss",
        shadow: false
    })
], LinkComponent);
export { LinkComponent };
