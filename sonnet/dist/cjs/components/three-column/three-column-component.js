var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
let ThreeColumnComponent = class ThreeColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.leftColumn.setAttribute('viewport', viewport);
        this.centerColumn.setAttribute('viewport', viewport);
        this.rightColumn.setAttribute('viewport', viewport);
    }
    componentDidLoad() {
        this.registerChildren(this.leftColumn);
        this.registerChildren(this.centerColumn);
        this.registerChildren(this.rightColumn);
    }
    registerChildren(column) {
        column.childNodes.forEach((childEl) => {
            if (childEl.tagName === 'SNT-ICON-COPY') {
                childEl.registerViewport(this.layoutEl);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { ref: (el) => this.layoutEl = el },
                h("div", { class: "flex-row" },
                    h("div", { class: "column", ref: el => this.leftColumn = el },
                        h("slot", { name: "left" })),
                    h("div", { class: "column", ref: el => this.centerColumn = el },
                        h("slot", { name: "center" })),
                    h("div", { class: "column", ref: el => this.rightColumn = el },
                        h("slot", { name: "right" }))))));
    }
};
ThreeColumnComponent.TAG_NAME = "snt-three-column";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ThreeColumnComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ThreeColumnComponent.prototype, "styleClasses", void 0);
__decorate([
    Listen('viewportChanged', { target: 'parent' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], ThreeColumnComponent.prototype, "onResize", null);
ThreeColumnComponent = __decorate([
    Component({
        tag: "snt-three-column",
        styleUrl: "three-column-component.scss",
        shadow: false
    })
], ThreeColumnComponent);
export { ThreeColumnComponent };
