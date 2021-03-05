var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Host, Event, Prop, Watch, State, Method, h } from '@stencil/core';
import { StringUtils } from "../../core/utils/StringUtils";
let AlertsBanner = class AlertsBanner {
    constructor() {
        this.dismissible = false;
        this.animatable = true;
        this.type = 'warning';
        this.explorerOnly = StringUtils.empty();
    }
    async dismiss() {
        this.show = false;
        setTimeout(() => {
            this.dismissed(this.el);
        }, 450);
        setTimeout(() => {
            this.el.parentNode.removeChild(this.el);
        }, 100);
        this.setCookies();
    }
    componentWillLoad() {
        this.setShowFadeState();
        this.checkCookies();
        this.checkIE11();
    }
    render() {
        return (h(Host, { class: {
                alert: true,
                [`alert-${this.type}`]: true,
                'alert-dismissible': this.dismissible,
                show: this.animatable && this.show,
                fade: this.animatable && this.fade,
            }, role: "alert" },
            h("snt-layout", { padding: "vertical-only" },
                h("div", { class: 'alert-container' },
                    this.getDismissButton(),
                    h("p2", null,
                        h("slot", null))))));
    }
    setShowFadeState() {
        if (this.animatable) {
            this.show = true;
            this.fade = true;
        }
    }
    getDismissButton() {
        if (!this.dismissible)
            return null;
        return (h("button", { type: "button", class: "close", "aria-label": "Close", onClick: this.dismiss.bind(this) },
            h("span", { "aria-hidden": "true" })));
    }
    setCookies() {
        let now = new Date(), time = now.getTime();
        time += 30 * 60 * 1000;
        now.setTime(time);
        document.cookie = `closedAlert-${this.el.id}=true; expires= ${now.toUTCString()}; path=/`;
    }
    checkCookies() {
        if (document.cookie.split(';').some((item) => item.includes(`closedAlert-${this.el.id}=true`))) {
            this.el.style.display = 'none';
        }
    }
    checkIE11() {
        if (StringUtils.hasValue(this.explorerOnly) && window.document['documentMode'] === undefined) {
            this.el.style.display = 'none';
        }
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], AlertsBanner.prototype, "el", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], AlertsBanner.prototype, "dismissible", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], AlertsBanner.prototype, "animatable", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], AlertsBanner.prototype, "type", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], AlertsBanner.prototype, "explorerOnly", void 0);
__decorate([
    Event(),
    __metadata("design:type", Function)
], AlertsBanner.prototype, "dismissed", void 0);
__decorate([
    State(),
    __metadata("design:type", Boolean)
], AlertsBanner.prototype, "show", void 0);
__decorate([
    State(),
    __metadata("design:type", Boolean)
], AlertsBanner.prototype, "fade", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertsBanner.prototype, "dismiss", null);
__decorate([
    Watch('animatable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlertsBanner.prototype, "componentWillLoad", null);
AlertsBanner = __decorate([
    Component({
        tag: 'snt-alert',
        styleUrl: 'alert-component.scss'
    })
], AlertsBanner);
export { AlertsBanner };
