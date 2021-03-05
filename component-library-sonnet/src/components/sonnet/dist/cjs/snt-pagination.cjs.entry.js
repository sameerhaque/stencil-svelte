'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const faqPaginationComponentCss = "snt-pagination .pagination-container{border-top:1px #147582 solid;padding-top:15px;max-width:260px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;line-height:21px;font-size:12px}snt-pagination .prev-link-wrapper{padding-left:4px;display:inline-block}snt-pagination .next-link-wrapper{padding-right:4px;display:inline-block}snt-pagination i.arrows{border-style:solid;border-width:0 1px 1px 0;display:inline-block;padding:3.5px}snt-pagination .left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}snt-pagination .right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}snt-pagination .page-number-wrapper{margin:0px 10px;display:inline-block}snt-pagination .desktop-page-numbers{display:none}snt-pagination a{text-decoration:none;color:#323232;line-height:21px;font-size:12px}snt-pagination a:hover{text-decoration:none;outline:none;color:#147582}snt-pagination a:hover .prev-link{text-decoration:underline}snt-pagination a:hover .next-link{text-decoration:underline}snt-pagination a:hover .page-number-wrapper .page-number{font-family:\"Averta-ExtraBold\";font-weight:500;color:#147582}snt-pagination a:focus{text-decoration:none;outline:none;color:#147582}snt-pagination a:focus .prev-link{outline:solid;outline-width:1px;outline-offset:2px;text-decoration:underline}snt-pagination a:focus .next-link{outline:solid;outline-width:1px;outline-offset:2px;text-decoration:underline}snt-pagination a:focus .page-number-outline{outline-style:solid;outline-width:1px;outline-offset:3px;outline-color:#147582}snt-pagination a:focus .page-number-outline .page-number{color:#147582;font-family:\"Averta-ExtraBold\";font-weight:500}snt-pagination a:focus:active .page-number-outline,snt-pagination a:focus:active.active .page-number-outline{outline:none}snt-pagination a:focus:active .page-number-outline .page-number,snt-pagination a:focus:active.active .page-number-outline .page-number{color:#147582;font-family:\"Averta-ExtraBold\";font-weight:500}snt-pagination a.active .page-number{color:#323232;border-bottom:2px #147582 solid}snt-pagination a.hidden{visibility:hidden}snt-pagination snt-layout[viewport=medium] .pagination-container{padding-top:30px;max-width:694px;line-height:20px;font-size:14px}snt-pagination snt-layout[viewport=medium] .page-number-wrapper{margin:0px 20px}snt-pagination snt-layout[viewport=medium] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=medium] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=medium] a{line-height:20px;font-size:14px}snt-pagination snt-layout[viewport=medium] i.arrows{padding:4.4px}snt-pagination snt-layout[viewport=large] .pagination-container{max-width:654px}snt-pagination snt-layout[viewport=extra-large] .pagination-container{max-width:800px}snt-pagination snt-layout[viewport=large] .pagination-container{padding-top:30px;line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=large] .page-number-wrapper{margin:0px 10px}snt-pagination snt-layout[viewport=large] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=large] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=large] a{line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=large] i.arrows{padding:4.4px}snt-pagination snt-layout[viewport=extra-large] .pagination-container{padding-top:30px;line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=extra-large] .page-number-wrapper{margin:0px 10px}snt-pagination snt-layout[viewport=extra-large] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=extra-large] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=extra-large] a{line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=extra-large] i.arrows{padding:4.4px}";

const FAQPaginationComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pageChanged = index.createEvent(this, "pageChanged", 7);
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
        return index.h("a", { href: "javascript:void(0);", class: this.curr == pageNum ? "active" : "", onClick: this.onPageNumberClick.bind(this, pageNum), "aria-label": this.pageNumAriaLang + " " + pageNum }, index.h("div", { class: "page-number-wrapper" }, index.h("div", { class: "page-number-outline" }, index.h("span", { class: "page-number", "data-page": pageNum }, pageNum))));
    }
    getEllipsis() {
        return index.h("span", { class: "page-number" }, this.ellipsis);
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
        let pageNumbersMobile = index.h("span", null, this.curr, " ", this.pageNumLang, " ", this.totalPages);
        let pageNumbersDesktop = this.getPageNumbersForDesktop();
        return [
            index.h("snt-layout", null, index.h("div", { class: "pagination-container", role: "navigation", "aria-label": this.paginationNavLang }, index.h("div", null, index.h("a", { href: "javascript:void(0);", class: this.curr > 1 ? "" : "hidden", onClick: this.onPreviousClick.bind(this) }, index.h("span", { class: "prev-icon", "aria-hidden": "true" }, index.h("i", { class: "arrows left" })), index.h("div", { class: "prev-link-wrapper" }, index.h("span", { class: "prev-link" }, this.prevLinkLang)))), index.h("div", null, index.h("div", { class: "desktop-page-numbers" }, pageNumbersDesktop), index.h("div", { class: "mobile-page-numbers" }, pageNumbersMobile)), index.h("div", null, index.h("a", { href: "javascript:void(0);", class: this.curr < this.totalPages ? "" : "hidden", onClick: this.onNextClick.bind(this) }, index.h("div", { class: "next-link-wrapper" }, index.h("span", { class: "next-link" }, this.nextLinkLang)), index.h("span", { class: "next-icon", "aria-hidden": "true" }, index.h("i", { class: "arrows right" }))))))
        ];
    }
};
FAQPaginationComponent.TAG_NAME = "snt-pagination";
FAQPaginationComponent.style = faqPaginationComponentCss;

exports.snt_pagination = FAQPaginationComponent;
