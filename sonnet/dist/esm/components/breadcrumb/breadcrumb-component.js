var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Prop } from '@stencil/core';
let BreadcrumbComponent = class BreadcrumbComponent {
    componentWillLoad() {
        this._trailObj = JSON.parse(this.trail);
    }
    render() {
        return (h("snt-layout", null,
            h("ul", null, this._trailObj.map((r, idx) => h("li", null,
                (r.href.length > 0)
                    ? h("a", { href: r.href }, r.title)
                    : h("span", null, r.title),
                (idx !== this._trailObj.length - 1) ? h("snt-icon", { styleClasses: "iconChevron" }) : null)))));
    }
};
BreadcrumbComponent.TAG_NAME = "snt-breadcrumb";
__decorate([
    Prop(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "trail", void 0);
BreadcrumbComponent = __decorate([
    Component({
        tag: 'snt-breadcrumb',
        styleUrl: './breadcrumb-component.scss',
        shadow: false
    })
], BreadcrumbComponent);
export { BreadcrumbComponent };
