var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Host, Listen, Prop, Watch, Method } from "@stencil/core";
import { NavbarCollapseComponent } from "../navbar-collapse/navbar-collapse-component";
import { StringUtils } from "../../../core/utils/StringUtils";
import { WebUtils } from "../../../core/utils/WebUtils";
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    listenNavbarTogglerEvent(_event) {
        this.toggleActive().then(null);
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        return this.active;
    }
    watchActive() {
        if (this.navbarCollapse) {
            this.navbarCollapse.toggleShown(this.active)
                .then(null);
        }
    }
    componentDidLoad() {
        this.navbarCollapse = document.querySelector(`${NavbarCollapseComponent.TAG_NAME}`);
        if (this.navbarCollapse) {
            this.navbarToggle.ariaControls = this.navbarCollapse.id;
        }
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar"], this.styleClasses), onSntBackdropTap: () => this.toggleActive() },
            h("div", { class: "brand-and-toggle" },
                h("snt-navbar-toggle", { ref: (elem) => this.navbarToggle = elem, languageString: this.languageString }),
                h("slot", { name: "navbar-brand" })),
            h("slot", { name: "navbar-collapse" }),
            h("slot", null),
            h("snt-backdrop", null)));
    }
};
NavbarComponent.TAG_NAME = "snt-navbar";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], NavbarComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "active", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavbarComponent.prototype, "viewport", void 0);
__decorate([
    Prop({ reflect: false }),
    __metadata("design:type", String)
], NavbarComponent.prototype, "languageString", void 0);
__decorate([
    Listen('navbarToggled'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], NavbarComponent.prototype, "listenNavbarTogglerEvent", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NavbarComponent.prototype, "toggleActive", null);
__decorate([
    Watch('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavbarComponent.prototype, "watchActive", null);
NavbarComponent = __decorate([
    Component({
        tag: 'snt-navbar',
        styleUrl: "navbar-component.scss",
        shadow: false
    })
], NavbarComponent);
export { NavbarComponent };
