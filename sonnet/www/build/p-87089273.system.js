var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,r,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return c([t,e])}}function c(i){if(a)throw new TypeError("Generator is already executing.");while(n)try{if(a=1,r&&(o=i[0]&2?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;if(r=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;r=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1];o=i;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(i);break}if(o[2])n.ops.pop();n.trys.pop();continue}i=e.call(t,n)}catch(s){i=[6,s];r=0}finally{a=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-286eaa2f.system.js","./p-1bc037df.system.js","./p-39ad5390.system.js"],(function(t){"use strict";var e,n,a,r,o;return{setters:[function(t){e=t.r;n=t.h;a=t.H},function(t){r=t.S},function(t){o=t.W}],execute:function(){var i="snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";var s=undefined&&undefined.__awaiter||function(t,e,n,a){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function i(t){try{c(a.next(t))}catch(e){o(e)}}function s(t){try{c(a["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):r(t.value).then(i,s)}c((a=a.apply(t,e||[])).next())}))};var c=t("S",function(){function t(t){e(this,t);this.languageJson=r.empty()}t.prototype.toggleActive=function(t){return s(this,void 0,void 0,(function(){return __generator(this,(function(e){this.active=typeof t==="boolean"||!this.active;return[2,this.active]}))}))};t.prototype.watchActive=function(t){if(t){this.lastActiveElement=document.activeElement}};t.prototype.componentDidUpdate=function(){this.setFocus()};t.prototype.setFocus=function(){if(this.active){var t=this.searchTypeahead.querySelector("input");if(t){t.focus()}}else{this.lastActiveElement.focus()}};t.prototype.render=function(){var t=this;return n(a,{onSntBackdropTap:this.toggleActive.bind(this)},n("snt-pane",{styleClasses:"d-flex justify-content-center align-items-center"},n("snt-search-typeahead",{"search-combobox-id":"global-search-combobox",ref:function(e){return t.searchTypeahead=e},languageJson:this.languageJson}),n("snt-action-button",{"action-reference":"Action.toggleSearch","icon-class-name":"iconNavClose"})),",",n("snt-backdrop",null))};Object.defineProperty(t,"watchers",{get:function(){return{active:["watchActive"]}},enumerable:false,configurable:true});return t}());c.TAG_NAME="snt-search-bar";c.style=i;var l="snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.3s ease-out;transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{-webkit-transform:translateX(0%);transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block}";var u=undefined&&undefined.__awaiter||function(t,e,n,a){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function i(t){try{c(a.next(t))}catch(e){o(e)}}function s(t){try{c(a["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):r(t.value).then(i,s)}c((a=a.apply(t,e||[])).next())}))};var f=t("a",function(){function t(t){e(this,t);this.languageStrings={};this.active=false;this.styleClasses=r.empty();this.languageJson=r.empty()}t.prototype.toggleActive=function(t){return u(this,void 0,void 0,(function(){return __generator(this,(function(e){this.active=typeof t==="boolean"?t:!this.active;return[2,this.active]}))}))};t.prototype.componentWillLoad=function(){try{this.languageJson&&(this.languageStrings=JSON.parse(this.languageJson))}catch(t){console.error(t)}};t.prototype.render=function(){return n(a,{class:o.generateClasses([],this.styleClasses)},n("snt-action-button",{actionReference:"Action.toggleSearch",linkTitle:this.languageStrings["back"]||"Back",iconClassName:"iconChevron"}),n("snt-search-typeahead",{"search-combobox-id":"global-search-panel-combobox",languageJson:this.languageJson}))};return t}());f.TAG_NAME="snt-search-panel";f.style=l}}}));