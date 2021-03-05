var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, State } from "@stencil/core";
import { WebUtils } from "../../core/utils/WebUtils";
let RecaptchaExample = class RecaptchaExample {
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
};
RecaptchaExample.TAG_NAME = "recaptcha-example";
__decorate([
    State(),
    __metadata("design:type", Object)
], RecaptchaExample.prototype, "captchas", void 0);
RecaptchaExample = __decorate([
    Component({
        tag: 'recaptcha-example',
        shadow: false,
        styles: ``
    })
], RecaptchaExample);
export { RecaptchaExample };
