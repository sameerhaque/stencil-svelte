System.register(["./p-286eaa2f.system.js","./p-c52706bc.system.js","./p-1bc037df.system.js","./p-39ad5390.system.js","./p-2916f96a.system.js","./p-16145d72.system.js"],(function(t){"use strict";var e,n,i,r,a,s;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(){},function(t){r=t.S},function(t){a=t.W},function(t){s=t.E},function(){}],execute:function(){var o="snt-cta-reminder{background-color:#6ebac5;display:block}snt-cta-reminder h2{margin:0px}snt-cta-reminder.left .header,snt-cta-reminder left.header,.left snt-cta-reminder .header{text-align:left}@media (max-width: 767px){snt-cta-reminder snt-layout.left-mobile .header,snt-cta-reminder snt-layout .left-mobile.header,.left-mobile snt-cta-reminder snt-layout .header{text-align:left}}snt-cta-reminder.center .header,snt-cta-reminder center.header,.center snt-cta-reminder .header{text-align:center}@media (max-width: 767px){snt-cta-reminder snt-layout.center-mobile .header,snt-cta-reminder snt-layout .center-mobile.header,.center-mobile snt-cta-reminder snt-layout .header{text-align:center}}snt-cta-reminder.right .header,snt-cta-reminder right.header,.right snt-cta-reminder .header{text-align:right}@media (max-width: 767px){snt-cta-reminder snt-layout.right-mobile .header,snt-cta-reminder snt-layout .right-mobile.header,.right-mobile snt-cta-reminder snt-layout .header{text-align:right}}snt-cta-reminder .action-button{margin-top:30px;text-align:center;width:100%}snt-cta-reminder .action-button button-link{display:inline-block}snt-cta-reminder .action-button button-link .icon-font::after{color:white}snt-cta-reminder snt-action-button snt-button.cta button{width:100%}snt-cta-reminder button-link{width:100%}snt-cta-reminder snt-layout[viewport=medium] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=medium] button-link{width:auto}snt-cta-reminder snt-layout[viewport=large] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=large] button-link{width:auto}snt-cta-reminder snt-layout[viewport=extra-large] snt-action-button snt-button.cta button{width:auto}snt-cta-reminder snt-layout[viewport=extra-large] button-link{width:auto}";var l=t("snt_cta_reminder",function(){function t(t){e(this,t);this.titleString=r.empty();this.linkTitle=r.empty();this.url=r.empty();this.urlTarget=r.empty();this.actionReference=r.empty();this.actionData=r.empty();this.styleClasses=r.empty();this.buttonId=r.empty();this.eventConfiguration=null}t.prototype.componentDidLoad=function(){if(!r.isEmpty(this.actionReference)&&r.isEmpty(this.url)){this.eventConfiguration=s.newInstanceof().withComponent(this.element).build()}};t.prototype.render=function(){var t;if(r.hasValue(this.url)){t=n("button-link",{"button-id":this.buttonId,class:"theme-primary",target:this.urlTarget,"aria-label":this.linkTitle,href:this.url},this.linkTitle)}else{t=n("snt-action-button",{"button-id":this.buttonId,"style-classes":"cta theme-primary","action-reference":this.actionReference,"action-data":this.actionData,"link-title":this.linkTitle})}return n("snt-layout",null,n("h2",{class:a.generateClasses(["header"],this.styleClasses)},this.titleString),n("div",{class:"action-button"},t))};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());l.TAG_NAME="snt-cta-reminder";l.style=o}}}));