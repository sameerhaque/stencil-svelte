import{r as i,h as t,H as o,g as s}from"./p-75b8bc7c.js";import"./p-e0123cd3.js";import{S as e}from"./p-85cd1ecc.js";import{W as n}from"./p-d7b2933a.js";import{L as c}from"./p-d336ded5.js";const r=class{constructor(t){i(this,t),this.properties="",this.imgAlt="",this.styleClasses=e.empty()}componentDidLoad(){c.getInstance().observe(this.element);let i={};e.hasValue(this.properties)&&(i=JSON.parse(this.properties)),this.largeIconUrl=i.largeIconUrl||i.smallIconUrl,this.smallIconUrl=i.smallIconUrl||this.largeIconUrl,this.image.setAttribute("src",this.smallIconUrl),this.element.setAttribute("data-src",this.smallIconUrl),this.image.setAttribute("data-srcSet",this.smallIconUrl),this.largeSource.setAttribute("srcSet",this.largeIconUrl),this.largeSource.setAttribute("data-srcSet",this.largeIconUrl),e.isEmpty(this.largeIconUrl)&&e.isEmpty(this.smallIconUrl)&&this.icon.classList.add("hidden")}render(){return t(o,null,t("snt-layout",null,t("div",{ref:i=>this.icon=i,class:"icon"},t("picture",null,t("source",{ref:i=>this.largeSource=i,media:"(min-width: 768px)",srcSet:""}),t("img",{class:n.generateClasses(["image-icon"],this.styleClasses),src:"",alt:this.imgAlt,"aria-hidden":"true",ref:i=>this.image=i})))))}get element(){return s(this)}};r.style="snt-image-icon .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 0px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-image-icon .icon,snt-image-icon .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-image-icon .icon,snt-image-icon .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-image-icon .icon,snt-image-icon .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-image-icon .icon,snt-image-icon .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-image-icon .icon,snt-image-icon .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-image-icon .icon,snt-image-icon .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-image-icon .image-icon{height:30px;width:30px}@media (min-width: 768px){snt-image-icon .icon{height:80px;width:80px}snt-image-icon .image-icon{height:45px;width:45px}}";export{r as snt_image_icon}