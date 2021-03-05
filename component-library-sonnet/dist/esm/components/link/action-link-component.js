var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Listen, Method, Prop } from '@stencil/core';
import { EventConfigurationUtils } from "../../core/events/utils/EventConfigurationUtils";
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
import { StringUtils } from "../../core/utils/StringUtils";
let ActionLinkComponent = class ActionLinkComponent {
    constructor() {
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.linkId = StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    async getEventConfiguration() {
        return this.eventConfiguration;
    }
    sntBtnEvent(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentWillLoad() {
        this.eventElems = this.element.querySelectorAll('snt-event');
    }
    componentDidLoad() {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("SntActionLink must contain a valid action-reference attribute!");
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
        const link = h("snt-link", { "link-id": this.linkId, classNames: this.styleClasses, href: "javascript:void(0);" },
            icon,
            this.linkTitle,
            h("slot", null));
        const events = this.eventElems.length == 0 ? [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })] : '';
        return [events, link];
    }
};
ActionLinkComponent.TAG_NAME = "snt-action-link";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ActionLinkComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ActionLinkComponent.prototype, "actionReference", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ActionLinkComponent.prototype, "actionData", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActionLinkComponent.prototype, "linkTitle", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActionLinkComponent.prototype, "iconClassName", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ActionLinkComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActionLinkComponent.prototype, "linkId", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActionLinkComponent.prototype, "getEventConfiguration", null);
__decorate([
    Listen('linkEvent'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], ActionLinkComponent.prototype, "sntBtnEvent", null);
ActionLinkComponent = __decorate([
    Component({
        tag: 'snt-action-link',
        shadow: false
    })
], ActionLinkComponent);
export { ActionLinkComponent };
