jest.mock('../../core/intersection/observer/AbstractIntersectionObserver');
Object.defineProperty(window, 'IntersectionObserver', {
    get: jest.fn(),
    set: jest.fn(),
});
import { newSpecPage } from '@stencil/core/testing';
import { EnhancedButtonComponent } from './enhanced-button-component';
describe('EnhancedButtonComponent', () => {
    it('has uses right icon only', async () => {
        const page = await newSpecPage({
            components: [EnhancedButtonComponent],
            html: `<snt-enhanced-button
            right-icon-sources='{
                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
            }'
            href="www.google.com"
            cta-text="My Title">
        </snt-enhanced-button>`
        });
        await page.waitForChanges();
        const sources = page.doc.querySelectorAll('source');
        expect(sources.length).toEqual(2);
        expect(sources[0].getAttribute('data-srcset')).toEqual('https://img.icons8.com/dotty/45/000000/user.png');
        expect(sources[1].getAttribute('data-srcset')).toEqual('https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png');
    });
    it('has uses left icon only', async () => {
        const page = await newSpecPage({
            components: [EnhancedButtonComponent],
            html: `<snt-enhanced-button
            left-icon-sources='{
                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
            }'
            href="www.google.com"
            cta-text="My Title">
        </snt-enhanced-button>`
        });
        await page.waitForChanges();
        const sources = page.doc.querySelectorAll('source');
        expect(sources.length).toEqual(2);
        expect(sources[0].getAttribute('data-srcset')).toEqual('https://img.icons8.com/dotty/45/000000/user.png');
        expect(sources[1].getAttribute('data-srcset')).toEqual('https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png');
    });
    it('has a link', async () => {
        const page = await newSpecPage({
            components: [EnhancedButtonComponent],
            html: `<snt-enhanced-button
            left-icon-sources='{
                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
            }'
            href="www.google.com"
            cta-text="My Title">
        </snt-enhanced-button>`
        });
        await page.waitForChanges();
        const linkEl = page.doc.querySelector('a');
        expect(linkEl.getAttribute('href')).toEqual('www.google.com');
        expect(linkEl.innerText).toEqual('My Title');
    });
    it('has discount text', async () => {
        const page = await newSpecPage({
            components: [EnhancedButtonComponent],
            html: `<snt-enhanced-button
            left-icon-sources='{
                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
            }'
            discount-text="My discount is 99%"
            href="www.google.com"
            cta-text="My Title">
        </snt-enhanced-button>`
        });
        await page.waitForChanges();
        const discountEl = page.doc.querySelector('div.discount-panel');
        expect(discountEl.innerText).toEqual('My discount is 99%');
    });
    it('has a new window icon', async () => {
        const page = await newSpecPage({
            components: [EnhancedButtonComponent],
            html: `<snt-enhanced-button
            left-icon-sources='{
                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
            }'
            target="_blank"
            href="www.google.com"
            cta-text="My Title">
        </snt-enhanced-button>`
        });
        await page.waitForChanges();
        const iconEl = page.doc.querySelector('span.icon-new-window');
        expect(iconEl).toBeTruthy();
    });
});
