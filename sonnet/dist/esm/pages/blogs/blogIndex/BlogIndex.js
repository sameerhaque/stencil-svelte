import axios from 'axios';
import { LanguageUtils } from '../../../core/utils/LanguageUtils';
import { BlogSearch } from '../blogSearch/BlogSearch';
export class BlogIndex {
    constructor() {
        this.page = 1;
        this.category = 'all';
    }
    static getInstance() {
        if (!BlogIndex.instance) {
            BlogIndex.instance = new BlogIndex();
        }
        return BlogIndex.instance;
    }
    getPage() {
        return this.page;
    }
    async initiate() {
        const urlParams = new URLSearchParams(window.location.search);
        history.replaceState(null, "", `?${urlParams.toString()}#`);
        this.category = await this.getSelectedCategory();
        BlogSearch.search(LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, this.category)
            .then(async (results) => {
            const resultJson = await Promise.all(results.data.data.blogCollection.map(async (blog) => {
                return await this.buildBlog(blog);
            }));
            await customElements.whenDefined('snt-blog-results');
            const blogResultsEl = document.querySelector('snt-blog-results');
            blogResultsEl.blogResultsString = JSON.stringify(resultJson);
            await this.updateFilterSlider(this.category);
        })
            .catch((error) => {
            console.log('error:', error);
        });
    }
    async initiateMoreArticleListener() {
        await customElements.whenDefined('button-link');
        const moreArticlesEl = document.querySelector('button-link[button-id="more-articles-btn"]');
        moreArticlesEl?.addEventListener('linkEvent', (evt) => {
            if (evt.detail.type === 'click') {
                this.onMoreArticlesClick();
            }
        });
    }
    async initiateSliderListener() {
        await customElements.whenDefined('snt-faq-filter-slider');
        const sliderEl = document.querySelector('snt-faq-filter-slider');
        sliderEl?.addEventListener('faqFilterClick', async (event) => {
            if (!('detail' in event))
                throw new Error('invalid event');
            const detail = event.detail;
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            const currentFilter = urlParams.get(BlogIndex.filterUrlParam);
            if (detail !== currentFilter) {
                this.category = detail;
                urlParams.set(BlogIndex.filterUrlParam, this.category);
                history.pushState(null, "", `?${urlParams.toString()}#`);
                await this.handlePageChange();
            }
        });
    }
    initiateUrlListener() {
        window.addEventListener('popstate', async () => {
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            let category = urlParams.get(BlogIndex.filterUrlParam) || 'all';
            if (category !== this.category) {
                this.category = category;
                await this.handlePageChange();
                await this.updateFilterSlider(this.category);
            }
        });
    }
    async handlePageChange() {
        await customElements.whenDefined('snt-blog-results');
        const blogResultsEl = document.querySelector('snt-blog-results');
        blogResultsEl.blogResultsString = '[]';
        BlogSearch.search(LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, this.category)
            .then(async (results) => {
            this.page = 1;
            const resultJson = await Promise.all(results.data.data.blogCollection.map(async (blog) => {
                return await this.buildBlog(blog);
            }));
            blogResultsEl.blogResultsString = JSON.stringify(resultJson);
            this.showMoreArticlesButton();
        });
    }
    async updateFilterSlider(filterKey) {
        if (filterKey && filterKey !== "") {
            await customElements.whenDefined("snt-faq-filter-slider");
            const filterSlider = document.querySelector("snt-faq-filter-slider");
            filterSlider.currentActive = filterKey;
        }
    }
    onMoreArticlesClick() {
        this.page += 1;
        BlogSearch.search(LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, this.category, 9, this.page)
            .then(async (results) => {
            if (results.data.data.blogCollection.length === 0) {
                this.showComeBackButton();
            }
            else {
                const resultJson = await Promise.all(results.data.data.blogCollection.map(async (blog) => {
                    return await this.buildBlog(blog);
                }));
                await customElements.whenDefined('snt-blog-results');
                const blogResultsEl = document.querySelector('snt-blog-results');
                const lastColumn = blogResultsEl.querySelector('snt-multi-column-mixed:last-child .column:last-child a');
                if (lastColumn) {
                    lastColumn.focus();
                }
                let blogResult = JSON.parse(blogResultsEl.blogResultsString);
                blogResult = blogResult.concat(resultJson);
                blogResultsEl.blogResultsString = JSON.stringify(blogResult);
            }
        })
            .catch((error) => {
            console.log('error:', error);
        });
    }
    showComeBackButton() {
        const moreArticlesEl = document.querySelector('button-link-group[id="more-articles-btn-group"]');
        moreArticlesEl?.classList.add('d-none');
        const comeBackEl = document.querySelector('button-link-group[id="please-check-back-btn-group"]');
        comeBackEl?.classList.remove('d-none');
    }
    showMoreArticlesButton() {
        const moreArticlesEl = document.querySelector('button-link-group[id="more-articles-btn-group"]');
        moreArticlesEl?.classList.remove('d-none');
        const comeBackEl = document.querySelector('button-link-group[id="please-check-back-btn-group"]');
        comeBackEl?.classList.add('d-none');
    }
    async buildBlog(blog) {
        await customElements.whenDefined('snt-data');
        const dataEl = document.querySelector('snt-data#category-translations');
        const translationData = await dataEl.getData();
        return {
            imageSource: blog.image ? blog.image.titleImage.versionPath : '',
            titleText: blog.headline,
            tagText: translationData[blog.category[0].key],
            timeToRead: blog.timeToRead,
            blogLink: blog.url
        };
    }
    async getSelectedCategory() {
        let category;
        const urlParams = new URLSearchParams(window.location.search);
        const queryCategory = urlParams.get(BlogIndex.filterUrlParam);
        const pathname = window.location.pathname;
        if (queryCategory) {
            return queryCategory;
        }
        await axios.get('/api/vtl/categoryFilters').then(async (result) => {
            if (result.data.categories) {
                category = result.data.categories.find((cat) => cat.url === pathname);
            }
        });
        return category ? category.category : 'all';
    }
}
BlogIndex.filterUrlParam = 'category';
const blogIndex = BlogIndex.getInstance();
window.addEventListener('load', async () => {
    await blogIndex.initiate();
    blogIndex.initiateMoreArticleListener();
    blogIndex.initiateSliderListener();
    blogIndex.initiateUrlListener();
}, false);
