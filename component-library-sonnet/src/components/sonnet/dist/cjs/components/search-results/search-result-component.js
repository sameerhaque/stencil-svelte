var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
let SearchResultComponent = class SearchResultComponent {
    constructor() {
        this.descriptionText = StringUtils.empty();
    }
    componentWillRender() {
        var elem = document.createElement('p');
        elem.innerHTML = this.searchResult.description;
        this.descriptionText = elem.innerText || "";
    }
    render() {
        const categoryLabel = StringUtils.hasValue(this.searchResult.category) ?
            h("p", null, this.searchResult.category) : null;
        const descriptionText = StringUtils.hasValue(this.searchResult.description) ?
            h("p", { class: "description", innerHTML: this.descriptionText }) : null;
        return (h("div", { class: "search-result-wrapper" },
            categoryLabel,
            h("snt-link", { "class-names": "theme-link theme-action", href: this.searchResult.url },
                h("div", { class: "link-content", innerHTML: this.searchResult.title })),
            descriptionText));
    }
};
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Object)
], SearchResultComponent.prototype, "searchResult", void 0);
SearchResultComponent = __decorate([
    Component({
        tag: "snt-search-result",
        styleUrl: "./search-result-component.scss",
        shadow: false
    })
], SearchResultComponent);
export { SearchResultComponent };
