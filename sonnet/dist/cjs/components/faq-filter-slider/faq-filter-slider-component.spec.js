import { newSpecPage } from '@stencil/core/testing';
import { FAQFilterSliderComponent } from './faq-filter-slider-component';
describe('faq-filter-component', () => {
    const filters = `[ 
        { "key": "all", "title": "All" }, 
        { "key": "propertyInsurance", "title": "Home" } , 
        { "key": "autoInsurance", "title": "Auto" } , 
        { "key": "other", "title": "Other" } 
    ]`;
    const specPageOptions = {
        components: [FAQFilterSliderComponent],
        html: `<snt-faq-filter-slider filter-items='${filters}'></snt-faq-filter-slider>`
    };
    it('lists all items', async () => {
        const page = await newSpecPage(specPageOptions);
        const listItems = page.root.querySelectorAll('li');
        expect(listItems.length).toEqual(4);
    });
    it('adds non breaking space to all items with spaces', async () => {
        const page = await newSpecPage(specPageOptions);
        const items = page.root.querySelectorAll('li');
        expect(items[0].textContent).toContain('All');
        expect(items[1].textContent).toContain('Home');
        expect(items[2].textContent).toContain('Auto');
        expect(items[3].textContent).toContain('Other');
    });
});
