var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let HeaderExample = class HeaderExample {
    render() {
        const langJsonEn = `{"search": "Search", "toggleNavigation":"toggleNavigation","close":"Close","searchUrl":"https://www.sonnet.ca/search.aspx","login":"Log In","gaq":"Get a Quote","back":"Back","skipToMainContent":"Skip to main content","getAQuoteUrl":"http://localhost:3333/getAQuote.html"}`;
        //const langJsonFr = `{\"search\":\"Rechercher\",\"login\":\"Connexion\",\"gaq\":\"Obtenir une soumission\",\"back\":\"retourner\",\"skipToMainContent\":\"Aller au contenu principal\"}`;
        return [
            h("snt-header", { fixed: true, "style-classes": "theme-primary", "language-json": langJsonEn },
                h("snt-nav", { slot: "secondary-nav-desktop", id: "secondary-nav-desktop" },
                    h("snt-nav-item", { href: "?contact-us", target: "_self", "link-title": "Contact Us" }),
                    h("snt-nav-item", { href: "?about-us", target: "_self", "link-title": "About Us" }),
                    h("snt-nav-item", { href: "?fr", target: "_self", "link-title": "Fran\u00E7ais" })),
                h("snt-nav", { slot: "secondary-nav-mobile", id: "secondary-nav-mobile" },
                    h("snt-nav-item", { href: "?contact-us", target: "_self", linkTitle: "Contact Us" }),
                    h("snt-nav-item", { href: "?about-us", target: "_self", linkTitle: "About Us" }),
                    h("snt-nav-item", { href: "?fr", target: "_self", "link-title": "Fran\u00E7ais" })),
                h("snt-nav", { slot: "primary-nav", id: "main-nav", expander: "keyboard" },
                    h("snt-nav-item", { href: "?insurance", target: "_self", "link-title": "Insurance" },
                        h("snt-nav-item", { href: "?auto-insurance", target: "_self", "link-title": "Auto" }),
                        h("snt-nav-item", { href: "?home-insurance", target: "_self", "link-title": "Home" }),
                        h("snt-nav-item", { href: "?tenant-insurance", target: "_self", "link-title": "Tenant" })),
                    h("snt-nav-item", { href: "?sonnet-connect", target: "_self", "link-title": "Sonnet Connect" }),
                    h("snt-nav-item", { href: "?claims", target: "_self", "link-title": "Claims" })))
        ];
    }
};
HeaderExample = __decorate([
    Component({
        tag: 'header-example',
        shadow: false,
        styles: '#sidebar-wrapper { min-height: 125vh; } '
    })
], HeaderExample);
export { HeaderExample };
