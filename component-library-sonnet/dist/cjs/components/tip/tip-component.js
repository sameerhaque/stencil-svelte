var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Host } from "@stencil/core";
let TipComponent = class TipComponent {
    render() {
        return (h(Host, null,
            h("div", { class: "tip-container" },
                h("div", { class: "icon icon-tip" },
                    h("snt-image", { class: "icon-image", "data-src": this.iconPath })),
                h("p", null,
                    h("slot", null)))));
    }
};
TipComponent.TAG_NAME = "snt-tip";
__decorate([
    Prop(),
    __metadata("design:type", String)
], TipComponent.prototype, "iconPath", void 0);
TipComponent = __decorate([
    Component({
        tag: 'snt-tip',
        styleUrl: './tip-component.scss',
        shadow: false
    })
], TipComponent);
export { TipComponent };
