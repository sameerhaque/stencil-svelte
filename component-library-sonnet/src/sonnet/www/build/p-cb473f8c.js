class e{static parseDocumentCookie(){return document.cookie.split(";").map(e=>e.trim().split("=").map(decodeURIComponent)).reduce((e,t)=>{try{e[t[0]]=JSON.parse(t[1])}catch(o){e[t[0]]=t[1]}return e},{})}static readCookie(t){return e.parseDocumentCookie()[t]}static deleteCookie(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}export{e as C}