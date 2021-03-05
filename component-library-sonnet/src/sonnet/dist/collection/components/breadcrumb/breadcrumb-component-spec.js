import { newSpecPage } from "@stencil/core/testing";
import { BreadcrumbComponent } from './breadcrumb-component';
describe('Breadcrumb component', () => {
    const trail = '[ { "title": "test", "href": "/test" },{ "title": "miguel", "href": "/test/miguel" } ]';
    describe('DOM', () => {
        it('contains 2 items', async () => {
            const specPageOptions = {
                components: [BreadcrumbComponent],
                html: `<snt-breadcrumb trail='${trail}'></snt-breadcrumb>`
            };
            const page = await newSpecPage(specPageOptions);
            const listItems = page.root.querySelectorAll('li');
            expect(listItems.length).toEqual(2);
        });
    });
});
