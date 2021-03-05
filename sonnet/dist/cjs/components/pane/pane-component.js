var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Host, Listen, Prop, Method, Watch } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
import { AnimationUtils } from "../../core/utils/AnimationUtils";
let PaneComponent = class PaneComponent {
    constructor() {
        this.collapsed = false;
        this.animated = false;
        this.styleClasses = StringUtils.empty();
    }
    async toggleCollapsed(collapsed) {
        this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : this.collapsed;
        return this.collapsed;
    }
    onCollapsed(collapsed) {
        if (this.animated)
            (collapsed) ? AnimationUtils.collapseElement(this.element) : AnimationUtils.expandElement(this.element);
    }
    listenButtonEvent(_event) {
        this.collapsed = !this.collapsed;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), "aria-hidden": this.collapsed ? "true" : "false" },
            h("slot", null)));
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], PaneComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], PaneComponent.prototype, "collapsed", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], PaneComponent.prototype, "animated", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], PaneComponent.prototype, "styleClasses", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], PaneComponent.prototype, "toggleCollapsed", null);
__decorate([
    Watch('collapsed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaneComponent.prototype, "onCollapsed", null);
__decorate([
    Listen('close'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], PaneComponent.prototype, "listenButtonEvent", null);
PaneComponent = __decorate([
    Component({
        tag: 'snt-pane',
        styleUrl: 'pane-component.scss',
        shadow: false
    })
], PaneComponent);
export { PaneComponent };
