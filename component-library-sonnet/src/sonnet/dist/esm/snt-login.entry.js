import { r as registerInstance, h } from './index-79f6678c.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { C as CookieUtils } from './CookieUtils-d59e6373.js';

const loginComponentCss = "snt-login a{text-decoration:none;white-space:nowrap;font-size:1rem;line-height:1.3125rem;background-image:none}snt-login a:focus,snt-login a:hover{background-image:none}";

const LoginComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    }
    componentDidLoad() {
        const authed = CookieUtils.readCookie(ComponentConstants.AUTH_COOKIE_NAME);
        this.authed = authed || this.authed;
    }
    render() {
        return ((this.authed && parseInt(this.authed) == 1) ?
            h("snt-link", { href: this.accountDashboardUrl }, h("snt-icon", { styleClasses: "icon-icon_nav_LoggedIn_act" }))
            :
                h("snt-link", { href: this.accountLoginUrl }, this.languageStrings["login"] || "Log In"));
    }
};
LoginComponent.TAG_NAME = "snt-login";
LoginComponent.style = loginComponentCss;

export { LoginComponent as snt_login };
