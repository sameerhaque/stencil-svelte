var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ShoppingCartComponent_1;
import { Component, h, Prop } from "@stencil/core";
import { ComponentConstants } from "../ComponentConstants";
import { CookieUtils } from "../../core/utils/CookieUtils";
let ShoppingCartComponent = ShoppingCartComponent_1 = class ShoppingCartComponent {
    constructor() {
        this.cartValue = "0";
    }
    componentDidLoad() {
        const cartValue = CookieUtils.readCookie(ComponentConstants.CART_COOKIE_NAME);
        this.cartValue = cartValue || this.cartValue;
    }
    render() {
        if (this.cartValue && parseInt(this.cartValue) > 0) {
            return (h("snt-link", { href: ShoppingCartComponent_1.SHOPPING_CART_URL },
                h("snt-icon", { styleClasses: "iconNavCartEmpty" }),
                h("span", { class: "item-counter" }, this.cartValue)));
        }
    }
};
ShoppingCartComponent.TAG_NAME = "snt-shopping-cart";
ShoppingCartComponent.SHOPPING_CART_URL = "https://secure.sonnet.ca/#/shopping_cart";
__decorate([
    Prop(),
    __metadata("design:type", String)
], ShoppingCartComponent.prototype, "cartValue", void 0);
ShoppingCartComponent = ShoppingCartComponent_1 = __decorate([
    Component({
        tag: 'snt-shopping-cart',
        styleUrl: 'shopping-cart-component.scss',
        shadow: false
    })
], ShoppingCartComponent);
export { ShoppingCartComponent };
