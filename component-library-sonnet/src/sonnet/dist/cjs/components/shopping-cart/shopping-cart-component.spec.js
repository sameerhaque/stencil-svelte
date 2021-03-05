import { newSpecPage } from "@stencil/core/testing";
import { ShoppingCartComponent } from "./shopping-cart-component";
import { ComponentConstants } from "../ComponentConstants";
describe("ShoppingCartComponent", () => {
    it("does not render any content when cart_number_of_quotes cookie is set to 0", async () => {
        const specPageOptions = {
            components: [ShoppingCartComponent],
            html: `<snt-shopping-cart></snt-shopping-cart>`,
            cookie: `${ComponentConstants.CART_COOKIE_NAME}=0`
        };
        const page = await newSpecPage(specPageOptions);
        const shoppingCartEl = page.body.querySelector(ShoppingCartComponent.TAG_NAME);
        expect(shoppingCartEl.innerHTML.length).toEqual(0);
    });
    it("renders content when cart_number_of_quotes cookie is greater than 0", async () => {
        const specPageOptions = {
            components: [ShoppingCartComponent],
            html: `<snt-shopping-cart></snt-shopping-cart>`,
            cookie: `${ComponentConstants.CART_COOKIE_NAME}=3`
        };
        const page = await newSpecPage(specPageOptions);
        const shoppingCartEl = page.body.querySelector(ShoppingCartComponent.TAG_NAME);
        expect(shoppingCartEl.innerHTML.length).toBeGreaterThan(0);
    });
    it("cartValue prop matches values in cart_number_of_quotes", async () => {
        const specPageOptions = {
            components: [ShoppingCartComponent],
            html: `<snt-shopping-cart></snt-shopping-cart>`,
            cookie: `${ComponentConstants.CART_COOKIE_NAME}=3`
        };
        const page = await newSpecPage(specPageOptions);
        const shoppingCartEl = page.body.querySelector(ShoppingCartComponent.TAG_NAME);
        expect(shoppingCartEl.cartValue).toEqual("3");
    });
});
