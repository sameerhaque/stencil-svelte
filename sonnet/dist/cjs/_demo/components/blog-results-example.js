var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let BlogResultsExample = class BlogResultsExample {
    render() {
        var blogResultJson = `[
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 1\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 2\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 3\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 4\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 5\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
            {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 6\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"}
        ]`;
        return (h("div", null,
            h("h3", null, "Blog Empty"),
            h("snt-blog-results", { id: "first", blogResultsString: "[]" }),
            h("h3", null, "Blog Results"),
            h("snt-blog-results", { blogResultsString: blogResultJson })));
    }
};
BlogResultsExample = __decorate([
    Component({
        tag: "blog-results-example",
        shadow: false
    })
], BlogResultsExample);
export { BlogResultsExample };
