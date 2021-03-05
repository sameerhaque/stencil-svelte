var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
import { AccordionComponentBuilder } from "./builder/AccordionComponentBuilder";
import { HtmlElementBuilder } from "../../core/html/HtmlElementBuilder";
let AccordionBuilderComponent = class AccordionBuilderComponent {
    buildAccordions() {
        const accordions = document.createDocumentFragment();
        const accordion = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        accordions.appendChild(accordion);
        return accordions;
    }
    render() {
        return ([
            h("div", { ref: (nodeElement) => { nodeElement.append(this.buildAccordions()); } })
        ]);
    }
};
AccordionBuilderComponent.TAG_NAME = "snt-accordion-builder";
AccordionBuilderComponent = __decorate([
    Component({
        tag: "snt-accordion-builder",
        shadow: false
    })
], AccordionBuilderComponent);
export { AccordionBuilderComponent };
