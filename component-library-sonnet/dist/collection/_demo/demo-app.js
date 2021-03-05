import { h, Component, Element } from "@stencil/core";
export class DemoApp {
    componentDidLoad() {
        document.querySelector('.close-nav').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('sidebar-wrapper').style.display = "none";
        });
        const viewportSize = function () {
            const sntLayout = document.getElementsByTagName('snt-layout')[0];
            sntLayout ? document.querySelector('.viewport-size').textContent = sntLayout.getAttribute('viewport') : document.querySelector('.viewport-size-wrapper').classList.add('d-none');
        };
        window.addEventListener('resize', viewportSize);
    }
    render() {
        const routesCollection = {
            routes: [
                { linkUrl: '/', linkText: 'Home', componentName: 'demo-app-home', exact: true },
                { linkUrl: '/404-example', linkText: '404 Error', componentName: 'page-not-found-example' },
                { linkUrl: '/accordion-example', linkText: 'Accordion', componentName: 'accordion-example' },
                { linkUrl: '/ad-example', linkText: 'Ad', componentName: 'ad-example' },
                { linkUrl: '/article-list-example', linkText: 'Article List', componentName: 'article-list-example' },
                { linkUrl: '/blog-example', linkText: 'Blog', componentName: 'blog-example' },
                { linkUrl: '/blog-feature-articles-example', linkText: 'Blog Feature Articles', componentName: 'blog-feature-articles-example' },
                { linkUrl: '/blog-results-example', linkText: 'Blog Results', componentName: 'blog-results-example' },
                { linkUrl: '/breadcrumb-example', linkText: 'Breadcrumb Trail', componentName: 'breadcrumb-example' },
                { linkUrl: '/button-link-example', linkText: 'Button link', componentName: 'button-link-example' },
                { linkUrl: '/common-styles-example', linkText: 'Common Styles', componentName: 'common-styles-example' },
                { linkUrl: '/connect-offers-example', linkText: 'Connect Offers', componentName: 'connect-offers-example' },
                { linkUrl: '/cta-highlight-example', linkText: 'CTA Highlight', componentName: 'cta-highlight-example' },
                { linkUrl: '/cta-reminder-example', linkText: 'CTA Reminder', componentName: 'cta-reminder-example' },
                { linkUrl: '/dropdown-example', linkText: 'Dropdown', componentName: 'dropdown-example' },
                { linkUrl: '/faq-block-example', linkText: 'FAQ category block', componentName: 'faq-block-example' },
                { linkUrl: '/faq-filter-slider-example', linkText: 'FAQ filter/slider', componentName: 'faq-filter-slider-example' },
                { linkUrl: '/faq-pagination-example', linkText: 'FAQ pagination', componentName: 'faq-pagination-example' },
                { linkUrl: '/feature-left-example', linkText: 'Feature Left', componentName: 'feature-left-example' },
                { linkUrl: '/feature-right-example', linkText: 'Feature Right', componentName: 'feature-right-example' },
                { linkUrl: '/footer-example', linkText: 'Footer', componentName: 'footer-example' },
                { linkUrl: '/form-example', linkText: 'Form', componentName: 'form-example' },
                { linkUrl: '/header-example', linkText: 'Header', componentName: 'header-example' },
                { linkUrl: '/hero-example', linkText: 'Hero', componentName: 'hero-example' },
                { linkUrl: '/icon-copy-example', linkText: 'Icon Copy', componentName: 'icon-copy-example' },
                { linkUrl: '/image-example', linkText: 'Image (Snt)', componentName: 'image-example' },
                { linkUrl: '/image-icon-example', linkText: 'Image Icon', componentName: 'image-icon-example' },
                { linkUrl: '/link-example', linkText: 'Link Example', componentName: 'link-example' },
                { linkUrl: '/modal-example', linkText: 'Modal', componentName: 'modal-example' },
                { linkUrl: '/multi-column-example', linkText: 'Multi Column', componentName: 'multi-column-example' },
                { linkUrl: '/panel-example', linkText: 'Panel', componentName: 'panel-example' },
                { linkUrl: '/recaptcha-example', linkText: 'Recaptcha Example', componentName: 'recaptcha-example' },
                { linkUrl: '/responsive-images', linkText: 'Responsive Images', componentName: 'responsive-images-example' },
                { linkUrl: '/search-combobox-example', linkText: 'Search Combobox', componentName: 'search-combobox-example' },
                { linkUrl: '/search-results-example', linkText: 'Search Results', componentName: 'search-results-example' },
                { linkUrl: '/side-tabs-example', linkText: 'Side Rail Tabs', componentName: 'snt-tabs-example' },
                { linkUrl: '/skiptomain-example', linkText: 'Skip to main content', componentName: 'skiptomain-example' },
                { linkUrl: '/source-list-example', linkText: 'Source List', componentName: 'source-list-example' },
                { linkUrl: '/testimonial-example', linkText: 'Testimonials', componentName: 'testimonial-example' },
                { linkUrl: '/three-column-example', linkText: 'Three Column', componentName: 'three-column-example' },
                { linkUrl: '/three-column-mixed-example', linkText: 'Three Column Mixed', componentName: 'three-column-mixed-example' },
                { linkUrl: '/tip-example', linkText: 'Tip', componentName: 'tip-example' },
                { linkUrl: '/title-example', linkText: 'Title', componentName: 'title-example' },
                { linkUrl: '/title-copy-example', linkText: 'Title Copy', componentName: 'title-copy-example' },
                { linkUrl: '/treeview-example', linkText: 'Treeview', componentName: 'treeview-example' },
                { linkUrl: '/two-column-example', linkText: 'Two Column', componentName: 'two-column-example' },
                { linkUrl: '/two-column-feature-example', linkText: 'Two Column Feature', componentName: 'two-column-feature-example' },
                { linkUrl: '/vertical-tab-example', linkText: 'Vertical Tab', componentName: 'vertical-tab-example' },
                { linkUrl: '/video-example', linkText: 'Video Example', componentName: 'video-example' },
            ]
        };
        let routesLinkMarkup, routeMarkup;
        const navClassList = 'list-group-item list-group-item-action bg-light';
        routesLinkMarkup = routesCollection.routes.map((el) => {
            return h("stencil-route-link", { url: el.linkUrl, anchorClass: navClassList }, el.linkText);
        });
        routeMarkup = routesCollection.routes.map((el) => {
            return el.exact
                ? h("stencil-route", { url: el.linkUrl, component: el.componentName, exact: el.exact })
                : h("stencil-route", { url: el.linkUrl, component: el.componentName });
        });
        return (h("div", { class: "d-flex", id: "wrapper" },
            h("div", { class: "bg-light border-right", id: "sidebar-wrapper" },
                h("h3", { class: "sidebar-heading" },
                    "Components ",
                    h("a", { href: 'javascript:void(0)', class: "close-nav" }, "[X]")),
                h("div", { class: "list-group list-group-flush" }, routesLinkMarkup)),
            h("main", { id: "page-content-wrapper" },
                h("nav", { class: "navbar navbar-expand-lg navbar-light bg-light border-bottom" },
                    h("h2", { class: "sidebar-heading" }, "Sonnet Design System"),
                    h("div", { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
                        h("ul", { class: "navbar-nav ml-auto mt-2 mt-lg-0" },
                            h("li", { class: "nav-item active" },
                                h("a", { class: "nav-link", href: "https://pasprogram.economicalinsurance.com/secure/RapidBoard.jspa?rapidView=5936&projectKey=SCMS" }, "GIT")),
                            h("li", { class: "nav-item" },
                                h("a", { class: "nav-link", href: "https://sonnet.invisionapp.com/dsm/sonnet/style-guide" }, "DSM"))))),
                h("div", { class: "p-3" },
                    h("stencil-router", null,
                        h("stencil-route-switch", { scrollTopOffset: -1 }, routeMarkup))),
                h("div", { class: 'viewport-size-wrapper' },
                    h("p", null,
                        "viewport: ",
                        h("span", { class: "viewport-size" }))))));
    }
    static get is() { return "demo-app"; }
    static get originalStyleUrls() { return {
        "$": ["demo-app.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["demo-app.css"]
    }; }
    static get elementRef() { return "element"; }
}
DemoApp.TAG_NAME = "demo-app";
