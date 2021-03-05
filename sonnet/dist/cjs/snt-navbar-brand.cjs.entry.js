'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const navbarBrandComponentCss = "snt-navbar-brand snt-image img{display:-ms-flexbox;display:flex;max-width:100%;width:5.325rem;height:1rem}@media (min-width: 768px){snt-navbar-brand snt-image img{width:7.5rem;height:1.5rem}}";

const NavbarBrandComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("a", { href: this.href }, index.h("snt-image", { "img-alt": this.imgAlt, "src-image": this.imgSrc, "data-src": this.imgSrc }))
        ];
    }
};
NavbarBrandComponent.TAG_NAME = "snt-navbar-brand";
NavbarBrandComponent.style = navbarBrandComponentCss;

exports.snt_navbar_brand = NavbarBrandComponent;
