import { newSpecPage } from '@stencil/core/testing';
import { SourceListComponent } from './source-list-component';
import { SourceLinkComponent } from './source-link-component';
describe('SourceListComponent', () => {
    let page;
    beforeEach(async () => {
        const specPageOptions = {
            components: [SourceListComponent, SourceLinkComponent],
            html: `<snt-source-list source-heading="Interested in this articles sources?" panel-id="sources">
                <snt-source-link href="https://google.com">This is my link</snt-source-link>
            </snt-source-list>`,
        };
        page = await newSpecPage(specPageOptions);
    });
    it('renders button to expand', async () => {
        expect(page.body.querySelector('button').innerText).toEqual('Interested in this articles sources?');
    });
    it('renders with the panel closed', async () => {
        expect(page.body.querySelector('.icon-icon_legalAccordion_plus')).toBeTruthy();
        expect(page.body.querySelector('.source-panel').classList.toString()).toContain('close');
    });
    it('opens up panel when button is clicked', async () => {
        page.body.querySelector('button').click();
        expect(page.body.querySelector('.icon-icon_legalAccordion_minus')).toBeTruthy();
        expect(page.body.querySelector('.source-panel').classList.toString()).toContain('open');
    });
    it('renders links', () => {
        const links = page.body.querySelectorAll('a');
        expect(links.length).toEqual(1);
    });
});
