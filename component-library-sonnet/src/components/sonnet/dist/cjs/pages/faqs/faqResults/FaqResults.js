import axios from 'axios';
import { Faqs } from "./Faqs";
import { PredictiveSearch } from "../../predictive-search/PredictiveSearch";
import { LanguageUtils } from '../../../core/utils/LanguageUtils';
import { ContentTypes } from '../../../core/dotcms/content/ContentTypes';
export class SearchResults {
    constructor() {
        this.selectedCategory = "";
        this.selectedFilter = "";
        this.selectedLanguageId = "";
    }
    static getInstance() {
        if (!SearchResults.instance) {
            SearchResults.instance = new SearchResults();
        }
        return SearchResults.instance;
    }
    listen() {
        document.addEventListener('DOMContentLoaded', async (_evt) => {
            const urlParams = new URLSearchParams(window.location.search);
            const keywords = urlParams.get('es') ?? "";
            let pageNum = urlParams.get(SearchResults.pageUrlParam) ?? "1";
            if (!Number(pageNum)) {
                pageNum = "1";
            }
            const activeState = window.location.hash;
            let loadSearchResults = false;
            if (activeState && activeState !== "") {
                if (activeState === SearchResults.searchHash && keywords !== "") {
                    loadSearchResults = true;
                }
            }
            else if (keywords !== "") {
                loadSearchResults = true;
                history.replaceState(null, "", SearchResults.searchHash);
            }
            else {
                history.replaceState(null, "", SearchResults.categoryHash);
            }
            if (loadSearchResults) {
                await this.handlePageChange(Number(pageNum));
                this.setPaginationPageNum(Number(pageNum));
            }
            else {
                const treeview = document.querySelector("snt-treeview");
                if (treeview) {
                    let selectedCategory = await this.getSelectedCategory();
                    let selectedFilter = urlParams.get(SearchResults.filterUrlParam) ?? "all";
                    if (selectedCategory === "") {
                        selectedCategory = "quoting";
                    }
                    urlParams.set(SearchResults.categoryUrlParam, selectedCategory);
                    history.replaceState(null, "", `?${urlParams.toString()}${SearchResults.categoryHash}`);
                    this.handlePageChange(Number(pageNum));
                    await this.updateCategoryPageCount(selectedCategory, selectedFilter);
                    this.setPaginationPageNum(Number(pageNum));
                    treeview.selectNodeByUrlOrKey(selectedCategory, selectedFilter, false);
                    this.updateFilterSlider(selectedFilter);
                }
            }
        });
        document.addEventListener('sntChange', async (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const detail = evt.detail;
            if (detail.parentNode) {
                this.updateFilterSlider(detail.node.key);
            }
            if (detail.node['url'] || detail.parentNode['url']) {
                this.updateUrlTreeview(detail);
                this.updateCategoryPageCount(this.selectedCategory, this.selectedFilter, true);
            }
            this.handlePageChange(1);
            await customElements.whenDefined('snt-faq-filter-slider');
            const filterSlider = document.querySelector('snt-faq-filter-slider');
            if (detail.parentNode) {
                axios.get(`/api/vtl/faqCategoryFilters/${this.selectedCategory}`).then((response) => {
                    filterSlider.filterItems = response.data.filters;
                }, () => {
                    console.error(`Error retrieving filters for category "${this.selectedCategory}"`);
                });
            }
            else {
                filterSlider.filterItems = '[]';
            }
        });
        document.addEventListener('pageChanged', async (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const pageNum = evt.detail;
            const urlParams = new URLSearchParams(window.location.search.slice(1));
            if (Number(pageNum) === 1) {
                urlParams.delete(SearchResults.pageUrlParam);
            }
            else {
                urlParams.set(SearchResults.pageUrlParam, pageNum);
            }
            history.pushState(null, "", `?${urlParams.toString()}${window.location.hash}`);
            this.handlePageChange(Number(pageNum));
            this.scrollToTop();
            this.focusFirstResult();
        });
        document.addEventListener("sntSearchSubmitted", async (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const keywords = evt.detail.keywords;
            this.updateUrlElasticSearch(keywords);
            await this.handlePageChange(1);
            this.setPaginationPageNum(1);
        });
        document.addEventListener('faqFilterClick', async (event) => {
            if (!('detail' in event)) {
                throw new Error("not a custom event");
            }
            const filterKey = event.detail;
            const urlParams = new URLSearchParams(window.location.search.slice(1));
            const selectedCategory = urlParams.get(SearchResults.categoryUrlParam);
            if (selectedCategory && selectedCategory !== "") {
                if (filterKey && filterKey !== "") {
                    urlParams.set(SearchResults.filterUrlParam, filterKey);
                    await this.updateCategoryPageCount(selectedCategory, filterKey, true);
                    history.pushState(null, "", `?${urlParams.toString()}${SearchResults.categoryHash}`);
                    this.handlePageChange(1);
                    await customElements.whenDefined("snt-treeview");
                    const treeview = document.querySelector("snt-treeview");
                    if (treeview) {
                        treeview.selectNodeByUrlOrKey(selectedCategory, filterKey, false);
                    }
                }
            }
        });
        window.addEventListener("popstate", async () => {
            const activeState = window.location.hash;
            if (activeState && activeState !== "") {
                const urlParams = new URLSearchParams(window.location.search.slice(1));
                const pageNum = urlParams.get(SearchResults.pageUrlParam) ?? "1";
                if (activeState === SearchResults.searchHash) {
                    const keywords = urlParams.get(SearchResults.searchUrlParam);
                    if (keywords && keywords !== "") {
                        this.resetTreeviewSelection(); //To clear Category selections if any
                        await this.handlePageChange(Number(pageNum));
                        this.setPaginationPageNum(Number(pageNum));
                    }
                }
                else {
                    const treeview = document.querySelector("snt-treeview");
                    if (treeview) {
                        const selectedCategory = urlParams.get('category') ?? "";
                        const selectedFilter = urlParams.get('filter') ?? "all";
                        if (selectedCategory !== this.selectedCategory ||
                            selectedFilter !== this.selectedFilter) {
                            treeview.selectNodeByUrlOrKey(selectedCategory, selectedFilter, false);
                            this.updateFilterSlider(selectedFilter);
                            this.selectedCategory = selectedCategory;
                            this.selectedFilter = selectedFilter;
                            await this.updateCategoryPageCount(selectedCategory, selectedFilter);
                        }
                        this.handlePageChange(Number(pageNum));
                        this.setPaginationPageNum(Number(pageNum));
                    }
                }
            }
            this.scrollToTop();
            this.focusFirstResult();
        });
    }
    async getSelectedCategory() {
        let category;
        const urlParams = new URLSearchParams(window.location.search);
        const queryCategory = urlParams.get(SearchResults.categoryUrlParam);
        const pathname = window.location.pathname;
        if (queryCategory) {
            return queryCategory;
        }
        await axios.get('/api/vtl/categoryFilters').then(async (result) => {
            if (result.data.categories) {
                category = result.data.categories.find((cat) => cat.url === pathname);
            }
        });
        return category ? category.category : "";
    }
    async setSearchResults(results) {
        await customElements.whenDefined("snt-search-result-list");
        const SearchResults = document.querySelector("snt-search-result-list");
        if (results && results != "") {
            const SearchResultsContainer = document.querySelector(".faq-results");
            if (SearchResultsContainer) {
                if (results === "[]") {
                    SearchResultsContainer.classList.add("no-results");
                }
                else {
                    SearchResultsContainer.classList.remove("no-results");
                }
            }
            if (SearchResults)
                SearchResults.setAttribute("search-result-list-json", results);
        }
    }
    async setPaginationPageNum(pageNum) {
        await customElements.whenDefined("snt-pagination");
        const paginationEl = document.querySelector("snt-pagination");
        if (paginationEl) {
            if (pageNum > 0) {
                paginationEl.setPageNumber(pageNum);
            }
        }
    }
    async setPaginationTotalPages(totalPages) {
        await customElements.whenDefined("snt-pagination");
        const paginationEl = document.querySelector("snt-pagination");
        if (paginationEl) {
            if (totalPages > 0) {
                paginationEl.totalPages = totalPages.toString();
            }
        }
    }
    async handlePageChange(pageNum) {
        const urlHash = window.location.hash;
        if (urlHash === SearchResults.searchHash) {
            var params = new URLSearchParams(window.location.search.slice(1));
            const keywords = params.get('es') ?? "";
            if (keywords !== "") {
                await this.loadElasticSearchResults(keywords, pageNum);
                this.resetTreeviewSelection();
            }
        }
        else {
            const urlParams = new URLSearchParams(window.location.search.slice(1));
            this.selectedCategory = urlParams.get("category") || "";
            this.selectedFilter = urlParams.get("filter") || "";
            this.selectedLanguageId = LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en;
            const query = Faqs.buildFaqCollectionQuery(this.selectedCategory, this.selectedFilter, this.selectedLanguageId, Number(pageNum));
            axios.post('/api/v1/graphql', { query: query }).then((res) => {
                this.setSearchResults(JSON.stringify(res.data.data.FAQCollection));
            });
            const categoryLabel = await this.getCategoryLabel(this.selectedCategory);
            this.setResultsTitle(categoryLabel);
        }
    }
    updateUrlTreeview(eventDetail) {
        const newCategory = eventDetail['parentNode'] ? eventDetail['parentNode']['key'] : eventDetail['node']['key'];
        const newFilter = eventDetail['parentNode'] ? eventDetail['node']['key'] : "";
        let urlParams = new URLSearchParams(window.location.search.slice(1));
        urlParams.delete(SearchResults.pageUrlParam); //default would be page 1
        const currentCategory = urlParams.get(SearchResults.categoryUrlParam);
        const currentFilter = urlParams.get(SearchResults.filterUrlParam);
        if (currentCategory !== newCategory || currentFilter !== newFilter) {
            urlParams.set(SearchResults.categoryUrlParam, newCategory);
            newFilter === "" ? urlParams.delete(SearchResults.filterUrlParam)
                : urlParams.set(SearchResults.filterUrlParam, newFilter);
            history.pushState(null, "", `?${urlParams.toString()}${SearchResults.categoryHash}`);
            this.selectedCategory = newCategory;
            this.selectedFilter = newFilter;
        }
    }
    async updateCategoryPageCount(category, filter, resetCurrent = false) {
        await axios.get(`/api/vtl/faqCount`, {
            params: {
                category: category,
                filter: filter
            }
        }).then(async (countRes) => {
            if (resetCurrent) {
                this.setPaginationPageNum(1);
            }
            this.setPaginationTotalPages(Math.ceil(countRes.data.count / 10));
        });
    }
    updateUrlElasticSearch(keywords) {
        let urlParams = new URLSearchParams(window.location.search.slice(1));
        urlParams.set(SearchResults.searchUrlParam, keywords);
        urlParams.delete(SearchResults.pageUrlParam); //defualt page is page1
        history.pushState(null, "", `?${urlParams.toString()}${SearchResults.searchHash}`);
    }
    resetTreeviewSelection() {
        var categories = document.querySelector("snt-treeview")?.getElementsByTagName("li");
        if (categories) {
            for (var i = 0; i < categories.length; i++) {
                categories[i].classList.remove("selected", "focused");
                if (categories[i].getAttribute("aria-expanded") === "true") {
                    categories[i].setAttribute("aria-expanded", "false");
                    categories[i].querySelector(".expanded")?.classList.remove("expanded");
                }
            }
        }
        this.selectedCategory = "";
        this.selectedFilter = "";
    }
    async loadElasticSearchResults(keywords, page = 1) {
        if (keywords && keywords != "") {
            const searchResults = await PredictiveSearch.getSearchResults(keywords, SearchResults.faqSearchContentTypes, LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, 10, page);
            const searchResultList = new Array();
            searchResults.contentlets.forEach((content) => {
                searchResultList.push({
                    title: content.question,
                    description: content.answer,
                    url: content.url
                });
            });
            const total = searchResults.esresponse[0].hits.total;
            if (Number(total) && Number(total) > 0) {
                this.setPaginationTotalPages(Math.ceil(total / 10));
            }
            this.setSearchResults(JSON.stringify(searchResultList));
            await customElements.whenDefined("snt-search-result-list");
            const resultList = document.querySelector("snt-search-result-list");
            let resultTitle = "";
            if (resultList) {
                resultTitle = resultList.getAttribute("data-search-results-title") || "";
                resultTitle += ` "${keywords}"`;
            }
            this.setResultsTitle(resultTitle);
        }
    }
    async setResultsTitle(title) {
        await customElements.whenDefined("snt-title");
        const titleH1 = document.querySelector("snt-title[title-type='h1']");
        if (titleH1) {
            titleH1.setTitle(title);
            titleH1.clampTitle();
        }
    }
    async updateFilterSlider(filterKey) {
        if (filterKey && filterKey !== "") {
            await customElements.whenDefined("snt-faq-filter-slider");
            const filterSlider = document.querySelector("snt-faq-filter-slider");
            filterSlider.currentActive = filterKey;
        }
    }
    async getCategoryLabel(categoryUrl) {
        await customElements.whenDefined("snt-treeview");
        const treeview = document.querySelector("snt-treeview");
        if (treeview) {
            const treeviewItems = await treeview.getTreeitems();
            const categoryNode = treeviewItems.find(node => (node.url === categoryUrl || node.key === categoryUrl) && node.parentId === null);
            return categoryNode.label;
        }
        return "";
    }
    scrollToTop() {
        //Temporary woraround to scroll back to top
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    focusFirstResult() {
        var firstResult = document.querySelector(".search-result-list-wrapper a:first-child");
        if (firstResult) {
            firstResult.focus();
        }
        else {
            if (document.activeElement) {
                document.activeElement.blur();
            }
        }
    }
}
SearchResults.searchHash = "#search";
SearchResults.categoryHash = "#category";
SearchResults.categoryUrlParam = "category";
SearchResults.filterUrlParam = "filter";
SearchResults.searchUrlParam = "es";
SearchResults.pageUrlParam = "page";
SearchResults.faqSearchContentTypes = [ContentTypes.FAQ];
const fr = SearchResults.getInstance();
fr.listen();
