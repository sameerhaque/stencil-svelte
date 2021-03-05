import{r as o,e as t,h as r,H as n,g as i}from"./p-75b8bc7c.js";import{W as a}from"./p-d7b2933a.js";var c;!function(o){o[o.COLLAPSED=0]="COLLAPSED",o[o.EXPANDED=1]="EXPANDED"}(c||(c={}));class e{constructor(o){this.state=o}}var d=function(o,t,r,n){return new(r||(r=Promise))((function(i,a){function c(o){try{d(n.next(o))}catch(t){a(t)}}function e(o){try{d(n.throw(o))}catch(t){a(t)}}function d(o){var t;o.done?i(o.value):(t=o.value,t instanceof r?t:new r((function(o){o(t)}))).then(c,e)}d((n=n.apply(o,t||[])).next())}))};const s=class{constructor(r){o(this,r),this.accordionEvent=t(this,"accordionEvent",7),this.expanded=!1}isCollapsed(){return d(this,void 0,void 0,(function*(){return Promise.resolve(!this.expanded)}))}isExpanded(){return d(this,void 0,void 0,(function*(){return Promise.resolve(this.expanded)}))}collapse(){return d(this,void 0,void 0,(function*(){this.expanded=!1}))}expand(){return d(this,void 0,void 0,(function*(){this.expanded=!0}))}toggle(){return d(this,void 0,void 0,(function*(){this.expanded?this.collapse():this.expand()}))}transition(o){return d(this,void 0,void 0,(function*(){const t=this.element.querySelector(s.CARD_PANEL);if(t.classList.add(s.TRANSITIONING_CLASS_NAME),o==c.EXPANDED){const o=t.scrollHeight;t.style.height="0px",yield a.sleep(100),t.style.height=o+"px"}else t.style.height=t.scrollHeight+"px",yield a.sleep(100),t.style.height="0px";setTimeout(()=>(t.classList.remove(s.TRANSITIONING_CLASS_NAME),t.style.height="",Promise.resolve()),650*parseFloat(getComputedStyle(t).transitionDuration))}))}expandedChanged(o){this.accordionEvent.emit(new e(this.expanded?c.EXPANDED:c.COLLAPSED)),this.transition(1==o?c.EXPANDED:c.COLLAPSED).then(null)}getExpandIcon(o,t){return 1==o?r("span",{class:"expand-icon icon-font "+(t?"icon-icon_legalAccordion_minus":"icon-icon_legalAccordion_plus")}):null}render(){const o=this.element.id,t="card-panel collapse "+(this.expanded?"show":""),i=this.expanded?"true":"false",a=this.element.classList.contains("transcript-accordion");return r(n,{expanded:this.expanded},r("div",{class:"card pas-accordion"},r("div",{id:o+"-header",class:"card-header"},r("button",{onClick:this.toggle.bind(this),class:"btn accordion-btn","aria-expanded":i,"aria-controls":o+"-panel"},this.getExpandIcon(a,this.expanded),r("div",{class:"mb-0 "+(a?"":"h4")},r("slot",{name:"summary"})))),r("div",{id:o+"-panel",class:t,"aria-labelledby":o+"-header"},r("div",{class:"card-body"},r("slot",{name:"details"})))))}get element(){return i(this)}static get watchers(){return{expanded:["expandedChanged"]}}};s.TAG_NAME="snt-accordion",s.CARD_PANEL=".card-panel",s.TRANSITIONING_CLASS_NAME="transitioning",s.style="snt-accordion{display:block;width:100%;margin-bottom:5px}snt-accordion .card{border:none;background-color:transparent}snt-accordion .card-header{position:relative;overflow:hidden;z-index:0;border:0.25px solid #262626;background-color:transparent;padding:0;border-radius:0}snt-accordion .card-header:first-child{border-radius:0}snt-accordion .card-header button{position:relative;width:100%;z-index:0;text-align:left;white-space:normal;background-color:transparent;border:none;padding:17px 75px 16px 30px}snt-accordion .card-panel{overflow:hidden;-webkit-transition:height 0.75s;transition:height 0.75s}snt-accordion .card-panel.transitioning{display:block}snt-accordion[expanded] .card-header button:after{background-image:url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 45 45' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E%3Ctitle%3Eicon_global_caret_lk%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d='M22.4891039,34 C21.9795084,34 21.4699128,33.8149412 21.0709531,33.4448236 L0.680426242,14.6563092 C-0.174487332,13.8689682 -0.23148157,12.5365449 0.553027357,11.6785451 C1.33753628,10.8239099 2.66851938,10.7700746 3.51672775,11.554051 L22.4891039,29.0370597 L41.4815957,11.5574157 C42.3365092,10.7734393 43.6574345,10.8272746 44.4486486,11.6852745 C45.229805,12.5432743 45.1761633,13.8756976 44.3178972,14.6630387 L23.9106072,33.4481883 C23.508295,33.8149412 22.9986994,34 22.4891039,34 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='icon_global_caret_lk' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='icon_global_caret' fill='%23FFFFFF' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E\");-webkit-transform:translate(50%, -50%) rotate(-180deg);transform:translate(50%, -50%) rotate(-180deg)}snt-accordion.faq-accordion .card-header{background-color:#ffffff}snt-accordion.faq-accordion .card-header:before{position:absolute;z-index:-1;top:0;left:0;content:\" \";background-color:#147582;height:0;width:calc(100% + 4px);-webkit-transition:0.65s height;transition:0.65s height}snt-accordion.faq-accordion .card-panel{border-left:0.25px solid #262626;border-right:0.25px solid #262626;border-bottom:0.25px solid #262626}snt-accordion.faq-accordion .card-body{padding:20px 15px 20px 15px}@media (min-width: 768px){snt-accordion.faq-accordion .card-body{padding:20px 45px 20px 15px}}@media (min-width: 1024px){snt-accordion.faq-accordion .card-body{padding:30px}}snt-accordion.faq-accordion button:after{position:absolute;top:50%;right:1.5rem;background-position:center;-webkit-transform:translate(50%, -50%) rotate(0deg);transform:translate(50%, -50%) rotate(0deg);content:\" \";-webkit-transition:0.65s -webkit-transform;transition:0.65s -webkit-transform;transition:0.65s transform;transition:0.65s transform, 0.65s -webkit-transform;width:15px;height:15px;background-image:url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 45 45' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E%3Ctitle%3Eicon_global_caret_lk%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d='M22.4891039,34 C21.9795084,34 21.4699128,33.8149412 21.0709531,33.4448236 L0.680426242,14.6563092 C-0.174487332,13.8689682 -0.23148157,12.5365449 0.553027357,11.6785451 C1.33753628,10.8239099 2.66851938,10.7700746 3.51672775,11.554051 L22.4891039,29.0370597 L41.4815957,11.5574157 C42.3365092,10.7734393 43.6574345,10.8272746 44.4486486,11.6852745 C45.229805,12.5432743 45.1761633,13.8756976 44.3178972,14.6630387 L23.9106072,33.4481883 C23.508295,33.8149412 22.9986994,34 22.4891039,34 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='icon_global_caret_lk' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='icon_global_caret' fill='%23147582' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E\")}@media (min-width: 768px){snt-accordion.faq-accordion button:after{right:32px}}snt-accordion.faq-accordion button:before{position:absolute;z-index:-1;top:0;left:0;content:\" \";background-color:#147582;width:0;height:2px;-webkit-transition:0.65s width;transition:0.65s width}snt-accordion.faq-accordion button:hover,snt-accordion.faq-accordion button:focus{-webkit-box-shadow:none;box-shadow:none;outline:0}snt-accordion.faq-accordion button:hover:before,snt-accordion.faq-accordion button:focus:before{width:calc(100% + 4px)}snt-accordion.faq-accordion[expanded] .card-header button{color:#ffffff}snt-accordion.faq-accordion[expanded] .card-header button:before{width:100%}snt-accordion.faq-accordion[expanded] .card-header:before{height:100%}snt-accordion.transcript-accordion .card-header{border:none}snt-accordion.transcript-accordion .card-header .h1,snt-accordion.transcript-accordion .card-header .h2,snt-accordion.transcript-accordion .card-header .h3,snt-accordion.transcript-accordion .card-header .h4,snt-accordion.transcript-accordion .card-header .h5,snt-accordion.transcript-accordion .card-header .h6{font-size:14px;line-height:23px}snt-accordion.transcript-accordion .card-header button{padding:0 1rem 0 1.5625rem}snt-accordion.transcript-accordion .card-header button:after{right:1rem}snt-accordion.transcript-accordion .card-header button:hover,snt-accordion.transcript-accordion .card-header button:focus{color:#147582;outline:none;-webkit-box-shadow:none;box-shadow:none}@media (min-width: 768px){snt-accordion.transcript-accordion .card-header button:hover [slot=summary]:before,snt-accordion.transcript-accordion .card-header button:focus [slot=summary]:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}}snt-accordion.transcript-accordion [slot=summary]{font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif;font-size:0.875rem;line-height:1.625rem;position:relative;display:inline-block}snt-accordion.transcript-accordion [slot=summary]:before{content:\"\";position:absolute;width:100%;height:1px;bottom:4px;left:0;background-color:#9e0a9a;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s;background:#147582}snt-accordion.transcript-accordion .card-panel{margin-top:20px;border:1px solid #E5E5E5;background-color:#FFFFFF;-webkit-box-shadow:0.2px 0.2px 10px #e5e5e5;box-shadow:0.2px 0.2px 10px #e5e5e5;border-radius:0}snt-accordion.transcript-accordion .card-panel ::-webkit-scrollbar{width:10px}snt-accordion.transcript-accordion .card-panel ::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px whitesmoke;-webkit-border-radius:10px;border-radius:10px;background-color:#f5f5f5}snt-accordion.transcript-accordion .card-panel ::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#147582;-webkit-box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.5)}snt-accordion.transcript-accordion .card-panel ::-webkit-scrollbar-thumb:window-inactive{background:#147582}snt-accordion.transcript-accordion .card-body{padding:1.5625rem 0.9375rem}@media (min-width: 768px){snt-accordion.transcript-accordion .card-body{padding:1.5625rem}}snt-accordion.transcript-accordion .card-body [slot=details]{overflow-y:auto;scrollbar-width:thin;scrollbar-color:#7f7f7f transparent;max-height:250px;padding:0 1.5625rem 0 0}@media (min-width: 768px){snt-accordion.transcript-accordion .card-body [slot=details]{padding:0 3.1255rem 0 0}}@media (min-width: 1024px){snt-accordion.transcript-accordion .card-body [slot=details]{max-height:350px}}snt-accordion.transcript-accordion .card-body [slot=details] p{font-size:0.875rem;line-height:1.45rem}snt-accordion.transcript-accordion .expand-icon{height:0.9375rem;width:0.9375rem;font-size:0.9375rem;line-height:0.9375rem;position:absolute;left:0;top:6px;margin:auto}@media (min-width: 768px){snt-accordion.transcript-accordion .expand-icon{top:0;bottom:0}}snt-accordion-group{width:100%}snt-accordion-group snt-layout[viewport=medium] snt-accordion.faq-accordion button,snt-accordion-group snt-layout[viewport=small] snt-accordion.faq-accordion button,snt-accordion-group snt-layout[viewport=extra-small] snt-accordion.faq-accordion button{padding:15px 45px 15px 15px}.two-column-combined snt-accordion-group{-ms-flex-positive:1;flex-grow:1}";export{s as A,c as a}