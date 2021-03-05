var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Prop, Element } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { EventConfigurationBuilder } from "../../core/events/builder/EventConfigurationBuilder";
let CtaHighlightComponent = class CtaHighlightComponent {
    constructor() {
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.isEmpty(this.actionReference)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { "button-id": this.buttonId, class: "theme-primary", target: this.urlTarget, href: this.url }, this.cta));
        }
        else {
            content = (h("snt-action-button", { "button-id": this.buttonId, "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.cta }));
        }
        return (h("snt-layout", { class: "cta-container" },
            h("div", { class: "cta-wrapper" },
                h("div", { class: "text-content" },
                    h("slot", null)),
                content)));
    }
};
CtaHighlightComponent.TAG_NAME = "snt-cta-highlight";
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaHighlightComponent.prototype, "cta", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaHighlightComponent.prototype, "actionReference", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaHighlightComponent.prototype, "actionData", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaHighlightComponent.prototype, "url", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], CtaHighlightComponent.prototype, "urlTarget", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CtaHighlightComponent.prototype, "buttonId", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], CtaHighlightComponent.prototype, "element", void 0);
CtaHighlightComponent = __decorate([
    Component({
        tag: 'snt-cta-highlight',
        styleUrl: './cta-highlight-component.scss',
        shadow: false
    })
], CtaHighlightComponent);
export { CtaHighlightComponent };
