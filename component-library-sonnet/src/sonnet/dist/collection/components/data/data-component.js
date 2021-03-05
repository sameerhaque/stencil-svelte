import { h, Component, Element, Host, Prop, Method } from "@stencil/core";
import { ContentData } from "../../core/content/domain/ContentData";
import { ContentParser } from "../../core/content/ContentParser";
import { ContentTypeEnum } from "../../core/content/builder/domain/ContentTypeEnum";
export class DataComponent {
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
    static get is() { return "snt-data"; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false
        },
        "lazyLoad": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lazy-load",
            "reflect": false
        },
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "data": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "getData": {
            "complexType": {
                "signature": "() => Promise<Object>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Object": {
                        "location": "global"
                    }
                },
                "return": "Promise<Object>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
DataComponent.TAG_NAME = "snt-data";
