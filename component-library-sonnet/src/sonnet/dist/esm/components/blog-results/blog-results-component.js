var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, Element, h, Host } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
let SntBlogResultsComponent = class SntBlogResultsComponent {
    constructor() {
        this.blogResults = [];
        this.blogResultsString = StringUtils.empty();
    }
    componentWillRender() {
        this.blogResults = JSON.parse(this.blogResultsString);
    }
    async componentDidRender() {
        let viewport;
        const firstRowEl = document.querySelector('snt-multi-column-mixed[class*="first-row"]');
        if (firstRowEl) {
            viewport = firstRowEl
                .querySelector("snt-layout")
                .getAttribute("viewport");
            await firstRowEl.tagLastRow(viewport);
            await firstRowEl.setColumns();
            const resultRowsEl = document.querySelector('snt-multi-column-mixed[class*="result-rows"]');
            if (resultRowsEl) {
                await resultRowsEl.setColumns();
                await resultRowsEl.tagLastRow(viewport);
            }
        }
    }
    render() {
        return (h(Host, null,
            this.renderFirstRow(),
            this.blogResults.length > 2 ? this.renderRows() : null));
    }
    renderFirstRow() {
        const firstRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}';
        return (h("snt-multi-column-mixed", { class: "first-row no-bottom with-gutter", "column-count": firstRowJson }, this.blogResults.slice(0, 2).map((blog) => {
            return (h("div", { class: "column" },
                h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    }
    renderRows() {
        const resultRowJson = '{"extra-small": 1,"small": 1,"medium": 2,"large": 3,"extra-large": 3}';
        return (h("snt-multi-column-mixed", { class: "result-rows with-gutter", "column-count": resultRowJson, "aria-live": "polite" }, this.blogResults
            .slice(2, this.blogResults.length)
            .map((blog) => {
            return (h("div", { class: "column" },
                h("snt-blog", { imgSrc: blog.imageSource, titleText: blog.titleText, tagText: blog.tagText, timeToRead: blog.timeToRead, blogLink: blog.blogLink })));
        })));
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], SntBlogResultsComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SntBlogResultsComponent.prototype, "blogResultsString", void 0);
SntBlogResultsComponent = __decorate([
    Component({
        tag: "snt-blog-results",
        styleUrl: "./blog-results-component.scss",
        shadow: false,
    })
], SntBlogResultsComponent);
export { SntBlogResultsComponent };
