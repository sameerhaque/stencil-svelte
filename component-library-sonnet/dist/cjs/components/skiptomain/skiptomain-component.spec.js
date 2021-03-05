import { newSpecPage } from "@stencil/core/testing";
import { SkipToMainComponent } from './skiptomain-component';
/*
* Gets the title tag from Accessibility Utils vars
* Generate the component tag for testing
* Then waits for the component to be loaded in.
* TEST CASE 1: Find the first span tag and check the title attribute against the util title
* TEST CASE 2: Check to see if the second span tag has the correct text adjusted for the initial empty space
*/
describe('To check if skip-to-main creates correct snt-link component', () => {
    it('should set snt-link href with main-content-id passed with #', async () => {
        const page = await newSpecPage({
            components: [SkipToMainComponent],
            html: `<snt-skip-to-main main-content-id="#main-content" linkTest="Skip to main content"></snt-skip-to-main>`,
        });
        await page.waitForChanges();
        expect(page.body.querySelector('snt-link').getAttribute('href')).toBe('#main-content');
    });
    it('should set snt-link href with main-content-id passed without #', async () => {
        const page = await newSpecPage({
            components: [SkipToMainComponent],
            html: `<snt-skip-to-main main-content-id="main-content" linkTest="Skip to main content"></snt-skip-to-main>`,
        });
        await page.waitForChanges();
        expect(page.body.querySelector('snt-link').getAttribute('href')).toBe('#main-content');
    });
    it('should set snt-link classNames to sr-only and sr-only-focusable', async () => {
        const page = await newSpecPage({
            components: [SkipToMainComponent],
            html: `<snt-skip-to-main main-content-id="main-content" linkTest="Skip to main content"></snt-skip-to-main>`,
        });
        await page.waitForChanges();
        expect(page.body.querySelector('snt-link').getAttribute('classNames')).toBe('sr-only sr-only-focusable');
    });
});
