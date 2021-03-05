jest.mock('../../core/intersection/observer/AbstractIntersectionObserver');
Object.defineProperty(window, 'IntersectionObserver', {
    get: jest.fn(),
    set: jest.fn(),
});
import { newSpecPage } from '@stencil/core/testing';
import { AdComponent } from './ad-component';
import { ButtonLinkComponent } from '../link/button-link-component';
import { ButtonLinkGroupComponent } from '../link/button-link-group-component';
describe('AdComponent', () => {
    it('has a logo', async () => {
        const page = await newSpecPage({
            components: [AdComponent, ButtonLinkComponent, ButtonLinkGroupComponent],
            html: `<snt-ad
                logo-sources='{
                    "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",
                    "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",
                    "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",
                    "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"
                }'
                title-string="My Title">
                <p>Test</p>
            </snt-ad>`
        });
        await page.waitForChanges();
        const logoEl = page.doc.querySelector('img.logo-image');
        expect(logoEl).toBeTruthy();
    });
    it('has an icon', async () => {
        const page = await newSpecPage({
            components: [AdComponent],
            html: `<snt-ad
                    icon-sources='{
                        "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
                        "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
                    }'
                    title-string="My Title"
                >
                    <p>Test</p>
                </snt-ad>`
        });
        await page.waitForChanges();
        const iconEl = page.doc.querySelector('img.icon-image');
        expect(iconEl).toBeTruthy();
    });
    it('has a title', async () => {
        const page = await newSpecPage({
            components: [AdComponent],
            html: `<snt-ad
                    title-string="My Title"
                >
                    <p>Test</p>
                </snt-ad>`
        });
        await page.waitForChanges();
        const titleEl = page.doc.querySelector('h3');
        expect(titleEl.innerText).toEqual('My Title');
    });
    it('has a body text', async () => {
        const page = await newSpecPage({
            components: [AdComponent],
            html: `<snt-ad
                    title-string="My Title"
                >
                    <p>Test</p>
                </snt-ad>`
        });
        await page.waitForChanges();
        const bodyEl = page.doc.querySelector('div.content');
        expect(bodyEl.innerText.trim()).toEqual('Test');
    });
    it('has a cta button', async () => {
        const page = await newSpecPage({
            components: [AdComponent],
            html: `<snt-ad
                    title-string="My Title"
                    href="https://google.com"
                    button-label="Google"
                    target="_self"
                >
                    <p>Test</p>
                </snt-ad>`
        });
        await page.waitForChanges();
        const linkEl = page.doc.querySelectorAll('button-link');
        expect(linkEl.length).toEqual(1);
        expect(linkEl[0].innerText).toEqual("Google");
        expect(linkEl[0].getAttribute('href')).toEqual('https://google.com');
        expect(linkEl[0].getAttribute('target')).toEqual('_self');
    });
});
