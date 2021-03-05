var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Host, h, Prop } from '@stencil/core';
let IconCopyComponent = class IconCopyComponent {
    constructor() {
        this.imageSrc = '';
        this.imgAlt = '';
    }
    render() {
        return (h(Host, null,
            h("div", { class: "image-panel" },
                h("snt-image", { "data-src": this.imageSrc, "img-alt": this.imgAlt }))));
    }
};
IconCopyComponent.TAG_NAME = "snt-image-column";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "imageSrc", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "imgAlt", void 0);
IconCopyComponent = __decorate([
    Component({
        tag: 'snt-image-column',
        shadow: false
    })
], IconCopyComponent);
export { IconCopyComponent };
