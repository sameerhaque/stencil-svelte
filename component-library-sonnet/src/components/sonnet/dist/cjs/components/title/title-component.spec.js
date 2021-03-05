import { TitleComponent } from "./title-component";
import { newSpecPage } from "@stencil/core/testing";
describe("TitleComponent", () => {
    it("can add h1 title", async () => {
        const specPageOptions = {
            components: [TitleComponent],
            html: `<snt-title title-type='h1'>This is sample title</snt-title>`
        };
        const page = await newSpecPage(specPageOptions);
        const h1Title = page.root.querySelector('h1');
        expect(h1Title).toBeTruthy();
        expect(h1Title.innerHTML.trim()).toEqual('This is sample title');
    });
    it("can add h2 title", async () => {
        const specPageOptions = {
            components: [TitleComponent],
            html: `<snt-title title-type='h2'>This is sample title</snt-title>`
        };
        const page = await newSpecPage(specPageOptions);
        const h1Title = page.root.querySelector('h2');
        expect(h1Title).toBeTruthy();
        expect(h1Title.innerHTML.trim()).toEqual('This is sample title');
    });
    it("can add h3 title", async () => {
        const specPageOptions = {
            components: [TitleComponent],
            html: `<snt-title title-type='h3'>This is sample title</snt-title>`
        };
        const page = await newSpecPage(specPageOptions);
        const h1Title = page.root.querySelector('h3');
        expect(h1Title).toBeTruthy();
        expect(h1Title.innerHTML.trim()).toEqual('This is sample title');
    });
    it("can add h4 title", async () => {
        const specPageOptions = {
            components: [TitleComponent],
            html: `<snt-title title-type='h4'>This is sample title</snt-title>`
        };
        const page = await newSpecPage(specPageOptions);
        const h1Title = page.root.querySelector('h4');
        expect(h1Title).toBeTruthy();
        expect(h1Title.innerHTML.trim()).toEqual('This is sample title');
    });
});
