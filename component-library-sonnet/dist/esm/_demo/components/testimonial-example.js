var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let TestimonialExample = class TestimonialExample {
    render() {
        return (h("div", null,
            h("h1", null, "Group Components"),
            h("br", null),
            h("testimonials-group", { class: "neutral-fill", "group-id": "group-carousel", "group-headline": "Testimonial" },
                h("testimonial-quote", { "container-id": "test1", from: "Sameer S. from Toronto, Ontario" }, "We switched to Sonnet last year after 20 years of loyalty to another insurance company\u2026 it\u2019s so easy to make changes to our policy and someone is always at the ready to answer any of our questions. Great job Sonnet!"),
                h("testimonial-quote", { "container-id": "test2", from: "Sameer S. from Toronto, Ontario" }, "Second We switched to Sonnet last year after 20 years of loyalty to another insurance company\u2026 it\u2019s so easy to make changes to our policy and someone is always at the ready to answer any of our questions. Great job Sonnet!"),
                h("testimonial-quote", { "container-id": "test3", from: "Sameer S. from Toronto, Ontario" }, "Third Testimonials"),
                h("testimonial-quote", { "container-id": "test4", from: "Sameer S. from Toronto, Ontario" }, "Fourth Testimonials")),
            h("br", null),
            h("br", null),
            h("h1", null, "Single Component"),
            h("br", null),
            h("testimonials-group", { class: "neutral-fill", "group-id": "group-carousel", "group-headline": "Testimonial" },
                h("testimonial-quote", { "container-id": "test4", from: "Sameer S. from Toronto, Ontario" }, "Fourth Testimonials"))));
    }
};
TestimonialExample.TAG_NAME = "testimonial-example";
TestimonialExample = __decorate([
    Component({
        tag: 'testimonial-example',
        shadow: false
    })
], TestimonialExample);
export { TestimonialExample };
