import { newSpecPage } from "@stencil/core/testing";
import { TwoColumnFeatureComponent } from "./two-column-feature-component";
describe("TwoColumnFeatureComponent", () => {
    it("has a title", async () => {
        const specPageOptions = {
            components: [TwoColumnFeatureComponent],
            html: `<snt-two-column-feature title-string="My Title">
            </snt-two-column-feature>`
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector("h2");
        expect(titleElement.innerText).toEqual("My Title");
    });
    it("has copy text", async () => {
        const specPageOptions = {
            components: [TwoColumnFeatureComponent],
            html: `<snt-two-column-feature title-string="My Title" copy-text="This is my content">
            </snt-two-column-feature>`
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector("div.content");
        expect(titleElement.innerText).toEqual("This is my content");
    });
    it("has a default button", async () => {
        const specPageOptions = {
            components: [TwoColumnFeatureComponent],
            html: `<snt-two-column-feature title-string="My Title"
                copy-text="This is my content"
                primary-button-text="Click Primary"
                primary-button-action="Action.logAction">
            </snt-two-column-feature>`
        };
        const page = await newSpecPage(specPageOptions);
        const buttonElement = page.root.querySelector("snt-action-button[style-classes='cta theme-default']");
        expect(buttonElement.getAttribute('link-title')).toEqual('Click Primary');
        expect(buttonElement.getAttribute('action-reference')).toEqual('Action.logAction');
    });
    it("has a secondary button", async () => {
        const specPageOptions = {
            components: [TwoColumnFeatureComponent],
            html: `<snt-two-column-feature title-string="My Title"
                copy-text="This is my content"
                secondary-button-text="Click Secondary"
                secondary-button-action="Action.logAction">
            </snt-two-column-feature>`
        };
        const page = await newSpecPage(specPageOptions);
        const buttonElement = page.root.querySelector("snt-action-button[style-classes='cta theme-secondary']");
        expect(buttonElement.getAttribute('link-title')).toEqual('Click Secondary');
        expect(buttonElement.getAttribute('action-reference')).toEqual('Action.logAction');
    });
    it("has a link", async () => {
        const specPageOptions = {
            components: [TwoColumnFeatureComponent],
            html: `<snt-two-column-feature title-string="My Title"
                copy-text="This is my content"
                link-title="Link title"
                link-url="https://google.com">
            </snt-two-column-feature>`
        };
        const page = await newSpecPage(specPageOptions);
        const linkElement = page.root.querySelector("snt-link");
        expect(linkElement.innerHTML).toEqual('<span class=\"link-content\">Link title</span>');
        expect(linkElement.getAttribute('href')).toEqual('https://google.com');
    });
});
