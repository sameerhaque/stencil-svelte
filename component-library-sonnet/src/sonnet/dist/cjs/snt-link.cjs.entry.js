'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./ComponentConstants-86f11f00.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
require('./LanguageUtils-fbb05914.js');
const AccessibilityUtils = require('./AccessibilityUtils-64349711.js');

const linkComponentCss = "@charset \"UTF-8\";snt-link a{font-size:inherit;position:relative;text-decoration:none;background-color:transparent;padding-bottom:1px;background-image:-webkit-gradient(linear, left top, left bottom, from(#147582), to(#147582)), -webkit-gradient(linear, left top, left bottom, from(#9e0a9a), to(#9e0a9a));background-image:linear-gradient(#147582, #147582), linear-gradient(#9e0a9a, #9e0a9a);background-size:100% 1px, 0 1px;background-position:100% 100%, 1px 100%;background-repeat:no-repeat}snt-link a.theme-default{background-color:#6ebac5;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-link a.theme-default:hover,snt-link a.theme-default:focus,snt-link a.theme-default:focus-within{color:#ffffff;background-color:#147582;-webkit-box-shadow:inset 0 0 0 3px #147582;box-shadow:inset 0 0 0 3px #147582}snt-link a.theme-secondary{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-link a.theme-secondary:hover,snt-link a.theme-secondary:focus,snt-link a.theme-secondary:focus-within{color:#ffffff;background-color:#323232}snt-link a.theme-secondaryDarkBg{background-color:transparent;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #ffffff;box-shadow:inset 0 0 0 3px #ffffff}snt-link a.theme-secondaryDarkBg:hover,snt-link a.theme-secondaryDarkBg:focus,snt-link a.theme-secondaryDarkBg:focus-within{color:#323232;background-color:#ffffff}snt-link a.theme-primary{background-color:#323232;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-link a.theme-primary:hover,snt-link a.theme-primary:focus,snt-link a.theme-primary:focus-within{color:#323232;background-color:transparent}snt-link a.theme-headerNav{background-color:transparent;color:#6ebac5;-webkit-box-shadow:inset 0 0 0 3px #6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-link a.theme-headerNav:hover,snt-link a.theme-headerNav:focus,snt-link a.theme-headerNav:focus-within{color:#323232;background-color:#6ebac5}snt-link a.theme-disabled{background-color:#e5e5e5;color:#7f7f7f;-webkit-box-shadow:inset 0 0 0 3px #e5e5e5;box-shadow:inset 0 0 0 3px #e5e5e5}snt-link a.theme-disabled:hover,snt-link a.theme-disabled:focus,snt-link a.theme-disabled:focus-within{color:#7f7f7f}snt-link a.theme-disabledSecondary{background-color:transparent;color:#b2b2b2;-webkit-box-shadow:inset 0 0 0 3px #b2b2b2;box-shadow:inset 0 0 0 3px #b2b2b2}snt-link a.theme-disabledSecondary:hover,snt-link a.theme-disabledSecondary:focus,snt-link a.theme-disabledSecondary:focus-within{color:#b2b2b2}snt-link a .icon-new-window:before{color:#147582}snt-link a:hover{text-decoration:none;background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#9e0a9a), to(#9e0a9a));background-image:linear-gradient(transparent, transparent), linear-gradient(#9e0a9a, #9e0a9a);background-size:0 1px, 100% 1px;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s;-webkit-transition-property:background-size;transition-property:background-size}snt-link a:focus{padding:1px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:-1px;background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#9e0a9a), to(#9e0a9a));background-image:linear-gradient(transparent, transparent), linear-gradient(#9e0a9a, #9e0a9a);background-size:0 1px, 100% 1px;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s;-webkit-transition-property:background-size;transition-property:background-size}snt-link a:active{outline:none}snt-link a span.icon-font.icon-new-window{position:relative;right:0}snt-link a{color:#147582}snt-link a:before{background-color:#9e0a9a}snt-link a:focus{outline:1px solid #147582;outline-offset:2px}snt-link a:hover,snt-link a:focus{color:#9e0a9a}snt-link a:hover .icon-new-window:before,snt-link a:focus .icon-new-window:before{color:#9e0a9a}snt-link.light-fill a,.light-fill snt-link a{color:#147582}snt-link.light-fill a:focus,.light-fill snt-link a:focus{outline:1px solid #147582}snt-link.light-fill a:hover,snt-link.light-fill a:focus,.light-fill snt-link a:hover,.light-fill snt-link a:focus{color:#9e0a9a}snt-link.light-fill a:hover,snt-link.light-fill a:focus,.light-fill snt-link a:hover,.light-fill snt-link a:focus{background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#9e0a9a), to(#9e0a9a));background-image:linear-gradient(transparent, transparent), linear-gradient(#9e0a9a, #9e0a9a)}snt-link.neutral-fill a,.neutral-fill snt-link a{color:#147582}snt-link.neutral-fill a:focus,.neutral-fill snt-link a:focus{outline:1px solid #147582}snt-link.neutral-fill a:hover,snt-link.neutral-fill a:focus,.neutral-fill snt-link a:hover,.neutral-fill snt-link a:focus{color:#9e0a9a}snt-link.neutral-fill a:hover,snt-link.neutral-fill a:focus,.neutral-fill snt-link a:hover,.neutral-fill snt-link a:focus{background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#9e0a9a), to(#9e0a9a));background-image:linear-gradient(transparent, transparent), linear-gradient(#9e0a9a, #9e0a9a)}snt-link.dark-fill a,.dark-fill snt-link a{color:#ffffff}snt-link.dark-fill a:focus,.dark-fill snt-link a:focus{outline:1px solid #ffffff}snt-link.dark-fill a:hover,snt-link.dark-fill a:focus,.dark-fill snt-link a:hover,.dark-fill snt-link a:focus{color:#d9f0f4}snt-link.dark-fill a:hover,snt-link.dark-fill a:focus,.dark-fill snt-link a:hover,.dark-fill snt-link a:focus{background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#d9f0f4), to(#d9f0f4));background-image:linear-gradient(transparent, transparent), linear-gradient(#d9f0f4, #d9f0f4)}snt-link.white-fill a,.white-fill snt-link a{color:#147582}snt-link.white-fill a:focus,.white-fill snt-link a:focus{outline:1px solid #147582}snt-link.white-fill a:hover,snt-link.white-fill a:focus,.white-fill snt-link a:hover,.white-fill snt-link a:focus{color:#9e0a9a}snt-link.white-fill a:hover,snt-link.white-fill a:focus,.white-fill snt-link a:hover,.white-fill snt-link a:focus{background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#9e0a9a), to(#9e0a9a));background-image:linear-gradient(transparent, transparent), linear-gradient(#9e0a9a, #9e0a9a)}snt-link a.theme-link{font-size:0.875em;font-weight:bold;color:#323232}snt-link a.theme-link:hover,snt-link a.theme-link:focus{color:#147582}snt-link a.theme-link:hover:before,snt-link a.theme-link:focus:before{background:#147582}snt-link a.theme-link:focus{outline:1px solid #323232}snt-link a.theme-action{font-family:\"Averta-ExtraBold\";font-weight:500;text-decoration:none;background-image:none}snt-link a.theme-action:before{height:3px;bottom:-3px;background-color:#147582}snt-link a.theme-action:hover,snt-link a.theme-action:focus{text-decoration:none}snt-link a.theme-action:hover:before,snt-link a.theme-action:focus:before{all:unset}snt-link a.theme-action:hover .link-content,snt-link a.theme-action:focus .link-content{background-image:-webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(#147582), to(#147582));background-image:linear-gradient(transparent, transparent), linear-gradient(#147582, #147582);background-size:0 3px, 100% 3px;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s}snt-link a.theme-action:hover .icon-new-window:after,snt-link a.theme-action:focus .icon-new-window:after{color:#147582}snt-link a.theme-action .link-content{padding-bottom:3px;background-image:-webkit-gradient(linear, left top, left bottom, from(#323232), to(#323232)), -webkit-gradient(linear, left top, left bottom, from(#147582), to(#147582));background-image:linear-gradient(#323232, #323232), linear-gradient(#147582, #147582);background-size:100% 3px, 0 3px;background-position:100% 100%, 0 100%;background-repeat:no-repeat}snt-link a.theme-action .icon-new-window:before{all:unset}snt-link a.theme-action .icon-new-window:after{content:\"\";font-size:1.02em !important;right:auto;margin-left:5px;padding-left:5px;color:#323232;display:inline-block}snt-link a.cta{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;padding:13px 21px;font-size:1.125em;width:auto;cursor:pointer;line-height:normal;font-family:\"Averta-ExtraBold\", sans-serif;overflow:visible;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;border:none}p snt-link[target=_blank]{padding-right:25px}h1 snt-link a,h2 snt-link a,h3 snt-link a,h4 snt-link a,h5 snt-link a,h6 snt-link a{font-family:\"Averta-ExtraBold\", sans-serif}";

const LinkComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.linkEvent = index.createEvent(this, "linkEvent", 7);
        this.hiddenTitle = StringUtils.StringUtils.empty();
        this.isExternal = false;
        this.classNames = StringUtils.StringUtils.empty();
    }
    handleKeyDown(keyboardEvent) {
        this.linkEvent.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    handleMouseover(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    componentWillLoad() {
        this.content = index.h("slot", null);
        const isExternalLink = AccessibilityUtils.AccessibilityUtils.isAccessibilityLinkRequired(this.element, this.href, this.target);
        if (isExternalLink) {
            let title = AccessibilityUtils.AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.AccessibilityUtils.getNewWindowText();
            this.content = [index.h("span", { class: "link-content" }, this.content),
                index.h("span", { class: 'icon-font icon-new-window', title: title }, index.h("span", { class: 'sr-only' }, " ", text))
            ];
            if (this.rel) {
                if (!this.rel.includes('noopener')) {
                    this.rel = this.rel.concat(' noopener ');
                }
            }
            else {
                this.rel = 'noopener';
            }
        }
    }
    render() {
        return [
            index.h("a", { id: this.linkId, rel: this.rel, href: this.href, target: this.target, download: this.downloadName, "aria-label": this.ariaLabel, class: WebUtils.WebUtils.generateClasses([], this.classNames), "hidden-title": this.hiddenTitle }, this.content)
        ];
    }
    get element() { return index.getElement(this); }
};
LinkComponent.TAG_NAME = "snt-link";
LinkComponent.style = linkComponentCss;

exports.snt_link = LinkComponent;
