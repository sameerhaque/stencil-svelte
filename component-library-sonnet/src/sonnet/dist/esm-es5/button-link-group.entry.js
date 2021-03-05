import { r as registerInstance, h } from './index-79f6678c.js';
var buttonLinkGroupComponentCss = "button-link-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}button-link-group button-link{text-align:center;width:100%}button-link-group button-link:nth-child(n+2){margin-top:40px}";
var ButtonLinkGroupComponent = /** @class */ (function () {
    function ButtonLinkGroupComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ButtonLinkGroupComponent.prototype.render = function () {
        return (h("slot", null));
    };
    return ButtonLinkGroupComponent;
}());
ButtonLinkGroupComponent.TAG_NAME = "button-link-group";
ButtonLinkGroupComponent.style = buttonLinkGroupComponentCss;
export { ButtonLinkGroupComponent as button_link_group };
