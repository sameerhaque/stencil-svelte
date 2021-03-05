var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let SearchComboboxExample = class SearchComboboxExample {
    static getSearchSuggestions(keywords) {
        if (keywords && keywords !== '') {
            return [{
                    title: 'What is my name',
                    question: 'What is my name?',
                    answer: 'Peter Parker',
                    faqUrl: 'www.yahoo.com'
                },
                {
                    title: 'Who is Batman',
                    question: 'Who is Batman?',
                    answer: 'Bruce Wayne',
                    faqUrl: 'www.google.com'
                }];
        }
        else {
            return [];
        }
    }
    render() {
        const languageString1 = `{\"search\":\"Rechercher\"}`;
        return (h("div", null,
            h("a", { href: "javascript:void(0);", title: "Focusable Element 1" }, "Focusable Element 1"),
            h("br", null),
            h("br", null),
            h("h4", { id: "search-example-1-label" }, "Sonnet recherche"),
            h("snt-search-combobox", { id: "search-example-1", class: "theme-default", "search-function-ref": "SearchComboboxExample.getSearchSuggestions", "aria-labelledby": "search-example-1-label", "auto-complete": true, "language-string": languageString1, "submit-url": "https://test-economical.dotcmscloud.com/FAQs/results?foo=123", "search-para-name": "es" }),
            h("br", null),
            h("a", { href: "javascript:void(0);", title: "Focusable Element 2" }, "Focusable Element 2")));
    }
};
SearchComboboxExample = __decorate([
    Component({
        tag: 'search-combobox-example',
        shadow: false
    })
], SearchComboboxExample);
export { SearchComboboxExample };
window.SearchComboboxExample = SearchComboboxExample;
