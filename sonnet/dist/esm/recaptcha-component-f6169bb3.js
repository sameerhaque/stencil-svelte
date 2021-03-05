import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';

const recaptchaComponentCss = "";

const RecaptchaComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.grecaptchaLoaded = createEvent(this, "grecaptchaLoaded", 7);
    }
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
        return (h(Host, null, h("div", { class: "g-recaptcha", id: `${this.element.id}-g-recaptcha` }), h("input", { ref: el => this.checkbox = el, id: "recaptcha", name: "recaptcha", type: "checkbox", value: "", class: "hidden", "data-field": "recaptcha", tabindex: "-1", "aria-checked": "false", "aria-invalid": "false", "aria-describedby": "recaptcha_error", required: true }), h("slot", { name: "error-messages" })));
    }
    get element() { return getElement(this); }
};
RecaptchaComponent.TAG_NAME = "snt-recaptcha";
RecaptchaComponent.style = recaptchaComponentCss;

export { RecaptchaComponent as R };
