import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const alertComponentCss = "snt-alert{display:block;border-radius:0 !important;padding-left:0 !important;padding-right:0 !important;margin-bottom:0 !important;border:0 !important}snt-alert.alert-grey{background-color:#F8F8F8}snt-alert.alert-primary{background-color:#147582}@media (min-width: 1440px){snt-alert .alert-container{max-width:1170px;margin:0 auto}}snt-alert.alert-primary p2{color:#ffffff !important;display:block}@media (min-width: 1440px){snt-alert.alert-primary p2{max-width:95%}}@media (max-width: 480px){snt-alert.alert-primary p2{max-width:85%}}snt-alert.alert-primary p2 a{color:#ffffff}.alert-dismissible .close{position:relative !important;padding:0 !important;opacity:1;top:4px !important}.close{position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:1}.close:hover{opacity:0.8}.close:before,.close:after{position:absolute;left:20px;content:\" \";height:20px;width:1.5px}.alert-grey .close:before,.alert-grey .close:after{background-color:#147582}.alert-primary .close:before,.alert-primary .close:after{background-color:#F8F8F8}.close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:0px}.close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:0px}";

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
const AlertsBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dismissed = createEvent(this, "dismissed", 7);
        this.dismissible = false;
        this.animatable = true;
        this.type = 'warning';
        this.explorerOnly = StringUtils.empty();
    }
    dismiss() {
        return __awaiter(this, void 0, void 0, function* () {
            this.show = false;
            setTimeout(() => {
                this.dismissed(this.el);
            }, 450);
            setTimeout(() => {
                this.el.parentNode.removeChild(this.el);
            }, 100);
            this.setCookies();
        });
    }
    componentWillLoad() {
        this.setShowFadeState();
        this.checkCookies();
        this.checkIE11();
    }
    render() {
        return (h(Host, { class: {
                alert: true,
                [`alert-${this.type}`]: true,
                'alert-dismissible': this.dismissible,
                show: this.animatable && this.show,
                fade: this.animatable && this.fade,
            }, role: "alert" }, h("snt-layout", { padding: "vertical-only" }, h("div", { class: 'alert-container' }, this.getDismissButton(), h("p2", null, h("slot", null))))));
    }
    setShowFadeState() {
        if (this.animatable) {
            this.show = true;
            this.fade = true;
        }
    }
    getDismissButton() {
        if (!this.dismissible)
            return null;
        return (h("button", { type: "button", class: "close", "aria-label": "Close", onClick: this.dismiss.bind(this) }, h("span", { "aria-hidden": "true" })));
    }
    setCookies() {
        let now = new Date(), time = now.getTime();
        time += 30 * 60 * 1000;
        now.setTime(time);
        document.cookie = `closedAlert-${this.el.id}=true; expires= ${now.toUTCString()}; path=/`;
    }
    checkCookies() {
        if (document.cookie.split(';').some((item) => item.includes(`closedAlert-${this.el.id}=true`))) {
            this.el.style.display = 'none';
        }
    }
    checkIE11() {
        if (StringUtils.hasValue(this.explorerOnly) && window.document['documentMode'] === undefined) {
            this.el.style.display = 'none';
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "animatable": ["componentWillLoad"]
    }; }
};
AlertsBanner.style = alertComponentCss;

export { AlertsBanner as snt_alert };
