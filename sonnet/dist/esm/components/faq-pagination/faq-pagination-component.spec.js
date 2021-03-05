jest.mock('../../core/viewport/service/ViewportConfigurationService');
import { FAQPaginationComponent } from "./faq-pagination-component";
import { newSpecPage } from "@stencil/core/testing";
import { ViewportConfigurationService } from "../../core/viewport/service/ViewportConfigurationService";
describe("faq-pagination-component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        ViewportConfigurationService.getInstance.mockReturnValue({
            register: jest.fn()
        });
    });
    it("always displays first and last page", async () => {
        const specPageOptions = {
            components: [FAQPaginationComponent],
            html: `<snt-pagination></snt-pagination>`
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.totalPages = 8;
        page.rootInstance.curr = 1;
        const layout = page.root.querySelector('snt-layout');
        layout.setAttribute("viewport", "xl");
        await page.waitForChanges();
        expect(page.root.querySelector("div.desktop-page-numbers").innerHTML).toContain(`<span class="page-number" data-page="1">1</span>`);
        expect(page.root.querySelector("div.desktop-page-numbers").innerHTML).toContain(`<span class="page-number" data-page="8">8</span>`);
    });
    it("adds ellipsis after 2 pages from the curent page if there are more than 2 pages left from the last page", async () => {
        const specPageOptions = {
            components: [FAQPaginationComponent],
            html: `<snt-pagination></snt-pagination>`
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.totalPages = 8;
        page.rootInstance.curr = 1;
        const layout = page.root.querySelector('snt-layout');
        layout.setAttribute("viewport", "xl");
        await page.waitForChanges();
        expect(page.root.querySelector("div.desktop-page-numbers").innerHTML).toContain(`<span class="page-number">...</span>`);
    });
    it("adds ellipsis before 2 pages from the curent page if there are more than 2 pages left from first page", async () => {
        const specPageOptions = {
            components: [FAQPaginationComponent],
            html: `<snt-pagination></snt-pagination>`
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.totalPages = 8;
        page.rootInstance.curr = 8;
        const layout = page.root.querySelector('snt-layout');
        layout.setAttribute("viewport", "xl");
        await page.waitForChanges();
        expect(page.root.querySelector("div.desktop-page-numbers").innerHTML).toContain(`<span class="page-number">...</span>`);
    });
    it("hides 'Previous' link if current page is 1", async () => {
        const specPageOptions = {
            components: [FAQPaginationComponent],
            html: `<snt-pagination></snt-pagination>`
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.totalPages = 8;
        page.rootInstance.curr = 1;
        const layout = page.root.querySelector('snt-layout');
        layout.setAttribute("viewport", "xl");
        await page.waitForChanges();
        expect(page.root.querySelector("a.hidden").textContent).toEqual("Previous");
    });
    it("hides 'Next' link if current page is the last page", async () => {
        const specPageOptions = {
            components: [FAQPaginationComponent],
            html: `<snt-pagination></snt-pagination>`
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.totalPages = 8;
        page.rootInstance.curr = 8;
        const layout = page.root.querySelector('snt-layout');
        layout.setAttribute("viewport", "xl");
        await page.waitForChanges();
        expect(page.root.querySelector("a.hidden").textContent).toEqual("Next");
    });
    it("shows mobile view on mobile viewports", async () => {
        const specPageOptions = {
            components: [FAQPaginationComponent],
            html: `<snt-pagination></snt-pagination>`
        };
        const page = await newSpecPage(specPageOptions);
        page.rootInstance.totalPages = 8;
        page.rootInstance.curr = 4;
        const layout = page.root.querySelector('snt-layout');
        layout.setAttribute("viewport", "sm");
        await page.waitForChanges();
        expect(page.root.querySelector("div.mobile-page-numbers").innerHTML).toEqual('<span>4 of 8</span>');
    });
});
