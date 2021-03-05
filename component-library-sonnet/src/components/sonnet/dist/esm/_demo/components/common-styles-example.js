var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Component } from "@stencil/core";
let CommonStylesExample = class CommonStylesExample {
    render() {
        return (h("div", null,
            h("div", { class: "button_container" },
                h("h1", null, "Buttons"),
                h("snt-action-button", { styleClasses: "cta theme-default", "action-reference": "logAction", "link-title": "Default CTA" }),
                h("br", null),
                h("br", null),
                h("snt-action-button", { styleClasses: "cta theme-primary", "action-reference": "logAction", "link-title": "Primary CTA" }),
                h("br", null),
                h("br", null),
                h("snt-action-button", { styleClasses: "cta theme-secondary", "action-reference": "logAction", "link-title": "Secondary CTA" }),
                h("br", null),
                h("br", null),
                h("snt-action-button", { styleClasses: "cta theme-secondaryDarkBg", "action-reference": "logAction", "link-title": "Secondary" }),
                h("br", null),
                h("br", null),
                h("snt-action-button", { styleClasses: "cta theme-headerNav", "action-reference": "logAction", "link-title": "Secondary CTA" }),
                h("br", null),
                h("br", null),
                h("snt-action-button", { styleClasses: "cta theme-disabled", "action-reference": "logAction", "link-title": "Disabled" }),
                h("br", null),
                h("br", null),
                h("snt-action-button", { styleClasses: "cta theme-disabledSecondary", "action-reference": "logAction", "link-title": "Disabled" }),
                h("br", null),
                h("br", null),
                h("button-link", { href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1", target: "_blank", class: "theme-default", "button-id": "pet-button", ariaDescribedByText: "Click for pet insurance" }, "Pet"),
                h("br", null),
                h("button-link", { href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1", target: "_blank", class: "theme-secondary" }, "Pet")),
            h("br", null),
            h("br", null),
            h("div", { id: "typography" },
                h("h1", null, "H1: Get a home and auto insurance quote and buy online"),
                h("br", null),
                h("h2", null, "H2: Get a home and auto insurance quote and buy online"),
                h("br", null),
                h("h3", null, "H3: Get a home and auto insurance quote and buy online"),
                h("br", null),
                h("h4", null, "H4: Get a home and auto insurance quote and buy online"),
                h("br", null),
                h("br", null),
                h("p", null,
                    "Body 1: At Sonnet, we offer customized coverage, in language you can understand, at a competitive price \u2013 and we do it all online. ",
                    h("strong", null, "We\u2019ve changed insurance for the better, so you can worry less and live more."))),
            h("br", null),
            h("br", null),
            h("div", { class: "button-link-container" },
                h("button-link-group", null,
                    h("button-link", { href: "https://www.sonnet.ca/auto-insurance", class: "theme-default" }, "Home & Auto"),
                    h("button-link", { href: "https://www.sonnet.ca/home-insurance", class: "theme-default" }, "Home"),
                    h("button-link", { href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1", target: "_blank", class: "theme-default" }, "Pet"))),
            h("br", null),
            h("h3", null, "Enhanced Button Single Left Icon"),
            h("snt-enhanced-button", { ctaText: "Home", target: "_self", "left-icon-sources": '{\r\n                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                    }', href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1" }),
            h("h3", null, "Enhanced Button Right Icon"),
            h("snt-enhanced-button", { ctaText: "Home", target: "_blank", "right-icon-sources": '{\r\n                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                    }', href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1" }),
            h("h3", null, "Enhanced Button Both Icons"),
            h("snt-enhanced-button", { ctaText: "Home", target: "_self", "left-icon-sources": '{\r\n                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                    }', "right-icon-sources": '{\r\n                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                    }', href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1" }),
            h("h3", null, "Enhanced Button Both Icons With Discount Text"),
            h("snt-enhanced-button", { ctaText: "Home", target: "_self", "left-icon-sources": '{\r\n                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                    }', "right-icon-sources": '{\r\n                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                    }', href: "https://secure.sonnet.ca/#/quoting/auto/vehicle_details?discount=F95C2BB931EC4C1", "discount-text": "Save up to 20%" })));
    }
};
CommonStylesExample = __decorate([
    Component({
        tag: 'common-styles-example',
        shadow: false
    })
], CommonStylesExample);
export { CommonStylesExample };
