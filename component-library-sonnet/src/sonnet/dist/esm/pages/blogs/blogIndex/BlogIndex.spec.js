jest.mock('../blogSearch/BlogSearch');
import { BlogIndex } from './BlogIndex';
import { BlogSearch } from '../blogSearch/BlogSearch';
class SntBlogResult extends HTMLElement {
}
class SntFaqFilterSlider extends HTMLElement {
}
class SntButtonLink extends HTMLElement {
}
class SntButtonLinkGroup extends HTMLElement {
}
class SntData extends HTMLElement {
    async getData() { }
}
describe('BlogIndex', () => {
    describe('getInstance', () => {
        it('creates an instance of BlogIndex', () => {
            const blogIndex = BlogIndex.getInstance();
            expect(blogIndex).toBeInstanceOf(BlogIndex);
        });
    });
    describe('getPage', () => {
        it('intializes to page 1', () => {
            const blogIndex = new BlogIndex();
            expect(blogIndex.getPage()).toEqual(1);
        });
    });
    describe('initiate', () => {
        beforeEach(() => {
            document.body.innerHTML =
                '<div>' +
                    '  <snt-blog-results>' +
                    '  </snt-blog-results>' +
                    '  <snt-faq-filter-slider>' +
                    '  </snt-faq-filter-slider>' +
                    '</div>';
            customElements.define('snt-blog-results', SntBlogResult, {
                extends: 'div',
            });
            customElements.define('snt-faq-filter-slider', SntFaqFilterSlider, {
                extends: 'div',
            });
            BlogSearch.search.mockResolvedValue({
                data: {
                    data: {
                        blogCollection: [],
                    },
                },
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('calls search with initial category', async () => {
            const blogIndex = new BlogIndex();
            jest.spyOn(blogIndex, 'getSelectedCategory')
                .mockImplementation(() => Promise.resolve('all'));
            await blogIndex.initiate();
            await Promise.resolve(); //Promise to retrieve category filters;
            expect(BlogSearch.search).toHaveBeenCalledWith('1', 'all');
        });
        it('updates the category filter', async () => {
            const blogIndex = new BlogIndex();
            const mock = jest
                .spyOn(blogIndex, 'getSelectedCategory')
                .mockImplementation(() => Promise.resolve('string'));
            await blogIndex.initiate();
            expect(mock).toHaveBeenCalled();
        });
        it('updates the slider value', async () => {
            const blogIndex = new BlogIndex();
            jest.spyOn(blogIndex, 'getSelectedCategory')
                .mockImplementation(() => Promise.resolve('all'));
            const mock = jest
                .spyOn(blogIndex, 'updateFilterSlider')
                .mockImplementation(() => Promise.resolve());
            await blogIndex.initiate();
            await Promise.resolve(); //Promise to retrieve category filters;
            await Promise.resolve(); //Promise.all loop
            await Promise.resolve(); //customElements defined
            await Promise.resolve(); //updateFilterSlider
            expect(mock).toHaveBeenCalled();
        });
    });
    describe('initiateMoreArticleListener', () => {
        beforeEach(() => {
            customElements.define('button-link', SntButtonLink, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('listens for click on button link', async () => {
            const buttonLink = document.createElement('button-link');
            buttonLink.setAttribute('button-id', 'more-articles-btn');
            document.body.appendChild(buttonLink);
            const blogIndex = new BlogIndex();
            jest.spyOn(blogIndex, 'onMoreArticlesClick').mockImplementation(() => Promise.resolve());
            const event = new CustomEvent('linkEvent', {
                detail: { type: 'click' },
            });
            const btn = document.querySelector('button-link');
            blogIndex.initiateMoreArticleListener();
            await Promise.resolve();
            btn.dispatchEvent(event);
            expect(blogIndex.onMoreArticlesClick).toHaveBeenCalled();
        });
    });
    describe('initiateSliderListener', () => {
        beforeEach(() => {
            document.body.innerHTML =
                '<div>' +
                    '  <snt-faq-filter-slider>' +
                    '  </snt-faq-filter-slider>' +
                    '</div>';
            customElements.define('snt-faq-filter-slider', SntFaqFilterSlider, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('does nothing when filter has not changed', async () => {
            window.location.search = '?category=all';
            const blogIndex = new BlogIndex();
            const event = new CustomEvent('faqFilterClick', { detail: 'all' });
            const btn = document.querySelector('snt-faq-filter-slider');
            spyOn(blogIndex, 'handlePageChange');
            blogIndex.initiateSliderListener();
            await Promise.resolve();
            btn.dispatchEvent(event);
            expect(blogIndex.handlePageChange).not.toHaveBeenCalled();
        });
        it('calls handle page change when filter changes', async () => {
            window.location.search = '?category=all';
            const blogIndex = new BlogIndex();
            const event = new CustomEvent('faqFilterClick', { detail: 'home' });
            const btn = document.querySelector('snt-faq-filter-slider');
            jest.spyOn(blogIndex, 'handlePageChange').mockImplementation(() => Promise.resolve());
            blogIndex.initiateSliderListener();
            await Promise.resolve();
            btn.dispatchEvent(event);
            await Promise.resolve();
            expect(blogIndex.handlePageChange).toHaveBeenCalled();
        });
    });
    describe('initiateUrlListener', () => {
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('does nothing when category is the same', () => {
            window.location.search = '?category=all';
            const blogIndex = new BlogIndex();
            jest.spyOn(blogIndex, 'handlePageChange').mockImplementation(() => Promise.resolve());
            jest.spyOn(blogIndex, 'updateFilterSlider').mockImplementation(() => Promise.resolve());
            const event = new CustomEvent('popstate');
            blogIndex.initiateUrlListener();
            window.dispatchEvent(event);
            expect(blogIndex.handlePageChange).not.toHaveBeenCalled();
            expect(blogIndex.updateFilterSlider).not.toHaveBeenCalled();
        });
        it('calls handle page change when category is the different', async () => {
            window.location.search = '?category=home';
            const blogIndex = new BlogIndex();
            jest.spyOn(blogIndex, 'handlePageChange').mockImplementation(() => Promise.resolve());
            jest.spyOn(blogIndex, 'updateFilterSlider').mockImplementation(() => Promise.resolve());
            const event = new CustomEvent('popstate');
            blogIndex.initiateUrlListener();
            window.dispatchEvent(event);
            await Promise.resolve();
            await Promise.resolve();
            expect(blogIndex.handlePageChange).toHaveBeenCalled();
            expect(blogIndex.updateFilterSlider).toHaveBeenCalledWith('home');
        });
    });
    describe('handlePageChange', () => {
        beforeEach(() => {
            document.body.innerHTML =
                '<div>' +
                    '  <snt-blog-results>' +
                    '  </snt-blog-results>' +
                    '</div>';
            customElements.define('snt-blog-results', SntBlogResult, {
                extends: 'div',
            });
            BlogSearch.search.mockResolvedValue({
                data: {
                    data: {
                        blogCollection: [
                            {
                                headline: 'TEST Blog',
                                url: 'en.sonnet.ca',
                                timeToRead: '2 min',
                                category: [{ name: 'Pet' }],
                                image: null,
                            },
                        ],
                    },
                },
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('calls search with initial category', async () => {
            const result = new SntBlogResult();
            const blogIndex = new BlogIndex();
            jest.spyOn(document, 'querySelector').mockReturnValue(result);
            jest.spyOn(blogIndex, 'buildBlog').mockResolvedValue({
                imageSource: null,
                titleText: 'TEST Blog',
                tagText: 'Furry friends',
                timeToRead: '2 min',
                blogLink: 'en.sonnet.ca',
            });
            await blogIndex.handlePageChange();
            await Promise.resolve();
            expect(BlogSearch.search).toHaveBeenCalledWith('1', 'all');
        });
        it('sets the blog results json', async () => {
            const result = new SntBlogResult();
            const blogIndex = new BlogIndex();
            jest.spyOn(document, 'querySelector').mockReturnValue(result);
            jest.spyOn(blogIndex, 'showMoreArticlesButton').mockReturnValue();
            jest.spyOn(blogIndex, 'buildBlog').mockResolvedValue({
                imageSource: null,
                titleText: 'TEST Blog',
                tagText: 'Furry friends',
                timeToRead: '2 min',
                blogLink: 'en.sonnet.ca',
            });
            await blogIndex.handlePageChange();
            await Promise.resolve(); //BlogSearch
            await Promise.resolve(); //when defined
            await Promise.resolve(); //Promise.all
            await Promise.resolve(); //buildBlog
            await Promise.resolve();
            expect(result.blogResultsString).toEqual('[{"imageSource":null,"titleText":"TEST Blog","tagText":"Furry friends","timeToRead":"2 min","blogLink":"en.sonnet.ca"}]');
        });
    });
    describe('updateFilterSlider', () => {
        beforeEach(() => {
            document.body.innerHTML =
                '<div>' +
                    '  <snt-faq-filter-slider>' +
                    '  </snt-faq-filter-slider>' +
                    '</div>';
            customElements.define('snt-faq-filter-slider', SntFaqFilterSlider, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('sets the active filter', async () => {
            const filter = new SntFaqFilterSlider();
            const blogIndex = new BlogIndex();
            jest.spyOn(document, 'querySelector').mockReturnValue(filter);
            blogIndex.updateFilterSlider('home');
            await Promise.resolve();
            expect(filter.currentActive).toEqual('home');
        });
    });
    describe('showComeBackButton', () => {
        let moreArticleBtnGroup;
        let checkBackBtnGroup;
        beforeEach(() => {
            moreArticleBtnGroup = document.createElement('button-link-group');
            moreArticleBtnGroup.setAttribute('id', 'more-articles-btn-group');
            document.body.appendChild(moreArticleBtnGroup);
            checkBackBtnGroup = document.createElement('button-link-group');
            checkBackBtnGroup.setAttribute('id', 'please-check-back-btn-group');
            document.body.appendChild(checkBackBtnGroup);
            customElements.define('snt-button-link-group', SntButtonLinkGroup, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('sets check back button to visible', () => {
            const blogIndex = new BlogIndex();
            checkBackBtnGroup.classList.add('d-none');
            blogIndex.showComeBackButton();
            expect(checkBackBtnGroup).not.toHaveClass('d-none');
        });
        it('hides the more articles button', () => {
            const blogIndex = new BlogIndex();
            blogIndex.showComeBackButton();
            expect(moreArticleBtnGroup).toHaveClass('d-none');
        });
    });
    describe('showMoreArticlesButton', () => {
        let moreArticleBtnGroup;
        let checkBackBtnGroup;
        beforeEach(() => {
            moreArticleBtnGroup = document.createElement('button-link-group');
            moreArticleBtnGroup.setAttribute('id', 'more-articles-btn-group');
            document.body.appendChild(moreArticleBtnGroup);
            checkBackBtnGroup = document.createElement('button-link-group');
            checkBackBtnGroup.setAttribute('id', 'please-check-back-btn-group');
            document.body.appendChild(checkBackBtnGroup);
            customElements.define('snt-button-link-group', SntButtonLinkGroup, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('hides check back button', () => {
            const blogIndex = new BlogIndex();
            blogIndex.showMoreArticlesButton();
            expect(checkBackBtnGroup).toHaveClass('d-none');
        });
        it('shows the more articles button', () => {
            const blogIndex = new BlogIndex();
            moreArticleBtnGroup.classList.add('d-none');
            blogIndex.showMoreArticlesButton();
            expect(moreArticleBtnGroup).not.toHaveClass('d-none');
        });
    });
    describe('buildBlog', () => {
        beforeEach(() => {
            customElements.define('snt-data', SntData, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('maps data', async () => {
            const blogIndex = new BlogIndex();
            const dataEl = new SntData();
            const blogData = {
                headline: '4 things you need to know about debit and credit card fraud',
                url: 'https://www.sonnet.ca/blog/debit-credit-card-fraud',
                timeToRead: '4 min. read',
                category: [{ key: 'Finance' }],
                image: {
                    titleImage: {
                        versionPath: '/dA/0526378e6a/fileAsset/BLOG-02-28-200_4-things-you-need-to-know-about-debit-and-credit-card-fraud@1x.jpg',
                    },
                }
            };
            jest.spyOn(dataEl, 'getData').mockResolvedValue({ 'Finance': 'Money matters' });
            jest.spyOn(document, 'querySelector').mockReturnValue(dataEl);
            const result = await blogIndex.buildBlog(blogData);
            expect(result.imageSource).toEqual('/dA/0526378e6a/fileAsset/BLOG-02-28-200_4-things-you-need-to-know-about-debit-and-credit-card-fraud@1x.jpg');
            expect(result.titleText).toEqual('4 things you need to know about debit and credit card fraud');
            expect(result.tagText).toEqual('Money matters');
            expect(result.timeToRead).toEqual('4 min. read');
            expect(result.blogLink).toEqual('https://www.sonnet.ca/blog/debit-credit-card-fraud');
        });
    });
});
