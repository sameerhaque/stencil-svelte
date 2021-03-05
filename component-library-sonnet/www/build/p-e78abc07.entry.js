import{r as t,h as e,H as n,g as i}from"./p-75b8bc7c.js";var r,o=[],s="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var u,c=function(){function t(t,e,n,i){return this.x=t,this.y=e,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),a=function(t){return t instanceof SVGElement&&"getBBox"in t},f=function(t){if(a(t)){var e=t.getBBox();return!e.width&&!e.height}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},h=function(t){var e,n,i=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(i&&t instanceof i.Element)},v="undefined"!=typeof window?window:{},d=new WeakMap,l=/auto|scroll/,b=/^tb|vertical/,w=/msie|trident/i.test(v.navigator&&v.navigator.userAgent),p=function(t){return parseFloat(t||"0")},m=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},x=Object.freeze({devicePixelContentBoxSize:m(),borderBoxSize:m(),contentBoxSize:m(),contentRect:new c(0,0,0,0)}),y=function(t,e){if(void 0===e&&(e=!1),d.has(t)&&!e)return d.get(t);if(f(t))return d.set(t,x),x;var n=getComputedStyle(t),i=a(t)&&t.ownerSVGElement&&t.getBBox(),r=!w&&"border-box"===n.boxSizing,o=b.test(n.writingMode||""),s=!i&&l.test(n.overflowY||""),u=!i&&l.test(n.overflowX||""),h=i?0:p(n.paddingTop),v=i?0:p(n.paddingRight),y=i?0:p(n.paddingBottom),O=i?0:p(n.paddingLeft),z=i?0:p(n.borderTopWidth),E=i?0:p(n.borderRightWidth),g=i?0:p(n.borderBottomWidth),S=O+v,R=h+y,k=(i?0:p(n.borderLeftWidth))+E,B=z+g,M=u?t.offsetHeight-B-t.clientHeight:0,D=s?t.offsetWidth-k-t.clientWidth:0,F=r?S+k:0,T=r?R+B:0,j=i?i.width:p(n.width)-F-D,C=i?i.height:p(n.height)-T-M,I=j+S+D+k,A=C+R+M+B,N=Object.freeze({devicePixelContentBoxSize:m(Math.round(j*devicePixelRatio),Math.round(C*devicePixelRatio),o),borderBoxSize:m(I,A,o),contentBoxSize:m(j,C,o),contentRect:new c(O,h,j,C)});return d.set(t,N),N},O=function(t,e,n){var i=y(t,n),o=i.borderBoxSize,s=i.contentBoxSize,u=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return u;case r.BORDER_BOX:return o;default:return s}},z=function(t){var e=y(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},E=function(t){if(f(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},g=function(){var t=1/0,e=[];o.forEach((function(n){if(0!==n.activeTargets.length){var i=[];n.activeTargets.forEach((function(e){var n=new z(e.target),r=E(e.target);i.push(n),e.lastReportedSize=O(e.target,e.observedBox),r<t&&(t=r)})),e.push((function(){n.callback.call(n.observer,i,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,i=e;n<i.length;n++)(0,i[n])();return t},S=function(t){o.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(E(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},R=[],k=0,B={attributes:!0,characterData:!0,childList:!0,subtree:!0},M=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],D=function(t){return void 0===t&&(t=0),Date.now()+t},F=!1,T=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!F){F=!0;var n,i=D(t);n=function(){var n=!1;try{n=function(){var t,e=0;for(S(e);o.some((function(t){return t.activeTargets.length>0}));)e=g(),S(e);return o.some((function(t){return t.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?t=new ErrorEvent("error",{message:s}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=s),window.dispatchEvent(t)),e>0}()}finally{if(F=!1,t=i-D(),!k)return;n?e.run(1e3):t>0?e.run(t):e.start()}},function(t){if(!u){var e=0,n=document.createTextNode("");new MutationObserver((function(){return R.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),u=function(){n.textContent=""+(e?e--:e++)}}R.push(t),u()}((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,B)};document.body?e():v.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),M.forEach((function(e){return v.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),M.forEach((function(e){return v.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),j=function(t){!k&&t>0&&T.start(),!(k+=t)&&T.stop()},C=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=O(this.target,this.observedBox,!0);return a(t=this.target)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),I=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},A=new WeakMap,N=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},P=function(){function t(){}return t.connect=function(t,e){var n=new I(t,e);A.set(t,n)},t.observe=function(t,e,n){var i=A.get(t),r=0===i.observationTargets.length;N(i.observationTargets,e)<0&&(r&&o.push(i),i.observationTargets.push(new C(e,n&&n.box)),j(1),T.schedule())},t.unobserve=function(t,e){var n=A.get(t),i=N(n.observationTargets,e);i>=0&&(1===n.observationTargets.length&&o.splice(o.indexOf(n),1),n.observationTargets.splice(i,1),j(-1))},t.disconnect=function(t){var e=this,n=A.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),q=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");P.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!h(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");P.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!h(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");P.unobserve(this,t)},t.prototype.disconnect=function(){P.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class L{observe(t,e){new(window[L.RESIZE_OBSERVER_IDENTIFIER_NAME]||q)(e).observe(t,{box:"border-box"})}unobserve(t){window[L.RESIZE_OBSERVER_IDENTIFIER_NAME]&&t.disconnect()}}L.RESIZE_OBSERVER_IDENTIFIER_NAME="ResizeObserver";class V extends L{constructor(){super()}static getInstance(){return new V}observerDoesNotExist(t){console.log(t,"observer does not exist")}}const G=class{constructor(e){t(this,e)}componentDidLoad(){const t=this.element.querySelector("snt-data");if(t){const e=JSON.parse(t.innerHTML),n=Object.keys(e.viewport).map(Number).sort((t,e)=>e-t);V.getInstance().observe(this.element,t=>{const i=t[0];for(let r of n)if(i.contentRect.width>=r){console.log(i.contentRect.width+" >= "+r);const t=e.viewport[r].style;for(let e of Object.keys(t))this.element.style[e]=t[e];const n=e.viewport[r].class;if(n)for(let e of n)this.element.classList.contains(e)||this.element.classList.add(e);break}})}}render(){return e(n,null,e("snt-layout",null,e("slot",null)))}get element(){return i(this)}};G.style="snt-panel{display:block;width:100%;min-height:39.063em;background-repeat:no-repeat;background-size:cover}";export{G as snt_panel}