import{S as t}from"./p-85cd1ecc.js";import{W as s}from"./p-d7b2933a.js";import{M as n,a as e}from"./p-29822347.js";import{H as o}from"./p-e2df6b95.js";class i{constructor(){}static newInstance(){return new i}withTitle(t){return this.modalTitle=t,this}withId(t){return this.id=t,this}withLanguageString(t){return this.languageString=t,this}withOptions(t){return this.options=t,this}withContent(t){return this.content=t,this}withFooter(t){return this.footer=t,this}withStyleClasses(t){return this.styleClasses=t,this}build(){const t=document.createElement(n.TAG_NAME);return this.id&&(t.id=this.id),this.modalTitle&&(t.modalTitle=this.modalTitle),this.languageString&&(t.languageString=this.languageString),this.options&&(t.options=this.options),this.styleClasses&&(t.styleClasses=this.styleClasses),s.appendElement(t,this.content,!0),s.appendElement(t,this.footer,!1),t}}class r{constructor(){this.modalOptions=new e}static newInstance(){return new r}withKeyboardClose(t){return this.modalOptions.keyboardClose=t,this}withBackdropDismiss(t){return this.modalOptions.backdropDismiss=t,this}build(){return this.modalOptions}}class a{static dismiss(t){const s=new CustomEvent("sntDismiss",{bubbles:!0,detail:{}});t.target.dispatchEvent(s)}static toggleSearch(t){const s=new CustomEvent("toggleSearch",{bubbles:!0,detail:{}});t.target.dispatchEvent(s)}static logAction(t,s){const n=`Action initiated from ${t.target.tagName} \n Data: ${JSON.stringify(s)}`;window.alert(n)}static openGetQuoteModal(t,s){const e=s?JSON.stringify(s.languageString):"",a=s&&s.getAQuoteUrl||"/getAQuote";let c=document.querySelector(n.TAG_NAME+'[id="gaq-modal"]');c?c.show():o.newInstance().withUrl(new URL(a,window.location.origin)).build().then(t=>{c=i.newInstance().withId("gaq-modal").withLanguageString(e).withOptions(r.newInstance().withBackdropDismiss(!0).withKeyboardClose(!0).build()).withContent(t).build(),c&&(document.body.appendChild(c),c.show())})}static openFormModal(s,e){if(!e||t.isEmpty(e.formModalUrl))throw new Error("Modal url must be a valid string.");const a=e?JSON.stringify(e.languageString):"",c=e.formModalUrl,l=(s.target.getAttribute("button-id")||"form")+"-modal";let u=document.querySelector(`${n.TAG_NAME}[id="${l}"]`);u?u.show():o.newInstance().withUrl(new URL(c,window.location.origin)).build().then(t=>{u=i.newInstance().withId(l).withLanguageString(a).withOptions(r.newInstance().withBackdropDismiss(!0).withKeyboardClose(!0).build()).withContent(t).withStyleClasses("form-modal").build(),u&&(document.body.appendChild(u),u.show())})}static openErrorModal(t,s){this.openModal(t,s,"errorModalUrl","error-modal")}static openSuccessModal(t,s){this.openModal(t,s,"successModalUrl","success-modal")}static openConnectOfferModal(t,s){this.openModal(t,s,"offerModalUrl","offer-modal")}static openModal(s,e,a,c){if(!s||t.isEmpty(s[a]))throw new Error("Modal url must be a valid string.");const l=s?JSON.stringify(s.languageString):"",u=s[a];let d=document.querySelector(`${n.TAG_NAME}[id="${e}"]`);d?d.show():o.newInstance().withUrl(new URL(u,window.location.origin)).build().then(t=>{d=i.newInstance().withId(e).withLanguageString(l).withOptions(r.newInstance().withBackdropDismiss(!0).withKeyboardClose(!0).build()).withContent(t).withStyleClasses(c).build(),d&&(document.body.appendChild(d),d.show())})}static close(t){const s=new CustomEvent("close",{bubbles:!0,detail:{}});t.target.dispatchEvent(s)}}class c{constructor(t="",s=""){this.title=t,this.url=s}}class l{static getResults(t){return l.result.filter(s=>!0===new RegExp(t,"i").test(s.title))}}l.result=[new c("Auto Insurance","/auto-insurance"),new c("Home Insurance","/home-insurance"),new c("Tenant Insurance","/tenant-insurance"),new c("Landlord Insurance","/landlord-insurance"),new c("Claims","/claims"),new c("Blog","/blog"),new c("Sonnet Connect","/sonnet-connect")];export{a as A,l as S}