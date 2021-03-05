var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Method } from "@stencil/core";
import { TitleTypeEnum } from "./TitleTypeEnum";
import clampJs from "clamp-js-main";
let TitleComponent = class TitleComponent {
    constructor() {
        this.clampLines = 0;
        this.truncationString = "...";
    }
    getContent(titleType) {
        switch (titleType) {
            case TitleTypeEnum.h1: return (h("h1", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            case TitleTypeEnum.h2: return (h("h2", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            case TitleTypeEnum.h3: return (h("h3", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            case TitleTypeEnum.h4: return (h("h4", { ref: (el) => { this.titleElement = el; }, class: "header" },
                h("slot", null)));
            default: return "";
        }
    }
    componentDidRender() {
        if (this.clampLines > 0) {
            clampJs.clamp(this.titleElement, { clamp: this.clampLines, truncationChar: this.truncationString, useNativeClamp: false });
        }
    }
    async clampTitle(clampLines = this.clampLines) {
        clampJs.clamp(this.titleElement, { clamp: clampLines, truncationChar: this.truncationString, useNativeClamp: false });
    }
    async setTitle(title) {
        this.titleElement.innerHTML = title;
    }
    render() {
        let content = this.getContent(this.titleType);
        return [
            h("snt-layout", null, content)
        ];
    }
};
TitleComponent.TAG_NAME = "snt-title";
__decorate([
    Prop(),
    __metadata("design:type", String)
], TitleComponent.prototype, "titleType", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], TitleComponent.prototype, "clampLines", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], TitleComponent.prototype, "truncationString", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TitleComponent.prototype, "clampTitle", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TitleComponent.prototype, "setTitle", null);
TitleComponent = __decorate([
    Component({
        tag: 'snt-title',
        styleUrl: './title-component.scss',
        shadow: false
    })
], TitleComponent);
export { TitleComponent };
