var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let DropdownExample = class DropdownExample {
    render() {
        return [
            h("div", null,
                h("form", null,
                    h("div", { class: "form-row" },
                        h("div", { class: "col-sm-3 col-xs-12" },
                            h("snt-dropdown", { id: "insurance-type", placeholderText: "Please Select", labelText: "" },
                                h("snt-options", null,
                                    h("snt-item", { "data-key": "101", value: "One-O-One" }),
                                    h("snt-item", { "data-key": "102", value: "One-O-Two" }),
                                    h("snt-item", { "data-key": "103", value: "One-O-Three" }),
                                    h("snt-item", { "data-key": "104", value: "One-O-Four" }),
                                    h("snt-item", { "data-key": "105", value: "One-O-Five" }))))),
                    h("br", null),
                    h("div", { class: "row" },
                        h("div", null,
                            h("label", null, "Input One"),
                            h("br", null),
                            h("input", { type: "text" })),
                        h("div", null,
                            h("label", null, "Input Two"),
                            h("br", null),
                            h("input", { type: "text" })),
                        h("div", null,
                            h("select", null,
                                h("option", { value: "A", disabled: true }, "AAA"),
                                h("option", { value: "B" }, "BBB"),
                                h("option", { value: "C" }, "CCC"),
                                h("option", { value: "D", disabled: true }, "DDD"),
                                h("option", { value: "E" }, "EEE")))),
                    h("div", { class: "row" },
                        h("div", null,
                            h("input", { type: "submit", value: "submit" })))))
        ];
    }
};
DropdownExample.TAG_NAME = "dropdown-example";
DropdownExample = __decorate([
    Component({
        tag: 'dropdown-example',
        shadow: false
    })
], DropdownExample);
export { DropdownExample };
