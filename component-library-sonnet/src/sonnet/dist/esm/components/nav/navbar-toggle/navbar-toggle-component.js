var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Event, h, Method, Prop, Watch } from "@stencil/core";
import { LanguageUtils } from "../../../core/utils/LanguageUtils";
let NavbarToggleComponent = class NavbarToggleComponent {
    async toggleCollapsed(collapsed) {
        this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : !this.collapsed;
        return Promise.resolve(this.collapsed);
    }
    watchCollapsed() {
        this.navbarToggled.emit();
    }
    componentWillLoad() {
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["toggleNavigation"]);
    }
    render() {
        return (h("button", { class: "navbar-toggler", "aria-controls": this.ariaControls, "aria-label": this.languageVariables.get("toggleNavigation"), "aria-expanded": this.collapsed ? "false" : "true", onClick: () => this.toggleCollapsed() },
            h("snt-icon", { styleClasses: "iconNavBurger" })));
    }
};
NavbarToggleComponent.TAG_NAME = "snt-navbar-toggle";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], NavbarToggleComponent.prototype, "element", void 0);
__decorate([
    Event({ eventName: 'navbarToggled' }),
    __metadata("design:type", Object)
], NavbarToggleComponent.prototype, "navbarToggled", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], NavbarToggleComponent.prototype, "collapsed", void 0);
__decorate([
    Prop({ reflect: false }),
    __metadata("design:type", String)
], NavbarToggleComponent.prototype, "ariaControls", void 0);
__decorate([
    Prop({ reflect: false }),
    __metadata("design:type", String)
], NavbarToggleComponent.prototype, "languageString", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NavbarToggleComponent.prototype, "toggleCollapsed", null);
__decorate([
    Watch('collapsed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavbarToggleComponent.prototype, "watchCollapsed", null);
NavbarToggleComponent = __decorate([
    Component({
        tag: 'snt-navbar-toggle',
        styleUrl: "navbar-toggle-component.scss",
        shadow: false
    })
], NavbarToggleComponent);
export { NavbarToggleComponent };
