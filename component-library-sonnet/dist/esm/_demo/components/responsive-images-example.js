var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let ResponsiveImagesExample = class ResponsiveImagesExample {
    render() {
        return (h("div", null,
            h("br", null),
            h("br", null),
            h("h2", null, "Responsive Image Example 1"),
            h("snt-two-column-feature", { imagePosition: 'left', titleString: "Image on the left", copyText: "Content on the right", imagePath: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", properties: '{\r\n                        "mobileImageUrl":"https://via.placeholder.com/468x60?text=Mobile",\r\n                        "tabletImageUrl":"https://via.placeholder.com/768x430?text=Tablet",\r\n                        "desktopImageUrl":"https://via.placeholder.com/1024x580?text=Desktop",\r\n                        "desktopHdTabletUrl":"https://via.placeholder.com/1440x800?text=Desktop+HD"\r\n                    }' }),
            h("br", null),
            h("br", null),
            h("h2", null, "Responsive Image Example 2"),
            h("snt-two-column-feature", { imagePosition: 'right', titleString: "Image on the right", copyText: "Content on the left", imagePath: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", properties: '{\r\n                        "mobileImageUrl":"https://via.placeholder.com/468x60?text=Mobile",\r\n                        "tabletImageUrl":"https://via.placeholder.com/768x430?text=Tablet",\r\n                        "desktopImageUrl":"https://via.placeholder.com/1024x580?text=Desktop",\r\n                        "desktopHdTabletUrl":"https://via.placeholder.com/1440x800?text=Desktop+HD"\r\n                    }' })));
    }
};
ResponsiveImagesExample.TAG_NAME = "responsive-images-example";
ResponsiveImagesExample = __decorate([
    Component({
        tag: 'responsive-images-example',
        shadow: false,
        styles: `snt-data {display: none}`
    })
], ResponsiveImagesExample);
export { ResponsiveImagesExample };
