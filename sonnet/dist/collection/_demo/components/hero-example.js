import { h, Component } from "@stencil/core";
export class HeroExample {
    constructor() {
        this.properties = `
    {
        "extra_small":{
           "logoUrl": "https://test-economical.dotcmscloud.com/dA/2d4022a9de/tp_SonnetxBoom_notagline_bi.svg",
           "logoAltText": "WealthSimple logo",
           "styles":{
              "backgroundImage":"https://test-economical.dotcmscloud.com/dA/39cf9b8cf9/HERO-P_auto@2x.jpg"}
        },
        "small":{
            "logoUrl": "https://test-economical.dotcmscloud.com/dA/2d4022a9de/tp_SonnetxBoom_notagline_bi.svg",
            "logoAltText": "WealthSimple logo",
           "styles":{
              "backgroundImage":"https://test-economical.dotcmscloud.com/dA/39cf9b8cf9/HERO-P_auto@2x.jpg "
           }
        },
        "medium":{
            "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
            "logoAltText": "WealthSimple logo",
           "styles":{
              "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/ad5e04f1-e82b-450a-ae5f-f10aa767c02e/fileAsset?language_id=1"
           }
        },
        "large":{
            "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
            "logoAltText": "WealthSimple logo",
           "styles":{
              "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/0808390f-92e3-4655-9dae-2a48d900e6f6/fileAsset?language_id=1"
           }
        },
        "extra_large":{
            "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
            "logoAltText": "WealthSimple logo",
           "styles":{
              "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/729e08b0-1ab5-4c3b-8bb9-5d62a4e1e953/fileAsset?language_id=1"
           }
        }
     }`;
    }
    render() {
        return (h("div", null,
            h("snt-hero", { properties: this.properties },
                h("div", { slot: "content" },
                    h("h1", null, "Insurance claims made easy 123"),
                    h("p", null, "Our claims professionals are here to help, 24/7."),
                    h("div", { class: "float-left" },
                        h("button-link-group", null,
                            h("button-link", { href: "https://www.sonnet.ca/claims/auto", target: "_self", class: "theme-default hydrated" }, "Make an Auto Claim"))),
                    h("div", { class: "float-left" },
                        h("button-link-group", null,
                            h("button-link", { href: "https://www.sonnet.ca/claims/home", target: "_self", class: "theme-secondary hydrated" }, "Make a Home Claim")))))));
    }
    static get is() { return "hero-example"; }
    static get originalStyleUrls() { return {
        "$": ["../../_scss/vendor/bootstrap.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../../_scss/vendor/bootstrap.css"]
    }; }
    static get assetsDirs() { return ["asset/images/"]; }
}
