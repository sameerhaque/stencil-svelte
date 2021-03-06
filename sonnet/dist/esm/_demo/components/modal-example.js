var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let AccordionExample = class AccordionExample {
    componentDidLoad() {
        const modal = document.querySelector("snt-modal#modal-1");
        if (modal) {
            modal.show();
        }
    }
    render() {
        return [
            h("div", null,
                h("h3", null, "Modal Component Examples"),
                h("snt-modal", { id: "modal-1", "language-string": "{\"close\":\"Close\"}", "style-classes": "contact-us-login" },
                    h("snt-title-copy", { "title-string": "What can we help with?" },
                        h("p", { style: { textAlign: "center" } }, "Tell us a little bit about you and your inquiry - we'll point you in the right direction")),
                    h("snt-multi-column-mixed", { "column-count": '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}' },
                        h("div", { class: "column" },
                            h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://t.ly/9hiJ", \r\n                                "smallIconUrl": "https://t.ly/9hiJ"\r\n                            }', "title-string": "I have a Sonnet account", "link-href": "https://secure.sonnet.ca/#/login?lang=en" },
                                h("p", null, "Log in first, then start a chat. This way, we can talk about policy and account specifics."))),
                        h("div", { class: "column" },
                            h("snt-icon-copy", { properties: '{\r\n                                    "largeIconUrl": "https://t.ly/9hiJ", \r\n                                    "smallIconUrl": "https://t.ly/9hiJ"\r\n                                }', "title-string": "I have a general inquiry", "link-action-reference": "Action.dismiss", "link-action-data": '{}' },
                                h("p", null, "Ask us your general questions about quoting, insurance and more via chat or email. "))))))
        ];
    }
};
AccordionExample.TAG_NAME = "modal-example";
AccordionExample = __decorate([
    Component({
        tag: 'modal-example',
        shadow: false
    })
], AccordionExample);
export { AccordionExample };
