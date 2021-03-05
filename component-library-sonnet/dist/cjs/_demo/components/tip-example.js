var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let TipExample = class TipExample {
    render() {
        return [
            h("div", { class: "dark-fill" },
                h("h3", null, "Dark Fill Tip Example"),
                h("snt-tip", { "icon-path": "https://img.icons8.com/dotty/45/000000/user.png" }, "This is sample tip component")),
            h("br", null),
            h("div", { class: "light-fill" },
                h("h3", null, "Light Fill Tip Example"),
                h("snt-tip", { "icon-path": "https://img.icons8.com/dotty/45/000000/user.png" }, "This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component This is sample tip component"))
        ];
    }
};
TipExample = __decorate([
    Component({
        tag: 'tip-example',
        shadow: false
    })
], TipExample);
export { TipExample };
