import { r as registerInstance, h, H as Host } from './index-79f6678c.js';

const IconCopyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imageSrc = '';
        this.imgAlt = '';
    }
    render() {
        return (h(Host, null, h("div", { class: "image-panel" }, h("snt-image", { "data-src": this.imageSrc, "img-alt": this.imgAlt }))));
    }
};
IconCopyComponent.TAG_NAME = "snt-image-column";

export { IconCopyComponent as snt_image_column };
