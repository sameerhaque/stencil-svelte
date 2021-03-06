var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let FooterExample = class FooterExample {
    render() {
        return [
            h("snt-footer", null,
                h("div", { class: "container" },
                    h("snt-layout", null,
                        h("div", { class: "footer-actions" },
                            h("div", { class: "row" },
                                h("div", { class: "col-sm" },
                                    h("span", { class: "h5" }, "Get Insurance"),
                                    h("snt-nav", null,
                                        h("snt-nav-item", { href: "?insurance", target: "_self", "link-title": "Insurance" }),
                                        h("snt-nav-item", { href: "?auto-insurance", target: "_self", "link-title": "Auto" }),
                                        h("snt-nav-item", { href: "?home-insurance", target: "_self", "link-title": "Home" }),
                                        h("snt-nav-item", { href: "?Condo-insurance", target: "_self", "link-title": "Condo" }),
                                        h("snt-nav-item", { href: "?tenant-insurance", target: "_self", "link-title": "Tenant" }),
                                        h("snt-nav-item", { href: "?Landlord-insurance", target: "_self", "link-title": "Landlord" }),
                                        h("snt-nav-item", { href: "?Pet-insurance", target: "_self", "link-title": "Pet" }),
                                        h("snt-nav-item", { href: "?Claims", target: "_self", "link-title": "Claims" }),
                                        h("snt-nav-item", { href: "?get-quote", target: "_self", "link-title": "Get a quote" }),
                                        h("snt-nav-item", { href: "?cancellation-calculator", target: "_self", "link-title": "Cancellation Calculator" }))),
                                h("div", { class: "col-sm" },
                                    h("span", { class: "h5" }, "Learn More"),
                                    h("snt-nav", null,
                                        h("snt-nav-item", { href: "?sonnet-connect", target: "_self", "link-title": "Sonnet Connect" }),
                                        h("snt-nav-item", { href: "?blog", target: "_self", "link-title": "Blog" }),
                                        h("snt-nav-item", { href: "?faq", target: "_self", "link-title": "FAQs" }),
                                        h("snt-nav-item", { href: "?partner-offers", target: "_self", "link-title": "Partner Offers" }),
                                        h("snt-nav-item", { href: "?news", target: "_self", "link-title": "News" }))),
                                h("div", { class: "col-sm" },
                                    h("span", { class: "h5" }, "Get in Touch"),
                                    h("snt-nav", null,
                                        h("snt-nav-item", { href: "?about-us", target: "_self", "link-title": "About Us" }),
                                        h("snt-nav-item", { href: "?contact-us", target: "_self", "link-title": "Contact Us" }),
                                        h("snt-nav-item", { href: "?group-insurance", target: "_self", "link-title": "Group Insurance" }),
                                        h("snt-nav-item", { href: "?stay-in-touch", target: "_self", "link-title": "Stay in Touch" }),
                                        h("snt-nav-item", { href: "?join-us", target: "_self", "link-title": "Join Us" }))),
                                h("div", { class: "col-sm" },
                                    h("span", { class: "h5" }, "Social"),
                                    h("snt-nav", null,
                                        h("snt-nav-item", { href: "https://www.twitter.com/", target: "_blank", "link-title": "Twitter" }),
                                        h("snt-nav-item", { href: "https://www.facebook.com/", target: "_blank", "link-title": "Facebook" }),
                                        h("snt-nav-item", { href: "https://www.linkedin.com/", target: "_blank", "link-title": "LinkedIn" }),
                                        h("snt-nav-item", { href: "https://www.linkedin.com/", target: "_blank", "link-title": "Instagram" }),
                                        h("snt-nav-item", { href: "https://www.youtube.com/", target: "_blank", "link-title": "YouTube" }))))),
                        h("div", { class: "footer-row" },
                            h("div", { class: "row" },
                                h("div", { class: "col-md-12 " },
                                    h("snt-nav", { styleClasses: "d-flex flex-row" },
                                        h("snt-nav-item", { href: "?terms-of-use", target: "_self", "link-title": "Terms of Use" }),
                                        h("snt-nav-item", { href: "?recurring-payment-agreement", target: "_self", "link-title": "Recurring Payment Agreement" }),
                                        h("snt-nav-item", { href: "?privacy", target: "_self", "link-title": "Privacy" }),
                                        h("snt-nav-item", { href: "?site-map", target: "_self", "link-title": "Site Map" }),
                                        h("snt-nav-item", { href: "action:Action.languageToggle", target: "_self", "link-title": "Francais" }))))),
                        h("div", { class: "footer-legal" },
                            h("p2", null, "\u00A9\uFE0F2020 Sonnet Insurance. Sonnet Insurance\u00AE\uFE0F All trademarks used herein are owned by the respective entities. All rights reserved. Policies underwritten by Sonnet Insurance Company."),
                            h("p2", null,
                                "Sonnet Insurance Company (registration number 200043453) is registered with Autorit\u00E9 des marches financiers to offer property and automobile insurance. The Autorit\u00E9 des marches financiers registers are available at ",
                                h("snt-link", { target: "_blank", href: "https://lautorite.qc.ca/en/general-public/about-the-amf/information-access" }, "https://lautorite.qc.ca/en/general-public/about-the-amf/information-access")),
                            h("p2", null, "The 5 minutes to get insured is based on the average Sonnet customer experience. Always refer to your insurance policy for information about your coverage, including limits, deductibles, and exclusions. In case of discrepancy, the insurance contract prevails over general information available on this site. Any policy related changes made on this site will not be effective until you receive confirmation."),
                            h("p2", null, "The Sonnet customer satisfaction score is based on the average survey results of Economical Insurance respondents between January to December 2018."),
                            h("legal-component", null)))))
        ];
    }
};
FooterExample.TAG_NAME = "footer-example";
FooterExample = __decorate([
    Component({
        tag: 'footer-example',
        shadow: false
    })
], FooterExample);
export { FooterExample };
