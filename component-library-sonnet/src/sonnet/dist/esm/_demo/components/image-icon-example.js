var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Host } from "@stencil/core";
let ImageIconExample = class ImageIconExample {
    render() {
        return (h(Host, null,
            h("h2", null, "Centered Icon"),
            h("div", null,
                h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST", class: "center" })),
            h("h2", null, "Dark Fill"),
            h("div", { class: "dark-fill" },
                h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST" })),
            h("h2", null, "Light Fill Icon"),
            h("div", { class: "light-fill" },
                h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST" }))));
    }
};
ImageIconExample = __decorate([
    Component({
        tag: "image-icon-example",
        shadow: false,
    })
], ImageIconExample);
export { ImageIconExample };
