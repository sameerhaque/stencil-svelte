var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Listen, Method, Prop } from "@stencil/core";
import { EventConfigurationUtils } from "../../core/events/utils/EventConfigurationUtils";
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
let ActionButtonComponent = class ActionButtonComponent {
    constructor() {
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    async getEventConfiguration() {
        return this.eventConfiguration;
    }
    onSntButtonClick(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    onSntButtonKeyDown(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentDidLoad() {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("ActionButtonComponent must contain a valid action-reference attribute!");
        }
        if (!StringUtils.isEmpty(this.actionData)) {
            try {
                this.actionDataJsonObj = JSON.parse(this.actionData);
            }
            catch (error) {
                throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.");
            }
        }
        this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    }
    render() {
        const icon = (StringUtils.notEmpty(this.iconClassName)) ? h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const button = h("snt-button", { "button-id": this.buttonId, styleClasses: WebUtils.generateClasses([], this.styleClasses), "hidden-title": this.linkTitle },
            icon,
            this.linkTitle);
        const events = (this.element.children.length > 0) ? h("slot", null) : [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })];
        return [events, button];
    }
};
ActionButtonComponent.TAG_NAME = "snt-action-button";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ActionButtonComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "actionReference", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "actionData", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "iconClassName", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "linkTitle", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "buttonId", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActionButtonComponent.prototype, "getEventConfiguration", null);
__decorate([
    Listen("sntButtonClick"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], ActionButtonComponent.prototype, "onSntButtonClick", null);
__decorate([
    Listen("sntButtonKeyDown"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], ActionButtonComponent.prototype, "onSntButtonKeyDown", null);
ActionButtonComponent = __decorate([
    Component({
        tag: "snt-action-button",
        shadow: false
    })
], ActionButtonComponent);
export { ActionButtonComponent };
