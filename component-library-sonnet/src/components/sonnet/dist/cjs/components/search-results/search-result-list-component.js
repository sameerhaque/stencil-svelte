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
let SearchResultListComponent = class SearchResultListComponent {
    constructor() {
        this.searchResultList = [];
        this.searchResultListJson = StringUtils.empty();
        this.noResultMsg = "No results found";
        this.separator = false;
    }
    render() {
        var content;
        if (StringUtils.hasValue(this.searchResultListJson) && this.searchResultListJson != "[]") {
            this.searchResultList = JSON.parse(this.searchResultListJson);
            content = (h("div", { class: `search-result-list-wrapper ${this.separator ? 'separator' : ''}`, "aria-live": "polite" },
                h("snt-layout", null, this.searchResultList.map(faq => (h("snt-search-result", { searchResult: faq }))))));
        }
        else {
            content = (h("snt-layout", null,
                h("h4", null, this.noResultMsg)));
        }
        return (content);
    }
};
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchResultListComponent.prototype, "searchResultListJson", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchResultListComponent.prototype, "noResultMsg", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], SearchResultListComponent.prototype, "separator", void 0);
SearchResultListComponent = __decorate([
    Component({
        tag: "snt-search-result-list",
        styleUrl: "./search-result-list-component.scss",
        shadow: false
    })
], SearchResultListComponent);
export { SearchResultListComponent };
