var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Prop, Element, Host } from "@stencil/core";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
import { StringUtils } from "../../core/utils/StringUtils";
import { WebUtils } from "../../core/utils/WebUtils";
let ImageComponent = class ImageComponent {
    constructor() {
        this.emptyString = 'data:,';
        this.dataSrc = '';
        this.srcImage = '';
        this.srcset = '';
        this.imgAlt = '';
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    }
    render() {
        let sourceUrl;
        let dataSource;
        sourceUrl = StringUtils.isEmpty(this.srcImage) ? this.emptyString : this.srcImage;
        dataSource = StringUtils.isEmpty(this.dataSrc) ? this.emptyString : this.dataSrc;
        return (h(Host, null,
            h("img", { class: WebUtils.generateClasses([
                    StringUtils.isEmpty(this.srcImage) && StringUtils.isEmpty(this.dataSrc) ? "hidden" : ""
                ], this.styleClasses), src: sourceUrl, "data-src": dataSource, height: this.height, width: this.width, alt: this.imgAlt, srcset: this.srcset ? this.srcset : '', loading: 'lazy', sizes: this.sizes ? this.sizes : undefined })));
    }
    ;
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "dataSrc", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "srcImage", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "height", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "srcset", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "imgAlt", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageComponent.prototype, "sizes", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ImageComponent.prototype, "styleClasses", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ImageComponent.prototype, "element", void 0);
ImageComponent = __decorate([
    Component({
        tag: 'snt-image',
        styleUrl: 'image-component.scss',
        shadow: false
    })
], ImageComponent);
export { ImageComponent };
