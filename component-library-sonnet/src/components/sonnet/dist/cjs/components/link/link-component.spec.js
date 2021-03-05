import { newSpecPage } from "@stencil/core/testing";
import { AccessibilityUtils } from "../../core/utils/AccessibilityUtils";
import { LinkComponent } from "./link-component";
describe('Component Loads', () => {
    it('should build', () => {
        expect(new LinkComponent()).toBeTruthy(); //Checks to see if the component is valid and builds
    });
    it('renders component ', async () => {
        const component = new LinkComponent();
        const element = await component;
        expect(element).toBeTruthy();
    });
});
describe('check to see if link props are being passed properly', () => {
    it('href being passed properly', () => {
        const component = new LinkComponent();
        let newHref = 'https://sonnet.ca';
        component.href = newHref;
        expect(component.href).toEqual(newHref);
    });
    it('target being passed properly', () => {
        const component = new LinkComponent();
        let newTarget = '_self';
        component.target = newTarget;
        expect(component.target).toEqual(newTarget);
    });
});
/*
 * Gets the title tag from Accessibility Utils vars
 * Generate the component tag for testing
 * Then waits for the component to be loaded in.
 * TEST CASE 1: Find the first span tag and check the title attribute against the util title
 * TEST CASE 2: Check to see if the second span tag has the correct text adjusted for the initial empty space
 */
describe('check to see if SPAN tag is being generated', () => {
    it('if the root span contains the correct title', async () => {
        const title = AccessibilityUtils.getNewWindowTitle();
        const page = await newSpecPage({
            components: [LinkComponent],
            html: `<snt-link href="https://sonnet.ca" target="_blank"></snt-link>`,
        });
        await page.waitForChanges();
        expect(page.body.querySelector('span.icon-font').getAttribute('title')).toBe(title);
    });
    it('if the second span contains the correct text', async () => {
        const text = AccessibilityUtils.getNewWindowText();
        const page = await newSpecPage({
            components: [LinkComponent],
            html: `<snt-link href="https://sonnet.ca" target="_blank"></snt-link>`,
        });
        await page.waitForChanges();
        expect(page.body.querySelector('span.icon-font > span').textContent).toBe(' ' + text);
    });
});
describe('external links', () => {
    it('renders with rel nooopener', async () => {
        const page = await newSpecPage({
            components: [LinkComponent],
            html: `<snt-link is-external="true" href="https://sonnet.ca" target="_blank"></snt-link>`,
        });
        await page.waitForChanges();
        expect(page.body.querySelector('a').getAttribute('rel')).toContain('noopener');
    });
});
