var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let CtaReminderExample = class CtaReminderExample {
    render() {
        return (h("div", null,
            h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "action-reference": "Action.logAction" }),
            "\u00A0",
            h("snt-cta-reminder", { "title-string": "This is my title", "link-title": "Click Here", "url-target": "_blank", url: "https://www.sonnet.ca" })));
    }
};
CtaReminderExample.TAG_NAME = "cta-reminder-example";
CtaReminderExample = __decorate([
    Component({
        tag: "cta-reminder-example",
        shadow: false
    })
], CtaReminderExample);
export { CtaReminderExample };
