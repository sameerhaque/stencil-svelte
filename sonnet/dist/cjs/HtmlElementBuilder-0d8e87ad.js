'use strict';

const WebUtils = require('./WebUtils-7da67880.js');
const accordionComponent = require('./accordion-component-364ede80.js');

class AccordionComponentBuilder {
    constructor() { }
    static newInstance() {
        return new AccordionComponentBuilder();
    }
    withSummary(summary) {
        this.summary = summary;
        return this;
    }
    withDetails(details) {
        this.details = details;
        return this;
    }
    build() {
        let component = document.createElement(accordionComponent.AccordionComponent.TAG_NAME);
        // TODO: Determine if we want an API for adding details and summary
        WebUtils.WebUtils.appendElement(component, this.summary, false);
        WebUtils.WebUtils.appendElement(component, this.details, false);
        return component;
    }
}

class HtmlElementBuilder {
    constructor() { }
    static newInstance() {
        return new HtmlElementBuilder();
    }
    withTag(value) {
        this.tag = value;
        return this;
    }
    withInnerText(value) {
        this.innerText = value;
        return this;
    }
    withAttribute(key, value) {
        this.attributes = this.attributes || new Map();
        this.attributes.set(key, value);
        return this;
    }
    withClass(value) {
        this.classList = this.classList || new Set();
        this.classList.add(value);
        return this;
    }
    build() {
        if (!(this.tag)) {
            throw new Error("HTML Element cannot be created without a valid tag.");
        }
        let element = document.createElement(this.tag);
        this.applyInnerText(element);
        this.applyAttributes(element);
        this.applyClasses(element);
        return element;
    }
    applyInnerText(element) {
        if (this.innerText && this.innerText.length > 0) {
            element.innerText = this.innerText;
        }
    }
    applyAttributes(element) {
        if (this.attributes && this.attributes.size > 0) {
            this.attributes.forEach((value, key) => {
                element.setAttribute(key, value);
            });
        }
    }
    applyClasses(element) {
        if (this.classList && this.classList.size > 0) {
            this.classList.forEach((value) => {
                element.classList.add(value);
            });
        }
    }
}

exports.AccordionComponentBuilder = AccordionComponentBuilder;
exports.HtmlElementBuilder = HtmlElementBuilder;
