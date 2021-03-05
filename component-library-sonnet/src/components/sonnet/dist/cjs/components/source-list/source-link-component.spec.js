import { newSpecPage } from '@stencil/core/testing';
import { SourceLinkComponent } from './source-link-component';
describe('SourceLinkComponent', () => {
    let page;
    it('renders a link', async () => {
        const specPageOptions = {
            components: [SourceLinkComponent],
            html: `<snt-source-link href="https://google.com">This is my link</snt-source-link>`
        };
        page = await newSpecPage(specPageOptions);
        const links = page.body.querySelectorAll('a');
        expect(links.length).toEqual(1);
        expect(links[0].getAttribute('href')).toEqual('https://google.com');
    });
    it('renders with external icon', async () => {
        const specPageOptions = {
            components: [SourceLinkComponent],
            html: `<snt-source-link target="_blank" href="https://google.com">This is my link</snt-source-link>`
        };
        page = await newSpecPage(specPageOptions);
        expect(page.body.querySelector('.icon-new-window')).toBeTruthy();
    });
});
