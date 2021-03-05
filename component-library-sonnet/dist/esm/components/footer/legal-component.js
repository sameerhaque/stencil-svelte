var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let FooterExample = class FooterExample {
    componentDidLoad() {
        document.querySelectorAll('.additionalLegalCopy').forEach(function (elem) {
            let legalParagraph = document.createElement('p');
            legalParagraph.innerHTML = elem.innerHTML;
            if (document.getElementById('secondary_legal'))
                document.getElementById('secondary_legal').appendChild(legalParagraph);
        });
    }
    render() {
        return [
            h("p2", { id: 'secondary_legal' }, " ")
        ];
    }
};
FooterExample.TAG_NAME = "legal-component";
FooterExample = __decorate([
    Component({
        tag: 'legal-component',
        shadow: false
    })
], FooterExample);
export { FooterExample };
