var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let SourceListExample = class SourceListExample {
    render() {
        return [
            h("h1", null, "Source List"),
            h("snt-source-list", { "source-heading": "Interested in this articles sources?", "panel-id": "sources" },
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://yahoo.com" }, "This is my second source that is much longer"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { href: "https://google.com" }, "This is my link"),
                h("snt-source-link", { target: "_blank", href: "https://google.com" }, "This is external"),
                h("snt-source-link", { target: "_blank", href: "https://yahoo.com" }, "This is my second source that is much longer"))
        ];
    }
};
SourceListExample = __decorate([
    Component({
        tag: 'source-list-example',
        shadow: false
    })
], SourceListExample);
export { SourceListExample };
