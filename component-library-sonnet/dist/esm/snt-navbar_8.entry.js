import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { C as CookieUtils } from './CookieUtils-d59e6373.js';
import { L as LanguageUtils } from './LanguageUtils-994fe2d5.js';
export { S as snt_search_bar, a as snt_search_panel } from './search-panel-component-0ebe267c.js';

const navbarCollapseComponentCss = "snt-navbar-collapse{width:290px}snt-navbar-collapse hr{border-top:1px solid #ffffff;margin:0}snt-navbar-collapse snt-nav{padding:0.825rem 0 0.5rem;border-bottom:1px solid #ffffff}@media (min-width: 1024px){snt-navbar-collapse snt-nav{padding:0;border-bottom:none}}snt-navbar-collapse snt-nav:last-of-type{border-bottom:none}snt-navbar-collapse snt-nav-item{width:100%}@media (min-width: 1024px){snt-navbar-collapse snt-nav-item{width:auto}}snt-navbar-collapse .header{padding:20px 30px 20px 30px}@media (min-width: 1024px){snt-navbar-collapse .header{padding:initial}}snt-navbar-collapse .header snt-icon{font-size:1rem;margin-right:24px}snt-navbar-collapse .header snt-image{width:100%;max-width:85px}snt-navbar-collapse .body{position:relative;padding:0.75rem 2rem 2rem}@media (min-width: 1024px){snt-navbar-collapse .body{padding:0}}snt-navbar-collapse .body snt-button.cta button{width:100%}snt-navbar-collapse .spacer{display:none}@media (min-width: 1024px){snt-navbar-collapse .spacer{display:-ms-flexbox;display:flex;-ms-flex:0 1 4.375rem;flex:0 1 4.375rem;min-width:1rem}}snt-navbar-collapse[shown]{z-index:10000;position:fixed;left:0;top:0;bottom:0;background-color:#323232}@media (min-width: 1024px){snt-navbar-collapse[shown]{position:initial}}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NavbarCollapseComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
        this.shown = false;
        this.viewport = null;
        this.logoUrl = null;
        this.inDesktopMode = false;
        this.elementToFocusOn = null;
        this.lastActiveElement = null;
    }
    toggleShown(shown) {
        return __awaiter(this, void 0, void 0, function* () {
            this.shown = (typeof (shown) === "boolean") ? shown : !this.shown;
            return Promise.resolve(this.shown);
        });
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
        return (h(Host, { class: `collapse navbar-collapse ${this.shown ? "show" : ""}`, tabindex: this.inDesktopMode ? null : "-1", role: this.inDesktopMode ? null : "dialog", "aria-expanded": this.inDesktopMode ? "false" : this.shown ? "false" : "true" }, h("div", { class: "spacer" }), h("div", { class: "header d-flex d-lg-none align-items-center" }, h("snt-button", { class: "d-inline-flex", onClick: () => this.navbarToggled.emit() }, h("snt-icon", { styleClasses: "iconNavClose" })), h("snt-image", { "data-src": this.logoUrl, width: "100", height: "100" })), h("div", { class: "body" }, h("slot", null))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "shown": ["onShown"],
        "viewport": ["onViewport"]
    }; }
};
NavbarCollapseComponent.TAG_NAME = "snt-navbar-collapse";
NavbarCollapseComponent.style = navbarCollapseComponentCss;

const navbarComponentCss = "snt-navbar{width:100%}snt-navbar.navbar{margin:0;padding:0;}@media (min-width: 768px){snt-navbar.navbar.navbar-expand-md .nav-link,snt-navbar.navbar.navbar-expand-lg .nav-link{padding-left:0;padding-right:0}}@media (max-width: 1023px){snt-navbar[active] snt-backdrop{display:block}}snt-navbar snt-backdrop{display:none}snt-navbar .actions-nav,snt-navbar .brand-and-toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row nowrap;flex-flow:row nowrap}@media (min-width: 1024px){snt-navbar .actions-nav,snt-navbar .brand-and-toggle{-ms-flex-flow:column nowrap;flex-flow:column nowrap}}snt-navbar .brand-and-toggle>*:not(:last-child){margin-right:1.25rem}snt-navbar .actions-nav>*:not(:first-child){margin-left:1.25rem}@media (min-width: 1024px){snt-navbar .actions-nav>*:not(:first-child){margin-left:1.625rem}}snt-navbar .main-panel.hidden{visibility:hidden}";

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NavbarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    listenNavbarTogglerEvent(_event) {
        this.toggleActive().then(null);
    }
    toggleActive(active) {
        return __awaiter$1(this, void 0, void 0, function* () {
            this.active = (typeof (active) === "boolean") ? active : !this.active;
            return this.active;
        });
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
        return (h(Host, { class: WebUtils.generateClasses(["navbar"], this.styleClasses), onSntBackdropTap: () => this.toggleActive() }, h("div", { class: "brand-and-toggle" }, h("snt-navbar-toggle", { ref: (elem) => this.navbarToggle = elem, languageString: this.languageString }), h("slot", { name: "navbar-brand" })), h("slot", { name: "navbar-collapse" }), h("slot", null), h("snt-backdrop", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
};
NavbarComponent.TAG_NAME = "snt-navbar";
NavbarComponent.style = navbarComponentCss;

const navbarToggleComponentCss = "snt-navbar-toggle .navbar-toggler{border:none;margin:0;padding:0;display:-ms-flexbox;display:flex}@media (min-width: 768px){snt-navbar-toggle .navbar-toggler{font-size:1.75rem;margin-top:2px}}snt-navbar-toggle .navbar-toggler snt-icon{color:#ffffff}";

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NavbarToggleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
    }
    toggleCollapsed(collapsed) {
        return __awaiter$2(this, void 0, void 0, function* () {
            this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : !this.collapsed;
            return Promise.resolve(this.collapsed);
        });
    }
    watchCollapsed() {
        this.navbarToggled.emit();
    }
    componentWillLoad() {
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["toggleNavigation"]);
    }
    render() {
        return (h("button", { class: "navbar-toggler", "aria-controls": this.ariaControls, "aria-label": this.languageVariables.get("toggleNavigation"), "aria-expanded": this.collapsed ? "false" : "true", onClick: () => this.toggleCollapsed() }, h("snt-icon", { styleClasses: "iconNavBurger" })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "collapsed": ["watchCollapsed"]
    }; }
};
NavbarToggleComponent.TAG_NAME = "snt-navbar-toggle";
NavbarToggleComponent.style = navbarToggleComponentCss;

class AnimationUtils {
    static collapseElement(element) {
        // get the height of the element's inner content, regardless of its actual size
        const sectionHeight = element.scrollHeight;
        // temporarily disable all css transitions
        const elementTransition = element.style.transition;
        element.style.transition = '';
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'
        requestAnimationFrame(() => {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(() => {
                element.style.height = 0 + 'px';
                // make element hidden to prevent elements within it being focusable
                element.style.visibility = 'hidden';
            });
        });
    }
    static expandElement(element) {
        // get the height of the element's inner content, regardless of its actual size
        const sectionHeight = element.scrollHeight;
        // make element visible to allow elements within it becoming focusable again
        element.style.visibility = "visible";
        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';
        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function fn(_evt) {
            element.style.height = "auto";
            // remove this event listener so it only gets triggered once
            element.removeEventListener('transitionend', fn);
            // remove "height" from the element's inline styles, so it can return to its initial value
            //element.style.height = null;
        });
    }
}

const paneComponentCss = "snt-pane{width:100%;display:block}snt-pane[animated]{height:auto;overflow:hidden;-webkit-transition:height 0.3s ease;transition:height 0.3s ease}";

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const PaneComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.collapsed = false;
        this.animated = false;
        this.styleClasses = StringUtils.empty();
    }
    toggleCollapsed(collapsed) {
        return __awaiter$3(this, void 0, void 0, function* () {
            this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : this.collapsed;
            return this.collapsed;
        });
    }
    onCollapsed(collapsed) {
        if (this.animated)
            (collapsed) ? AnimationUtils.collapseElement(this.element) : AnimationUtils.expandElement(this.element);
    }
    listenButtonEvent(_event) {
        this.collapsed = !this.collapsed;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), "aria-hidden": this.collapsed ? "true" : "false" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "collapsed": ["onCollapsed"]
    }; }
};
PaneComponent.style = paneComponentCss;

const shoppingCartComponentCss = "snt-shopping-cart snt-link{display:-ms-flexbox;display:flex}snt-shopping-cart snt-link a{position:relative;font-size:1.5rem;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;margin:0 0.5rem 0.25rem}snt-shopping-cart .item-counter{position:absolute;top:-15%;right:-40%;height:14px;width:14px;border:1px solid #323232;background-color:#6ebac5;border-radius:50%;color:#323232;font-size:10px;line-height:14px;text-align:center;vertical-align:center}";

const ShoppingCartComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cartValue = "0";
    }
    componentDidLoad() {
        const cartValue = CookieUtils.readCookie(ComponentConstants.CART_COOKIE_NAME);
        this.cartValue = cartValue || this.cartValue;
    }
    render() {
        if (this.cartValue && parseInt(this.cartValue) > 0) {
            return (h("snt-link", { href: ShoppingCartComponent.SHOPPING_CART_URL }, h("snt-icon", { styleClasses: "iconNavCartEmpty" }), h("span", { class: "item-counter" }, this.cartValue)));
        }
    }
};
ShoppingCartComponent.TAG_NAME = "snt-shopping-cart";
ShoppingCartComponent.SHOPPING_CART_URL = "https://secure.sonnet.ca/#/shopping_cart";
ShoppingCartComponent.style = shoppingCartComponentCss;

const skiptomainComponentCss = "snt-skip-to-main snt-link{position:absolute;top:0;left:0;z-index:100}";

const SkipToMainComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.mainContentId) {
            this.mainContentId = '#maincontent';
        }
        if (!this.mainContentId.startsWith('#')) {
            this.mainContentId = '#' + this.mainContentId;
        }
        if (!this.ariaLabel) {
            if (this.linkText) {
                this.ariaLabel = this.linkText;
            }
        }
    }
    render() {
        return [
            h("snt-link", { ariaLabel: this.ariaLabel, classNames: SkipToMainComponent.srClasses, href: this.mainContentId }, h("span", null, this.linkText ? this.linkText : h("slot", null)))
        ];
    }
};
SkipToMainComponent.TAG_NAME = 'snt-skip-to-main';
SkipToMainComponent.srClasses = 'sr-only sr-only-focusable';
SkipToMainComponent.style = skiptomainComponentCss;

export { NavbarComponent as snt_navbar, NavbarCollapseComponent as snt_navbar_collapse, NavbarToggleComponent as snt_navbar_toggle, PaneComponent as snt_pane, ShoppingCartComponent as snt_shopping_cart, SkipToMainComponent as snt_skip_to_main };
