var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let FAQPaginationExample = class FAQPaginationExample {
    render() {
        return [
            h("h4", null, "Pagination : Page 1"),
            h("snt-pagination", { "total-pages": 2, curr: 1 }),
            h("h4", null, "Pagination : Page 2"),
            h("snt-pagination", { "total-pages": 8, curr: 2 }),
            h("h4", null, "Pagination : Page 3"),
            h("snt-pagination", { "total-pages": 8, curr: 3 }),
            h("h4", null, "Pagination : Page 4"),
            h("snt-pagination", { "total-pages": 8, curr: 4 }),
            h("h4", null, "Pagination : Page 5"),
            h("snt-pagination", { "total-pages": 8, curr: 5 }),
            h("h4", null, "Pagination : Page 6"),
            h("snt-pagination", { "total-pages": 8, curr: 6 }),
            h("h4", null, "Pagination : Page 7"),
            h("snt-pagination", { "total-pages": 8, curr: 7 }),
            h("h4", null, "Pagination : Page 8"),
            h("snt-pagination", { "total-pages": 8, curr: 8 })
        ];
    }
};
FAQPaginationExample = __decorate([
    Component({
        tag: "faq-pagination-example",
        shadow: false
    })
], FAQPaginationExample);
export { FAQPaginationExample };
