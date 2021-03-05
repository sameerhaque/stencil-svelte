System.register(["./p-1bc037df.system.js","./p-39ad5390.system.js","./p-5e81c6d8.system.js","./p-4cc3bcbe.system.js"],(function(t){"use strict";var n,e,i,o,r;return{setters:[function(t){n=t.S},function(t){e=t.W},function(t){i=t.M;o=t.a},function(t){r=t.H}],execute:function(){var s=function(){function t(){}t.newInstance=function(){return new t};t.prototype.withTitle=function(t){this.modalTitle=t;return this};t.prototype.withId=function(t){this.id=t;return this};t.prototype.withLanguageString=function(t){this.languageString=t;return this};t.prototype.withOptions=function(t){this.options=t;return this};t.prototype.withContent=function(t){this.content=t;return this};t.prototype.withFooter=function(t){this.footer=t;return this};t.prototype.withStyleClasses=function(t){this.styleClasses=t;return this};t.prototype.build=function(){var t=document.createElement(i.TAG_NAME);if(this.id){t.id=this.id}if(this.modalTitle){t.modalTitle=this.modalTitle}if(this.languageString){t.languageString=this.languageString}if(this.options){t.options=this.options}if(this.styleClasses){t.styleClasses=this.styleClasses}e.appendElement(t,this.content,true);e.appendElement(t,this.footer,false);return t};return t}();var a=function(){function t(){this.modalOptions=new o}t.newInstance=function(){return new t};t.prototype.withKeyboardClose=function(t){this.modalOptions.keyboardClose=t;return this};t.prototype.withBackdropDismiss=function(t){this.modalOptions.backdropDismiss=t;return this};t.prototype.build=function(){return this.modalOptions};return t}();var u=function(){function t(){}t.dismiss=function(t){var n=new CustomEvent("sntDismiss",{bubbles:true,detail:{}});t.target.dispatchEvent(n)};t.toggleSearch=function(t){var n=new CustomEvent("toggleSearch",{bubbles:true,detail:{}});t.target.dispatchEvent(n)};t.logAction=function(t,n){var e="Action initiated from "+t.target.tagName+" \n Data: "+JSON.stringify(n);window.alert(e)};t.openGetQuoteModal=function(t,n){var e=n?JSON.stringify(n["languageString"]):"";var o=n?n["getAQuoteUrl"]||"/getAQuote":"/getAQuote";var u=document.querySelector(i.TAG_NAME+'[id="gaq-modal"]');if(!u){r.newInstance().withUrl(new URL(o,window.location.origin)).build().then((function(t){u=s.newInstance().withId("gaq-modal").withLanguageString(e).withOptions(a.newInstance().withBackdropDismiss(true).withKeyboardClose(true).build()).withContent(t).build();if(u){document.body.appendChild(u);u.show()}}))}else{u.show()}};t.openFormModal=function(t,e){if(!e||n.isEmpty(e["formModalUrl"])){throw new Error("Modal url must be a valid string.")}var o=e?JSON.stringify(e["languageString"]):"";var u=e["formModalUrl"];var l=(t.target.getAttribute("button-id")||"form")+"-modal";var c=document.querySelector(i.TAG_NAME+'[id="'+l+'"]');if(!c){r.newInstance().withUrl(new URL(u,window.location.origin)).build().then((function(t){c=s.newInstance().withId(l).withLanguageString(o).withOptions(a.newInstance().withBackdropDismiss(true).withKeyboardClose(true).build()).withContent(t).withStyleClasses("form-modal").build();if(c){document.body.appendChild(c);c.show()}}))}else{c.show()}};t.openErrorModal=function(t,n){this.openModal(t,n,"errorModalUrl","error-modal")};t.openSuccessModal=function(t,n){this.openModal(t,n,"successModalUrl","success-modal")};t.openConnectOfferModal=function(t,n){this.openModal(t,n,"offerModalUrl","offer-modal")};t.openModal=function(t,e,o,u){if(!t||n.isEmpty(t[o])){throw new Error("Modal url must be a valid string.")}var l=t?JSON.stringify(t["languageString"]):"";var c=t[o];var d=document.querySelector(i.TAG_NAME+'[id="'+e+'"]');if(!d){r.newInstance().withUrl(new URL(c,window.location.origin)).build().then((function(t){d=s.newInstance().withId(e).withLanguageString(l).withOptions(a.newInstance().withBackdropDismiss(true).withKeyboardClose(true).build()).withContent(t).withStyleClasses(u).build();if(d){document.body.appendChild(d);d.show()}}))}else{d.show()}};t.close=function(t){var n=new CustomEvent("close",{bubbles:true,detail:{}});t.target.dispatchEvent(n)};return t}();t("A",u);var l=function(){function t(t,n){if(t===void 0){t=""}if(n===void 0){n=""}this.title=t;this.url=n}return t}();var c=function(){function t(){}t.getResults=function(n){return t.result.filter((function(t){var e=new RegExp(n,"i");var i=e.test(t["title"]);return i===true}))};return t}();t("S",c);c.result=[new l("Auto Insurance","/auto-insurance"),new l("Home Insurance","/home-insurance"),new l("Tenant Insurance","/tenant-insurance"),new l("Landlord Insurance","/landlord-insurance"),new l("Claims","/claims"),new l("Blog","/blog"),new l("Sonnet Connect","/sonnet-connect")]}}}));