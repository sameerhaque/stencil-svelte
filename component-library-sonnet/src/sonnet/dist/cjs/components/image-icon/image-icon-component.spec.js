jest.mock('../../core/intersection/observer/AbstractIntersectionObserver');
Object.defineProperty(window, 'IntersectionObserver', {
    get: jest.fn(),
    set: jest.fn(),
});
import { newSpecPage } from '@stencil/core/testing';
import { ImageIconComponent } from './image-icon-component';
describe('ImageIconComponent', () => {
    it('has an icon', async () => {
        const page = await newSpecPage({
            components: [ImageIconComponent],
            html: `<snt-image-icon
                properties='{
                    "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",
                    "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"
                }'
                img-alt="TEST"
            '>
            </snt-image-icon>`
        });
        await page.waitForChanges();
        const iconEl = page.doc.querySelector('img.image-icon');
        expect(iconEl).toBeTruthy();
    });
});
