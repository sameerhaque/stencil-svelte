var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
let ArticleListComponent = class ArticleListComponent {
    constructor() {
        this.articlesJson = StringUtils.empty();
        this.articles = [];
        this.heading = StringUtils.empty();
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.articlesJson)) {
            this.articles = JSON.parse(this.articlesJson).articles;
        }
    }
    render() {
        return (h("div", { class: "article-list" },
            StringUtils.hasValue(this.heading)
                ? h("div", { class: "article-title" }, this.heading)
                : null,
            this.articles.map((article) => {
                return h("snt-article-link", { copy: article.copy, href: article.href, "aria-label": article.ariaLabel, "hidden-title": article.hiddenTitle });
            })));
    }
};
ArticleListComponent.TAG_NAME = "snt-article-list";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ArticleListComponent.prototype, "articlesJson", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Array)
], ArticleListComponent.prototype, "articles", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ArticleListComponent.prototype, "heading", void 0);
ArticleListComponent = __decorate([
    Component({
        tag: 'snt-article-list',
        styleUrl: "article-list-component.scss",
        shadow: false
    })
], ArticleListComponent);
export { ArticleListComponent };
