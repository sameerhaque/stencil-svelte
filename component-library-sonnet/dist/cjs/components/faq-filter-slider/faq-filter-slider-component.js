var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop, Event } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
let FAQFilterSliderComponent = class FAQFilterSliderComponent {
    onFilterClick(filterKey) {
        if (this.currentActive !== filterKey) {
            this.currentActive = filterKey;
            this.faqFilterClick.emit(filterKey);
        }
    }
    componentWillRender() {
        try {
            this._filterArr = JSON.parse(this.filterItems);
        }
        catch (e) {
            console.log(`Error parsing filterItems: ${this.filterItems}`);
        }
        if (StringUtils.isEmpty(this.currentActive)) {
            this.currentActive = this._filterArr.length != 0 ? this._filterArr[0].key : "";
        }
    }
    render() {
        return [
            h("host", { class: this._filterArr.length === 0 ? "hide" : "" },
                h("snt-layout", null,
                    h("div", { class: "wrapper" },
                        h("div", { class: "right-gradient" }),
                        h("div", { class: "left-gradient" }),
                        h("div", { class: "filter-container" },
                            h("nav", { "aria-label": this.menuAriaLabel },
                                h("ul", null, this._filterArr.map(item => (h("li", null,
                                    h("a", { href: "javascript:void(0)", class: item.key == this.currentActive ? "active" : "", onClick: this.onFilterClick.bind(this, item.key) }, item.title),
                                    h("span", { class: "bold-hidden" }, item.title))))))))))
        ];
    }
};
FAQFilterSliderComponent.TAG_NAME = "snt-faq-filter-slider";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQFilterSliderComponent.prototype, "filterItems", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], FAQFilterSliderComponent.prototype, "menuAriaLabel", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], FAQFilterSliderComponent.prototype, "faqFilterClick", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQFilterSliderComponent.prototype, "currentActive", void 0);
FAQFilterSliderComponent = __decorate([
    Component({
        tag: "snt-faq-filter-slider",
        styleUrl: "faq-filter-slider-component.scss",
        shadow: false
    })
], FAQFilterSliderComponent);
export { FAQFilterSliderComponent };
