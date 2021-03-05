import{r as t,h as s,g as i}from"./p-75b8bc7c.js";import{S as n}from"./p-85cd1ecc.js";import{a as e,E as o}from"./p-a0d279ae.js";import"./p-7aaa3e9e.js";const r=class{constructor(s){t(this,s),this.actionReference=n.empty(),this.actionData=n.empty(),this.linkTitle=n.empty(),this.iconClassName=n.empty(),this.styleClasses=n.empty(),this.linkId=n.empty(),this.eventConfiguration=null,this.actionDataJsonObj=null}async getEventConfiguration(){return this.eventConfiguration}sntBtnEvent(t){e.processEvent(t,this.eventConfiguration,this.actionReference,this.actionDataJsonObj)}componentWillLoad(){this.eventElems=this.element.querySelectorAll("snt-event")}componentDidLoad(){if(n.isEmpty(this.actionReference))throw new Error("SntActionLink must contain a valid action-reference attribute!");if(!n.isEmpty(this.actionData))try{this.actionDataJsonObj=JSON.parse(this.actionData)}catch(t){throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.")}this.eventConfiguration=o.newInstanceof().withComponent(this.element).build()}render(){const t=n.notEmpty(this.iconClassName)?s("snt-icon",{styleClasses:this.iconClassName}):"",i=s("snt-link",{"link-id":this.linkId,classNames:this.styleClasses,href:"javascript:void(0);"},t,this.linkTitle,s("slot",null));return[0==this.eventElems.length?[s("snt-event",{type:"click"}),s("snt-event",{type:"keydown",filters:"space"})]:"",i]}get element(){return i(this)}};r.TAG_NAME="snt-action-link";export{r as snt_action_link}