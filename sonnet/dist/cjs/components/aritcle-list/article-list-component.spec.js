import { newSpecPage } from "@stencil/core/testing";
import { ArticleListComponent } from "./article-list-component";
import { ArticleLinkComponent } from "../article-link/article-link-component";
describe("ArticleListComponent", () => {
    it("has a title", async () => {
        const specPageOptions = {
            components: [ArticleListComponent, ArticleLinkComponent],
            html: `<snt-article-list heading="My Heading" articlesJson='{ "articles": [
                {
                    "href": "https://www.google.com",
                    "ariaLabel": "aria label",
                    "hiddenTitle": "",
                    "copy": "Click here to go to Google"
                }] }'></snt-article-list>`,
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector(".article-title");
        expect(titleElement.innerText).toEqual("My Heading");
    });
    it("has an article list link", async () => {
        const specPageOptions = {
            components: [ArticleListComponent],
            html: `<snt-article-list heading="My Heading" articles-json='{ "articles": [
                {
                    "href": "https://www.google.com",
                    "ariaLabel": "aria label",
                    "hiddenTitle": "",
                    "copy": "Click here to go to Google"
                }] }'></snt-article-list>`,
        };
        const page = await newSpecPage(specPageOptions);
        const articleLink = page.root.querySelectorAll("snt-article-link");
        expect(articleLink.length).toEqual(1);
    });
    it("sets the article list from variable", async () => {
        const specPageOptions = {
            components: [ArticleListComponent],
            html: `<snt-article-list heading="My Heading"></snt-article-list>`,
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.articles = [
            {
                href: "https://www.google.com",
                ariaLabel: "aria label",
                hiddenTitle: "",
                copy: "Click here to go to Google",
            },
        ];
        await page.waitForChanges();
        const articleLink = page.root.querySelectorAll("snt-article-link");
        expect(articleLink.length).toEqual(1);
    });
});
