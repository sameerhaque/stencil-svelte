var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let FAQBlockExample = class FAQBlockExample {
    render() {
        var faqBlocks = [
            { "titleText": "Quoting", "bodyText": "Step-by-step help and troubleshooting tips for home and auto quotes.", "articlesCount": "32 articles" },
            { "titleText": "Purchasing", "bodyText": "Buying your property, from start to finish.", "articlesCount": "12 articles" },
            { "titleText": "Account", "bodyText": "Set up, login and navigate your account", "articlesCount": "23 articles" },
            { "titleText": "Policy & coverages", "bodyText": "Learn about documents, what we do and don't cover, making changes", "articlesCount": "45 articles" },
            { "titleText": "Payments", "bodyText": "How to pay, when to pay and what to do if you miss your payment.", "articlesCount": "15 articles" },
            { "titleText": "Claims", "bodyText": "What you are covered for and what to do before during and after your claim.", "articlesCount": "03 articles" },
            { "titleText": "Quoting", "bodyText": "Step-by-step help and troubleshooting tips for home and auto quotes.", "articlesCount": "29 articles" },
            { "titleText": "Quoting", "bodyText": "Step-by-step help and troubleshooting tips for home and auto quotes.", "articlesCount": "11 articles" }
        ];
        console.log(faqBlocks);
        return [
            h("snt-faq-block", { "title-text": 'Quoting', "body-text": 'Step-by-step help and troubleshooting tips for home and auto quotes.', "articles-count": '32 articles' }),
            h("div", null,
                h("br", null),
                h("div", null, "This is FAQ block list"),
                h("br", null),
                h("snt-faq-block-list", { faqBlockList: faqBlocks }))
        ];
    }
};
FAQBlockExample = __decorate([
    Component({
        tag: "faq-block-example",
        shadow: false
    })
], FAQBlockExample);
export { FAQBlockExample };
