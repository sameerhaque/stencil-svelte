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
import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { a as EventConfigurationUtils, E as EventConfigurationBuilder } from './EventConfigurationBuilder-020e09d1.js';
import './ReflectionUtils-34647a76.js';
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ActionLinkComponent = /** @class */ (function () {
    function ActionLinkComponent(hostRef) {
        registerInstance(this, hostRef);
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.linkId = StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    ActionLinkComponent.prototype.getEventConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.eventConfiguration];
            });
        });
    };
    ActionLinkComponent.prototype.sntBtnEvent = function (event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    };
    ActionLinkComponent.prototype.componentWillLoad = function () {
        this.eventElems = this.element.querySelectorAll('snt-event');
    };
    ActionLinkComponent.prototype.componentDidLoad = function () {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("SntActionLink must contain a valid action-reference attribute!");
        }
        if (!StringUtils.isEmpty(this.actionData)) {
            try {
                this.actionDataJsonObj = JSON.parse(this.actionData);
            }
            catch (error) {
                throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.");
            }
        }
        this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    };
    ActionLinkComponent.prototype.render = function () {
        var icon = (StringUtils.notEmpty(this.iconClassName)) ? h("snt-icon", { styleClasses: this.iconClassName }) : "";
        var link = h("snt-link", { "link-id": this.linkId, classNames: this.styleClasses, href: "javascript:void(0);" }, icon, this.linkTitle, h("slot", null));
        var events = this.eventElems.length == 0 ? [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })] : '';
        return [events, link];
    };
    Object.defineProperty(ActionLinkComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return ActionLinkComponent;
}());
ActionLinkComponent.TAG_NAME = "snt-action-link";
export { ActionLinkComponent as snt_action_link };
