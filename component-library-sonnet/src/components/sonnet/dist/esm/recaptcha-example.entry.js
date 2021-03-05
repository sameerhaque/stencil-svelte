import { r as registerInstance, h } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';

const RecaptchaExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.captchas = Array();
        this.siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
    }
    async componentDidLoad() {
        for (let i = 0; i < 6; i++) {
            await WebUtils.sleep(500);
            this.captchas = [
                ...this.captchas,
                h("div", null, h("h3", null, "Recaptcha ", i), h("snt-recaptcha", { sitekey: this.siteKey, language: "en", id: `grecaptcha-${i}` }))
            ];
        }
    }
    render() {
        return (h("div", null, this.captchas));
    }
};
RecaptchaExample.TAG_NAME = "recaptcha-example";

export { RecaptchaExample as recaptcha_example };
