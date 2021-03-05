var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let TwoColumnFeatureExample = class TwoColumnFeatureExample {
    render() {
        return (h("div", null,
            h("h1", null, "Image Left"),
            h("snt-two-column-feature", { titleString: "My Title", copyText: "This is my content. <snt-link href='www.google.com'>This is my content.</snt-link> This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content.\r\n                     This is my content. This is my content. This is my content. This is my content. This is my content", imagePath: "/asset/images/ins-tenant-desktop-hd-2x.jpg" }),
            h("br", null),
            h("h1", null, "Image Right"),
            h("snt-two-column-feature", { titleString: "My Title", imagePosition: 'right', copyText: "This is my content.", imagePath: "/asset/images/ins-tenant-desktop-hd-2x.jpg" }),
            h("br", null),
            h("h1", null, "With Primary CTA"),
            h("snt-two-column-feature", { titleString: "My Title", copyText: "This is my content.", "primary-button-text": "Click Here", "primary-button-action": "Action.logAction", imagePath: "/asset/images/ins-tenant-desktop-hd-2x.jpg" }),
            h("br", null),
            h("h1", null, "With Secondary CTA"),
            h("snt-two-column-feature", { titleString: "My Title", copyText: "This is my content.", "secondary-button-text": "Click Here", "secondary-button-action": "Action.logAction", imagePath: "/asset/images/ins-tenant-desktop-hd-2x.jpg" }),
            h("br", null),
            h("h1", null, "With Link"),
            h("snt-two-column-feature", { titleString: "My Title", copyText: "This is my content.", "link-title": "Click for Google Click for Google Click, Click for Google Click for Google Click, Click for Google Click for Google Click, Click for Google Click for Google Click, Click for Google Click for Google Click", "link-url": "https://www.google.com", "open-link-in-new-window": "true", imagePath: "/asset/images/ins-tenant-desktop-hd-2x.jpg" }),
            h("h1", null, "With Neutral Fill"),
            h("snt-two-column-feature", { class: "neutral-fill", titleString: "My Title", copyText: "This is my content.", properties: '{\r\n                        "mobileImageUrl": "https://test-economical.dotcmscloud.com/dA/a4b641dacf/AUTO_couple_driving_on_the_road@1x.jpg",\r\n                        "tabletImageUrl": "https://test-economical.dotcmscloud.com/dA/a4b641dacf/AUTO_couple_driving_on_the_road@1x.jpg",\r\n                        "desktopImageUrl": "https://test-economical.dotcmscloud.com/dA/a009d82537/AUTO_couple_driving_on_the_roadr@2x.jpg",\r\n                        "desktopHdTabletUrl": "https://test-economical.dotcmscloud.com/dA/a009d82537/AUTO_couple_driving_on_the_roadr@2x.jpg"\r\n                    }', imagePath: "/asset/images/ins-tenant-desktop-hd-2x.jpg" }),
            h("h1", null, "With image hidden on mobile"),
            h("snt-two-column-feature", { class: "mobile-hide-image", titleString: "My Title", copyText: "This is my content.", "primary-button-text": "Click Here", "primary-button-action": "Action.logAction", imagePath: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg" }),
            h("h1", null, "With image hidden on mobile when image is on right"),
            h("snt-two-column-feature", { class: "mobile-hide-image", titleString: "My Title", imagePosition: 'right', copyText: "This is my content.", imagePath: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg" })));
    }
};
TwoColumnFeatureExample.TAG_NAME = "two-column-feature-example";
TwoColumnFeatureExample = __decorate([
    Component({
        tag: 'two-column-feature-example',
        shadow: false
    })
], TwoColumnFeatureExample);
export { TwoColumnFeatureExample };
