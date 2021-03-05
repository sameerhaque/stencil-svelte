import { FeatureLeftComponent } from "./feature-left-component";
import { newSpecPage } from "@stencil/core/testing";
describe("feature-left-component", () => {
    const specPageOptions = {
        components: [FeatureLeftComponent],
        html: `<snt-feature-left img-src='https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg'
        title-text="What do you want to know about landlord insurance?" tag-text='at home' time-to-read="5 min read" blog-link="https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance">
        </snt-feature-left>`
    };
    it("renders image", async () => {
        const page = await newSpecPage(specPageOptions);
        const articleImage = page.root.querySelector("snt-image");
        expect(articleImage.getAttribute("data-src")).toBe("https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg");
    });
    it("renders tag", async () => {
        const page = await newSpecPage(specPageOptions);
        const articleTag = page.root.querySelector("div.article-tag");
        expect(articleTag.innerHTML).toContain("at home");
    });
    it("renders title", async () => {
        const page = await newSpecPage(specPageOptions);
        const articleTitle = page.root.querySelector("div.article-title");
        expect(articleTitle.innerHTML).toContain("What do you want to know about landlord insurance?");
    });
    it("renders minutes to read", async () => {
        const page = await newSpecPage(specPageOptions);
        const articleMinsToRead = page.root.querySelector("span.article-min-read");
        expect(articleMinsToRead.innerHTML).toContain("5 min read");
    });
    it("renders blog link", async () => {
        const page = await newSpecPage(specPageOptions);
        const articleLink = page.root.querySelector("a");
        expect(articleLink.getAttribute("href")).toBe("https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance");
    });
});
