import { newSpecPage } from '@stencil/core/testing';
import { SntBlogResultsComponent } from './blog-results-component';
describe('SntBlogResultsComponent', () => {
    it('has first row', async () => {
        const blogResultJson = `[
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 1\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 2\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"}
    ]`;
        const specPageOptions = {
            components: [SntBlogResultsComponent],
            html: `<snt-blog-results blog-results-string='` + blogResultJson.replace(/\s{2,}/g, '') + `'></snt-blog-results>`
        };
        const page = await newSpecPage(specPageOptions);
        const firstRowElement = page.root.querySelector('snt-multi-column-mixed[class*="first-row"]');
        expect(firstRowElement).toBeTruthy();
    });
    it('does not have a second row when not enough entries', async () => {
        const blogResultJson = `[
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 1\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 2\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"}
    ]`;
        const specPageOptions = {
            components: [SntBlogResultsComponent],
            html: `<snt-blog-results blog-results-string='` + blogResultJson.replace(/\s{2,}/g, '') + `'></snt-blog-results>`
        };
        const page = await newSpecPage(specPageOptions);
        const rowsElement = page.root.querySelector('snt-multi-column-mixed[class*="result-rows"]');
        expect(rowsElement).toBeNull();
    });
    it('has a second row when greater than 2 entries', async () => {
        const blogResultJson = `[
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 1\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 2\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"},
        {\"imageSource\":\"https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg\",\"titleText\":\"Blog Post 3\",\"tagText\":\"at home\",\"timeToRead\":\"5 min to read\",\"blogLink\":\"https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance\"}
    ]`;
        const specPageOptions = {
            components: [SntBlogResultsComponent],
            html: `<snt-blog-results blog-results-string='` + blogResultJson.replace(/\s{2,}/g, '') + `'></snt-blog-results>`
        };
        const page = await newSpecPage(specPageOptions);
        const rowsElement = page.root.querySelector('snt-multi-column-mixed[class*="result-rows"]');
        expect(rowsElement).toBeTruthy();
    });
});
