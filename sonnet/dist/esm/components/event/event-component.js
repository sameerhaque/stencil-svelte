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
let EventComponent = class EventComponent {
    componentWillLoad() { }
    componentWillUpdate() { }
    componentDidLoad() { }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
};
EventComponent.TAG_NAME = "snt-event";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], EventComponent.prototype, "type", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], EventComponent.prototype, "filters", void 0);
EventComponent = __decorate([
    Component({
        tag: 'snt-event',
        shadow: false
    })
], EventComponent);
export { EventComponent };
