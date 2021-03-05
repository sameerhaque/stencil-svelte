import { Component, h, State } from "@stencil/core";
import { WebUtils } from "../../core/utils/WebUtils";
export class RecaptchaExample {
    constructor() {
        this.captchas = Array();
        this.siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
    }
    async componentDidLoad() {
        for (let i = 0; i < 6; i++) {
            await WebUtils.sleep(500);
            this.captchas = [
                ...this.captchas,
                h("div", null,
                    h("h3", null,
                        "Recaptcha ",
                        i),
                    h("snt-recaptcha", { sitekey: this.siteKey, language: "en", id: `grecaptcha-${i}` }))
            ];
        }
    }
    render() {
        return (h("div", null, this.captchas));
    }
    static get is() { return "recaptcha-example"; }
    static get states() { return {
        "captchas": {}
    }; }
}
RecaptchaExample.TAG_NAME = "recaptcha-example";
