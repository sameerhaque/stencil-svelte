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
import { NavItemComponent } from "./nav-item/nav-item-component";
import { NavUtils } from "../../core/nav/utils/NavUtils";
import { NavItemTypeEnum } from "../../core/nav/domain/NavItemTypeEnum";
import { WebUtils } from "../../core/utils/WebUtils";
import { StringUtils } from "../../core/utils/StringUtils";
let NavComponent = class NavComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    handleNavItemEvent(event) {
        const expanded = event.target.expanded;
        if (expanded) {
            this.collapseSiblingSubnavs(event.target);
        }
    }
    componentDidLoad() {
        this.setActiveNavItem();
    }
    setActiveNavItem() {
        const navItems = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
        if (navItems) {
            navItems.forEach((navItem) => {
                if (navItem.isType(NavItemTypeEnum.ACTION_LINK) && NavUtils.isCurrentPage(navItem)) {
                    navItem.toggleCurrent().then(null); //test
                }
            });
        }
    }
    collapseSiblingSubnavs(currentSubnav) {
        const expandedSubnavs = this.element.querySelectorAll(`${NavItemComponent.TAG_NAME}[expanded]`);
        expandedSubnavs.forEach((expandedSubnav) => {
            if (expandedSubnav != currentSubnav) {
                expandedSubnav.collapse().then(null);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar-nav"], this.styleClasses), role: "list" },
            h("slot", null)));
    }
};
NavComponent.TAG_NAME = "snt-nav";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavComponent.prototype, "expander", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], NavComponent.prototype, "separator", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavComponent.prototype, "styleClasses", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], NavComponent.prototype, "element", void 0);
__decorate([
    Listen("navItemEvent"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], NavComponent.prototype, "handleNavItemEvent", null);
NavComponent = __decorate([
    Component({
        tag: 'snt-nav',
        styleUrl: "nav-component.scss",
        shadow: false
    })
], NavComponent);
export { NavComponent };
