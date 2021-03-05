var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop } from "@stencil/core";
let SourceListComponent = class SourceListComponent {
    constructor() {
        this.RETURN = 13;
    }
    handleKeydown(event) {
        switch (event.keyCode) {
            case this.RETURN:
                this.toggleExpand();
                event.stopPropagation();
                event.preventDefault();
                break;
            default:
                break;
        }
    }
    toggleExpand() {
        if (this.buttonEl.getAttribute('aria-expanded') === 'true') {
            this.buttonEl.setAttribute('aria-expanded', 'false');
        }
        else {
            this.buttonEl.setAttribute('aria-expanded', 'true');
        }
        this.buttonEl.classList.toggle('expanded');
        this.toggleContent();
    }
    toggleContent() {
        this.panelEl.classList.toggle('open');
        this.panelEl.classList.toggle('close');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_plus');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_minus');
    }
    render() {
        return (h("snt-layout", null,
            h("button", { ref: (el) => (this.buttonEl = el), onKeyDown: this.handleKeydown.bind(this), onClick: this.toggleExpand.bind(this), "aria-expanded": "false", "aria-controls": this.panelId },
                h("span", { ref: (el) => (this.iconEl = el), class: "expand-icon icon-font icon-icon_legalAccordion_plus" }),
                this.sourceHeading),
            h("div", { class: "source-panel close", ref: (el) => (this.panelEl = el), id: this.panelId },
                h("slot", null))));
    }
};
SourceListComponent.TAG_NAME = "snt-source-list";
__decorate([
    Prop(),
    __metadata("design:type", String)
], SourceListComponent.prototype, "panelId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SourceListComponent.prototype, "sourceHeading", void 0);
SourceListComponent = __decorate([
    Component({
        tag: "snt-source-list",
        styleUrl: "source-list-component.scss",
        shadow: false,
    })
], SourceListComponent);
export { SourceListComponent };
