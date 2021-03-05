import{C as e}from"./p-e0123cd3.js";import{S as t}from"./p-85cd1ecc.js";class r{static getObjectReference(e,t){return e.split(".").reduce((t,r)=>{const a=t[r];if(a)return a;throw Error(`Argument value with value ${e} does not exist.`)},t)}static sleep(e){return new Promise(t=>setTimeout(t,e))}static getTransitionDuration(e){return 1e3*parseFloat(getComputedStyle(e).transitionDuration)}static isValidEscapeKey(e){return e.keyCode&&27==e.keyCode||e.key&&"Escape"==e.key||e.code&&"Escape"==e.key}static appendElement(e,t,r=!1){if(t)e.appendChild(t);else if(r)throw Error("Argument element is null and marked as required.")}static generateClasses(e,r){let a=new Set(e);return new Set(r.split(t.SPACE_SEPARATOR)).forEach(a.add,a),t.join(a,t.SPACE_SEPARATOR)}static getAbsoluteHeight(e){e="string"==typeof e?document.querySelector(e):e;var t=window.getComputedStyle(e),r=parseFloat(t.marginTop)+parseFloat(t.marginBottom);return Math.ceil(e.offsetHeight+r)}static getObjectFromString(e){try{return JSON.parse(e)}catch(t){throw new Error("Error!")}}static getMediaQueryInstances(){return[{name:"extra-small",mediaQueryList:window.matchMedia(`(max-width: ${e.EXTRA_SMALL.getRight()}px)`)},{name:"small",mediaQueryList:window.matchMedia(`(min-width: ${e.SMALL.getLeft()}px) and (max-width: ${e.SMALL.getRight()}px)`)},{name:"medium",mediaQueryList:window.matchMedia(`(min-width: ${e.MEDIUM.getLeft()}px) and (max-width: ${e.MEDIUM.getRight()}px)`)},{name:"large",mediaQueryList:window.matchMedia(`(min-width: ${e.LARGE.getLeft()}px) and (max-width: ${e.LARGE.getRight()}px)`)},{name:"extra-large",mediaQueryList:window.matchMedia(`(min-width: ${e.EXTRA_LARGE.getLeft()}px)`)}]}}export{r as W}