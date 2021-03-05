var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Host, Method, Prop } from "@stencil/core";
import { StringUtils } from "../../../core/utils/StringUtils";
import { WebUtils } from "../../../core/utils/WebUtils";
let SearchPanelComponent = class SearchPanelComponent {
    constructor() {
        this.languageStrings = {};
        this.active = false;
        this.styleClasses = StringUtils.empty();
        this.languageJson = StringUtils.empty();
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        return this.active;
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        ;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-action-button", { actionReference: "Action.toggleSearch", linkTitle: this.languageStrings["back"] || "Back", iconClassName: "iconChevron" }),
            h("snt-search-typeahead", { "search-combobox-id": "global-search-panel-combobox", languageJson: this.languageJson })));
    }
};
SearchPanelComponent.TAG_NAME = "snt-search-panel";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], SearchPanelComponent.prototype, "active", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], SearchPanelComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchPanelComponent.prototype, "languageJson", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], SearchPanelComponent.prototype, "toggleActive", null);
SearchPanelComponent = __decorate([
    Component({
        tag: 'snt-search-panel',
        styleUrl: "search-panel-component.scss",
        shadow: false
    })
], SearchPanelComponent);
export { SearchPanelComponent };
