import { newSpecPage } from '@stencil/core/testing';
import { ArticleLinkComponent } from './article-link-component';
describe('ArticleLinkComponent', () => {
    it("creates a link", async () => {
        const specPageOptions = {
            components: [ArticleLinkComponent],
            html: `<snt-article-link
                href="https://www.google.com"
                aria-label="aria label"
                hidden-title="My title"
                copy="Click here to go to Google">
                </snt-article-link>`,
        };
        const page = await newSpecPage(specPageOptions);
        const linkElement = page.root.querySelector('a');
        expect(linkElement.innerText).toEqual('Click here to go to Google');
        expect(linkElement.getAttribute('href')).toEqual('https://www.google.com');
        expect(linkElement.getAttribute('aria-label')).toEqual('aria label');
        expect(linkElement.getAttribute('hidden-title')).toEqual('My title');
    });
});
