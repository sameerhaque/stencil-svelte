var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, Element, Listen, h, Method } from "@stencil/core";
import { AccordionComponent } from "./accordion-component";
import { AccordionStateEnum } from "./domain/AccordionStateEnum";
let AccordionGroupComponent = class AccordionGroupComponent {
    constructor() {
        this.multiExpand = false;
    }
    async expandAll() {
        let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}:not([expanded])`);
        children.forEach((child) => {
            child.expand().then(null);
        });
    }
    async collapseAll() {
        let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);
        children.forEach((child) => {
            child.collapse().then(null);
        });
    }
    async addAccordion(accordion) {
        // TODO: Add code to inject in position of other accordion
        this.element.appendChild(accordion);
    }
    componentWillRender() {
        if (this.element) {
            if (!this.multiExpand) {
                let numberOfExpandedItems = 0;
                this.element.querySelectorAll("snt-accordion").forEach(c => {
                    if (c.hasAttribute("expanded")) {
                        numberOfExpandedItems++;
                    }
                    if (numberOfExpandedItems >= 2) {
                        c.expanded = false;
                    }
                });
            }
        }
    }
    render() {
        return (h("snt-layout", null,
            h("slot", null)));
    }
    onAccordionEvent(event) {
        if ((event.detail.state == AccordionStateEnum.EXPANDED) && (!(this.multiExpand))) {
            this.collapseSibling(event);
        }
    }
    collapseSibling(event) {
        let children = this.element.querySelectorAll(`${AccordionComponent.TAG_NAME}[expanded]`);
        children.forEach((child) => {
            if (child != event.target) {
                child.collapse().then(null);
            }
        });
    }
};
AccordionGroupComponent.TAG_NAME = "snt-accordion-group";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], AccordionGroupComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], AccordionGroupComponent.prototype, "multiExpand", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionGroupComponent.prototype, "expandAll", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionGroupComponent.prototype, "collapseAll", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLSntAccordionElement]),
    __metadata("design:returntype", Promise)
], AccordionGroupComponent.prototype, "addAccordion", null);
__decorate([
    Listen("accordionEvent", { target: this.element }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], AccordionGroupComponent.prototype, "onAccordionEvent", null);
AccordionGroupComponent = __decorate([
    Component({
        tag: "snt-accordion-group",
        styleUrl: "./accordion-group-component.scss",
        shadow: false
    })
], AccordionGroupComponent);
export { AccordionGroupComponent };
