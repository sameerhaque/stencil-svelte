var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Host, Listen, Event, Prop } from '@stencil/core';
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
let ButtonComponent = class ButtonComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
        this.hiddenTitle = StringUtils.empty();
        this.buttonId = StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.sntButtonKeyDown.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.sntButtonClick.emit(clickEvent);
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("button", { id: this.buttonId },
                h("slot", null))));
    }
};
ButtonComponent.TAG_NAME = "snt-button";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ButtonComponent.prototype, "element", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "sntButtonClick", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "sntButtonKeyDown", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "iconClassName", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ButtonComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ButtonComponent.prototype, "hiddenTitle", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "buttonId", void 0);
__decorate([
    Listen('keydown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ButtonComponent.prototype, "handleKeyDown", null);
__decorate([
    Listen('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ButtonComponent.prototype, "handleClick", null);
ButtonComponent = __decorate([
    Component({
        tag: "snt-button",
        styleUrl: "button-component.scss",
        shadow: false
    })
], ButtonComponent);
export { ButtonComponent };
