var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Listen, Prop } from "@stencil/core";
import { UrlUtils } from "../../../core/utils/UrlUtils";
import { StringUtils } from "../../../core/utils/StringUtils";
let SearchTypeaheadComponent = class SearchTypeaheadComponent {
    constructor() {
        this.baseHref = StringUtils.empty();
        this.searchHref = this.baseHref;
        this.languageStrings = {};
        this.languageJson = StringUtils.empty();
    }
    handleSearchButtonClick(evt) {
        if (evt.target == this.searchSntButton) {
            window.location.href = this.searchHref;
        }
    }
    onKeyDown() {
        window.location.href = this.searchHref;
    }
    async onInput() {
        const input = await this.searchComboBox.getInputElement();
        this.searchHref = UrlUtils.updateQueryStringParameter(this.baseHref, 'es', encodeURIComponent(input.value));
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        ;
        this.baseHref = this.languageStrings["searchUrl"];
    }
    render() {
        return (h("div", { class: "search-input-area" },
            h("snt-search-combobox", { ref: elem => (this.searchComboBox = elem), id: this.searchComboboxId, class: "theme-neutral", "auto-complete": true, padding: "none", onSntInput: async () => { await this.onInput(); }, onSntSearchSubmitted: this.onKeyDown.bind(this), "language-string": this.languageJson, "search-para-name": "es" })));
    }
};
SearchTypeaheadComponent.TAG_NAME = "snt-search-typeahead";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchTypeaheadComponent.prototype, "languageJson", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SearchTypeaheadComponent.prototype, "searchComboboxId", void 0);
__decorate([
    Listen("sntButtonClick"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SearchTypeaheadComponent.prototype, "handleSearchButtonClick", null);
SearchTypeaheadComponent = __decorate([
    Component({
        tag: 'snt-search-typeahead',
        styleUrl: "search-typeahead-component.scss",
        shadow: false
    })
], SearchTypeaheadComponent);
export { SearchTypeaheadComponent };
