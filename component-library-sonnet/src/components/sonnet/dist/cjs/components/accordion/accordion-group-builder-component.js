var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
import { AccordionGroupBuilder } from "./builder/AccordionGroupBuilder";
import { HtmlElementBuilder } from "../../core/html/HtmlElementBuilder";
import { AccordionComponentBuilder } from "./builder/AccordionComponentBuilder";
let AccordionGroupBuilderComponent = class AccordionGroupBuilderComponent {
    buildGroups() {
        const accordionGroups = document.createDocumentFragment();
        const accordionOne = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        const accordionTwo = AccordionComponentBuilder.newInstance()
            .withSummary(HtmlElementBuilder.newInstance()
            .withTag("strong")
            .withInnerText("Accordion 1 Title")
            .build())
            .withDetails(HtmlElementBuilder.newInstance()
            .withTag("p")
            .withInnerText("Lorem Ipsum Dolor Samet")
            .build())
            .build();
        const accordionGroup = AccordionGroupBuilder.newInstance()
            .withAccordion(accordionOne)
            .withAccordion(accordionTwo)
            .build();
        accordionGroups.appendChild(accordionGroup);
        return accordionGroups;
    }
    render() {
        return ([
            h("div", { ref: (nodeElement) => { nodeElement.append(this.buildGroups()); } })
        ]);
    }
};
AccordionGroupBuilderComponent.TAG_NAME = "snt-accordion-group-builder";
AccordionGroupBuilderComponent = __decorate([
    Component({
        tag: "snt-accordion-group-builder",
        shadow: false
    })
], AccordionGroupBuilderComponent);
export { AccordionGroupBuilderComponent };
