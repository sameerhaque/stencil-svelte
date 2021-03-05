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
let TitleCopyComponent = class TitleCopyComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        const slotContentElement = this.hostElement.querySelector('div.content');
        if (!StringUtils.isEmpty(this.titleString) && !StringUtils.isEmpty(slotContentElement.innerHTML.trim())) {
            slotContentElement.classList.add('with-content');
        }
    }
    render() {
        return (h("snt-layout", null,
            StringUtils.isEmpty(this.titleString)
                ? ''
                : h("h2", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, this.titleString),
            h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) },
                h("slot", null))));
    }
};
TitleCopyComponent.TAG_NAME = "snt-title-copy";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], TitleCopyComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], TitleCopyComponent.prototype, "titleString", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], TitleCopyComponent.prototype, "styleClasses", void 0);
TitleCopyComponent = __decorate([
    Component({
        tag: "snt-title-copy",
        styleUrl: "title-copy-component.scss",
        shadow: false
    })
], TitleCopyComponent);
export { TitleCopyComponent };
