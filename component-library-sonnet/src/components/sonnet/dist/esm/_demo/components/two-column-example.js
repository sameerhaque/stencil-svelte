var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let TwoColumnExample = class TwoColumnExample {
    render() {
        return [
            h("div", { class: "center left-mobile two-column-combined two-column-left title-combined-bottom combined-top" },
                h("h1", null, "A left B right"),
                h("snt-two-column", null,
                    h("div", { slot: "left" },
                        h("snt-title", { "title-type": "h3" }, "This is left title"),
                        h("snt-accordion-group", null,
                            h("snt-accordion", { id: "grouped-accordion-1", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-2", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-3", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))),
                    h("div", { slot: "right" },
                        h("snt-title", { "title-type": "h3" }, "This is right title"),
                        h("snt-accordion-group", { slot: "right" },
                            h("snt-accordion", { id: "grouped-accordion-4", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-5", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-6", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))))),
            h("br", null),
            h("div", { class: "center left-mobile two-column-combined two-column-left title-combined-bottom combined-top" },
                h("h1", null, "No title"),
                h("snt-two-column", null,
                    h("div", { slot: "left" },
                        h("snt-accordion-group", null,
                            h("snt-accordion", { id: "grouped-accordion-1", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-2", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-3", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")))),
                    h("div", { slot: "right" },
                        h("snt-accordion-group", { slot: "right" },
                            h("snt-accordion", { id: "grouped-accordion-4", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-5", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet.")),
                            h("snt-accordion", { id: "grouped-accordion-6", class: "faq-accordion" },
                                h("div", { slot: "summary" }, "Heading"),
                                h("div", { slot: "details" }, "Lorem ipsum dolor samet."))))))
        ];
    }
};
TwoColumnExample.TAG_NAME = "two-column-example";
TwoColumnExample = __decorate([
    Component({
        tag: 'two-column-example',
        shadow: false
    })
], TwoColumnExample);
export { TwoColumnExample };
