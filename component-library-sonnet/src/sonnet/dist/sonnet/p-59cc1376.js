import{S as t}from"./p-85cd1ecc.js";class i extends class{withConditionalBooleanArgument(t,i){return i?this.withConditionalArguments(t,i):this}withConditionalObjectArgument(t,i){return i?this.withConditionalArguments(t,i):this}withConditionalStringArgument(i,e){return t.notEmpty(e)?this.withConditionalArguments(i,e):this}withConditionalArguments(t,...i){return i&&i.length>0?t.apply(this,i):this}}{withUrl(t){return this.url=t,this}async build(){if(this.url)return fetch(this.url.href).then(t=>t.text()).then(t=>this.parse(t));throw new Error("No content has been defined using the builder.")}}class e extends i{constructor(){super()}static newInstance(){return new e}withValue(t){return this.value=t,this.url=null,this}withParent(t){return this.parentElement=t,this.value=null,this}parse(t){if(void 0===window.document.documentMode){let i=document.createElement("div"),e=document.createElement("template");return e.innerHTML=t,i.appendChild(e.content),this.setJavascript(i),document.body.appendChild(i)}{let i=document.createElement("div");return i.innerHTML=t,i}}async build(){if(this.parentElement=this.parentElement||document.createElement("div"),t.isEmpty(this.value)&&this.url)this.parentElement.appendChild(await super.build());else{if(!t.notEmpty(this.value))throw new Error("No HTML content has been defined using this builder.");this.parentElement.appendChild(this.parse(this.value))}return this.parentElement}setJavascript(t){Array.from(t.querySelectorAll("script")).forEach(t=>{const i=document.createElement("script");Array.from(t.attributes).forEach(t=>i.setAttribute(t.name,t.value)),i.appendChild(document.createTextNode(t.innerHTML)),t.parentNode.replaceChild(i,t)})}}export{i as A,e as H}