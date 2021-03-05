var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Prop, Host, Method, Listen, Event } from "@stencil/core";
let RecaptchaComponent = class RecaptchaComponent {
    componentWillLoad() {
        this.loadRecaptchaScript();
    }
    componentDidLoad() {
        if (window.grecaptcha && window.grecaptcha.render) {
            this.renderRecaptcha(window['grecaptcha']);
        }
    }
    async reset() {
        window.grecaptcha.reset(this.grecaptchWidgetId);
    }
    handleGrecaptchaLoaded() {
        if (window.grecaptcha && window.grecaptcha.render) {
            this.renderRecaptcha(window['grecaptcha']);
        }
    }
    async loadRecaptchaScript() {
        const hlParam = this.language && this.language == 'fr' ? 'fr-CA' : 'en';
        const scriptSrc = `https://www.google.com/recaptcha/api.js?hl=${hlParam}&onload=grecaptchaOnLoadCallback&render=explicit`;
        const recaptchaScriptEl = document.querySelector(`[src="${scriptSrc}"]`);
        if (!window['grecaptcha]'] && !recaptchaScriptEl) {
            const scriptTag = document.createElement('script');
            scriptTag.type = "text/javascript";
            scriptTag.src = scriptSrc;
            scriptTag.async = true;
            scriptTag.defer = true;
            scriptTag.onload = () => { };
            window.grecaptchaOnLoadCallback = async () => {
                this.grecaptchaLoaded.emit();
            };
            const documentHead = document.getElementsByTagName('head')[0];
            documentHead.appendChild(scriptTag);
        }
    }
    grecaptchaCallback(value) {
        this.checkbox.value = value;
        this.toggleChecked(this.checkbox, true);
    }
    grecaptchaExpiredCallback() {
        this.checkbox.value = "";
        this.toggleChecked(this.checkbox, false);
    }
    grecaptchaErrorCallback() {
        this.checkbox.value = "";
        this.toggleChecked(this.checkbox, false);
    }
    toggleChecked(checkbox, checked) {
        if (checked != checkbox.checked) {
            checkbox.click();
        }
    }
    renderRecaptcha(recaptcha) {
        const recaptchaPlaceholder = this.element.querySelector('.g-recaptcha');
        if (recaptchaPlaceholder.childNodes.length === 0) {
            this.grecaptchWidgetId = recaptcha.render(recaptchaPlaceholder, {
                'sitekey': this.sitekey,
                'callback': this.grecaptchaCallback.bind(this),
                'expired-callback': this.grecaptchaExpiredCallback.bind(this),
                'error-callback': this.grecaptchaErrorCallback.bind(this)
            });
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: "g-recaptcha", id: `${this.element.id}-g-recaptcha` }),
            h("input", { ref: el => this.checkbox = el, id: "recaptcha", name: "recaptcha", type: "checkbox", value: "", class: "hidden", "data-field": "recaptcha", tabindex: "-1", "aria-checked": "false", "aria-invalid": "false", "aria-describedby": "recaptcha_error", required: true }),
            h("slot", { name: "error-messages" })));
    }
};
RecaptchaComponent.TAG_NAME = "snt-recaptcha";
__decorate([
    Prop(),
    __metadata("design:type", String)
], RecaptchaComponent.prototype, "sitekey", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], RecaptchaComponent.prototype, "language", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], RecaptchaComponent.prototype, "element", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], RecaptchaComponent.prototype, "grecaptchaLoaded", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecaptchaComponent.prototype, "reset", null);
__decorate([
    Listen('grecaptchaLoaded', { target: 'document' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecaptchaComponent.prototype, "handleGrecaptchaLoaded", null);
RecaptchaComponent = __decorate([
    Component({
        tag: "snt-recaptcha",
        styleUrl: "recaptcha-component.scss",
        shadow: false
    })
], RecaptchaComponent);
export { RecaptchaComponent };
