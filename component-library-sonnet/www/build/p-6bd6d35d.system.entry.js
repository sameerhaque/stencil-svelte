var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,s,o,i;return i={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function r(e){return function(t){return l([e,t])}}function l(i){if(a)throw new TypeError("Generator is already executing.");while(n)try{if(a=1,s&&(o=i[0]&2?s["return"]:i[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,i[1])).done)return o;if(s=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;s=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1];o=i;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(i);break}if(o[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(r){i=[6,r];s=0}finally{a=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-286eaa2f.system.js","./p-c52706bc.system.js","./p-1bc037df.system.js","./p-39ad5390.system.js","./p-2916f96a.system.js","./p-16145d72.system.js","./p-47298ddb.system.js","./p-87089273.system.js","./p-df995af2.system.js"],(function(e){"use strict";var t,n,a,s,o,i,r,l,c,d;return{setters:[function(e){t=e.r;n=e.h;a=e.H;s=e.g},function(){},function(e){o=e.S},function(e){i=e.W},function(){},function(){},function(e){r=e.f},function(e){l=e.S;c=e.a},function(e){d=e.A}],execute:function(){var h="snt-header{position:relative;display:block;width:100%;z-index:99;background-color:#323232}snt-header[fixed]{position:-webkit-sticky;position:sticky;top:0;left:0;right:0}@media (max-width: 1023px){snt-header[active] .brand-and-toggle,snt-header[active] .actions-nav,snt-header[active] snt-pane{display:none}snt-header[active] header{padding:0}}snt-header header{position:relative;padding:1.125rem 0;margin:0 auto}snt-header snt-layout .spacings{overflow:visible}snt-header snt-nav[slot=secondary-nav-mobile]{display:-ms-flexbox;display:flex}@media (min-width: 1024px){snt-header snt-nav[slot=secondary-nav-mobile]{display:none}}snt-header snt-nav[slot=secondary-nav-mobile] snt-nav-item{margin:0 0 0.625rem 0}snt-header snt-nav[slot=secondary-nav-desktop]{display:none}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop]{display:-ms-flexbox;display:flex}}snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0.625rem 0}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0 1.65rem}}snt-header snt-navbar-collapse{overflow:hidden;position:relative}@media (min-width: 768px){snt-header snt-navbar-collapse{overflow:visible}}snt-header snt-navbar-collapse{-ms-flex-order:1;order:1}@media (min-width: 768px){snt-header snt-navbar-collapse{-ms-flex-order:initial;order:initial}}snt-header snt-navbar{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}snt-header snt-button{white-space:nowrap}snt-header snt-button button{background:transparent;border:none;color:white}snt-header snt-link a{background-image:none;color:#ffffff}snt-header snt-link a:hover,snt-header snt-link a:focus{background-image:none}snt-header snt-skip-to-main a{font-family:Averta-ExtraBold;color:#6ebac5;text-decoration:none}snt-header snt-skip-to-main a:focus{outline:0.125rem solid #b2b2b2;outline-offset:0px}snt-header .header-container{width:100%;max-width:1440px;margin:auto}";var u=undefined&&undefined.__awaiter||function(e,t,n,a){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):s(e.value).then(i,r)}l((a=a.apply(e,t||[])).next())}))};var p=e("snt_header",function(){function e(e){t(this,e);this.styleClasses=o.empty();this.fixed=false;this.languageJson=o.empty();this.mainContentId=o.empty();this.active=false;this.shrunk=false;this.languageStrings={};this.focusTrap=null;this.gaqButtonActionData=null}e.prototype.onToggleSearch=function(e){var t=this;e.composedPath().includes(this.secondaryNavDesktop)||e.composedPath().includes(this.searchBar)?this.searchBar.toggleActive().then((function(e){t.toggleFocusTrap(e)})):this.searchPanel.toggleActive().then((function(e){if(e){t.mainPanel.classList.add("hidden")}else{t.mainPanel.classList.remove("hidden");t.navbarCollapse.focus()}}))};e.prototype.toggleActive=function(e){return u(this,void 0,void 0,(function(){return __generator(this,(function(t){this.active=typeof e==="boolean"?e:!this.active;this.toggleFocusTrap(this.active);return[2,Promise.resolve(this.active)]}))}))};e.prototype.setActive=function(e){return u(this,void 0,void 0,(function(){return __generator(this,(function(t){this.active=e;this.toggleFocusTrap(this.active);return[2,Promise.resolve(this.active)]}))}))};e.prototype.onScroll=function(e){this.fixed&&this.shrink()};e.prototype.onViewportChanged=function(){if(this.navbarCollapse){this.navbarCollapse.viewport=this.layout.viewport}};e.prototype.componentWillLoad=function(){try{this.languageStrings=JSON.parse(this.languageJson)}catch(e){console.error(e)}this.gaqButtonActionData=JSON.stringify({getAQuoteUrl:this.languageStrings["getAQuoteUrl"],languageString:{close:this.languageStrings["close"]}})};e.prototype.componentDidLoad=function(){this.fixed&&this.shrink();this.registersubComponents();this.setSubComponentClasses();this.insertAdditionalElements();this.focusTrap=r(this.element,{});this.searchBar=this.element.querySelector(l.TAG_NAME);this.searchPanel=this.element.querySelector(c.TAG_NAME)};e.prototype.registersubComponents=function(){this.secondaryNavDesktop=this.element.querySelector("[slot="+p.SECONDARY_NAV_DESKTOP_SLOT_NAME+"]");this.secondaryNavMobile=this.element.querySelector("[slot="+p.SECONDARY_NAV_MOBILE_SLOT_NAME+"]");this.primaryNav=this.element.querySelector("[slot="+p.PRIMARY_NAV_SLOT_NAME+"]")};e.prototype.setSubComponentClasses=function(){this.secondaryNavDesktop.classList.add("theme-header-nav","flex-row","justify-content-end","secondary-nav");this.secondaryNavMobile.classList.add("theme-header-nav","secondary-nav");this.primaryNav.classList.add("main-nav","theme-header-nav")};e.prototype.insertAdditionalElements=function(){var e='<snt-nav-item><snt-action-button action-reference="Action.toggleSearch" icon-class-name="iconNavSearch" link-title="'+(this.languageStrings["search"]||"Search")+'"></snt-action-button> </snt-nav-item>';!this.secondaryNavDesktop.querySelector(d.TAG_NAME)&&this.secondaryNavDesktop.insertAdjacentHTML("beforeend",e);!this.secondaryNavMobile.querySelector(d.TAG_NAME)&&this.secondaryNavMobile.insertAdjacentHTML("beforeend",e)};e.prototype.shrink=function(){if(this.secondaryNavPane){if(!this.shrunk&&this.element.offsetTop+window.scrollY>this.element.offsetTop+this.element.offsetHeight){this.secondaryNavPane.collapsed=true;this.shrunk=true}else if(window.scrollY==0&&this.shrunk){this.secondaryNavPane.collapsed=false;this.shrunk=false}}};e.prototype.toggleFocusTrap=function(e){e?this.focusTrap.activate():this.focusTrap.deactivate()};e.prototype.render=function(){var e=this;return n(a,{onSntBackdropTap:function(){return e.setActive(false)},onNavbarToggled:function(){return e.toggleActive()}},n("div",{class:"header-container"},n("snt-layout",{padding:"vertical-only",ref:function(t){return e.layout=t}},n("header",{class:i.generateClasses(["header"],this.styleClasses)},n("snt-skip-to-main",{"main-content-id":"#"+this.mainContentId},this.languageStrings["skipToMainContent"]||"Skip to main content"),n("snt-pane",{animated:true,ref:function(t){return e.secondaryNavPane=t}},n("slot",{name:p.SECONDARY_NAV_DESKTOP_SLOT_NAME})),n("snt-navbar",{"style-classes":"navbar-expand-lg","language-string":this.languageJson},n("div",{slot:p.NAVBAR_BRAND_SLOT_NAME},n("slot",{name:p.NAVBAR_BRAND_SLOT_NAME})),n("snt-navbar-collapse",{id:"navbar-collapse",slot:"navbar-collapse","logo-url":this.languageStrings["logoUrl"],ref:function(t){return e.navbarCollapse=t}},n("div",{class:"main-panel",ref:function(t){return e.mainPanel=t}},n("snt-action-button",{"button-id":"get-a-quote-m-header",actionReference:"Action.openGetQuoteModal",linkTitle:this.languageStrings["gaq"]||"Get a Quote",actionData:this.gaqButtonActionData,styleClasses:"gaq-mobile cta theme-headerNav d-flex d-lg-none"}),n("slot",{name:p.PRIMARY_NAV_SLOT_NAME}),n("slot",{name:p.SECONDARY_NAV_MOBILE_SLOT_NAME})),n("snt-search-panel",{class:"hidden",languageJson:this.languageJson})),n("snt-nav",{id:"actions-nav",class:"actions-nav theme-header-nav",expander:"false"},n("snt-nav-item",null,n("snt-shopping-cart",null," ")),n("snt-nav-item",{styleClasses:"d-none d-md-flex"},n("snt-action-button",{"button-id":"get-a-quote-header",styleClasses:"cta theme-headerNav",actionReference:"Action.openGetQuoteModal",actionData:this.gaqButtonActionData,linkTitle:this.languageStrings["gaq"]||"Get a Quote"}," ")),n("snt-nav-item",null,n("slot",{name:"login-slot"}))))),n("snt-search-bar",{languageJson:this.languageJson}))))};Object.defineProperty(e.prototype,"element",{get:function(){return s(this)},enumerable:false,configurable:true});return e}());p.TAG_NAME="snt-header";p.SECONDARY_NAV_DESKTOP_SLOT_NAME="secondary-nav-desktop";p.SECONDARY_NAV_MOBILE_SLOT_NAME="secondary-nav-mobile";p.PRIMARY_NAV_SLOT_NAME="primary-nav";p.NAVBAR_BRAND_SLOT_NAME="navbar-brand";p.style=h}}}));