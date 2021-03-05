import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { a as EventConfigurationUtils, E as EventConfigurationBuilder } from './EventConfigurationBuilder-3fc7d509.js';

const ActionButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.buttonId = StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    async getEventConfiguration() {
        return this.eventConfiguration;
    }
    onSntButtonClick(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    onSntButtonKeyDown(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentDidLoad() {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("ActionButtonComponent must contain a valid action-reference attribute!");
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
    }
    render() {
        const icon = (StringUtils.notEmpty(this.iconClassName)) ? h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const button = h("snt-button", { "button-id": this.buttonId, styleClasses: WebUtils.generateClasses([], this.styleClasses), "hidden-title": this.linkTitle }, icon, this.linkTitle);
        const events = (this.element.children.length > 0) ? h("slot", null) : [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })];
        return [events, button];
    }
    get element() { return getElement(this); }
};
ActionButtonComponent.TAG_NAME = "snt-action-button";

export { ActionButtonComponent as A };
