var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NavItemComponent_1;
import { Component, Element, Event, h, Host, Listen, Method, Prop, Watch } from "@stencil/core";
import { NavItemTypeEnum } from "../../../core/nav/domain/NavItemTypeEnum";
import { NavUtils } from "../../../core/nav/utils/NavUtils";
import { WebUtils } from "../../../core/utils/WebUtils";
import { StringUtils } from "../../../core/utils/StringUtils";
let NavItemComponent = NavItemComponent_1 = class NavItemComponent {
    constructor() {
        this.expanded = false;
        this.current = false;
        this.styleClasses = StringUtils.empty();
        this.isExternal = false;
    }
    async expand() {
        this.expanded = true;
    }
    async collapse() {
        this.expanded = false;
    }
    async toggleExpanded() {
        this.expanded = !this.expanded;
    }
    async setCurrent() {
        this.current = true;
    }
    async unsetCurrent() {
        this.current = false;
    }
    async toggleCurrent() {
        this.current = !this.current;
    }
    watchCurrent() {
        if (this.parent) {
            this.parent.toggleCurrent().then(null);
            if (!(window.innerWidth >= 768)) {
                this.parent.expanded = true;
            }
        }
    }
    watchExpanded() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            this.navItemEvent.emit();
        }
    }
    async registerParent(parent) {
        this.parent = parent;
    }
    handleMouseOver(_e) {
        if (window.innerWidth >= 768) {
            clearTimeout(this.collapseTimeout);
            if (!this.expanded)
                this.expanded = true;
        }
    }
    handleMouseleave() {
        this.collapseTimeout = setTimeout(() => {
            this.collapse();
        }, 250);
    }
    componentWillLoad() {
        this.type = NavUtils.identifyType(this.element);
    }
    componentDidLoad() {
        this.registerChildren();
    }
    async isType(type) {
        return type == this.type;
    }
    registerChildren() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            const children = this.element.querySelectorAll(NavItemComponent_1.TAG_NAME);
            if (children) {
                children.forEach((child) => {
                    child.registerParent(this.element);
                });
            }
        }
    }
    render() {
        const subnavId = `${this.element.id}-subnav`;
        const expanderId = `${this.element.id}-expander`;
        const showClass = (this.expanded) ? "show" : "";
        const navItemClass = ["nav-item"];
        (this.type == NavItemTypeEnum.SUBNAV) ? navItemClass.push(`dropdown ${showClass}`) : false;
        const navLinkClass = `nav-link ${(this.type == NavItemTypeEnum.SUBNAV) ? "dropdown-toggle" : ""}`;
        const linkAriaLabel = `${(this.type == NavItemTypeEnum.SUBNAV) ? `${this.linkTitle}, tab to the next button to expand the sub-menu` : this.linkTitle}`;
        //const ariaCurrent = `${(this.current) ? "page" : false}`;
        const icon = [
            h("snt-icon", { styleClasses: this.iconClassName })
        ];
        const link = [
            h("snt-link", { href: this.href, target: this.target, class: navLinkClass, current: this.current, "aria-label": linkAriaLabel, "aria-current": true, "hidden-title": this.linkTitle, "is-external": this.isExternal },
                this.iconClassName ? icon : "",
                this.linkTitle)
        ];
        const expander = (h("button", { type: "button", class: "expander", onClick: this.toggleExpanded.bind(this), "aria-expanded": this.expanded.toString(), "aria-haspopup": "true", "aria-label": `${this.linkTitle}`, "aria-owns": subnavId },
            h("snt-icon", { styleClasses: (this.expanded) ? "icon-icon_nav_minus_inv" : "icon-icon_nav_plus" })));
        const subnav = [
            h("div", { class: "position-relative" }, [link, expander]),
            h("div", { "aria-label": "1 of 1", role: "menu", class: `dropdown-menu ${showClass}`, id: subnavId, "aria-labelledby": expanderId },
                h("slot", null))
        ];
        const actionReference = (this.href) ? this.href.replace("action:", "") : "";
        const actionLink = h("snt-action-link", { "action-reference": actionReference, linkTitle: this.linkTitle, iconClassName: this.iconClassName });
        const custom = [
            h("slot", null)
        ];
        const template = {
            "link": link,
            "action-link": actionLink,
            "subnav": subnav,
            "custom": custom
        };
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), role: "listitem" }, template[this.type]));
    }
};
NavItemComponent.TAG_NAME = "snt-nav-item";
__decorate([
    Element(),
    __metadata("design:type", HTMLSntNavItemElement)
], NavItemComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavItemComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavItemComponent.prototype, "target", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavItemComponent.prototype, "linkTitle", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavItemComponent.prototype, "iconClassName", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], NavItemComponent.prototype, "expanded", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], NavItemComponent.prototype, "current", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], NavItemComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], NavItemComponent.prototype, "isExternal", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "navItemEvent", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "expand", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "collapse", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "toggleExpanded", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "setCurrent", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "unsetCurrent", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "toggleCurrent", null);
__decorate([
    Watch("current"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavItemComponent.prototype, "watchCurrent", null);
__decorate([
    Watch("expanded"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavItemComponent.prototype, "watchExpanded", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLSntNavItemElement]),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "registerParent", null);
__decorate([
    Listen("mouseover"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavItemComponent.prototype, "handleMouseOver", null);
__decorate([
    Listen("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavItemComponent.prototype, "handleMouseleave", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NavItemComponent.prototype, "isType", null);
NavItemComponent = NavItemComponent_1 = __decorate([
    Component({
        tag: 'snt-nav-item',
        styleUrl: "nav-item-component.scss",
        shadow: false
    })
], NavItemComponent);
export { NavItemComponent };
