import{r as t,h as s,H as e}from"./p-75b8bc7c.js";import{S as a}from"./p-85cd1ecc.js";import{W as n}from"./p-d7b2933a.js";const o=class{constructor(s){t(this,s),this.languageJson=a.empty()}async toggleActive(t){return this.active="boolean"==typeof t||!this.active,this.active}watchActive(t){t&&(this.lastActiveElement=document.activeElement)}componentDidUpdate(){this.setFocus()}setFocus(){if(this.active){const t=this.searchTypeahead.querySelector("input");t&&t.focus()}else this.lastActiveElement.focus()}render(){return s(e,{onSntBackdropTap:this.toggleActive.bind(this)},s("snt-pane",{styleClasses:"d-flex justify-content-center align-items-center"},s("snt-search-typeahead",{"search-combobox-id":"global-search-combobox",ref:t=>this.searchTypeahead=t,languageJson:this.languageJson}),s("snt-action-button",{"action-reference":"Action.toggleSearch","icon-class-name":"iconNavClose"})),",",s("snt-backdrop",null))}static get watchers(){return{active:["watchActive"]}}};o.TAG_NAME="snt-search-bar",o.style="snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";const i=class{constructor(s){t(this,s),this.languageStrings={},this.active=!1,this.styleClasses=a.empty(),this.languageJson=a.empty()}async toggleActive(t){return this.active="boolean"==typeof t?t:!this.active,this.active}componentWillLoad(){try{this.languageJson&&(this.languageStrings=JSON.parse(this.languageJson))}catch(t){console.error(t)}}render(){return s(e,{class:n.generateClasses([],this.styleClasses)},s("snt-action-button",{actionReference:"Action.toggleSearch",linkTitle:this.languageStrings.back||"Back",iconClassName:"iconChevron"}),s("snt-search-typeahead",{"search-combobox-id":"global-search-panel-combobox",languageJson:this.languageJson}))}};i.TAG_NAME="snt-search-panel",i.style="snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.3s ease-out;transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{-webkit-transform:translateX(0%);transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block}";export{o as S,i as a}