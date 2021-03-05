var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop } from "@stencil/core";
let ViewportComponent = class ViewportComponent {
    constructor() {
        this.name = '';
        this.devices = '';
        this.height = '';
        this.spacing = '';
    }
    render() {
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], ViewportComponent.prototype, "name", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ViewportComponent.prototype, "devices", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ViewportComponent.prototype, "height", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ViewportComponent.prototype, "spacing", void 0);
ViewportComponent = __decorate([
    Component({
        tag: 'snt-viewport',
        shadow: false
    })
], ViewportComponent);
export { ViewportComponent };
