'use strict';

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');
const EventConfigurationBuilder = require('./EventConfigurationBuilder-ecdedb94.js');

const ActionButtonComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.actionReference = StringUtils.StringUtils.empty();
        this.actionData = StringUtils.StringUtils.empty();
        this.iconClassName = StringUtils.StringUtils.empty();
        this.linkTitle = StringUtils.StringUtils.empty();
        this.styleClasses = StringUtils.StringUtils.empty();
        this.buttonId = StringUtils.StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    async getEventConfiguration() {
        return this.eventConfiguration;
    }
    onSntButtonClick(event) {
        EventConfigurationBuilder.EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    onSntButtonKeyDown(event) {
        EventConfigurationBuilder.EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentDidLoad() {
        if (StringUtils.StringUtils.isEmpty(this.actionReference)) {
            throw new Error("ActionButtonComponent must contain a valid action-reference attribute!");
        }
        if (!StringUtils.StringUtils.isEmpty(this.actionData)) {
            try {
                this.actionDataJsonObj = JSON.parse(this.actionData);
            }
            catch (error) {
                throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.");
            }
        }
        this.eventConfiguration = EventConfigurationBuilder.EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    }
    render() {
        const icon = (StringUtils.StringUtils.notEmpty(this.iconClassName)) ? index.h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const button = index.h("snt-button", { "button-id": this.buttonId, styleClasses: WebUtils.WebUtils.generateClasses([], this.styleClasses), "hidden-title": this.linkTitle }, icon, this.linkTitle);
        const events = (this.element.children.length > 0) ? index.h("slot", null) : [index.h("snt-event", { type: "click" }), index.h("snt-event", { type: "keydown", filters: "space" })];
        return [events, button];
    }
    get element() { return index.getElement(this); }
};
ActionButtonComponent.TAG_NAME = "snt-action-button";

exports.ActionButtonComponent = ActionButtonComponent;
