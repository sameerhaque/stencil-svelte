import { r as registerInstance, h } from './index-79f6678c.js';

const SearchComboboxExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h("div", null, h("a", { href: "javascript:void(0);", title: "Focusable Element 1" }, "Focusable Element 1"), h("br", null), h("br", null), h("h4", { id: "search-example-1-label" }, "Sonnet recherche"), h("snt-search-combobox", { id: "search-example-1", class: "theme-default", "search-function-ref": "SearchComboboxExample.getSearchSuggestions", "aria-labelledby": "search-example-1-label", "auto-complete": true, "language-string": languageString1, "submit-url": "https://test-economical.dotcmscloud.com/FAQs/results?foo=123", "search-para-name": "es" }), h("br", null), h("a", { href: "javascript:void(0);", title: "Focusable Element 2" }, "Focusable Element 2")));
    }
};
window.SearchComboboxExample = SearchComboboxExample;

export { SearchComboboxExample as search_combobox_example };
