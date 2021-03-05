var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Host, Element, Event, Method } from '@stencil/core';
const TOGGLE_CLASSES = {
    active: 'active',
    show: 'show',
    inactive: 'inactive',
    timing: 600
};
import { TestimonialsComponent } from "./testimonials-component";
let TestimonialsGroupComponent = class TestimonialsGroupComponent {
    constructor() {
        this.selected = 0;
        this.slideSelector = '.carousel-item';
        this.indicatorSelector = '[data-slide-to]';
        this.prevSelector = '[data-slide="prev"]';
        this.nextSelector = '[data-slide="next"]';
        this.cycleType = 'hover';
        this.ride = false;
        this.wrap = true;
        this.listeners = {};
        this.currentSlide = 0;
        this.x0 = null; //intial click/touch position on testimonial
    }
    unify(e) { return e.changedTouches ? e.changedTouches[0] : e; }
    ;
    lock(e) {
        this.x0 = this.unify(e).clientX;
    }
    ;
    move(e) {
        if (this.x0 || this.x0 === 0) {
            let dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);
            if ((this.currentSlide > 0 || s < 0) && (this.currentSlide < this.slideElements.length - 1 || s > 0)) {
                this.currentSlide -= s;
                if (s == -1) {
                    this.onShow(this.currentSlide);
                }
                else if (s == 1) {
                    this.onShow(this.currentSlide);
                }
            }
            this.x0 = null;
        }
    }
    ;
    componentDidLoad() {
        this._carouselContainer = this.element.querySelector('.carousel-inner');
        this._carouselContainer.addEventListener('mousedown', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('touchstart', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('mouseup', this.move.bind(this), false);
        this._carouselContainer.addEventListener('touchend', this.move.bind(this), false);
        this.element.querySelector('.carousel-item').classList.add('active');
        this.currentSlide = this.selected || 0;
        this.getSlideElements();
        this.getIndicatorElements();
        this.getPrevNextButtons();
        if (this.currentSlide > 0) {
            this.onShow(this.selected);
        }
    }
    componentDidUnload() {
        if (this.slideElements && this.slideElements.length) {
            this.slideElements.forEach((element, i) => {
                element.removeEventListener('click', this.listeners[i]);
            });
        }
        if (this.prevElement && this.prevListener) {
            this.prevElement.removeEventListener('click', this.prevListener);
        }
        if (this.nextElement && this.nextListener) {
            this.nextElement.removeEventListener('click', this.nextListener);
        }
    }
    getPrevNextButtons() {
        this.prevElement = this.element.querySelector(this.prevSelector);
        this.nextElement = this.element.querySelector(this.nextSelector);
        if (this.prevElement) {
            this.prevListener = this.addClickHandler(this.prevElement, () => this.prev());
        }
        if (this.nextElement) {
            this.nextListener = this.addClickHandler(this.nextElement, () => this.next());
        }
    }
    getSlideElements() {
        this.slideElements = this.element.querySelectorAll(this.slideSelector);
    }
    getIndicatorElements() {
        this.indicatorElements = this.element.querySelectorAll(this.indicatorSelector);
        this.indicatorElements.forEach((element, i) => {
            this.indicatorClickHandler(element, i);
        });
    }
    addClickHandler(element, fn = this.next) {
        if (!element)
            return;
        let eventHandler = () => {
            if (fn) {
                fn();
            }
        };
        element.addEventListener('click', eventHandler);
        return eventHandler;
    }
    indicatorClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = () => {
            this.onShow(index);
        };
        element.addEventListener('click', eventHandler);
        this.listeners[index] = eventHandler;
    }
    addActiveClass(element) {
        setTimeout(() => { element.classList.add(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        if (TOGGLE_CLASSES.inactive) {
            element.classList.remove(TOGGLE_CLASSES.inactive);
        }
    }
    removeActiveClass(elements = this.slideElements) {
        elements.forEach(item => {
            setTimeout(() => { item.classList.remove(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        });
    }
    async onShow(index = 0) {
        this.removeActiveClass();
        if (this.indicatorElements && this.indicatorElements.length) {
            this.removeActiveClass(this.indicatorElements);
            this.addActiveClass(this.indicatorElements[index]);
        }
        this.indicatorClickHandler(this.slideElements[index], index);
        this.addActiveClass(this.slideElements[index]);
        this.currentSlide = index;
        this.showSlide.emit({
            current: this.currentSlide,
            element: this.slideElements[index]
        });
    }
    async onHide(index = 0) {
        this.removeActiveClass();
        if (this.indicatorElements && this.indicatorElements.length) {
            this.removeActiveClass(this.indicatorElements);
        }
        this.hideSlide.emit({
            current: this.currentSlide,
            element: this.slideElements[index]
        });
        this.currentSlide = 0;
    }
    async next() {
        if (this.slideElements && this.slideElements.length - 1 <= this.currentSlide) {
            this.onShow(0);
        }
        else {
            this.onShow(this.currentSlide + 1);
        }
    }
    async prev() {
        if (this.currentSlide <= 0) {
        }
        else {
            this.onShow(this.currentSlide - 1);
        }
    }
    render() {
        let testimonials = Array.from(this.element.querySelectorAll(TestimonialsComponent.TAG_NAME));
        return (h(Host, { id: this.groupId, class: "carousel slide", "data-ride": "carousel" },
            h("div", { class: "full_container" },
                h("snt-layout", null,
                    h("h2", { class: "testimonial-title" }, this.groupHeadline),
                    h("div", { class: "carousel-slider-wrap" },
                        h("div", { class: "carousel-inner" },
                            h("slot", null))),
                    h("div", { class: "testimonial-controls " + (testimonials.length > 1 ? '' : 'd-none') },
                        h("a", { class: "carousel-control-prev", href: "javascript:void(0);", role: "button", "data-slide": "prev" },
                            h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows left" })),
                            h("span", { class: "sr-only" }, "Previous")),
                        h("ol", { class: "carousel-indicators" }, testimonials.map((_elem, index) => h("li", { "data-target": "#" + this.groupId, "data-slide-to": index, class: (index == 0) ? 'active' : '' }))),
                        h("a", { class: "carousel-control-next", href: "javascript:void(0);", role: "button", "data-slide": "next" },
                            h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows right" })),
                            h("span", { class: "sr-only" }, "Next")))))));
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], TestimonialsGroupComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsGroupComponent.prototype, "groupId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsGroupComponent.prototype, "groupHeadline", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], TestimonialsGroupComponent.prototype, "showSlide", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], TestimonialsGroupComponent.prototype, "hideSlide", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], TestimonialsGroupComponent.prototype, "selected", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsGroupComponent.prototype, "slideSelector", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsGroupComponent.prototype, "indicatorSelector", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsGroupComponent.prototype, "prevSelector", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TestimonialsGroupComponent.prototype, "nextSelector", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], TestimonialsGroupComponent.prototype, "cycleType", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], TestimonialsGroupComponent.prototype, "ride", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], TestimonialsGroupComponent.prototype, "wrap", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestimonialsGroupComponent.prototype, "onShow", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestimonialsGroupComponent.prototype, "onHide", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestimonialsGroupComponent.prototype, "next", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestimonialsGroupComponent.prototype, "prev", null);
TestimonialsGroupComponent = __decorate([
    Component({
        tag: 'testimonials-group',
        styleUrl: 'testimonials-component.scss',
        shadow: false
    })
], TestimonialsGroupComponent);
export { TestimonialsGroupComponent };
