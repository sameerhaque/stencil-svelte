import { newSpecPage } from "@stencil/core/testing";
import { newE2EPage } from '@stencil/core/testing';
import { ImageComponent } from "./image-component";
export function setupIntersectionObserverMock({ observe = () => null, unobserve = () => null } = {}) {
    class IntersectionObserver {
        constructor() {
            this.observe = observe;
            this.unobserve = unobserve;
        }
    }
    Object.defineProperty(window, 'IntersectionObserver', { writable: true, configurable: true, value: IntersectionObserver });
    Object.defineProperty(global, 'IntersectionObserver', { writable: true, configurable: true, value: IntersectionObserver });
}
describe('app', () => {
    it('builds', () => {
        expect(new ImageComponent()).toBeTruthy();
    });
    describe('Tags check', () => {
        beforeEach(async () => {
            setupIntersectionObserverMock();
        });
        it('returns the img tags as expected', async () => {
            const page = await newSpecPage({
                components: [ImageComponent],
                html: `<snt-image id="3"
                img-alt="some text in here"
                data-src="../assets/img/3.jpg"
                src-image="../assets/img/loading.gif"
                sizes="100vw"
                width="1440"
                height="730">
              </snt-image>`
            });
            await page.waitForChanges();
            function chooseAttribute(tag) {
                return page.root.querySelector('img').getAttribute(tag);
            }
            expect(chooseAttribute('alt')).toBe("some text in here");
            expect(chooseAttribute('src')).toBe("../assets/img/loading.gif");
            expect(chooseAttribute('width')).toBe("1440");
            expect(chooseAttribute('height')).toBe("730");
            expect(chooseAttribute('sizes')).toBe("100vw");
        });
    });
});
describe('Loading check', () => {
    it('test the image have changed from datasrc to src', async () => {
        const page = await newE2EPage({
            html: `<snt-image data-src="../assets/images/ins-tenant-desktop-hd-2x.jpg" src-image="../assets/images/ins-tenant-desktop-hd-2x.jpg"></snt-image>`
        });
        await page.waitForChanges();
        setupIntersectionObserverMock();
        const image = await page.find('img');
        const img = await (image.getProperty('src'));
        expect(img).toContain('assets/images/ins-tenant-desktop-hd-2x.jpg');
    });
});
