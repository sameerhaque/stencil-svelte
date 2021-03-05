import{r as t,h as e,g as i}from"./p-75b8bc7c.js";const s=class{constructor(e){t(this,e),this.findFirstSelectedTab=()=>{let t;for(const[e,i]of this.tabs.entries())i.setAttribute("role","tab"),i.classList.contains("selected")&&(i.classList.remove("selected"),t=e);return t},this.selectTab=(t=null)=>{for(let e,i=0;e=this.tabs[i];i+=1){const s=i===t;e.setAttribute("tabindex",s?0:-1),e.setAttribute("aria-selected",s),this.panels[i].setAttribute("aria-hidden",!s)}},this.tabTitleClick=t=>{t.target.classList.contains("title")&&(this.selected=this.tabs.indexOf(t.target),t.target.focus())},this.tabKeyDown=t=>{let e;switch(t.code){case"ArrowUp":case"ArrowLeft":t.preventDefault(),e=this.selected-1,e=e<0?this.tabs.length-1:e,this.tabs[e].click();break;case"ArrowDown":case"ArrowRight":t.preventDefault(),e=this.selected+1,this.tabs[e%this.tabs.length].click()}}}onSelectedChange(t){this.selectTab(t)}componentDidLoad(){this.el.setAttribute("role","tablist");const t=Array.from(this.el.querySelectorAll(".title")),e=Array.from(this.el.querySelectorAll(".panel"));this.tabs=t,this.panels=e,this.selected=this.findFirstSelectedTab(),t.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),this.tabTitleClick(t)}),t.addEventListener("keydown",t=>{this.tabKeyDown(t)}),t.setAttribute("id",t.id),t.setAttribute("aria-controls",t.id+"-tab");for(const[e,i]of this.panels.entries())i.setAttribute("role","tabpanel"),i.setAttribute("aria-labelledby",t.textContent),i.setAttribute("id",t.id+"-tab"+e)})}componentDidUnload(){const t=Array.from(this.el.querySelectorAll(".title"));t.forEach(t=>{t.removeEventListener("click",t=>{this.tabTitleClick(t)})}),t.forEach(t=>{t.removeEventListener("click",t=>{this.tabKeyDown(t)})})}render(){return[e("snt-layout",{padding:"remove-sides"},e("div",{class:"tab-wrapper"},e("slot",null)))]}get el(){return i(this)}static get watchers(){return{selected:["onSelectedChange"]}}};s.style='snt-tabs .title{color:#323232;position:relative;text-decoration:none;cursor:pointer;background-color:transparent;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}snt-tabs .title:after{content:attr(data-text);content:attr(data-text)/"";height:0;visibility:hidden;overflow:hidden;speak:never;speak:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-family:"Averta-Regular", sans-serif}snt-tabs .title:before{content:"";position:absolute;width:100%;height:2px;bottom:-1px;left:0;background-color:#147582;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s}snt-tabs .title:hover{color:#147582;font-family:"Averta-ExtraBold", sans-serif;text-decoration:none}snt-tabs .title[aria-selected=true]{text-decoration:none}snt-tabs .title[aria-selected=true]:before{background-color:#147582;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}snt-tabs .title:focus{z-index:1;outline:2px solid #147582;outline-offset:5px}snt-tabs .panel:focus{outline:1px solid #323232}snt-tabs .panel[aria-hidden=true]{display:none}.tab-wrapper{background-color:#f5f5f5;display:block;width:100%;clear:both;float:right}.tab-wrapper .tab-header{width:92%;display:-ms-flexbox;display:flex;text-align:center;padding:15px 4%;padding-bottom:0}.tab-wrapper .tab-header .tab-item{-ms-flex-positive:1;flex-grow:1;position:relative;border-right:1px solid #323232}.tab-wrapper .tab-header .tab-item:last-child{border-right:0}.panel-wrapper{padding:0}';export{s as snt_tabs}