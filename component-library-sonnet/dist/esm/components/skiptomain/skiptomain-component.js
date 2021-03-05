var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SkipToMainComponent_1;
import { Component, h, Prop } from "@stencil/core";
let SkipToMainComponent = SkipToMainComponent_1 = class SkipToMainComponent {
    componentWillLoad() {
        if (!this.mainContentId) {
            this.mainContentId = '#maincontent';
        }
        if (!this.mainContentId.startsWith('#')) {
            this.mainContentId = '#' + this.mainContentId;
        }
        if (!this.ariaLabel) {
            if (this.linkText) {
                this.ariaLabel = this.linkText;
            }
        }
    }
    render() {
        return [
            h("snt-link", { ariaLabel: this.ariaLabel, classNames: SkipToMainComponent_1.srClasses, href: this.mainContentId },
                h("span", null, this.linkText ? this.linkText : h("slot", null)))
        ];
    }
};
SkipToMainComponent.TAG_NAME = 'snt-skip-to-main';
SkipToMainComponent.srClasses = 'sr-only sr-only-focusable';
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SkipToMainComponent.prototype, "mainContentId", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SkipToMainComponent.prototype, "linkText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SkipToMainComponent.prototype, "ariaLabel", void 0);
SkipToMainComponent = SkipToMainComponent_1 = __decorate([
    Component({
        tag: 'snt-skip-to-main',
        styleUrl: './skiptomain-component.scss',
        shadow: false
    })
], SkipToMainComponent);
export { SkipToMainComponent };
