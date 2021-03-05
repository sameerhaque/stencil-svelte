var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import './EventConfigurationBuilder-020e09d1.js';
import './ReflectionUtils-34647a76.js';
import { f as focusTrap_1 } from './index-a882e395.js';
import { S as SearchBarComponent, a as SearchPanelComponent } from './search-panel-component-0ebe267c.js';
import { A as ActionButtonComponent } from './action-button-component-844a433e.js';
var headerComponentCss = "snt-header{position:relative;display:block;width:100%;z-index:99;background-color:#323232}snt-header[fixed]{position:-webkit-sticky;position:sticky;top:0;left:0;right:0}@media (max-width: 1023px){snt-header[active] .brand-and-toggle,snt-header[active] .actions-nav,snt-header[active] snt-pane{display:none}snt-header[active] header{padding:0}}snt-header header{position:relative;padding:1.125rem 0;margin:0 auto}snt-header snt-layout .spacings{overflow:visible}snt-header snt-nav[slot=secondary-nav-mobile]{display:-ms-flexbox;display:flex}@media (min-width: 1024px){snt-header snt-nav[slot=secondary-nav-mobile]{display:none}}snt-header snt-nav[slot=secondary-nav-mobile] snt-nav-item{margin:0 0 0.625rem 0}snt-header snt-nav[slot=secondary-nav-desktop]{display:none}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop]{display:-ms-flexbox;display:flex}}snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0.625rem 0}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0 1.65rem}}snt-header snt-navbar-collapse{overflow:hidden;position:relative}@media (min-width: 768px){snt-header snt-navbar-collapse{overflow:visible}}snt-header snt-navbar-collapse{-ms-flex-order:1;order:1}@media (min-width: 768px){snt-header snt-navbar-collapse{-ms-flex-order:initial;order:initial}}snt-header snt-navbar{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}snt-header snt-button{white-space:nowrap}snt-header snt-button button{background:transparent;border:none;color:white}snt-header snt-link a{background-image:none;color:#ffffff}snt-header snt-link a:hover,snt-header snt-link a:focus{background-image:none}snt-header snt-skip-to-main a{font-family:Averta-ExtraBold;color:#6ebac5;text-decoration:none}snt-header snt-skip-to-main a:focus{outline:0.125rem solid #b2b2b2;outline-offset:0px}snt-header .header-container{width:100%;max-width:1440px;margin:auto}";
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(hostRef) {
        registerInstance(this, hostRef);
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
    HeaderComponent.prototype.onToggleSearch = function (evt) {
        var _this = this;
        evt.composedPath().includes(this.secondaryNavDesktop) || evt.composedPath().includes(this.searchBar)
            ? this.searchBar.toggleActive().then(function (active) {
                _this.toggleFocusTrap(active);
            })
            : this.searchPanel.toggleActive().then(function (active) {
                if (active) {
                    _this.mainPanel.classList.add("hidden");
                }
                else {
                    _this.mainPanel.classList.remove("hidden");
                    _this.navbarCollapse.focus();
                }
            });
    };
    HeaderComponent.prototype.toggleActive = function (active) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = (typeof (active) === "boolean") ? active : !this.active;
                this.toggleFocusTrap(this.active);
                return [2 /*return*/, Promise.resolve(this.active)];
            });
        });
    };
    HeaderComponent.prototype.setActive = function (active) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = active;
                this.toggleFocusTrap(this.active);
                return [2 /*return*/, Promise.resolve(this.active)];
            });
        });
    };
    HeaderComponent.prototype.onScroll = function (_evt) {
        this.fixed && this.shrink();
    };
    HeaderComponent.prototype.onViewportChanged = function () {
        if (this.navbarCollapse) {
            this.navbarCollapse.viewport = this.layout.viewport;
        }
    };
    HeaderComponent.prototype.componentWillLoad = function () {
        try {
            this.languageStrings = JSON.parse(this.languageJson);
        }
        catch (e) {
            console.error(e);
        }
        this.gaqButtonActionData = JSON.stringify({
            getAQuoteUrl: this.languageStrings["getAQuoteUrl"],
            languageString: {
                close: this.languageStrings["close"]
            }
        });
    };
    HeaderComponent.prototype.componentDidLoad = function () {
        this.fixed && this.shrink();
        this.registersubComponents();
        this.setSubComponentClasses();
        this.insertAdditionalElements();
        this.focusTrap = focusTrap_1(this.element, {});
        this.searchBar = this.element.querySelector(SearchBarComponent.TAG_NAME);
        this.searchPanel = this.element.querySelector(SearchPanelComponent.TAG_NAME);
    };
    HeaderComponent.prototype.registersubComponents = function () {
        this.secondaryNavDesktop = this.element.querySelector("[slot=" + HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME + "]");
        this.secondaryNavMobile = this.element.querySelector("[slot=" + HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME + "]");
        this.primaryNav = this.element.querySelector("[slot=" + HeaderComponent.PRIMARY_NAV_SLOT_NAME + "]");
    };
    HeaderComponent.prototype.setSubComponentClasses = function () {
        this.secondaryNavDesktop.classList.add("theme-header-nav", "flex-row", "justify-content-end", "secondary-nav");
        this.secondaryNavMobile.classList.add("theme-header-nav", "secondary-nav");
        this.primaryNav.classList.add("main-nav", "theme-header-nav");
    };
    HeaderComponent.prototype.insertAdditionalElements = function () {
        var searchButtonHTML = "<snt-nav-item><snt-action-button action-reference=\"Action.toggleSearch\" icon-class-name=\"iconNavSearch\" link-title=\"" + (this.languageStrings["search"] || "Search") + "\"></snt-action-button> </snt-nav-item>";
        (!this.secondaryNavDesktop.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavDesktop.insertAdjacentHTML("beforeend", searchButtonHTML));
        (!this.secondaryNavMobile.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavMobile.insertAdjacentHTML("beforeend", searchButtonHTML));
    };
    HeaderComponent.prototype.shrink = function () {
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
    };
    HeaderComponent.prototype.toggleFocusTrap = function (active) {
        active ? this.focusTrap.activate() : this.focusTrap.deactivate();
    };
    HeaderComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { onSntBackdropTap: function () { return _this.setActive(false); }, onNavbarToggled: function () { return _this.toggleActive(); } }, h("div", { class: "header-container" }, h("snt-layout", { padding: "vertical-only", ref: function (elem) { return _this.layout = elem; } }, h("header", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, h("snt-skip-to-main", { "main-content-id": "#" + this.mainContentId }, this.languageStrings["skipToMainContent"] || "Skip to main content"), h("snt-pane", { animated: true, ref: function (elem) { return _this.secondaryNavPane = elem; } }, h("slot", { name: HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME })), h("snt-navbar", { "style-classes": "navbar-expand-lg", "language-string": this.languageJson }, h("div", { slot: HeaderComponent.NAVBAR_BRAND_SLOT_NAME }, h("slot", { name: HeaderComponent.NAVBAR_BRAND_SLOT_NAME })), h("snt-navbar-collapse", { id: "navbar-collapse", slot: "navbar-collapse", "logo-url": this.languageStrings["logoUrl"], ref: function (elem) { return _this.navbarCollapse = elem; } }, h("div", { class: "main-panel", ref: function (elem) { return _this.mainPanel = elem; } }, h("snt-action-button", { "button-id": "get-a-quote-m-header", actionReference: "Action.openGetQuoteModal", linkTitle: this.languageStrings["gaq"] || "Get a Quote", actionData: this.gaqButtonActionData, styleClasses: "gaq-mobile cta theme-headerNav d-flex d-lg-none" }), h("slot", { name: HeaderComponent.PRIMARY_NAV_SLOT_NAME }), h("slot", { name: HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME })), h("snt-search-panel", { class: "hidden", languageJson: this.languageJson })), h("snt-nav", { id: "actions-nav", class: "actions-nav theme-header-nav", expander: "false" }, h("snt-nav-item", null, h("snt-shopping-cart", null, " ")), h("snt-nav-item", { styleClasses: "d-none d-md-flex" }, h("snt-action-button", { "button-id": "get-a-quote-header", styleClasses: "cta theme-headerNav", actionReference: "Action.openGetQuoteModal", actionData: this.gaqButtonActionData, linkTitle: this.languageStrings["gaq"] || "Get a Quote" }, " ")), h("snt-nav-item", null, h("slot", { name: "login-slot" }))))), h("snt-search-bar", { languageJson: this.languageJson })))));
    };
    Object.defineProperty(HeaderComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return HeaderComponent;
}());
HeaderComponent.TAG_NAME = "snt-header";
HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME = "secondary-nav-desktop";
HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME = "secondary-nav-mobile";
HeaderComponent.PRIMARY_NAV_SLOT_NAME = "primary-nav";
HeaderComponent.NAVBAR_BRAND_SLOT_NAME = "navbar-brand";
HeaderComponent.style = headerComponentCss;
export { HeaderComponent as snt_header };
