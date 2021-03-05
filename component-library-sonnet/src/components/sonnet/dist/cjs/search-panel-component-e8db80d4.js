'use strict';

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const WebUtils = require('./WebUtils-7da67880.js');

const searchBarComponentCss = "snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";

const SearchBarComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.languageJson = StringUtils.StringUtils.empty();
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") || !this.active;
        return this.active;
    }
    watchActive(active) {
        if (active) {
            this.lastActiveElement = document.activeElement;
        }
    }
    componentDidUpdate() {
        this.setFocus();
    }
    setFocus() {
        if (this.active) {
            const input = this.searchTypeahead.querySelector("input");
            if (input) {
                input.focus();
            }
        }
        else {
            this.lastActiveElement.focus();
        }
    }
    render() {
        return (index.h(index.Host, { onSntBackdropTap: this.toggleActive.bind(this) }, index.h("snt-pane", { styleClasses: "d-flex justify-content-center align-items-center" }, index.h("snt-search-typeahead", { "search-combobox-id": "global-search-combobox", ref: (el) => this.searchTypeahead = el, languageJson: this.languageJson }), index.h("snt-action-button", { "action-reference": "Action.toggleSearch", "icon-class-name": "iconNavClose" })), ",", index.h("snt-backdrop", null)));
    }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
};
SearchBarComponent.TAG_NAME = "snt-search-bar";
SearchBarComponent.style = searchBarComponentCss;

const searchPanelComponentCss = "snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.3s ease-out;transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{-webkit-transform:translateX(0%);transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block}";

const SearchPanelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.languageStrings = {};
        this.active = false;
        this.styleClasses = StringUtils.StringUtils.empty();
        this.languageJson = StringUtils.StringUtils.empty();
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        return this.active;
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
    }
    render() {
        return (index.h(index.Host, { class: WebUtils.WebUtils.generateClasses([], this.styleClasses) }, index.h("snt-action-button", { actionReference: "Action.toggleSearch", linkTitle: this.languageStrings["back"] || "Back", iconClassName: "iconChevron" }), index.h("snt-search-typeahead", { "search-combobox-id": "global-search-panel-combobox", languageJson: this.languageJson })));
    }
};
SearchPanelComponent.TAG_NAME = "snt-search-panel";
SearchPanelComponent.style = searchPanelComponentCss;

exports.SearchBarComponent = SearchBarComponent;
exports.SearchPanelComponent = SearchPanelComponent;
