var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let TitleExample = class TitleExample {
    render() {
        return [
            h("div", null,
                h("h3", null, "h1 example - Centered"),
                h("snt-title", { class: "left", "title-type": 'h1', "clamp-lines": 1, "truncation-string": '..."' }, "Results for \"How do I know how much discount is applied to my preminum?\""),
                h("br", null),
                h("h3", null, "h2 example - Right Aligned"),
                h("snt-title", { class: "right", "title-type": 'h2' }, "This is sample title"),
                h("br", null),
                h("h3", null, "h3 example - Left"),
                h("snt-title", { class: "left", "title-type": 'h3' }, "This is sample title"),
                h("br", null),
                h("h3", null, "h4 example - Centered Left Mobile"),
                h("snt-title", { class: "left-mobile", "title-type": 'h4' }, "This is sample title"))
        ];
    }
};
TitleExample = __decorate([
    Component({
        tag: 'title-example',
        shadow: false
    })
], TitleExample);
export { TitleExample };
