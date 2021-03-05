import { S as StringUtils } from './StringUtils-617c552f.js';

class AbstractContentBuilder {
    withConditionalBooleanArgument(fn, arg) {
        return (arg) ? this.withConditionalArguments(fn, arg) : this;
    }
    withConditionalObjectArgument(fn, arg) {
        return (arg) ? this.withConditionalArguments(fn, arg) : this;
    }
    withConditionalStringArgument(fn, arg) {
        return (StringUtils.notEmpty(arg)) ? this.withConditionalArguments(fn, arg) : this;
    }
    withConditionalArguments(fn, ...args) {
        return (args && args.length > 0) ? fn.apply(this, args) : this;
    }
}

class AbstractUrlContentBuilder extends AbstractContentBuilder {
    withUrl(url) {
        this.url = url;
        return this;
    }
    async build() {
        if (this.url) {
            return fetch(this.url.href).then(res => res.text()).then((body) => {
                return this.parse(body);
            });
        }
        throw new Error("No content has been defined using the builder.");
    }
}

class HtmlContentBuilder extends AbstractUrlContentBuilder {
    constructor() {
        super();
    }
    static newInstance() {
        return new HtmlContentBuilder();
    }
    withValue(value) {
        this.value = value;
        this.url = null;
        return this;
    }
    withParent(parent) {
        this.parentElement = parent;
        this.value = null;
        return this;
    }
    parse(value) {
        if (window.document["documentMode"] === undefined) {
            let divElement = document.createElement("div");
            let template = document.createElement("template");
            template.innerHTML = value;
            divElement.appendChild(template.content);
            this.setJavascript(divElement);
            return document.body.appendChild(divElement);
        }
        else {
            let divElement = document.createElement("div");
            divElement.innerHTML = value;
            return divElement;
        }
    }
    async build() {
        this.parentElement =
            this.parentElement || document.createElement("div");
        if (StringUtils.isEmpty(this.value) && this.url) {
            this.parentElement.appendChild(await super.build());
        }
        else if (StringUtils.notEmpty(this.value)) {
            this.parentElement.appendChild(this.parse(this.value));
        }
        else {
            throw new Error("No HTML content has been defined using this builder.");
        }
        return this.parentElement;
    }
    setJavascript(elm) {
        Array.from(elm.querySelectorAll("script")).forEach((oldScript) => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }
}

export { AbstractUrlContentBuilder as A, HtmlContentBuilder as H };
