var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Event, Method } from "@stencil/core";
let FAQPaginationComponent = class FAQPaginationComponent {
    constructor() {
        this.prevLinkLang = "Previous";
        this.nextLinkLang = "Next";
        this.pageNumLang = "of";
        this.pageNumAriaLang = "Page number";
        this.paginationNavLang = "FAQ page navigation";
        this.totalPages = 1;
        this.curr = 1;
        this.ellipsis = "...";
    }
    onPageNumberClick(pageNum) {
        if (this.curr !== pageNum) {
            this.curr = pageNum;
            this.pageChanged.emit(this.curr.toString());
        }
    }
    onPreviousClick() {
        if (this.curr > 1) {
            this.curr--;
            this.pageChanged.emit(this.curr.toString());
        }
    }
    onNextClick() {
        if (this.curr < this.totalPages) {
            this.curr++;
            this.pageChanged.emit(this.curr.toString());
        }
    }
    async setPageNumber(pageNum, emitEvent = false) {
        if (this.curr !== pageNum && pageNum >= 1 && pageNum <= this.totalPages) {
            this.curr = pageNum;
            if (emitEvent) {
                this.pageChanged.emit(this.curr.toString());
            }
        }
    }
    getPageLink(pageNum) {
        return h("a", { href: "javascript:void(0);", class: this.curr == pageNum ? "active" : "", onClick: this.onPageNumberClick.bind(this, pageNum), "aria-label": this.pageNumAriaLang + " " + pageNum },
            h("div", { class: "page-number-wrapper" },
                h("div", { class: "page-number-outline" },
                    h("span", { class: "page-number", "data-page": pageNum }, pageNum))));
    }
    getEllipsis() {
        return h("span", { class: "page-number" }, this.ellipsis);
    }
    getPageNumbersForDesktop() {
        let pageNumbersDesktop = [];
        let i = 1;
        let j = this.totalPages - 1;
        let addEndEllipsis = false;
        //Add first page
        pageNumbersDesktop.push(this.getPageLink(i));
        i++;
        //Add start ellipsis if required
        if (this.curr - 1 > 4) {
            i = this.curr - 2;
            pageNumbersDesktop.push(this.getEllipsis());
        }
        //Check if end ellipsis is required
        if (this.totalPages - this.curr > 4) {
            j = this.curr + 2;
            addEndEllipsis = true;
        }
        //Add current and middle pages
        while (i <= j) {
            pageNumbersDesktop.push(this.getPageLink(i));
            i++;
        }
        //Add end ellipsis if required
        if (addEndEllipsis) {
            pageNumbersDesktop.push(this.getEllipsis());
        }
        //Add last page
        if (this.totalPages > 1) {
            pageNumbersDesktop.push(this.getPageLink(this.totalPages));
        }
        return pageNumbersDesktop;
    }
    render() {
        let pageNumbersMobile = h("span", null,
            this.curr,
            " ",
            this.pageNumLang,
            " ",
            this.totalPages);
        let pageNumbersDesktop = this.getPageNumbersForDesktop();
        return [
            h("snt-layout", null,
                h("div", { class: "pagination-container", role: "navigation", "aria-label": this.paginationNavLang },
                    h("div", null,
                        h("a", { href: "javascript:void(0);", class: this.curr > 1 ? "" : "hidden", onClick: this.onPreviousClick.bind(this) },
                            h("span", { class: "prev-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows left" })),
                            h("div", { class: "prev-link-wrapper" },
                                h("span", { class: "prev-link" }, this.prevLinkLang)))),
                    h("div", null,
                        h("div", { class: "desktop-page-numbers" }, pageNumbersDesktop),
                        h("div", { class: "mobile-page-numbers" }, pageNumbersMobile)),
                    h("div", null,
                        h("a", { href: "javascript:void(0);", class: this.curr < this.totalPages ? "" : "hidden", onClick: this.onNextClick.bind(this) },
                            h("div", { class: "next-link-wrapper" },
                                h("span", { class: "next-link" }, this.nextLinkLang)),
                            h("span", { class: "next-icon", "aria-hidden": "true" },
                                h("i", { class: "arrows right" }))))))
        ];
    }
};
FAQPaginationComponent.TAG_NAME = "snt-pagination";
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQPaginationComponent.prototype, "prevLinkLang", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQPaginationComponent.prototype, "nextLinkLang", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQPaginationComponent.prototype, "pageNumLang", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQPaginationComponent.prototype, "pageNumAriaLang", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FAQPaginationComponent.prototype, "paginationNavLang", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], FAQPaginationComponent.prototype, "pageChanged", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Number)
], FAQPaginationComponent.prototype, "totalPages", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], FAQPaginationComponent.prototype, "curr", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FAQPaginationComponent.prototype, "setPageNumber", null);
FAQPaginationComponent = __decorate([
    Component({
        tag: 'snt-pagination',
        styleUrl: './faq-pagination-component.scss',
        shadow: false
    })
], FAQPaginationComponent);
export { FAQPaginationComponent };
