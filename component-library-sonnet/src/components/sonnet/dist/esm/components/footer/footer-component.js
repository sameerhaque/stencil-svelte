var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
let FooterComponent = class FooterComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    render() {
        return (h("div", { class: WebUtils.generateClasses(["footer"], this.styleClasses) },
            h("snt-layout", null,
                h("slot", null))));
    }
};
FooterComponent.TAG_NAME = "snt-footer";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], FooterComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], FooterComponent.prototype, "styleClasses", void 0);
FooterComponent = __decorate([
    Component({
        tag: 'snt-footer',
        styleUrl: "footer-component.scss",
        shadow: false
    })
], FooterComponent);
export { FooterComponent };
