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
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
let SourceLinkComponent = class SourceLinkComponent {
    render() {
        let content;
        let title = AccessibilityUtils.getNewWindowTitle();
        let text = AccessibilityUtils.getNewWindowText();
        if (this.target === "_blank") {
            content = [
                h("span", { class: "link-content" },
                    h("slot", null)),
                h("span", { class: "icon-font icon-new-window", title: title },
                    h("span", { class: "sr-only" },
                        " ",
                        text))
            ];
        }
        else {
            content = (h("span", { class: "full-content" },
                h("slot", null)));
        }
        return (h("a", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, content));
    }
};
SourceLinkComponent.TAG_NAME = "snt-source-link";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SourceLinkComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SourceLinkComponent.prototype, "target", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SourceLinkComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SourceLinkComponent.prototype, "rel", void 0);
SourceLinkComponent = __decorate([
    Component({
        tag: "snt-source-link",
        styleUrl: "source-link-component.scss",
        shadow: false,
    })
], SourceLinkComponent);
export { SourceLinkComponent };
