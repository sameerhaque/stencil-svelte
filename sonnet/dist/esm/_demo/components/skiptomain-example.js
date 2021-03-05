var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop } from "@stencil/core";
let SkipToMainExample = class SkipToMainExample {
    render() {
        return (h("div", null,
            h("snt-skip-to-main", { "main-content-id": '#main-content' }, "Skip to main content"),
            " ",
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("button", { id: 'main-content' }, "this is main content!")));
    }
};
SkipToMainExample.TAG_NAME = 'skiptomain-example';
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SkipToMainExample.prototype, "mainContentId", void 0);
SkipToMainExample = __decorate([
    Component({
        tag: 'skiptomain-example',
        styles: `#main-content:focus{outline:1px solid red;}`,
        shadow: false
    })
], SkipToMainExample);
export { SkipToMainExample };
