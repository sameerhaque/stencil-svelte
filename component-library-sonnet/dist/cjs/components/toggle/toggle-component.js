var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Host, Event } from "@stencil/core";
let ToggleComponent = class ToggleComponent {
    handleClick() {
        this.toggle.emit();
    }
    render() {
        return (h(Host, { onClick: this.handleClick.bind(this) },
            "X",
            h("span", { class: "sr-only" }, "Search")));
    }
};
ToggleComponent.TAG_NAME = "snt-header";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ToggleComponent.prototype, "element", void 0);
__decorate([
    Event({ eventName: 'toggle' }),
    __metadata("design:type", Object)
], ToggleComponent.prototype, "toggle", void 0);
ToggleComponent = __decorate([
    Component({
        tag: 'snt-toggle',
        styleUrl: 'toggle-component.scss',
        shadow: false
    })
], ToggleComponent);
export { ToggleComponent };
