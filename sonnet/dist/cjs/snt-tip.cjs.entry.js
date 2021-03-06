'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const tipComponentCss = "snt-tip{display:block}.neutral-fill snt-tip,snt-tip.neutral-fill{color:#323232;background-color:#ffffff;border:3px solid #e5e5e5}.light-fill snt-tip,snt-tip.light-fill{color:#323232;background-color:#d9f0f4;border:none}.dark-fill snt-tip,snt-tip.dark-fill{color:#ffffff;background-color:#147582;border:none}.float-fill snt-tip,snt-tip.float-fill{color:#323232;background-color:#ffffff;border:none}.primary-fill snt-tip,snt-tip.primary-fill{color:#323232;background-color:#6ebac5;border:none}.light-stroke snt-tip,snt-tip.light-stroke{color:#323232;background-color:#ffffff;border:3px solid #acdde4}snt-tip .tip-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:15px 15px}snt-tip .icon{display:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:15px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #ffffff;background-color:#ffffff;border-radius:50%}.neutral-fill snt-tip .icon,snt-tip .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-tip .icon,snt-tip .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-tip .icon,snt-tip .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-tip .icon,snt-tip .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-tip .icon,snt-tip .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-tip .icon,snt-tip .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-tip.neutral-fill .icon{border:3px solid #acdde4;background-color:#acdde4}snt-tip.light-fill .icon{border:3px solid #6ebac5;background-color:#ffffff}snt-tip.float-fill .icon{border:3px solid #acdde4;background-color:#acdde4}snt-tip.primary-fill .icon{border:3px solid #acdde4;background-color:#ffffff}snt-tip.light-stroke .icon{border:3px solid #acdde4;background-color:#acdde4}snt-tip.dark-fill .icon{border:3px solid #ffffff;background-color:#147582}snt-tip .icon.icon-tip{border-width:2px}@media (min-width: 768px){snt-tip .icon{display:-ms-inline-flexbox;display:inline-flex;height:40px;width:40px;-ms-flex:0 0 40px;flex:0 0 40px}snt-tip snt-image.icon-image img{height:25px;width:25px}}@media (min-width: 1024px){snt-tip .icon{display:-ms-inline-flexbox;display:inline-flex;height:60px;width:60px;-ms-flex:0 0 60px;flex:0 0 60px}snt-tip snt-image.icon-image img{height:30px;width:30px}}";

const TipComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "tip-container" }, index.h("div", { class: "icon icon-tip" }, index.h("snt-image", { class: "icon-image", "data-src": this.iconPath })), index.h("p", null, index.h("slot", null)))));
    }
};
TipComponent.TAG_NAME = "snt-tip";
TipComponent.style = tipComponentCss;

exports.snt_tip = TipComponent;
