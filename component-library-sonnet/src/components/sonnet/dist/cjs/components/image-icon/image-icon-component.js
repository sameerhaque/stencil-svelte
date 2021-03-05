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
let ImageIconComponent = class ImageIconComponent {
    constructor() {
        this.properties = "";
        this.imgAlt = "";
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
        let iconSrc = {};
        if (StringUtils.hasValue(this.properties)) {
            iconSrc = JSON.parse(this.properties);
        }
        this.largeIconUrl = iconSrc.largeIconUrl || iconSrc.smallIconUrl;
        this.smallIconUrl = iconSrc.smallIconUrl || this.largeIconUrl;
        this.image.setAttribute("src", this.smallIconUrl);
        this.element.setAttribute("data-src", this.smallIconUrl);
        this.image.setAttribute("data-srcSet", this.smallIconUrl);
        this.largeSource.setAttribute('srcSet', this.largeIconUrl);
        this.largeSource.setAttribute('data-srcSet', this.largeIconUrl);
        if (StringUtils.isEmpty(this.largeIconUrl) &&
            StringUtils.isEmpty(this.smallIconUrl)) {
            this.icon.classList.add("hidden");
        }
    }
    render() {
        return (h(Host, null,
            h("snt-layout", null,
                h("div", { ref: (el) => (this.icon = el), class: "icon" },
                    h("picture", null,
                        h("source", { ref: (el) => (this.largeSource = el), media: "(min-width: 768px)", srcSet: "" }),
                        h("img", { class: WebUtils.generateClasses(["image-icon"], this.styleClasses), src: "", alt: this.imgAlt, "aria-hidden": "true", ref: (el) => (this.image = el) }))))));
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageIconComponent.prototype, "properties", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ImageIconComponent.prototype, "imgAlt", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ImageIconComponent.prototype, "styleClasses", void 0);
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ImageIconComponent.prototype, "element", void 0);
ImageIconComponent = __decorate([
    Component({
        tag: "snt-image-icon",
        styleUrl: "image-icon-component.scss",
        shadow: false,
    })
], ImageIconComponent);
export { ImageIconComponent };
