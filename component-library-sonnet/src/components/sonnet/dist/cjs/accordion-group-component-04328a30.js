'use strict';

const index = require('./index-b8997649.js');
const accordionComponent = require('./accordion-component-364ede80.js');

const accordionGroupComponentCss = ".white-fill snt-accordion-group,snt-accordion-group.white-fill{display:block;background-color:#ffffff}.neutral-fill snt-accordion-group,snt-accordion-group.neutral-fill{display:block;background-color:#f8f8f8}";

const AccordionGroupComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.multiExpand = false;
    }
    async expandAll() {
        let children = this.element.querySelectorAll(`${accordionComponent.AccordionComponent.TAG_NAME}:not([expanded])`);
        children.forEach((child) => {
            child.expand().then(null);
        });
    }
    async collapseAll() {
        let children = this.element.querySelectorAll(`${accordionComponent.AccordionComponent.TAG_NAME}[expanded]`);
        children.forEach((child) => {
            child.collapse().then(null);
        });
    }
    async addAccordion(accordion) {
        // TODO: Add code to inject in position of other accordion
        this.element.appendChild(accordion);
    }
    componentWillRender() {
        if (this.element) {
            if (!this.multiExpand) {
                let numberOfExpandedItems = 0;
                this.element.querySelectorAll("snt-accordion").forEach(c => {
                    if (c.hasAttribute("expanded")) {
                        numberOfExpandedItems++;
                    }
                    if (numberOfExpandedItems >= 2) {
                        c.expanded = false;
                    }
                });
            }
        }
    }
    render() {
        return (index.h("snt-layout", null, index.h("slot", null)));
    }
    onAccordionEvent(event) {
        if ((event.detail.state == accordionComponent.AccordionStateEnum.EXPANDED) && (!(this.multiExpand))) {
            this.collapseSibling(event);
        }
    }
    collapseSibling(event) {
        let children = this.element.querySelectorAll(`${accordionComponent.AccordionComponent.TAG_NAME}[expanded]`);
        children.forEach((child) => {
            if (child != event.target) {
                child.collapse().then(null);
            }
        });
    }
    get element() { return index.getElement(this); }
};
AccordionGroupComponent.TAG_NAME = "snt-accordion-group";
AccordionGroupComponent.style = accordionGroupComponentCss;

exports.AccordionGroupComponent = AccordionGroupComponent;
