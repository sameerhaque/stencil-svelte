'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const IconCopyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageSrc = '';
        this.imgAlt = '';
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "image-panel" }, index.h("snt-image", { "data-src": this.imageSrc, "img-alt": this.imgAlt }))));
    }
};
IconCopyComponent.TAG_NAME = "snt-image-column";

exports.snt_image_column = IconCopyComponent;
