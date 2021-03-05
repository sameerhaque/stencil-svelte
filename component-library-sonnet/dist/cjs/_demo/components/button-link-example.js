var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let ButtonLinkExample = class ButtonLinkExample {
    render() {
        //return (<div>Hello!</div>);
        return [
            h("div", null, "Mobile"),
            h("div", { class: "mobile" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            h("div", null, "Tablet"),
            h("div", { class: "tablet" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            h("div", null, "Desktop"),
            h("div", { class: "desktop" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!")),
            h("div", null, "HD"),
            h("div", { class: "hd" },
                h("button-link", { class: "theme-primary", href: "https//www.sonnet.ca" }, "Click!"))
        ];
    }
};
ButtonLinkExample.TAG_NAME = "button-link-example";
ButtonLinkExample = __decorate([
    Component({
        tag: "button-link-example",
        styles: `
    .mobile {
        width: 320px;
    }
    .tablet {
        width: 768px;
    }
    .desktop {
        width: 1024px;
    }
    .hd {
        width: 1440px;
    }
    `,
        shadow: false
    })
], ButtonLinkExample);
export { ButtonLinkExample };
