'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ComponentConstants = require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const CookieUtils = require('./CookieUtils-b0147207.js');

const loginComponentCss = "snt-login a{text-decoration:none;white-space:nowrap;font-size:1rem;line-height:1.3125rem;background-image:none}snt-login a:focus,snt-login a:hover{background-image:none}";

const LoginComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authed = "0";
        this.languageJson = StringUtils.StringUtils.empty();
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
    }
    componentDidLoad() {
        const authed = CookieUtils.CookieUtils.readCookie(ComponentConstants.ComponentConstants.AUTH_COOKIE_NAME);
        this.authed = authed || this.authed;
    }
    render() {
        return ((this.authed && parseInt(this.authed) == 1) ?
            index.h("snt-link", { href: this.accountDashboardUrl }, index.h("snt-icon", { styleClasses: "icon-icon_nav_LoggedIn_act" }))
            :
                index.h("snt-link", { href: this.accountLoginUrl }, this.languageStrings["login"] || "Log In"));
    }
};
LoginComponent.TAG_NAME = "snt-login";
LoginComponent.style = loginComponentCss;

exports.snt_login = LoginComponent;
