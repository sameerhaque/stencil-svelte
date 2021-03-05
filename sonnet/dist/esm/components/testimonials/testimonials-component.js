var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Host, State, Element } from '@stencil/core';
let TestimonialsComponent = class TestimonialsComponent {
    componentDidLoad() {
        if (this.element.querySelector('blockquote').innerHTML.length < 0) {
            throw new Error('Cannot have an empty testimonial');
        }
    }
    componentWillLoad() {
        (this.element.parentElement.classList.contains('carousel-inner'))
            ? this.single = false
            : this.single = true;
    }
    render() {
        if (this.single) {
            return (h(Host, { id: this.containerId, class: "carousel slide", "data-ride": "carousel" },
                h("div", { class: "container" },
                    h("h2", { class: "testimonial-title" }, this.headline),
                    h("div", { class: "carousel-inner" },
                        h("div", { class: "carousel-item active" },
                            h("div", { class: "carousel-caption " },
                                h("div", { class: "carousel-quote" },
                                    h("blockquote", null,
                                        h("slot", null)),
                                    h("p2", null, this.from))))))));
        }
        else {
            return (h(Host, { class: "carousel-item", id: this.containerId },
                h("div", { class: "carousel-caption" },
                    h("div", { class: "carousel-quote" },
                        h("blockquote", null,
                            h("slot", null)),
                        h("p2", null, this.from)))));
        }
    }
};
TestimonialsComponent.TAG_NAME = "testimonial-quote";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], TestimonialsComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsComponent.prototype, "containerId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsComponent.prototype, "fill", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsComponent.prototype, "from", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsComponent.prototype, "headline", void 0);
__decorate([
    State(),
    __metadata("design:type", Boolean)
], TestimonialsComponent.prototype, "single", void 0);
TestimonialsComponent = __decorate([
    Component({
        tag: 'testimonial-quote',
        styleUrl: 'testimonials-component.scss',
        shadow: false
    })
], TestimonialsComponent);
export { TestimonialsComponent };
