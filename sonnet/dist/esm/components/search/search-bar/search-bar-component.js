var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Host, Method, Prop, Watch } from "@stencil/core";
import { StringUtils } from "../../../core/utils/StringUtils";
let SearchBarComponent = class SearchBarComponent {
    constructor() {
        this.languageJson = StringUtils.empty();
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") || !this.active;
        return this.active;
    }
    watchActive(active) {
        if (active) {
            this.lastActiveElement = document.activeElement;
        }
    }
    componentDidUpdate() {
        this.setFocus();
    }
    setFocus() {
        if (this.active) {
            const input = this.searchTypeahead.querySelector("input");
            if (input) {
                input.focus();
            }
        }
        else {
            this.lastActiveElement.focus();
        }
    }
    render() {
        return (h(Host, { onSntBackdropTap: this.toggleActive.bind(this) },
            h("snt-pane", { styleClasses: "d-flex justify-content-center align-items-center" },
                h("snt-search-typeahead", { "search-combobox-id": "global-search-combobox", ref: (el) => this.searchTypeahead = el, languageJson: this.languageJson }),
                h("snt-action-button", { "action-reference": "Action.toggleSearch", "icon-class-name": "iconNavClose" })),
            ",",
            h("snt-backdrop", null)));
    }
};
SearchBarComponent.TAG_NAME = "snt-search-bar";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], SearchBarComponent.prototype, "active", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchBarComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchBarComponent.prototype, "languageJson", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], SearchBarComponent.prototype, "toggleActive", null);
__decorate([
    Watch("active"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], SearchBarComponent.prototype, "watchActive", null);
SearchBarComponent = __decorate([
    Component({
        tag: 'snt-search-bar',
        styleUrl: "search-bar-component.scss",
        shadow: false
    })
], SearchBarComponent);
export { SearchBarComponent };
