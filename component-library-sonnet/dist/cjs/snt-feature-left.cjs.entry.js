'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');

const featureLeftComponentCss = "snt-feature-left{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}snt-feature-left .article-container{position:relative;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;height:308px;width:100%}snt-feature-left a{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;text-decoration:none;width:100%}snt-feature-left a:focus,snt-feature-left a:active,snt-feature-left a:hover{border:none;outline:none;text-decoration:none}snt-feature-left a:focus .article-container,snt-feature-left a:active .article-container,snt-feature-left a:hover .article-container{outline:5px solid #147582}snt-feature-left .article-img{height:174px}snt-feature-left .article-img img{-o-object-fit:cover;object-fit:cover;width:100%;height:174px}snt-feature-left snt-image{display:-ms-flexbox;display:flex;width:100%;height:100%}snt-feature-left .article-tag{position:absolute;background-color:#acdde4;color:#323232;font-family:\"Averta-ExtraBold\";font-weight:800;text-transform:uppercase;padding:9px 15px;top:147px;font-size:14px;line-height:22px}snt-feature-left .article-content{position:relative;padding:30px 15px}snt-feature-left .article-title{position:relative;color:#323232;text-align:left;font-size:14px;line-height:21px}snt-feature-left .article-min-read{position:absolute;color:#6f6f6f;font-family:\"Averta-Regular\";left:15px;bottom:15px;font-size:12px;line-height:18px}snt-feature-left .h4{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}[viewport=medium] snt-feature-left .article-container,snt-feature-left[viewport=medium] .article-container{height:308px}[viewport=medium] snt-feature-left .article-img,snt-feature-left[viewport=medium] .article-img{height:167px}[viewport=medium] snt-feature-left .article-img img,snt-feature-left[viewport=medium] .article-img img{height:167px}[viewport=medium] snt-feature-left .article-tag,snt-feature-left[viewport=medium] .article-tag{padding:9px 15px;top:147px;font-size:14px;line-height:22px}[viewport=medium] snt-feature-left .article-content,snt-feature-left[viewport=medium] .article-content{padding:15px}[viewport=medium] snt-feature-left .article-title,snt-feature-left[viewport=medium] .article-title{margin-top:15px;margin-bottom:auto}[viewport=large] snt-feature-left .article-container,snt-feature-left[viewport=large] .article-container{height:343px}[viewport=large] snt-feature-left .article-img,snt-feature-left[viewport=large] .article-img{height:186px}[viewport=large] snt-feature-left .article-img img,snt-feature-left[viewport=large] .article-img img{height:186px}[viewport=large] snt-feature-left .article-tag,snt-feature-left[viewport=large] .article-tag{padding:9px 20px 8px;top:166px;font-size:14px;line-height:23px}[viewport=large] snt-feature-left .article-content,snt-feature-left[viewport=large] .article-content{padding:20px}[viewport=large] snt-feature-left .article-title,snt-feature-left[viewport=large] .article-title{margin-top:10px;margin-bottom:auto}[viewport=large] snt-feature-left .article-title-text,snt-feature-left[viewport=large] .article-title-text{font-size:16px;line-height:21px}[viewport=large] snt-feature-left .article-min-read,snt-feature-left[viewport=large] .article-min-read{left:20px;bottom:20px;font-size:14px;line-height:20px}[viewport=extra-large] snt-feature-left .article-container,snt-feature-left[viewport=extra-large] .article-container{height:404px}[viewport=extra-large] snt-feature-left .article-img,snt-feature-left[viewport=extra-large] .article-img{height:248px}[viewport=extra-large] snt-feature-left .article-img img,snt-feature-left[viewport=extra-large] .article-img img{height:248px}[viewport=extra-large] snt-feature-left .article-tag,snt-feature-left[viewport=extra-large] .article-tag{padding:9px 20px 8px;top:228px;font-size:14px;line-height:23px}[viewport=extra-large] snt-feature-left .article-content,snt-feature-left[viewport=extra-large] .article-content{padding:20px}[viewport=extra-large] snt-feature-left .article-title,snt-feature-left[viewport=extra-large] .article-title{margin-top:10px;margin-bottom:auto;font-size:21px;line-height:26px}[viewport=extra-large] snt-feature-left .article-min-read,snt-feature-left[viewport=extra-large] .article-min-read{left:20px;bottom:20px;font-size:14px;line-height:20px}";

const FeatureLeftComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imgSrcSet = StringUtils.StringUtils.empty();
        this.imgAltText = "";
        this.openInNewWindow = false;
    }
    render() {
        return [
            index.h("a", { href: this.blogLink, target: this.openInNewWindow ? "_blank" : "_self" }, index.h("div", { class: "article-container" }, index.h("div", { class: 'article-img' }, index.h("snt-image", { "data-src": this.imgSrc, "img-alt": this.imgAltText })), index.h("div", { class: 'article-tag' }, index.h("span", null, this.tagText)), index.h("div", { class: 'article-content' }, index.h("div", { class: "article-title" }, index.h("div", { class: "h4" }, this.titleText))), index.h("span", { class: "article-min-read" }, this.timeToRead)))
        ];
    }
    get hostElement() { return index.getElement(this); }
};
FeatureLeftComponent.TAG_NAME = "snt-feature-left";
FeatureLeftComponent.style = featureLeftComponentCss;

exports.snt_feature_left = FeatureLeftComponent;
