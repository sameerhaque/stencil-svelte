var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let sntTabsExample = class sntTabsExample {
    render() {
        return (h("snt-tabs", null,
            h("div", { class: "tab-header" },
                h("div", { class: "tab-item" },
                    h("p", null,
                        h("a", { class: "title selected", id: "faq", "data-text": "FAQs" }, "FAQs"))),
                h("div", { class: "tab-item" },
                    h("p", null,
                        " ",
                        h("a", { class: "title", id: "related", "data-text": "Related article" }, "Related article ")))),
            h("div", { class: "panel-wrapper" },
                h("section", { class: "panel" },
                    h("snt-article-list", { articlesJson: '{ "articles": [\r\n                        {\r\n                            "href": "https://www.google.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\r\n                        },\r\n                        {\r\n                            "href": "https://www.yahoo.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Yahoo"\r\n                        },\r\n                        {\r\n                            "href": "https://www.facebook.com",\r\n                            "ariaLabel": "aria label",\r\n                            "hiddenTitle": "",\r\n                            "copy": "Click here to go to Facebook"\r\n                        }\r\n                    ]}' })),
                h("section", { class: "panel" }, "content panel 2"))));
    }
};
sntTabsExample.TAG_NAME = "snt-tabs-example";
sntTabsExample = __decorate([
    Component({
        tag: "snt-tabs-example",
        shadow: false
    })
], sntTabsExample);
export { sntTabsExample };
