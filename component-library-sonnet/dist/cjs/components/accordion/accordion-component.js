var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccordionComponent_1;
import { Component, Host, Element, Prop, h, Method, Watch, Event } from "@stencil/core";
import { AccordionStateEnum } from "./domain/AccordionStateEnum";
import { WebUtils } from "../../core/utils/WebUtils";
import { AccordionEvent } from "./domain/AccordionEvent";
let AccordionComponent = AccordionComponent_1 = class AccordionComponent {
    constructor() {
        this.expanded = false;
    }
    async isCollapsed() {
        return Promise.resolve(!this.expanded);
    }
    async isExpanded() {
        return Promise.resolve(this.expanded);
    }
    async collapse() {
        this.expanded = false;
    }
    async expand() {
        this.expanded = true;
    }
    async toggle() {
        if (this.expanded) {
            this.collapse();
        }
        else {
            this.expand();
        }
    }
    /** TODO: Annotate this function **/
    async transition(transitionType) {
        const panel = this.element.querySelector(AccordionComponent_1.CARD_PANEL);
        panel.classList.add(AccordionComponent_1.TRANSITIONING_CLASS_NAME);
        if (transitionType == AccordionStateEnum.EXPANDED) {
            const eventualHeight = panel.scrollHeight;
            panel.style.height = "0px";
            await WebUtils.sleep(100);
            panel.style.height = `${eventualHeight}px`;
        }
        else {
            panel.style.height = `${panel.scrollHeight}px`;
            await WebUtils.sleep(100);
            panel.style.height = "0px";
        }
        setTimeout(() => {
            panel.classList.remove(AccordionComponent_1.TRANSITIONING_CLASS_NAME);
            panel.style.height = "";
            return Promise.resolve();
        }, (parseFloat(getComputedStyle(panel).transitionDuration) * 650));
    }
    expandedChanged(newValue) {
        this.accordionEvent.emit(new AccordionEvent(this.expanded ? AccordionStateEnum.EXPANDED : AccordionStateEnum.COLLAPSED));
        const transitionType = (newValue == true) ? AccordionStateEnum.EXPANDED : AccordionStateEnum.COLLAPSED;
        this.transition(transitionType).then(null);
    }
    getExpandIcon(isTranscriptAccordion, isExpanded) {
        return isTranscriptAccordion == true
            ? h("span", { class: `expand-icon icon-font ${isExpanded ? 'icon-icon_legalAccordion_minus' : 'icon-icon_legalAccordion_plus'}` })
            : null;
    }
    render() {
        const accordionId = this.element.id;
        const panelClass = `card-panel collapse ${this.expanded ? "show" : ""}`;
        const ariaExpanded = (this.expanded) ? "true" : "false";
        const isTranscriptAccordion = this.element.classList.contains('transcript-accordion');
        return (h(Host, { expanded: this.expanded },
            h("div", { class: "card pas-accordion" },
                h("div", { id: `${accordionId}-header`, class: "card-header" },
                    h("button", { onClick: this.toggle.bind(this), class: "btn accordion-btn", "aria-expanded": ariaExpanded, "aria-controls": `${accordionId}-panel` },
                        this.getExpandIcon(isTranscriptAccordion, this.expanded),
                        h("div", { class: `mb-0 ${isTranscriptAccordion ? '' : 'h4'}` },
                            h("slot", { name: "summary" })))),
                h("div", { id: `${accordionId}-panel`, class: panelClass, "aria-labelledby": `${accordionId}-header` },
                    h("div", { class: "card-body" },
                        h("slot", { name: "details" }))))));
    }
};
AccordionComponent.TAG_NAME = "snt-accordion";
AccordionComponent.CARD_PANEL = ".card-panel";
AccordionComponent.TRANSITIONING_CLASS_NAME = "transitioning";
__decorate([
    Prop({ mutable: true, reflect: true }),
    __metadata("design:type", Boolean)
], AccordionComponent.prototype, "expanded", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "accordionEvent", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], AccordionComponent.prototype, "element", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionComponent.prototype, "isCollapsed", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionComponent.prototype, "isExpanded", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionComponent.prototype, "collapse", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionComponent.prototype, "expand", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccordionComponent.prototype, "toggle", null);
__decorate([
    Watch("expanded"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], AccordionComponent.prototype, "expandedChanged", null);
AccordionComponent = AccordionComponent_1 = __decorate([
    Component({
        tag: 'snt-accordion',
        styleUrl: 'accordion-component.scss',
        shadow: false
    })
], AccordionComponent);
export { AccordionComponent };
