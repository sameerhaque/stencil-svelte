var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
var alertComponentCss = "snt-alert{display:block;border-radius:0 !important;padding-left:0 !important;padding-right:0 !important;margin-bottom:0 !important;border:0 !important}snt-alert.alert-grey{background-color:#F8F8F8}snt-alert.alert-primary{background-color:#147582}@media (min-width: 1440px){snt-alert .alert-container{max-width:1170px;margin:0 auto}}snt-alert.alert-primary p2{color:#ffffff !important;display:block}@media (min-width: 1440px){snt-alert.alert-primary p2{max-width:95%}}@media (max-width: 480px){snt-alert.alert-primary p2{max-width:85%}}snt-alert.alert-primary p2 a{color:#ffffff}.alert-dismissible .close{position:relative !important;padding:0 !important;opacity:1;top:4px !important}.close{position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:1}.close:hover{opacity:0.8}.close:before,.close:after{position:absolute;left:20px;content:\" \";height:20px;width:1.5px}.alert-grey .close:before,.alert-grey .close:after{background-color:#147582}.alert-primary .close:before,.alert-primary .close:after{background-color:#F8F8F8}.close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:0px}.close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:0px}";
var AlertsBanner = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.dismissed = createEvent(this, "dismissed", 7);
        this.dismissible = false;
        this.animatable = true;
        this.type = 'warning';
        this.explorerOnly = StringUtils.empty();
    }
    class_1.prototype.dismiss = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.show = false;
                setTimeout(function () {
                    _this.dismissed(_this.el);
                }, 450);
                setTimeout(function () {
                    _this.el.parentNode.removeChild(_this.el);
                }, 100);
                this.setCookies();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.setShowFadeState();
        this.checkCookies();
        this.checkIE11();
    };
    class_1.prototype.render = function () {
        var _a;
        return (h(Host, { class: (_a = {
                    alert: true
                },
                _a["alert-" + this.type] = true,
                _a['alert-dismissible'] = this.dismissible,
                _a.show = this.animatable && this.show,
                _a.fade = this.animatable && this.fade,
                _a), role: "alert" }, h("snt-layout", { padding: "vertical-only" }, h("div", { class: 'alert-container' }, this.getDismissButton(), h("p2", null, h("slot", null))))));
    };
    class_1.prototype.setShowFadeState = function () {
        if (this.animatable) {
            this.show = true;
            this.fade = true;
        }
    };
    class_1.prototype.getDismissButton = function () {
        if (!this.dismissible)
            return null;
        return (h("button", { type: "button", class: "close", "aria-label": "Close", onClick: this.dismiss.bind(this) }, h("span", { "aria-hidden": "true" })));
    };
    class_1.prototype.setCookies = function () {
        var now = new Date(), time = now.getTime();
        time += 30 * 60 * 1000;
        now.setTime(time);
        document.cookie = "closedAlert-" + this.el.id + "=true; expires= " + now.toUTCString() + "; path=/";
    };
    class_1.prototype.checkCookies = function () {
        var _this = this;
        if (document.cookie.split(';').some(function (item) { return item.includes("closedAlert-" + _this.el.id + "=true"); })) {
            this.el.style.display = 'none';
        }
    };
    class_1.prototype.checkIE11 = function () {
        if (StringUtils.hasValue(this.explorerOnly) && window.document['documentMode'] === undefined) {
            this.el.style.display = 'none';
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "animatable": ["componentWillLoad"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AlertsBanner.style = alertComponentCss;
export { AlertsBanner as snt_alert };
