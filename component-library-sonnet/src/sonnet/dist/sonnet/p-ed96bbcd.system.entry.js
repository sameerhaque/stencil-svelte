System.register(["./p-286eaa2f.system.js","./p-1bc037df.system.js","./p-7b421864.system.js","./p-39313811.system.js"],(function(t){"use strict";var n,e,i,h,a;return{setters:[function(t){n=t.r;e=t.h;i=t.g},function(t){h=t.S},function(t){a=t.E},function(){}],execute:function(){var c='snt-cta-highlight.left .text-content,snt-cta-highlight left.text-content,.left snt-cta-highlight .text-content{text-align:left}@media (max-width: 767px){snt-cta-highlight snt-layout.left-mobile .text-content,snt-cta-highlight snt-layout .left-mobile.text-content,.left-mobile snt-cta-highlight snt-layout .text-content{text-align:left}}snt-cta-highlight.center .text-content,snt-cta-highlight center.text-content,.center snt-cta-highlight .text-content{text-align:center}@media (max-width: 767px){snt-cta-highlight snt-layout.center-mobile .text-content,snt-cta-highlight snt-layout .center-mobile.text-content,.center-mobile snt-cta-highlight snt-layout .text-content{text-align:center}}snt-cta-highlight.right .text-content,snt-cta-highlight right.text-content,.right snt-cta-highlight .text-content{text-align:right}@media (max-width: 767px){snt-cta-highlight snt-layout.right-mobile .text-content,snt-cta-highlight snt-layout .right-mobile.text-content,.right-mobile snt-cta-highlight snt-layout .text-content{text-align:right}}snt-cta-highlight .cta-container{background:#6ebac5}snt-cta-highlight .cta-container h4.text-content{margin-right:30px;display:inline-block}snt-cta-highlight button-link{display:inline-block}snt-cta-highlight button-link .icon-font::after{color:white}snt-cta-highlight .text-content{font-size:0.875rem;line-height:21px;display:inline-block;width:100%;margin:0px 0px 15px 0px;font-family:"Averta-ExtraBold", sans-serif !important;font-weight:500 !important}snt-cta-highlight snt-layout[viewport] .spacings{padding-top:15px;padding-bottom:15px}@media (min-width: 768px){snt-cta-highlight .cta-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}snt-cta-highlight snt-button,snt-cta-highlight button-link{white-space:nowrap}snt-cta-highlight .text-content{margin-right:30px;margin-bottom:0px;width:inherit}}@media (min-width: 1024px){snt-cta-highlight .text-content{font-size:1rem}}@media (min-width: 1440px){snt-cta-highlight .text-content{font-size:1.313rem;line-height:26px}}';var l=t("snt_cta_highlight",function(){function t(t){n(this,t);this.url=h.empty();this.urlTarget=h.empty();this.buttonId=h.empty();this.eventConfiguration=null}t.prototype.componentDidLoad=function(){if(!h.isEmpty(this.actionReference)){this.eventConfiguration=a.newInstanceof().withComponent(this.element).build()}};t.prototype.render=function(){var t;if(h.hasValue(this.url)){t=e("button-link",{"button-id":this.buttonId,class:"theme-primary",target:this.urlTarget,href:this.url},this.cta)}else{t=e("snt-action-button",{"button-id":this.buttonId,"style-classes":"cta theme-primary","action-reference":this.actionReference,"action-data":this.actionData,"link-title":this.cta})}return e("snt-layout",{class:"cta-container"},e("div",{class:"cta-wrapper"},e("div",{class:"text-content"},e("slot",null)),t))};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());l.TAG_NAME="snt-cta-highlight";l.style=c}}}));