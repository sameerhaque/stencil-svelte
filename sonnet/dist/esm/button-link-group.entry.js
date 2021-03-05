import { r as registerInstance, h } from './index-79f6678c.js';

const buttonLinkGroupComponentCss = "button-link-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}button-link-group button-link{text-align:center;width:100%}button-link-group button-link:nth-child(n+2){margin-top:40px}";

const ButtonLinkGroupComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
};
ButtonLinkGroupComponent.TAG_NAME = "button-link-group";
ButtonLinkGroupComponent.style = buttonLinkGroupComponentCss;

export { ButtonLinkGroupComponent as button_link_group };
