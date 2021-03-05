var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let PanelExample = class PanelExample {
    render() {
        const jsonData = "{ \"viewport\": { \"1440\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg')\", \"outlineColor\": \"red\" } }, \"768\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-tablet-1x.jpg')\", \"outlineColor\": \"orange\" } }, \"0\": { \"style\": { \"backgroundImage\": \"url('https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-mobile-1x.jpg')\", \"outlineColor\": \"yellow\" } } } }";
        return [
            h("snt-panel", null,
                h("snt-data", { id: "data-component-test", type: "json", "lazy-load": true, src: "https://baconipsum.com/api/?type=meat-and-filler" }, jsonData))
        ];
    }
};
PanelExample.TAG_NAME = "panel-example";
PanelExample = __decorate([
    Component({
        tag: 'panel-example',
        shadow: false
    })
], PanelExample);
export { PanelExample };
