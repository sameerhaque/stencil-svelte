jest.mock('../../core/intersection/observer/AbstractIntersectionObserver');
Object.defineProperty(window, 'IntersectionObserver', {
    get: jest.fn(),
    set: jest.fn(),
});
import { TipComponent } from './tip-component';
import { ImageComponent } from '../image/image-component';
import { newSpecPage } from '@stencil/core/testing';
describe('TipComponent', () => {
    it('adds content to tip', async () => {
        const specPageOptions = {
            components: [TipComponent, ImageComponent],
            html: `<snt-tip>This is a sample tip</snt-tip>`
        };
        const page = await newSpecPage(specPageOptions);
        const content = page.root.querySelector('p');
        expect(content).toBeTruthy();
        expect(content.innerHTML.trim()).toEqual('This is a sample tip');
    });
    it('adds an icon', async () => {
        const specPageOptions = {
            components: [TipComponent],
            html: `<snt-tip icon-path="https://img.icons8.com/dotty/45/000000/user.png">This is a sample tip</snt-tip>`
        };
        const page = await newSpecPage(specPageOptions);
        const imageEl = page.root.querySelector('snt-image.icon-image');
        expect(imageEl).toBeTruthy();
        expect(imageEl.getAttribute('data-src')).toEqual('https://img.icons8.com/dotty/45/000000/user.png');
    });
});
