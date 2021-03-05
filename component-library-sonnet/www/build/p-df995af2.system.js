var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(n){return c([t,n])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:e.label++;return{value:s[1],done:false};case 5:e.label++;o=s[1];s=[0];continue;case 7:s=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){e.label=s[1];break}if(s[0]===6&&e.label<r[1]){e.label=r[1];r=s;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(s);break}if(r[2])e.ops.pop();e.trys.pop();continue}s=n.call(t,e)}catch(a){s=[6,a];o=0}finally{i=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-286eaa2f.system.js","./p-1bc037df.system.js","./p-39ad5390.system.js","./p-2916f96a.system.js"],(function(t){"use strict";var n,e,i,o,r,s,a;return{setters:[function(t){n=t.r;e=t.h;i=t.g},function(t){o=t.S},function(t){r=t.W},function(t){s=t.a;a=t.E}],execute:function(){var c=undefined&&undefined.__awaiter||function(t,n,e,i){function o(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{c(i.next(t))}catch(n){r(n)}}function a(t){try{c(i["throw"](t))}catch(n){r(n)}}function c(t){t.done?e(t.value):o(t.value).then(s,a)}c((i=i.apply(t,n||[])).next())}))};var u=t("A",function(){function t(t){n(this,t);this.actionReference=o.empty();this.actionData=o.empty();this.iconClassName=o.empty();this.linkTitle=o.empty();this.styleClasses=o.empty();this.buttonId=o.empty();this.eventConfiguration=null;this.actionDataJsonObj=null}t.prototype.getEventConfiguration=function(){return c(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.eventConfiguration]}))}))};t.prototype.onSntButtonClick=function(t){s.processEvent(t,this.eventConfiguration,this.actionReference,this.actionDataJsonObj)};t.prototype.onSntButtonKeyDown=function(t){s.processEvent(t,this.eventConfiguration,this.actionReference,this.actionDataJsonObj)};t.prototype.componentDidLoad=function(){if(o.isEmpty(this.actionReference)){throw new Error("ActionButtonComponent must contain a valid action-reference attribute!")}if(!o.isEmpty(this.actionData)){try{this.actionDataJsonObj=JSON.parse(this.actionData)}catch(t){throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.")}}this.eventConfiguration=a.newInstanceof().withComponent(this.element).build()};t.prototype.render=function(){var t=o.notEmpty(this.iconClassName)?e("snt-icon",{styleClasses:this.iconClassName}):"";var n=e("snt-button",{"button-id":this.buttonId,styleClasses:r.generateClasses([],this.styleClasses),"hidden-title":this.linkTitle},t,this.linkTitle);var i=this.element.children.length>0?e("slot",null):[e("snt-event",{type:"click"}),e("snt-event",{type:"keydown",filters:"space"})];return[i,n]};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());u.TAG_NAME="snt-action-button"}}}));