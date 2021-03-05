var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Prop, Listen, Host } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
let TwoColumnComponent = class TwoColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.columnLeft.setAttribute('viewport', viewport);
        this.columnRight.setAttribute('viewport', viewport);
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { padding: "none" },
                h("div", { class: "flex-container " },
                    h("div", { class: "column-left", ref: el => this.columnLeft = el },
                        h("slot", { name: "left" })),
                    h("div", { class: "column-right", ref: el => this.columnRight = el },
                        h("slot", { name: "right" }))))));
    }
};
TwoColumnComponent.TAG_NAME = "snt-two-column";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], TwoColumnComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], TwoColumnComponent.prototype, "styleClasses", void 0);
__decorate([
    Listen('viewportChanged', { target: 'parent' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], TwoColumnComponent.prototype, "onResize", null);
TwoColumnComponent = __decorate([
    Component({
        tag: "snt-two-column",
        styleUrl: "two-column-component.scss",
        shadow: false
    })
], TwoColumnComponent);
export { TwoColumnComponent };
