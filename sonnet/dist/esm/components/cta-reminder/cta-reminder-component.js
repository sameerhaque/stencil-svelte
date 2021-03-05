var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Prop } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
let CtaReminderComponent = class CtaReminderComponent {
    constructor() {
        this.titleString = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.isEmpty(this.actionReference) && StringUtils.isEmpty(this.url)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, "aria-label": this.linkTitle, href: this.url }, this.linkTitle));
        }
        else {
            content = (h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.linkTitle }));
        }
        return (h("snt-layout", null,
            h("h2", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString),
            h("div", { class: "action-button" }, content)));
    }
};
CtaReminderComponent.TAG_NAME = "snt-cta-reminder";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], CtaReminderComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "titleString", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "linkTitle", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "url", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "urlTarget", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "actionReference", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "actionData", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaReminderComponent.prototype, "buttonId", void 0);
CtaReminderComponent = __decorate([
    Component({
        tag: 'snt-cta-reminder',
        styleUrl: 'cta-reminder-component.scss',
        shadow: false
    })
], CtaReminderComponent);
export { CtaReminderComponent };
