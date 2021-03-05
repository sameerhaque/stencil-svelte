'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const RecaptchaExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.captchas = Array();
        this.siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
    }
    async componentDidLoad() {
        for (let i = 0; i < 6; i++) {
            await WebUtils.WebUtils.sleep(500);
            this.captchas = [
                ...this.captchas,
                index.h("div", null, index.h("h3", null, "Recaptcha ", i), index.h("snt-recaptcha", { sitekey: this.siteKey, language: "en", id: `grecaptcha-${i}` }))
            ];
        }
    }
    render() {
        return (index.h("div", null, this.captchas));
    }
};
RecaptchaExample.TAG_NAME = "recaptcha-example";

exports.recaptcha_example = RecaptchaExample;
