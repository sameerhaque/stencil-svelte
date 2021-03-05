var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Host, Prop, Method } from "@stencil/core";
import { ContentData } from "../../core/content/domain/ContentData";
import { ContentParser } from "../../core/content/ContentParser";
import { ContentTypeEnum } from "../../core/content/builder/domain/ContentTypeEnum";
let DataComponent = class DataComponent {
    async getData() {
        return this.builder.build();
    }
    componentWillLoad() {
        let url = (this.src ? new URL(this.src) : null);
        this.builder = ContentParser.parse(new ContentData(ContentTypeEnum.findByValue(this.type), this.lazyLoad, url, this.data));
    }
    render() {
        return (h(Host, null));
    }
};
DataComponent.TAG_NAME = "snt-data";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], DataComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], DataComponent.prototype, "type", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], DataComponent.prototype, "lazyLoad", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], DataComponent.prototype, "src", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], DataComponent.prototype, "data", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataComponent.prototype, "getData", null);
DataComponent = __decorate([
    Component({
        tag: 'snt-data',
        shadow: false
    })
], DataComponent);
export { DataComponent };
