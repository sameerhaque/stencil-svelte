var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Event, h, Host, Method, Prop, Watch } from "@stencil/core";
let NavbarCollapseComponent = class NavbarCollapseComponent {
    constructor() {
        this.shown = false;
        this.viewport = null;
        this.logoUrl = null;
        this.inDesktopMode = false;
        this.elementToFocusOn = null;
        this.lastActiveElement = null;
    }
    async toggleShown(shown) {
        this.shown = (typeof (shown) === "boolean") ? shown : !this.shown;
        return Promise.resolve(this.shown);
    }
    onShown(shown) {
        if (shown) {
            this.lastActiveElement = document.activeElement || document.body;
        }
        this.elementToFocusOn = shown ? this.element : this.lastActiveElement;
    }
    onViewport() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentWillRender() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentDidUpdate() {
        if (this.elementToFocusOn !== null) {
            this.elementToFocusOn.focus();
            this.elementToFocusOn = null;
        }
    }
    render() {
        return (h(Host, { class: `collapse navbar-collapse ${this.shown ? "show" : ""}`, tabindex: this.inDesktopMode ? null : "-1", role: this.inDesktopMode ? null : "dialog", "aria-expanded": this.inDesktopMode ? "false" : this.shown ? "false" : "true" },
            h("div", { class: "spacer" }),
            h("div", { class: "header d-flex d-lg-none align-items-center" },
                h("snt-button", { class: "d-inline-flex", onClick: () => this.navbarToggled.emit() },
                    h("snt-icon", { styleClasses: "iconNavClose" })),
                h("snt-image", { "data-src": this.logoUrl, width: "100", height: "100" })),
            h("div", { class: "body" },
                h("slot", null))));
    }
};
NavbarCollapseComponent.TAG_NAME = "snt-navbar-collapse";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], NavbarCollapseComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], NavbarCollapseComponent.prototype, "shown", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavbarCollapseComponent.prototype, "viewport", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], NavbarCollapseComponent.prototype, "logoUrl", void 0);
__decorate([
    Event({ eventName: 'navbarToggled' }),
    __metadata("design:type", Object)
], NavbarCollapseComponent.prototype, "navbarToggled", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NavbarCollapseComponent.prototype, "toggleShown", null);
__decorate([
    Watch('shown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], NavbarCollapseComponent.prototype, "onShown", null);
__decorate([
    Watch('viewport'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavbarCollapseComponent.prototype, "onViewport", null);
NavbarCollapseComponent = __decorate([
    Component({
        tag: 'snt-navbar-collapse',
        styleUrl: 'navbar-collapse-component.scss',
        shadow: false
    })
], NavbarCollapseComponent);
export { NavbarCollapseComponent };
