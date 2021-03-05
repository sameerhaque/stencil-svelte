var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop } from "@stencil/core";
import { ComponentConstants } from "../ComponentConstants";
import { CookieUtils } from "../../core/utils/CookieUtils";
import { StringUtils } from "../../core/utils/StringUtils";
let LoginComponent = class LoginComponent {
    constructor() {
        this.authed = "0";
        this.languageJson = StringUtils.empty();
        this.accountLoginUrl = "https://secure.sonnet.ca/#/login";
        this.accountDashboardUrl = "https://secure.sonnet.ca/#/account/dashboard";
        this.languageStrings = {};
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
    componentDidLoad() {
        const authed = CookieUtils.readCookie(ComponentConstants.AUTH_COOKIE_NAME);
        this.authed = authed || this.authed;
    }
    render() {
        return ((this.authed && parseInt(this.authed) == 1) ?
            h("snt-link", { href: this.accountDashboardUrl },
                h("snt-icon", { styleClasses: "icon-icon_nav_LoggedIn_act" }))
            :
                h("snt-link", { href: this.accountLoginUrl }, this.languageStrings["login"] || "Log In"));
    }
};
LoginComponent.TAG_NAME = "snt-login";
__decorate([
    Prop(),
    __metadata("design:type", String)
], LoginComponent.prototype, "authed", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], LoginComponent.prototype, "languageJson", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "accountLoginUrl", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "accountDashboardUrl", void 0);
LoginComponent = __decorate([
    Component({
        tag: 'snt-login',
        styleUrl: 'login-component.scss',
        shadow: false
    })
], LoginComponent);
export { LoginComponent };
