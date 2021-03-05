var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HeaderComponent_1;
import { Component, Element, h, Host, Listen, Method, Prop } from "@stencil/core";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
import { SearchBarComponent } from "../search/search-bar/search-bar-component";
import { SearchPanelComponent } from "../search/search-panel/search-panel-component";
import { ActionButtonComponent } from "../button/action-button-component";
import focusTrap from "focus-trap";
let HeaderComponent = HeaderComponent_1 = class HeaderComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
        this.fixed = false;
        this.languageJson = StringUtils.empty();
        this.mainContentId = StringUtils.empty();
        this.active = false;
        this.shrunk = false;
        this.languageStrings = {};
        this.focusTrap = null;
        this.gaqButtonActionData = null;
    }
    onToggleSearch(evt) {
        evt.composedPath().includes(this.secondaryNavDesktop) || evt.composedPath().includes(this.searchBar)
            ? this.searchBar.toggleActive().then((active) => {
                this.toggleFocusTrap(active);
            })
            : this.searchPanel.toggleActive().then((active) => {
                if (active) {
                    this.mainPanel.classList.add("hidden");
                }
                else {
                    this.mainPanel.classList.remove("hidden");
                    this.navbarCollapse.focus();
                }
            });
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        this.toggleFocusTrap(this.active);
        return Promise.resolve(this.active);
    }
    async setActive(active) {
        this.active = active;
        this.toggleFocusTrap(this.active);
        return Promise.resolve(this.active);
    }
    onScroll(_evt) {
        this.fixed && this.shrink();
    }
    onViewportChanged() {
        if (this.navbarCollapse) {
            this.navbarCollapse.viewport = this.layout.viewport;
        }
    }
    componentWillLoad() {
        try {
            this.languageStrings = JSON.parse(this.languageJson);
        }
        catch (e) {
            console.error(e);
        }
        ;
        this.gaqButtonActionData = JSON.stringify({
            getAQuoteUrl: this.languageStrings["getAQuoteUrl"],
            languageString: {
                close: this.languageStrings["close"]
            }
        });
    }
    componentDidLoad() {
        this.fixed && this.shrink();
        this.registersubComponents();
        this.setSubComponentClasses();
        this.insertAdditionalElements();
        this.focusTrap = focusTrap(this.element, {});
        this.searchBar = this.element.querySelector(SearchBarComponent.TAG_NAME);
        this.searchPanel = this.element.querySelector(SearchPanelComponent.TAG_NAME);
    }
    registersubComponents() {
        this.secondaryNavDesktop = this.element.querySelector(`[slot=${HeaderComponent_1.SECONDARY_NAV_DESKTOP_SLOT_NAME}]`);
        this.secondaryNavMobile = this.element.querySelector(`[slot=${HeaderComponent_1.SECONDARY_NAV_MOBILE_SLOT_NAME}]`);
        this.primaryNav = this.element.querySelector(`[slot=${HeaderComponent_1.PRIMARY_NAV_SLOT_NAME}]`);
    }
    setSubComponentClasses() {
        this.secondaryNavDesktop.classList.add("theme-header-nav", "flex-row", "justify-content-end", "secondary-nav");
        this.secondaryNavMobile.classList.add("theme-header-nav", "secondary-nav");
        this.primaryNav.classList.add("main-nav", "theme-header-nav");
    }
    insertAdditionalElements() {
        const searchButtonHTML = `<snt-nav-item><snt-action-button action-reference="Action.toggleSearch" icon-class-name="iconNavSearch" link-title="${this.languageStrings["search"] || "Search"}"></snt-action-button> </snt-nav-item>`;
        (!this.secondaryNavDesktop.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavDesktop.insertAdjacentHTML("beforeend", searchButtonHTML));
        (!this.secondaryNavMobile.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavMobile.insertAdjacentHTML("beforeend", searchButtonHTML));
    }
    shrink() {
        if (this.secondaryNavPane) {
            if (!this.shrunk && (this.element.offsetTop + window.scrollY) > (this.element.offsetTop + this.element.offsetHeight)) {
                this.secondaryNavPane.collapsed = true;
                this.shrunk = true;
            }
            else if (window.scrollY == 0 && this.shrunk) {
                this.secondaryNavPane.collapsed = false;
                this.shrunk = false;
            }
        }
    }
    toggleFocusTrap(active) {
        active ? this.focusTrap.activate() : this.focusTrap.deactivate();
    }
    render() {
        return (h(Host, { onSntBackdropTap: () => this.setActive(false), onNavbarToggled: () => this.toggleActive() },
            h("div", { class: "header-container" },
                h("snt-layout", { padding: "vertical-only", ref: (elem) => this.layout = elem },
                    h("header", { class: WebUtils.generateClasses(["header"], this.styleClasses) },
                        h("snt-skip-to-main", { "main-content-id": `#${this.mainContentId}` }, this.languageStrings["skipToMainContent"] || "Skip to main content"),
                        h("snt-pane", { animated: true, ref: (elem) => this.secondaryNavPane = elem },
                            h("slot", { name: HeaderComponent_1.SECONDARY_NAV_DESKTOP_SLOT_NAME })),
                        h("snt-navbar", { "style-classes": "navbar-expand-lg", "language-string": this.languageJson },
                            h("div", { slot: HeaderComponent_1.NAVBAR_BRAND_SLOT_NAME },
                                h("slot", { name: HeaderComponent_1.NAVBAR_BRAND_SLOT_NAME })),
                            h("snt-navbar-collapse", { id: "navbar-collapse", slot: "navbar-collapse", "logo-url": this.languageStrings["logoUrl"], ref: (elem) => this.navbarCollapse = elem },
                                h("div", { class: "main-panel", ref: (elem) => this.mainPanel = elem },
                                    h("snt-action-button", { "button-id": "get-a-quote-m-header", actionReference: "Action.openGetQuoteModal", linkTitle: this.languageStrings["gaq"] || "Get a Quote", actionData: this.gaqButtonActionData, styleClasses: "gaq-mobile cta theme-headerNav d-flex d-lg-none" }),
                                    h("slot", { name: HeaderComponent_1.PRIMARY_NAV_SLOT_NAME }),
                                    h("slot", { name: HeaderComponent_1.SECONDARY_NAV_MOBILE_SLOT_NAME })),
                                h("snt-search-panel", { class: "hidden", languageJson: this.languageJson })),
                            h("snt-nav", { id: "actions-nav", class: "actions-nav theme-header-nav", expander: "false" },
                                h("snt-nav-item", null,
                                    h("snt-shopping-cart", null, " ")),
                                h("snt-nav-item", { styleClasses: "d-none d-md-flex" },
                                    h("snt-action-button", { "button-id": "get-a-quote-header", styleClasses: "cta theme-headerNav", actionReference: "Action.openGetQuoteModal", actionData: this.gaqButtonActionData, linkTitle: this.languageStrings["gaq"] || "Get a Quote" }, " ")),
                                h("snt-nav-item", null,
                                    h("slot", { name: "login-slot" }))))),
                    h("snt-search-bar", { languageJson: this.languageJson })))));
    }
};
HeaderComponent.TAG_NAME = "snt-header";
HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME = "secondary-nav-desktop";
HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME = "secondary-nav-mobile";
HeaderComponent.PRIMARY_NAV_SLOT_NAME = "primary-nav";
HeaderComponent.NAVBAR_BRAND_SLOT_NAME = "navbar-brand";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], HeaderComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], HeaderComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "fixed", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], HeaderComponent.prototype, "languageJson", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], HeaderComponent.prototype, "mainContentId", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "active", void 0);
__decorate([
    Listen('toggleSearch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onToggleSearch", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], HeaderComponent.prototype, "toggleActive", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], HeaderComponent.prototype, "setActive", null);
__decorate([
    Listen('scroll', { target: 'window' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onScroll", null);
__decorate([
    Listen('viewportChanged', { target: 'parent' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onViewportChanged", null);
HeaderComponent = HeaderComponent_1 = __decorate([
    Component({
        tag: 'snt-header',
        styleUrl: "header-component.scss",
        shadow: false
    })
], HeaderComponent);
export { HeaderComponent };
