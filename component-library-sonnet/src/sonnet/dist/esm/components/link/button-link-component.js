var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Event, h, Listen, Prop, } from "@stencil/core";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
let ButtonLinkComponent = class ButtonLinkComponent {
    constructor() {
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
    render() {
        let content = h("slot", null);
        if (this.target === "_blank" && StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [
                content,
                h("span", { class: "icon-font icon-new-window", title: title },
                    h("span", { class: "sr-only" },
                        " ",
                        text)),
            ];
        }
        return [
            h("a", { id: this.buttonId, href: this.href, target: this.target, "aria-label": this.ariaLabel, "aria-describedby": StringUtils.hasValue(this.ariaDescribedByText) && this.buttonId ? `${this.buttonId}-describedby` : null, class: WebUtils.generateClasses([], this.classNames) }, content),
            StringUtils.hasValue(this.ariaDescribedByText) && this.buttonId ? (h("div", { class: "sr-only", id: `${this.buttonId}-describedby` }, this.ariaDescribedByText)) : null,
        ];
    }
};
ButtonLinkComponent.TAG_NAME = "button-link";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ButtonLinkComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ButtonLinkComponent.prototype, "target", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ButtonLinkComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ButtonLinkComponent.prototype, "ariaDescribedByText", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ButtonLinkComponent.prototype, "classNames", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ButtonLinkComponent.prototype, "buttonId", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ButtonLinkComponent.prototype, "element", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], ButtonLinkComponent.prototype, "linkEvent", void 0);
__decorate([
    Listen("keydown"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ButtonLinkComponent.prototype, "handleKeyDown", null);
__decorate([
    Listen("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ButtonLinkComponent.prototype, "handleClick", null);
__decorate([
    Listen("mouseover"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ButtonLinkComponent.prototype, "handleMouseover", null);
ButtonLinkComponent = __decorate([
    Component({
        tag: "button-link",
        styleUrl: "button-link-component.scss",
        shadow: false,
    })
], ButtonLinkComponent);
export { ButtonLinkComponent };
