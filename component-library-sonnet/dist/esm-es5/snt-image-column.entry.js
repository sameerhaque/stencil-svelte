import { r as registerInstance, h, H as Host } from './index-79f6678c.js';
var IconCopyComponent = /** @class */ (function () {
    function IconCopyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.imageSrc = '';
        this.imgAlt = '';
    }
    IconCopyComponent.prototype.render = function () {
        return (h(Host, null, h("div", { class: "image-panel" }, h("snt-image", { "data-src": this.imageSrc, "img-alt": this.imgAlt }))));
    };
    return IconCopyComponent;
}());
IconCopyComponent.TAG_NAME = "snt-image-column";
export { IconCopyComponent as snt_image_column };
