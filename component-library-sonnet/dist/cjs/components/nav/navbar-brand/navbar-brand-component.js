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
let NavbarBrandComponent = class NavbarBrandComponent {
    render() {
        return [
            h("a", { href: this.href },
                h("snt-image", { "img-alt": this.imgAlt, "src-image": this.imgSrc, "data-src": this.imgSrc }))
        ];
    }
};
NavbarBrandComponent.TAG_NAME = "snt-navbar-brand";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavbarBrandComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavbarBrandComponent.prototype, "imgAlt", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavbarBrandComponent.prototype, "imgSrc", void 0);
NavbarBrandComponent = __decorate([
    Component({
        tag: 'snt-navbar-brand',
        styleUrl: 'navbar-brand-component.scss',
        shadow: false
    })
], NavbarBrandComponent);
export { NavbarBrandComponent };
