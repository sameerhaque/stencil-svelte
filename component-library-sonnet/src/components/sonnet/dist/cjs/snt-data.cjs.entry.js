'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
require('./StringUtils-cfa686e8.js');
const HtmlContentBuilder = require('./HtmlContentBuilder-acff4f73.js');

class ContentData {
    constructor(type, lazy = true, url, content) {
        this.type = type;
        this.lazy = lazy;
        this.url = url;
        this.content = content;
    }
}

var ContentTypeEnum;
(function (ContentTypeEnum) {
    ContentTypeEnum["HTML"] = "html";
    ContentTypeEnum["JSON"] = "json";
    ContentTypeEnum["XML"] = "xml";
    ContentTypeEnum["TEXT"] = "text";
})(ContentTypeEnum || (ContentTypeEnum = {}));
(function (ContentTypeEnum) {
    function exists(value) {
        if (value) {
            return (ContentTypeEnum[value.toUpperCase().trim()] != null);
        }
        throw new Error(`Argument with value ${value} must be a valid string.`);
    }
    ContentTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return ContentTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error(`Argument text with value ${text} does not exist.`);
    }
    ContentTypeEnum.findByValue = findByValue;
})(ContentTypeEnum || (ContentTypeEnum = {}));

class JsonUrlContentBuilder extends HtmlContentBuilder.AbstractUrlContentBuilder {
    constructor() {
        super();
    }
    static newInstance() {
        return new JsonUrlContentBuilder();
    }
    withValue(value) {
        this.value = value;
        this.url = null;
        return this;
    }
    build() {
        if ((!(this.value)) && (this.url)) {
            return super.build();
        }
        else if (this.value) {
            return this.parse(this.value);
        }
        throw new Error("No JSON content has been defined using this builder.");
    }
    parse(value) {
        return JSON.parse(value);
    }
}

class ContentParser {
    static parse(value) {
        switch (value.type) {
            case ContentTypeEnum.HTML:
                let htmlBuilder = HtmlContentBuilder.HtmlContentBuilder.newInstance();
                htmlBuilder.withConditionalStringArgument(htmlBuilder.withValue, value.content);
                htmlBuilder.withConditionalObjectArgument(htmlBuilder.withUrl, value.url);
                return htmlBuilder;
            case ContentTypeEnum.JSON:
                let jsonBuilder = JsonUrlContentBuilder.newInstance();
                jsonBuilder.withConditionalStringArgument(jsonBuilder.withValue, value.content);
                jsonBuilder.withConditionalObjectArgument(jsonBuilder.withUrl, value.url);
                return jsonBuilder;
            // case ContentTypeEnum.XML:
            // case ContentTypeEnum.TEXT:
            default:
                throw new Error(`Unable to locate content builder for type ${value.type}`);
        }
    }
}

const DataComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async getData() {
        return this.builder.build();
    }
    componentWillLoad() {
        let url = (this.src ? new URL(this.src) : null);
        this.builder = ContentParser.parse(new ContentData(ContentTypeEnum.findByValue(this.type), this.lazyLoad, url, this.data));
    }
    render() {
        return (index.h(index.Host, null));
    }
    get element() { return index.getElement(this); }
};
DataComponent.TAG_NAME = "snt-data";

exports.snt_data = DataComponent;
