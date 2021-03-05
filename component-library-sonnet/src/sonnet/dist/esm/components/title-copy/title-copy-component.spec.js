import { newSpecPage } from "@stencil/core/testing";
import { TitleCopyComponent } from "./title-copy-component";
describe("TitleCopyComponent", () => {
    it("has a title", async () => {
        const specPageOptions = {
            components: [TitleCopyComponent],
            html: `<snt-title-copy title-string="My Title">
        </snt-title-copy>`
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector("h2");
        expect(titleElement.innerText).toEqual("My Title");
    });
    it("has content", async () => {
        const specPageOptions = {
            components: [TitleCopyComponent],
            html: `<snt-title-copy title-string="My Title">
          <div>This is my content</div>
      </snt-title-copy>`
        };
        const page = await newSpecPage(specPageOptions);
        const contentElement = page.root.querySelector('div.content');
        expect(contentElement.innerHTML.trim()).toEqual('<div>This is my content</div>');
    });
    it("has adds with-content class when there is slot content", async () => {
        const specPageOptions = {
            components: [TitleCopyComponent],
            html: `<snt-title-copy title-string="My Title">
          <div>This is my content</div>
      </snt-title-copy>`
        };
        const page = await newSpecPage(specPageOptions);
        const contentElement = page.root.querySelector('div.content');
        expect(contentElement.className).toContain('with-content');
    });
    it("has does not have with-content class when no slot content", async () => {
        const specPageOptions = {
            components: [TitleCopyComponent],
            html: `<snt-title-copy title-string="My Title"></snt-title-copy>`
        };
        const page = await newSpecPage(specPageOptions);
        const contentElement = page.root.querySelector('div.content');
        expect(contentElement.className).not.toContain('with-content');
    });
});
