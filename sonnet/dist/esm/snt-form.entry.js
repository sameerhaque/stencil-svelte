import { r as registerInstance, e as createEvent, h } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import './WebUtils-eeb89633.js';
import { D as DomUtils } from './modal-component-ff683d14.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-7b8ed50b.js';
import './HtmlContentBuilder-f513c9f5.js';
import './index-a882e395.js';
import { A as Action } from './Search-22fe1b56.js';
import { R as RecaptchaComponent } from './recaptcha-component-7fd58b1a.js';

var FormAttributes;
(function (FormAttributes) {
    FormAttributes["DATA_FORM_ATTRIBUTE_NAME"] = "data-form";
    FormAttributes["DATA_FIELD_ATTRUBITE_NAME"] = "data-field";
    FormAttributes["DATA_FORM_METHOD_ATTRIBUTE_NAME"] = "data-form-method";
    FormAttributes["DATA_FORM_ACTION_ATTRIBUTE_NAME"] = "data-form-action";
    FormAttributes["DATA_NO_ONBLUR_ATTRIBUTE_NAME"] = "data-no-onblur";
    FormAttributes["DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME"] = "data-onchange-blank";
    FormAttributes["DATA_ERROR_ATTRIBUTE_NAME"] = "data-error";
    FormAttributes["DATA_ERROR_MESSAGE_ATTRIBUTE_NAME"] = "data-error-message";
    FormAttributes["DATA_FOR_ATTRIBUTE_NAME"] = "data-for";
    FormAttributes["DATA_SPECIAL_CHARACTERS_ATTRIBUTE_NAME"] = "data-special-character";
    FormAttributes["DATA_EMPTY_VALUE_ATTRIBUTE_NAME"] = "data-empty-value";
    FormAttributes["DATA_MIN_LENGTH_ATTRIBUTE_NAME"] = "data-min-length";
    FormAttributes["DATA_MAX_LENGTH_ATTRIBUTE_NAME"] = "data-max-length";
    FormAttributes["DATA_EMAIL_ATTRIBUTE_NAME"] = "data-email";
    FormAttributes["DATA_PHONE_ATTRIBUTE_NAME"] = "data-phone";
    FormAttributes["DATA_ARIA_TEXT_ATTRIBUTE_NAME"] = "data-aria-text";
    FormAttributes["DATA_EMAIL_CONFIRMATION_NAME"] = "data-email-confirmation";
    FormAttributes["DATA_DATE_FORMAT_ATTRIBUTE_NAME"] = "data-date-format";
    FormAttributes["DATA_CURRENCY_FORMAT_ATTRIBUTE_NAME"] = "data-currency-format";
    FormAttributes["DATA_DATE_PAST_ATTRIBUTE_NAME"] = "data-date-past";
    FormAttributes["DATA_DATE_PRECEEDS_ONE_YEAR"] = "data-date-preceeds-one-year";
    FormAttributes["DATA_DATE_EXCEEDS_ONE_YEAR_TODAY"] = "data-date-exceeds-one-year-today";
    FormAttributes["DATA_DATE_EXCEEDS"] = "data-date-exceeds";
})(FormAttributes || (FormAttributes = {}));

var squirrelly_min = createCommonjsModule(function (module, exports) {
!function(e,t){t(exports);}(commonjsGlobal,(function(e){function t(e){var n,r,a=new Error(e);return n=a,r=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,a}function n(e,n,r){var a=n.slice(0,r).split(/\n/),i=a.length,s=a[i-1].length+1;throw t(e+=" at line "+i+" col "+s+":\n\n  "+n.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var r=new Function("return this")().Promise,a=!1;try{a=new Function("return (async function(){}).constructor")();}catch(e){if(!(e instanceof SyntaxError))throw e}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){for(var r in t)i(t,r)&&(null==t[r]||"object"!=typeof t[r]||"storage"!==r&&"prefixes"!==r||n?e[r]=t[r]:e[r]=s({},t[r]));return e}var c=/^async +/,o=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,f=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function p(e){return u.test(e)?e.replace(u,"\\$&"):e}function h(e,r){r.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),o.lastIndex=0,l.lastIndex=0,f.lastIndex=0;var a=r.prefixes,i=[a.h,a.b,a.i,a.r,a.c,a.e].reduce((function(e,t){return e&&t?e+"|"+p(t):t?p(t):e}),""),s=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(r.tags[1])+")","g"),u=new RegExp("([^]*?)"+p(r.tags[0])+"(-|_)?\\s*("+i+")?\\s*","g"),h=0,d=!1;function g(t,a){var i,p={f:[]},g=0,v="c";function m(t){var a=e.slice(h,t),i=a.trim();if("f"===v)"safe"===i?p.raw=!0:r.async&&c.test(i)?(i=i.replace(c,""),p.f.push([i,"",!0])):p.f.push([i,""]);else if("fp"===v)p.f[p.f.length-1][1]+=i;else if("err"===v){if(i){var s=a.search(/\S/);n("invalid syntax",e,h+s);}}else p[v]=i;h=t+1;}for("h"===a||"b"===a||"c"===a?v="n":"r"===a&&(p.raw=!0,a="i"),s.lastIndex=h;null!==(i=s.exec(e));){var y=i[1],x=i[2],b=i[3],w=i[4],F=i[5],S=i.index;if(y)"("===y?(0===g&&("n"===v?(m(S),v="p"):"f"===v&&(m(S),v="fp")),g++):")"===y?0===--g&&"c"!==v&&(m(S),v="err"):0===g&&"|"===y?(m(S),v="f"):"=>"===y&&(m(S),h+=1,v="res");else if(x){if("/*"===x){var I=e.indexOf("*/",s.lastIndex);-1===I&&n("unclosed comment",e,i.index),s.lastIndex=I+2;}else if("'"===x){l.lastIndex=i.index,l.exec(e)?s.lastIndex=l.lastIndex:n("unclosed string",e,i.index);}else if('"'===x){f.lastIndex=i.index,f.exec(e)?s.lastIndex=f.lastIndex:n("unclosed string",e,i.index);}else if("`"===x){o.lastIndex=i.index,o.exec(e)?s.lastIndex=o.lastIndex:n("unclosed string",e,i.index);}}else if(b)return m(S),h=S+i[0].length,u.lastIndex=h,d=F,w&&"h"===a&&(a="s"),p.t=a,p}return n("unclosed tag",e,t),p}var v=function i(s,o){s.b=[],s.d=[];var l,f=!1,p=[];function v(e,t){e&&(e=function(e,t,n,r){var a,i;return "string"==typeof t.autoTrim?a=i=t.autoTrim:Array.isArray(t.autoTrim)&&(a=t.autoTrim[1],i=t.autoTrim[0]),(n||!1===n)&&(a=n),(r||!1===r)&&(i=r),"slurp"===a&&"slurp"===i?e.trim():("_"===a||"slurp"===a?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===i||"slurp"===i?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==i&&"nl"!==i||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,r,d,t))&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(e));}for(;null!==(l=u.exec(e));){var m,y=l[1],x=l[2],b=l[3]||"";for(var w in a)if(a[w]===b){m=w;break}v(y,x),h=l.index+l[0].length,m||n("unrecognized tag type: "+b,e,h);var F=g(l.index,m),S=F.t;if("h"===S){var I=F.n||"";r.async&&c.test(I)&&(F.a=!0,F.n=I.replace(c,"")),F=i(F),p.push(F);}else if("c"===S){if(s.n===F.n)return f?(f.d=p,s.b.push(f)):s.d=p,s;n("Helper start and end don't match",e,l.index+l[0].length);}else if("b"===S){f?(f.d=p,s.b.push(f)):s.d=p;var R=F.n||"";r.async&&c.test(R)&&(F.a=!0,F.n=R.replace(c,"")),f=F,p=[];}else if("s"===S){var T=F.n||"";r.async&&c.test(T)&&(F.a=!0,F.n=T.replace(c,"")),p.push(F);}else p.push(F);}if(!o)throw t('unclosed helper "'+s.n+'"');return v(e.slice(h,e.length),!1),s.d=p,s}({f:[]},!0);if(r.plugins)for(var m=0;m<r.plugins.length;m++){var y=r.plugins[m];y.processAST&&(v.d=y.processAST(v.d,r));}return v.d}function d(e,t){var n=h(e,t),r="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+x(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var a=0;a<t.plugins.length;a++){var i=t.plugins[a];i.processFnString&&(r=i.processFnString(r,t));}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n][0],a=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+r+"')("+e,a&&(e+=","+a),e+=")";}return e}function v(e,t,n,r,a,i){var s="{exec:"+(a?"async ":"")+y(n,t,e)+",params:["+r+"]";return i&&(s+=",name:'"+i+"'"),a&&(s+=",async:true"),s+="}"}function m(e,t){for(var n="[",r=0;r<e.length;r++){var a=e[r];n+=v(t,a.res||"",a.d,a.p||"",a.a,a.n),r<e.length&&(n+=",");}return n+="]"}function y(e,t,n){return "function("+t+"){var tR='';"+x(e,n)+"return tR}"}function x(e,t){for(var n=0,r=e.length,a="";n<r;n++){var i=e[n];if("string"==typeof i){a+="tR+='"+i+"';";}else {var s=i.t,c=i.c||"",o=i.f,l=i.n||"",f=i.p||"",u=i.res||"",p=i.b,h=!!i.a;if("i"===s){t.defaultFilter&&(c="c.l('F','"+t.defaultFilter+"')("+c+")");var d=g(c,o);!i.raw&&t.autoEscape&&(d="c.l('F','e')("+d+")"),a+="tR+="+d+";";}else if("h"===s)if(t.storage.nativeHelpers.get(l))a+=t.storage.nativeHelpers.get(l)(i,t);else {var y=(h?"await ":"")+"c.l('H','"+l+"')("+v(t,u,i.d,f,h);y+=p?","+m(p,t):",[]",a+="tR+="+g(y+=",c)",o)+";";}else "s"===s?a+="tR+="+g((h?"await ":"")+"c.l('H','"+l+"')({params:["+f+"]},[],c)",o)+";":"e"===s&&(a+=c+"\n");}}return a}var b=function(){function e(e){this.cache=e;}return e.prototype.define=function(e,t){this.cache[e]=t;},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e];},e.prototype.reset=function(){this.cache={};},e.prototype.load=function(e){s(this.cache,e,!0);},e}();function w(e,n,r,a){if(n&&n.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(r&&r.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept filters")}var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function S(e){return F[e]}var I=new b({}),R=new b({each:function(e,t){var n="",r=e.params[0];if(w("each",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i){r(t[n],n).then((function(s){a+=s,n===t.length-1?i(a):e(t,n+1,r,a,i);}));}(r,0,e.exec,n,t);}));for(var a=0;a<r.length;a++)n+=e.exec(r[a],a);return n},foreach:function(e,t){var n=e.params[0];if(w("foreach",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i,s){a(n[r],t[n[r]]).then((function(c){i+=c,r===n.length-1?s(i):e(t,n,r+1,a,i,s);}));}(n,Object.keys(n),0,e.exec,"",t);}));var r="";for(var a in n)i(n,a)&&(r+=e.exec(a,n[a]));return r},include:function(e,n,r){w("include",n,!1);var a=r.storage.templates.get(e.params[0]);if(!a)throw t('Could not fetch template "'+e.params[0]+'"');return a(e.params[1],r)},extends:function(e,n,r){var a=e.params[1]||{};a.content=e.exec();for(var i=0;i<n.length;i++){var s=n[i];a[s.name]=s.exec();}var c=r.storage.templates.get(e.params[0]);if(!c)throw t('Could not fetch template "'+e.params[0]+'"');return c(a,r)},useScope:function(e,t){return w("useScope",t,!1),e.exec(e.params[0])}}),T=new b({if:function(e,t){w("if",!1,e.f,!0);var n="if("+e.p+"){"+x(e.d,t)+"}";if(e.b)for(var r=0;r<e.b.length;r++){var a=e.b[r];"else"===a.n?n+="else{"+x(a.d,t)+"}":"elif"===a.n&&(n+="else if("+a.p+"){"+x(a.d,t)+"}");}return n},try:function(e,n){if(w("try",!1,e.f,!0),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var r="try{"+x(e.d,n)+"}",a=e.b[0];return r+="catch"+(a.res?"("+a.res+")":"")+"{"+x(a.d,n)+"}"},block:function(e,t){return w("block",e.b,e.f,!0),"if(!"+t.varName+"["+e.p+"]){tR+=("+y(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),E=new b({e:function(e){var t=String(e);return /[&<>"']/.test(t)?t.replace(/[&<>"']/g,S):t}}),j={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(e,n){if("H"===e){var r=this.storage.helpers.get(n);if(r)return r;throw t("Can't find helper '"+n+"'")}if("F"===e){var a=this.storage.filters.get(n);if(a)return a;throw t("Can't find filter '"+n+"'")}},async:!1,storage:{helpers:R,nativeHelpers:T,filters:E,templates:I},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function H(e,t){var n={};return s(n,j),t&&s(n,t),e&&s(n,e),n.l.bind(n),n}function O(e,n){var r=H(n||{}),i=Function;if(r.async){if(!a)throw t("This environment doesn't support async/await");i=a;}try{return new i(r.varName,"c","cb",d(e,r))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+d(e,r)):n}}function _(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:O(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}j.l.bind(j),e.compile=O,e.compileScope=x,e.compileScopeIntoFunction=y,e.compileToString=d,e.defaultConfig=j,e.filters=E,e.getConfig=H,e.helpers=R,e.nativeHelpers=T,e.parse=h,e.render=function(e,n,a,i){var s=H(a||{});if(!s.async)return _(e,s)(n,s);if(!i){if("function"==typeof r)return new r((function(t,r){try{t(_(e,s)(n,s));}catch(e){r(e);}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{_(e,s)(n,s,i);}catch(e){return i(e)}},e.templates=I,Object.defineProperty(e,"__esModule",{value:!0});}));

});

class TemplateService {
    static generateContextForElement(element) {
        var _context = {};
        // Process label for error messages
        if (element.hasAttribute("title")) {
            _context["label"] = element.getAttribute("title");
        }
        else if (element.hasAttribute("id")) {
            var _label = document.querySelector("label[for=" + element.id + "]");
            if (_label !== null) {
                _context["label"] = _label.textContent;
            }
        }
        // Add all attributes for a DOM element
        Array.from(element.attributes).forEach(function (attribute) {
            _context[StringUtils.toCamelCase(attribute.name)] = attribute.value;
        });
        return _context;
    }
    static process(template, context) {
        var _isTemplate = template.includes("<%");
        return (_isTemplate ? squirrelly_min.render(template, context, squirrelly_min.getConfig({ tags: ["<%", "%>"] })) : template);
    }
}

class FormService {
    static process(event) {
        var _element = event.target;
        var _form = _element.form;
        var _value = this.getValue(_element);
        var _dataErrorParent = _form.querySelector('[' +
            FormAttributes.DATA_FOR_ATTRIBUTE_NAME +
            '=' +
            _element.id +
            ']');
        if (_dataErrorParent !== null) {
            var _dataErrorMessages = _dataErrorParent.querySelectorAll('[' + FormAttributes.DATA_ERROR_ATTRIBUTE_NAME + ']');
            var _activeDataError = null;
            var _context = TemplateService.generateContextForElement(_element);
            _dataErrorMessages.forEach((_dataError) => {
                if (_activeDataError == null) {
                    var regExValue = _dataError.getAttribute(FormAttributes.DATA_ERROR_ATTRIBUTE_NAME);
                    if (StringUtils.hasLength(regExValue)) {
                        if (StringUtils.isString(_value)) {
                            var regEx = new RegExp(regExValue);
                            var _result = regEx.test(_value);
                            if (_result) {
                                _activeDataError = _dataError;
                            }
                        }
                    }
                    if (_activeDataError == null) {
                        if (this.processDataAttribute(FormAttributes.DATA_SPECIAL_CHARACTERS_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, "^[a-zA-Z\\xc1\\xc0\\xc4\\xc2\\xe0\\xe2\\xe4\\xe1\\xc7\\xe7\\xc8\\xc9\\xca\\xcb\\xe8\\xe9\\xea\\xeb\\xce\\xcf\\xee\\xef\\xd4\\xf4\\xd9\\xdb\\xdc\\xf9\\xfb\\xfc\\xff .'-]+$", false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_EMPTY_VALUE_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^(?!\\s*$).+', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_MIN_LENGTH_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^.{<%it.minlength%>,}$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_MAX_LENGTH_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^.{0,<%it.maxlength%>}$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_EMAIL_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{1,63}$', false)) {
                            _activeDataError = _dataError;
                        }
                        // "^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$"
                        // [0-9]{3}-[0-9]{3}-[0-9]{4}
                        if (this.processDataAttribute(FormAttributes.DATA_PHONE_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processEmailConfirmation(FormAttributes.DATA_EMAIL_CONFIRMATION_NAME, _context, _value, _dataError, _dataErrorParent)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_DATE_FORMAT_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^(?:(?:(?:(?:0?[13578])|(1[02]))\\/31\\/(19|20)?\\d\\d)|(?:(?:(?:0?[13-9])|(?:1[0-2]))\\/(?:29|30)\\/(?:19|20)?\\d\\d)|(?:0?2\\/29\\/(?:19|20)(?:(?:[02468][048])|(?:[13579][26])))|(?:(?:(?:0?[1-9])|(?:1[0-2]))\\/(?:(?:0?[1-9])|(?:1\\d)|(?:2[0-8]))\\/(?:19|20)?\\d\\d))$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_CURRENCY_FORMAT_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^\\d+(?:\\.\\d{0,2})?$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDatePastAttribute(FormAttributes.DATA_DATE_PAST_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDatePreceedAttribute(FormAttributes.DATA_DATE_PRECEEDS_ONE_YEAR, _context, _value, _dataError, _dataErrorParent, _form)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDateExceedAttribute(FormAttributes.DATA_DATE_EXCEEDS, _context, _value, _dataError, _dataErrorParent, _form)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDateExceedOneYearTodayAttribute(FormAttributes.DATA_DATE_EXCEEDS_ONE_YEAR_TODAY, _context, _value, _dataError, _dataErrorParent)) {
                            _activeDataError = _dataError;
                        }
                    }
                }
            });
        }
        if (_dataErrorParent !== null) {
            var _errorMessageNode = this.getErrorMessageNode(_dataErrorParent);
            if (_activeDataError !== null) {
                _errorMessageNode.classList.remove('hidden');
                _errorMessageNode.removeAttribute('aria-hidden');
                _errorMessageNode.textContent = TemplateService.process(_activeDataError.textContent, _context);
                return false;
            }
            else {
                _errorMessageNode.classList.add('hidden');
            }
        }
        return true;
    }
    static getValue(element) {
        if (element.tagName === 'INPUT') {
            return element.value;
        }
        else if (element.tagName === 'TEXTAREA') {
            return element.value;
        }
        else if (element.tagName === 'SELECT') {
            return element.options[element.selectedIndex].value;
        }
        throw 'Unsupported element type ' + element.tagNames;
    }
    static processDataAttribute(attributeName, context, value, dataError, dataErrorParent, dataPattern, isDataPatternMatch) {
        if (dataError.hasAttribute(attributeName)) {
            if (dataPattern == null) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
            else if (StringUtils.notEmpty(dataPattern)) {
                var regEx = new RegExp(TemplateService.process(dataPattern, context));
                if (value !== null) {
                    var _result = regEx.test(value);
                    if ((isDataPatternMatch && _result) ||
                        (!isDataPatternMatch && !_result)) {
                        this.setErrorMessage(dataError, context, dataErrorParent);
                        return true;
                    }
                }
            }
        }
        return false;
    }
    static processEmailConfirmation(attributeName, context, value, dataError, dataErrorParent) {
        if (dataError.hasAttribute(attributeName)) {
            const emailElement = (document.getElementById(context.dataEmailId));
            if (emailElement && emailElement.value !== value) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDatePastAttribute(attributeName, context, value, dataError, dataErrorParent) {
        if (dataError.hasAttribute(attributeName)) {
            const today = new Date();
            const beginningOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const dateValue = new Date(value);
            if (dateValue.getTime() < beginningOfDay.getTime()) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDateExceedAttribute(attributeName, context, value, dataError, dataErrorParent, form) {
        if (dataError.hasAttribute(attributeName)) {
            var dateInput = form.querySelector('[' +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                '=' +
                context.dataExceeds +
                ']');
            if (!dateInput) {
                return false;
            }
            const dateString = this.getValue(dateInput);
            if (StringUtils.isEmpty(dateString)) {
                return false;
            }
            const compareDate = new Date(dateString);
            const dateValue = new Date(value);
            if (dateValue.getTime() > compareDate.getTime()) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDateExceedOneYearTodayAttribute(attributeName, context, value, dataError, dataErrorParent) {
        if (dataError.hasAttribute(attributeName)) {
            const today = new Date();
            const oneYearFromToday = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
            const dateValue = new Date(value);
            if (dateValue.getTime() > oneYearFromToday.getTime()) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDatePreceedAttribute(attributeName, context, value, dataError, dataErrorParent, form) {
        if (dataError.hasAttribute(attributeName)) {
            var dateInput = form.querySelector('[' +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                '=' +
                context.dataPreceeds +
                ']');
            if (!dateInput) {
                return false;
            }
            const futureDateString = this.getValue(dateInput);
            if (StringUtils.isEmpty(futureDateString)) {
                return false;
            }
            const futureDate = new Date(futureDateString);
            const dateValue = new Date(value);
            const daysDifference = Math.floor((futureDate.getTime() - dateValue.getTime()) /
                (1000 * 60 * 60 * 24));
            if (daysDifference > 365) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static setErrorMessage(dataErrorElement, context, dataErrorParent) {
        var _errorMessageNode = this.getErrorMessageNode(dataErrorParent);
        _errorMessageNode.textContent = TemplateService.process(dataErrorElement.textContent, context);
        if (dataErrorElement.hasAttribute(FormAttributes.DATA_ARIA_TEXT_ATTRIBUTE_NAME)) {
            _errorMessageNode.setAttribute('aria-text', TemplateService.process(dataErrorElement.getAttribute(FormAttributes.DATA_ARIA_TEXT_ATTRIBUTE_NAME), context));
        }
        else {
            _errorMessageNode.removeAttribute(FormAttributes.DATA_ARIA_TEXT_ATTRIBUTE_NAME);
        }
    }
    static getErrorMessageNode(dataErrorParent) {
        var _dataErrorMessageNode = dataErrorParent.querySelector('[' + FormAttributes.DATA_ERROR_MESSAGE_ATTRIBUTE_NAME + ']');
        if (_dataErrorMessageNode == null) {
            _dataErrorMessageNode = dataErrorParent.querySelector('[' + FormAttributes.DATA_ERROR_ATTRIBUTE_NAME + ']');
            _dataErrorMessageNode = document.createElement(_dataErrorMessageNode.tagName);
            _dataErrorMessageNode.setAttribute(FormAttributes.DATA_ERROR_MESSAGE_ATTRIBUTE_NAME, '');
            _dataErrorMessageNode.setAttribute('class', 'hidden');
            _dataErrorMessageNode.setAttribute('aria-hidden', 'true');
            dataErrorParent.appendChild(_dataErrorMessageNode);
        }
        _dataErrorMessageNode.setAttribute('class', 'error-message');
        return _dataErrorMessageNode;
    }
}

const formComponentCss = "snt-form *{-webkit-box-sizing:border-box;box-sizing:border-box}snt-form .form-control{border:1px solid #6f6f6f;border-radius:0;color:#323232;line-height:26px}snt-form .form-control:hover{-webkit-box-shadow:none;box-shadow:none;border:1px solid #147582}snt-form .form-control:focus{-webkit-box-shadow:none;box-shadow:none;border:3px solid #147582}snt-form label{font-family:\"Averta-ExtraBold\", sans-serif !important;font-weight:500 !important;margin-bottom:5px;font-size:14px}snt-form .form-row{margin-bottom:26px}snt-form p{margin-bottom:26px}snt-form textarea{min-height:300px}snt-form snt-button.submit-button button{display:block;margin:auto;width:100%}snt-form .hidden{display:none}snt-form .error-message{font-family:\"Averta-Regular\", sans-serif;margin-top:5px;color:#e12160;font-size:12px;position:absolute}@media (min-width: 768px){snt-form label{font-size:16px}snt-form .form-row{margin-bottom:30px}snt-form p{margin-bottom:30px}snt-form .error-message{font-size:14px}snt-form snt-button.submit-button button{width:auto}}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const FormComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.formSubmit = createEvent(this, "formSubmit", 7);
    }
    /**
     * Methods
     */
    openErrorModal(actionData, modalId) {
        return __awaiter(this, void 0, void 0, function* () {
            Action.openErrorModal(actionData, modalId);
        });
    }
    openSuccessModal(actionData, modalId) {
        return __awaiter(this, void 0, void 0, function* () {
            Action.openSuccessModal(actionData, modalId);
        });
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            this.formEl.reset();
            const recaptchaElement = this.formEl.querySelector(RecaptchaComponent.TAG_NAME);
            if (recaptchaElement) {
                yield recaptchaElement.reset();
            }
        });
    }
    componentDidLoad() {
        var _elements = this.getFormElements();
        _elements.forEach((_element) => {
            DomUtils.attachHandler(_element, "invalid", this.onInvalidateFormElementHandler.bind(this));
            DomUtils.attachHandler(_element, "change", this.onChangeInputBlankHandler.bind(this));
            if (_element.tagName !== "SELECT") {
                DomUtils.attachHandler(_element, "blur", this.onBlurFormElementHandler.bind(this));
            }
            if (_element.tagName === "SELECT" || _element.type === "checkbox") {
                DomUtils.attachHandler(_element, "change", this.onChangeValueFormElementHandler.bind(this));
            }
        });
        // Attach onSubmit to call callback handler
        if (this.submitCallBackhandler) {
            DomUtils.attachHandler(this.formEl, "submit", this.submitCallBackhandler.bind(this));
        }
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            var _result = {
                method: this.formEl.getAttribute("method"),
                action: this.formEl.getAttribute("action"),
                content: this.getPayload(),
            };
            return _result;
        });
    }
    onChangeInputBlankHandler(event) {
        const element = event.target;
        if (element.hasAttribute(FormAttributes.DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME)) {
            const _form = element.form;
            const inputElement = _form.querySelector("[" +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                "=" +
                element.getAttribute(FormAttributes.DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME) +
                "]");
            if (inputElement) {
                inputElement.value = '';
            }
        }
    }
    onChangeValueFormElementHandler(event) {
        FormService.process(event);
        event.preventDefault();
    }
    onBlurFormElementHandler(event) {
        var _element = event.target;
        var _value = FormService.getValue(_element);
        if (StringUtils.hasLength(_value)) {
            FormService.process(event);
        }
        else {
            var _form = _element.form;
            var _dataErrorParent = _form.querySelector("[" +
                FormAttributes.DATA_FOR_ATTRIBUTE_NAME +
                "=" +
                _element.id +
                "]");
            if (_dataErrorParent) {
                var _errorMessageNode = FormService.getErrorMessageNode(_dataErrorParent);
                _errorMessageNode.classList.add("hidden");
            }
        }
        event.preventDefault();
    }
    onInvalidateFormElementHandler(event) {
        FormService.process(event);
        event.preventDefault();
    }
    getPayload() {
        var _result = {};
        var _elements = this.getFormElements();
        _elements.forEach((_element) => {
            _result[this.getPayloadNameForElement(_element)] = FormService.getValue(_element);
        });
        return _result;
    }
    submitForm(e) {
        this.formSubmit.emit(e);
        e.preventDefault();
    }
    getFormElements() {
        return this.formEl.querySelectorAll("input[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "], select[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "], textarea[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "]");
    }
    getPayloadNameForElement(element) {
        if (DomUtils.hasValidStringAttribute(element, FormAttributes.DATA_FIELD_ATTRUBITE_NAME)) {
            return element.getAttribute(FormAttributes.DATA_FIELD_ATTRUBITE_NAME);
        }
        else if (DomUtils.hasValidStringAttribute(element, "name")) {
            return element.getAttribute("name");
        }
        throw "Element " + element + " does not have a payload name.";
    }
    render() {
        return (h("form", { ref: (el) => (this.formEl = el), onSubmit: (e) => {
                this.submitForm(e);
            } }, h("slot", null)));
    }
};
FormComponent.style = formComponentCss;

export { FormComponent as snt_form };
