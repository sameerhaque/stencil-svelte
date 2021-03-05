import{r as t,h as e}from"./p-75b8bc7c.js";import{c as i,a as n}from"./p-2094943b.js";var l;!function(t){t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4"}(l||(l={}));var s=i((function(t){
/*!
 * Clamp.js 0.11.5
 *
 * Now Maintained by Josh English http://joshengish.com
 * Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
t.exports={clamp:function(t,e){e=e||{};var i,n=window,l={clamp:e.clamp||2,useNativeClamp:void 0===e.useNativeClamp||e.useNativeClamp,splitOnChars:e.splitOnChars||[".","-","–","—"," "],animate:e.animate||!1,truncationChar:e.truncationChar||"…",truncationHTML:e.truncationHTML},s=t.style,a=t.innerHTML,o=void 0!==t.style.webkitLineClamp,r=l.clamp,c=r.indexOf&&(r.indexOf("px")>-1||r.indexOf("em")>-1);function u(t,e){return n.getComputedStyle||(n.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var i=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),i.test(e)&&(e=e.replace(i,(function(){return arguments[2].toUpperCase()}))),t.currentStyle&&t.currentStyle[e]?t.currentStyle[e]:null},this}),n.getComputedStyle(t,null).getPropertyValue(e)}function d(e){var i=e||t.clientHeight,n=h(t);return Math.max(Math.floor(i/n),0)}function h(t){var e=u(t,"line-height");return"normal"==e&&(e=1.187*parseInt(u(t,"font-size"))),Math.ceil(parseFloat(e))}l.truncationHTML&&((i=document.createElement("span")).innerHTML=l.truncationHTML);var f,m,p,b,g=l.splitOnChars.slice(0),y=g[0];function v(e){if(e.lastChild)return e.lastChild.childNodes&&e.lastChild.childNodes.length>0?v(Array.prototype.slice.call(e.childNodes).pop()):e.lastChild&&e.lastChild.nodeValue&&""!==e.lastChild.nodeValue&&e.lastChild.nodeValue!=l.truncationChar?e.lastChild:(e.lastChild.parentNode.removeChild(e.lastChild),v(t))}function x(t,e){t.nodeValue=e+l.truncationChar}if("auto"==r?r=d():c&&(r=d(parseInt(r))),o&&l.useNativeClamp)s.overflow="hidden",s.textOverflow="ellipsis",s.webkitBoxOrient="vertical",s.display="-webkit-box",s.webkitLineClamp=r,c&&(s.height=l.clamp+"px");else{var k=(b=r,h(t)*b);k<t.clientHeight&&(p=function e(n,s){if(n&&s){var a=n.nodeValue.replace(l.truncationChar,"");if(f||(y=g.length>0?g.shift():"",f=a.split(y)),f.length>1?(m=f.pop(),x(n,f.join(y))):f=null,i&&(n.nodeValue=n.nodeValue.replace(l.truncationChar,""),t.innerHTML=n.nodeValue+" "+i.innerHTML+l.truncationChar),f){if(t.clientHeight<=s){if(!(g.length>=0&&""!==y))return t.innerHTML;x(n,f.join(y)+y+m),f=null}}else""===y&&(x(n,""),n=v(t),g=l.splitOnChars.slice(0),y=g[0],f=null,m=null);if(!l.animate)return e(n,s);setTimeout((function(){e(n,s)}),!0===l.animate?10:l.animate)}}(v(t),k))}return{original:a,clamped:p}}}}));const a=class{constructor(e){t(this,e),this.clampLines=0,this.truncationString="..."}getContent(t){switch(t){case l.h1:return e("h1",{ref:t=>{this.titleElement=t},class:"header"},e("slot",null));case l.h2:return e("h2",{ref:t=>{this.titleElement=t},class:"header"},e("slot",null));case l.h3:return e("h3",{ref:t=>{this.titleElement=t},class:"header"},e("slot",null));case l.h4:return e("h4",{ref:t=>{this.titleElement=t},class:"header"},e("slot",null));default:return""}}componentDidRender(){this.clampLines>0&&s.clamp(this.titleElement,{clamp:this.clampLines,truncationChar:this.truncationString,useNativeClamp:!1})}async clampTitle(t=this.clampLines){s.clamp(this.titleElement,{clamp:t,truncationChar:this.truncationString,useNativeClamp:!1})}async setTitle(t){this.titleElement.innerHTML=t}render(){let t=this.getContent(this.titleType);return[e("snt-layout",null,t)]}};a.TAG_NAME="snt-title",a.style="snt-title .header{text-align:center}.light-fill snt-title,snt-title.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-title,snt-title.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-title,snt-title.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-title,snt-title.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-title,snt-title.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-title.left .header,.left snt-title .header{text-align:left}snt-title.right .header,.right snt-title .header{text-align:right}snt-title.center .header,.center snt-title .header{text-align:center}@media (max-width: 767px){snt-title.left-mobile .header,.left-mobile snt-title .header{text-align:left}snt-title.right-mobile .header,.right-mobile snt-title .header{text-align:right}snt-title.center-mobile .header,.center-mobile snt-title .header{text-align:center}}snt-title .title-combined-top snt-layout .spacings,.title-combined-top snt-title snt-layout .spacings,snt-title.title-combined-top snt-layout .spacings{padding-top:0.813em !important}@media (min-width: 1024px){snt-title .title-combined-top snt-layout .spacings,.title-combined-top snt-title snt-layout .spacings,snt-title.title-combined-top snt-layout .spacings{padding-top:0.938em !important}}snt-title .title-combined-bottom snt-layout .spacings,.title-combined-bottom snt-title snt-layout .spacings,snt-title.title-combined-bottom snt-layout .spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){snt-title .title-combined-bottom snt-layout .spacings,.title-combined-bottom snt-title snt-layout .spacings,snt-title.title-combined-bottom snt-layout .spacings{padding-bottom:0.938em !important}}";export{a as snt_title}