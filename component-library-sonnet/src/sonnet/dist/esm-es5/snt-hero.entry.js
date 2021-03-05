import { r as registerInstance, h, H as Host, g as getElement } from './index-79f6678c.js';
import { P as Pair, C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import './WebUtils-eeb89633.js';
import './_commonjsHelpers-7b8ed50b.js';
import { D as DefaultContext, V as ViewportConfigurationService, a as ViewportParameters, b as ViewportParameterBuilder, c as ViewportAttributesBuilder } from './DefaultContext-502f3962.js';
var ViewportStyles = /** @class */ (function () {
    function ViewportStyles(includes, excludes) {
        this.includes = includes;
        this.excludes = excludes;
    }
    ViewportStyles.prototype.hasStyles = function () {
        return ((this.includes.size > 0) || (this.excludes.size > 0));
    };
    ViewportStyles.prototype.getStyles = function () {
        return this.includes;
    };
    ViewportStyles.prototype.getExcludedStyles = function () {
        return this.excludes;
    };
    return ViewportStyles;
}());
var ViewportStylesBuilder = /** @class */ (function () {
    function ViewportStylesBuilder() {
        this.includes = new Map();
        this.excludes = new Set();
    }
    ViewportStylesBuilder.newInstance = function () {
        return new ViewportStylesBuilder();
    };
    ViewportStylesBuilder.prototype.with = function (name, value) {
        this.includes.set(name, value);
        return this;
    };
    ViewportStylesBuilder.prototype.remove = function (name) {
        this.excludes.add(name);
        return this;
    };
    ViewportStylesBuilder.prototype.build = function () {
        return new ViewportStyles(this.includes, this.excludes);
    };
    return ViewportStylesBuilder;
}());
var heroComponentCss = "snt-hero{position:relative;height:100%;width:100%;margin:0 auto;overflow:hidden;background-image:-webkit-gradient(linear, right top, left top, color-stop(30%, rgba(255, 255, 255, 0)), color-stop(115%, #ffffff));background-image:linear-gradient(270deg, rgba(255, 255, 255, 0) 30%, #ffffff 115%)}.light-fill snt-hero,snt-hero.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-hero,snt-hero.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-hero,snt-hero.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-hero,snt-hero.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-hero,snt-hero.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-hero snt-layout[viewport=medium]{min-height:25em}snt-hero snt-layout[viewport=large]{min-height:31.25em;max-width:100%}snt-hero snt-layout[viewport=extra-large]{min-height:39.0625em;max-width:100%}snt-hero snt-panel{min-height:unset}snt-hero snt-panel.logo-present snt-layout .spacings{padding-top:0px}snt-hero snt-layout[viewport=extra-large]{max-width:1440px}snt-hero snt-layout[viewport=extra-large] .hero_container{max-width:60%}snt-hero snt-layout[viewport=extra-large] button-link-group{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:unset;align-items:unset}snt-hero snt-layout[viewport=extra-large] button-link{width:auto}snt-hero snt-layout[viewport=large] .hero_container{max-width:60%}snt-hero snt-layout[viewport=large] button-link-group{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:unset;align-items:unset}snt-hero snt-layout[viewport=large] button-link{width:auto}snt-hero snt-layout[viewport=medium] .hero_container{max-width:60%}snt-hero snt-layout[viewport=medium] button-link-group{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:unset;align-items:unset}snt-hero snt-layout[viewport=medium] button-link{width:auto}snt-hero snt-layout[viewport=extra-small] snt-action-button,snt-hero snt-layout[viewport=extra-small] snt-button,snt-hero snt-layout[viewport=extra-small] button,snt-hero snt-layout[viewport=extra-small] a{width:100% !important}snt-hero snt-layout[viewport=extra-small] .hero_container snt-button{display:-ms-flexbox;display:flex}snt-hero snt-layout[viewport=extra-small] .float-left{width:100%;margin:0 0 1.25em 0}snt-hero snt-layout[viewport=small] snt-action-button,snt-hero snt-layout[viewport=small] snt-button,snt-hero snt-layout[viewport=small] button,snt-hero snt-layout[viewport=small] a{width:100% !important}snt-hero snt-layout[viewport=small] .hero_container snt-button{display:-ms-flexbox;display:flex}snt-hero snt-layout[viewport=small] .float-left{width:100%;margin:0 0 1.25em 0}snt-hero .hero_container{width:100%;float:left}snt-hero .hero_container p{margin:0.938em 0 1.875em}snt-hero .hero_container .float-left{margin:0 1.25em 1.25em 0}snt-hero snt-image.mobile-image[viewport=medium],snt-hero snt-image.mobile-image[viewport=large],snt-hero snt-image.mobile-image[viewport=extra-large]{display:none}snt-hero snt-image.mobile-image img{-o-object-fit:cover;object-fit:cover;max-height:670px;width:100%}";
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var HeroComponent = /** @class */ (function () {
    function HeroComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    HeroComponent.prototype.onResize = function (event) {
        var viewport = event.detail.viewport;
        this.mobileImage.setAttribute('viewport', viewport);
    };
    HeroComponent.prototype.componentDidLoad = function () {
        var _this = this;
        this.data.getData().then(function (value) {
            _this.context = new DefaultContext().fromObject(value);
            _this.mobileImage.setAttribute('src-image', _this.context.getInstance('small').styles.backgroundImage);
            _this.mobileImage.setAttribute('data-src', _this.context.getInstance('small').styles.backgroundImage);
            ViewportConfigurationService.getInstance().register(_this, _this.getElements(), _this.resize);
        }).catch(function () {
        });
    };
    HeroComponent.prototype.resize = function () {
        ViewportConfigurationService.getInstance().process(this, this.context, this.getElements());
        if (StringUtils.hasValue(this.logoImage.getAttribute('src-image'))) {
            this.panel.classList.add('logo-present');
        }
        else {
            this.panel.classList.remove('logo-present');
        }
    };
    HeroComponent.prototype.getElements = function () {
        var elements = [Pair.of("panel", this.panel), Pair.of("logoImage", this.logoImage)];
        return elements;
    };
    HeroComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("snt-panel", { ref: function (el) { return _this.panel = el; } }, h("div", { class: 'hero_container' }, h("snt-image", { "src-image": "", "data-src": "", ref: function (el) { return _this.logoImage = el; } }), h("slot", { name: "content" }))), h("snt-image", { class: "mobile-image", "src-image": "", "data-src": "", ref: function (el) { return _this.mobileImage = el; } }), h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: function (el) { return _this.data = el; } })));
    };
    Object.defineProperty(HeroComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return HeroComponent;
}());
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "none").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "none").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{medium.styles.backgroundImage}}')").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{large.styles.backgroundImage}}')").build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withStyles(ViewportStylesBuilder.newInstance().with("backgroundImage", "linear-gradient(270deg,hsla(0,0%,100%,0) 30%,#fff 115%), url('{{extra_large.styles.backgroundImage}}')").build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], HeroComponent.prototype, "panel", void 0);
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{extra_small.logoUrl}}')
            .with('src-image', '{{extra_small.logoUrl}}')
            .with('img-alt', '{{extra_small.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{small.logoUrl}}')
            .with('src-image', '{{small.logoUrl}}')
            .with('img-alt', '{{small.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{medium.logoUrl}}')
            .with('src-image', '{{medium.logoUrl}}')
            .with('img-alt', '{{medium.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{large.logoUrl}}')
            .with('src-image', '{{large.logoUrl}}')
            .with('img-alt', '{{large.logoAltText}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('data-src', '{{extra_large.logoUrl}}')
            .with('src-image', '{{extra_large.logoUrl}}')
            .with('img-alt', '{{extra_large.logoAltText}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], HeroComponent.prototype, "logoImage", void 0);
HeroComponent.style = heroComponentCss;
export { HeroComponent as snt_hero };
