var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let ButtonLinkGroupComponent = class ButtonLinkGroupComponent {
    render() {
        return (h("slot", null));
    }
};
ButtonLinkGroupComponent.TAG_NAME = "button-link-group";
ButtonLinkGroupComponent = __decorate([
    Component({
        tag: "button-link-group",
        styleUrl: "button-link-group-component.scss",
        shadow: false
    })
], ButtonLinkGroupComponent);
export { ButtonLinkGroupComponent };
