import { newSpecPage } from "@stencil/core/testing";
import { SearchResultListComponent } from "./search-result-list-component";
import { SearchResultComponent } from "./search-result-component";
const faqResults = `[
    {"question":"Question 1?", "answer" : "This is answer 1", "faqUrl": "https://www.sonnet.ca"},
    {"question":"Question 2?", "answer" : "This is answer 2", "faqUrl": "https://www.sonnet.ca"},
    {"question":"Question 3?", "answer" : "This is answer 3", "faqUrl": "https://www.sonnet.ca"},
    {"question":"Question 4?", "answer" : "This is answer 4", "faqUrl": "https://www.sonnet.ca"},
    {"question":"Question 5?", "answer" : "This is answer 5", "faqUrl": "https://www.sonnet.ca"}
]`;
describe("faq-result-list-component", () => {
    it("should parse the JSON string and display all FAQ result items", async () => {
        const specPageOptions = {
            components: [SearchResultListComponent, SearchResultComponent],
            html: `<snt-search-result-list search-result-list-json = '${faqResults}'></snt-search-result-list>`
        };
        const page = await newSpecPage(specPageOptions);
        const searchResultList = page.root.querySelectorAll("snt-search-result");
        expect(searchResultList.length).toBe(5);
    });
});
