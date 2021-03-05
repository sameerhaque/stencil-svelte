import { r as registerInstance, h, g as getElement, H as Host } from './index-79f6678c.js';
import './StringUtils-617c552f.js';
import { A as AbstractUrlContentBuilder, H as HtmlContentBuilder } from './HtmlContentBuilder-033ff7c8.js';

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

class JsonUrlContentBuilder extends AbstractUrlContentBuilder {
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
                let htmlBuilder = HtmlContentBuilder.newInstance();
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
        registerInstance(this, hostRef);
    }
    async getData() {
        return this.builder.build();
    }
    componentWillLoad() {
        let url = (this.src ? new URL(this.src) : null);
        this.builder = ContentParser.parse(new ContentData(ContentTypeEnum.findByValue(this.type), this.lazyLoad, url, this.data));
    }
    render() {
        return (h(Host, null));
    }
    get element() { return getElement(this); }
};
DataComponent.TAG_NAME = "snt-data";

export { DataComponent as snt_data };
