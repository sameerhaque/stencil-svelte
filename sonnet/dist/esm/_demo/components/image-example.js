var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let ImageExample = class ImageExample {
    render() {
        return (h("snt-image", { id: "img1", "data-src": "https://www.sonnet.ca/getmedia/836231a8-e675-4f19-94bc-34a88fd9ab2c/10-10-19_travellers-blues-min.jpg.aspx?width=950&height=634&ext=.jpg", "src-image": "https://www.sonnet.ca/getmedia/836231a8-e675-4f19-94bc-34a88fd9ab2c/10-10-19_travellers-blues-min.jpg.aspx?width=950&height=634&ext=.jpg", "img-alt": "TEST", "style-classes": "hiddenOnMobile center", "data-align": "center", "data-width": "50%", class: "hydrated" }));
    }
};
ImageExample = __decorate([
    Component({
        tag: 'image-example',
        shadow: false
    })
], ImageExample);
export { ImageExample };
