import { r as registerInstance, h } from './index-79f6678c.js';
var navbarBrandComponentCss = "snt-navbar-brand snt-image img{display:-ms-flexbox;display:flex;max-width:100%;width:5.325rem;height:1rem}@media (min-width: 768px){snt-navbar-brand snt-image img{width:7.5rem;height:1.5rem}}";
var NavbarBrandComponent = /** @class */ (function () {
    function NavbarBrandComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    NavbarBrandComponent.prototype.render = function () {
        return [
            h("a", { href: this.href }, h("snt-image", { "img-alt": this.imgAlt, "src-image": this.imgSrc, "data-src": this.imgSrc }))
        ];
    };
    return NavbarBrandComponent;
}());
NavbarBrandComponent.TAG_NAME = "snt-navbar-brand";
NavbarBrandComponent.style = navbarBrandComponentCss;
export { NavbarBrandComponent as snt_navbar_brand };
