var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let FAQFiltersliderExample = class FAQFiltersliderExample {
    render() {
        var filterItems = '[ { "key": "all", "title": "All" }, { "key": "propertyInsurance", "title": "Home" } , { "key": "autoInsurance", "title": "Auto" } , { "key": "other", "title": "Other" }, { "key": "inYourWallet", "title": "In your wallet" } ]';
        return [
            h("div", null,
                h("snt-faq-filter-slider", { filterItems: filterItems }),
                h("div", { id: "viewMobile" },
                    h("div", null,
                        h("h3", null, "On mobile")),
                    h("div", null,
                        h("snt-faq-filter-slider", { filterItems: filterItems }))),
                " ",
                h("br", null),
                " ",
                h("br", null),
                h("br", null),
                h("div", { id: "viewTablet" },
                    h("div", null,
                        h("h3", null, "On tablet")),
                    h("div", null,
                        h("snt-faq-filter-slider", { filterItems: filterItems }))))
        ];
    }
};
FAQFiltersliderExample = __decorate([
    Component({
        tag: "faq-filter-slider-example",
        shadow: false,
        styles: `
    #viewMobile{
        width: 320px;
    }
    #viewTablet{
        width: 694px;
    }
    `
    })
], FAQFiltersliderExample);
export { FAQFiltersliderExample };
