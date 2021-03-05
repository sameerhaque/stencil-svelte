var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let PageNotFoundExample = class PageNotFoundExample {
    render() {
        return (h("div", null,
            h("snt-hero", { class: "error-fill" },
                h("div", { slot: "content" },
                    h("h1", null, "Oops! Looks like something went wrong..."),
                    h("p", null, "Let's get you back to finding the right coverage.")))));
    }
};
PageNotFoundExample = __decorate([
    Component({
        tag: 'page-not-found-example',
        shadow: false
    })
], PageNotFoundExample);
export { PageNotFoundExample };
