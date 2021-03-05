var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop, Element, Host } from '@stencil/core';
let IconComponent = class IconComponent {
    render() {
        return (h(Host, { class: `icon-font ${this.styleClasses}`, "aria-hidden": "true" }));
    }
};
IconComponent.TAG_NAME = "snt-icon";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], IconComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconComponent.prototype, "styleClasses", void 0);
IconComponent = __decorate([
    Component({
        tag: "snt-icon",
        styleUrl: "icon-component.scss",
        shadow: false
    })
], IconComponent);
export { IconComponent };
