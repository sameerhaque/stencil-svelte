import { newSpecPage } from "@stencil/core/testing";
import { TwoColumnComponent } from "./two-column-component";
describe("TwoColumnComponent", () => {
    it("renders content to the left", async () => {
        const specPageOptions = {
            components: [TwoColumnComponent],
            html: `<snt-two-column>
            <div slot="left"> This is left content</div>
            </snt-two-column>`
        };
        const page = await newSpecPage(specPageOptions);
        const leftColumn = page.root.querySelector(".column-left");
        const rightColumn = page.root.querySelector(".column-right");
        expect(leftColumn.innerHTML).toContain("This is left content");
        expect(rightColumn.children.length).toEqual(0);
    });
    it("renders content to the right", async () => {
        const specPageOptions = {
            components: [TwoColumnComponent],
            html: `<snt-two-column>
            <div slot="right"> This is right content</div>
            </snt-two-column>`
        };
        const page = await newSpecPage(specPageOptions);
        const leftColumn = page.root.querySelector(".column-left");
        const rightColumn = page.root.querySelector(".column-right");
        expect(rightColumn.innerHTML).toContain("This is right content");
        expect(leftColumn.children.length).toEqual(0);
    });
    it("renders content to both left and right", async () => {
        const specPageOptions = {
            components: [TwoColumnComponent],
            html: `<snt-two-column>
            <div slot="left"> This is left content</div>
            <div slot="right"> This is right content</div>
            </snt-two-column>`
        };
        const page = await newSpecPage(specPageOptions);
        const leftColumn = page.root.querySelector(".column-left");
        const rightColumn = page.root.querySelector(".column-right");
        expect(leftColumn.innerHTML).toContain("This is left content");
        expect(rightColumn.innerHTML).toContain("This is right content");
    });
});
