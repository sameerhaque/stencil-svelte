import axios from "axios";
export class GlobalSearch {
    constructor() {
        this.keywords = "";
        this.filter = 'all';
        this.category = 'all';
        this.pageNum = "1";
        this.totalCount = 0;
        this.totalBlogCount = 0;
    }
    static getInstance() {
        if (!GlobalSearch.instance) {
            GlobalSearch.instance = new GlobalSearch();
        }
        return GlobalSearch.instance;
    }
    async initiate() {
        const urlParams = new URLSearchParams(window.location.search);
        this.keywords = urlParams.get(GlobalSearch.searchUrlParam) || "";
        this.filter = urlParams.get(GlobalSearch.filterUrlParam) || GlobalSearch.defaultFilter;
        this.category = urlParams.get(GlobalSearch.categoryUrlParam) || GlobalSearch.defaultCategory;
        this.pageNum = urlParams.get(GlobalSearch.pageUrlParam) || "1";
        this.toggleLeftRail();
        if (this.keywords !== "") {
            this.showResults();
            await this.populateFilterItems();
            this.setKeywordsInSearchBox(this.keywords);
            if (this.pageNum !== "1") {
                this.setPaginationPageNum(Number(this.pageNum));
            }
        }
        else {
            this.showSearch();
        }
    }
    async initiateSliderListener() {
        await customElements.whenDefined('snt-faq-filter-slider');
        document.addEventListener('faqFilterClick', async (event) => {
            if (!('detail' in event))
                throw new Error('invalid event');
            const newFilter = event.detail;
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            const currentFilter = urlParams.get(GlobalSearch.filterUrlParam);
            if (newFilter !== currentFilter) {
                this.filter = newFilter;
                if (this.filter === 'blog') {
                    this.category = GlobalSearch.defaultCategory;
                    urlParams.set(GlobalSearch.categoryUrlParam, this.category);
                    const treeview = document.querySelector("snt-treeview");
                    if (treeview) {
                        treeview.selectNodeByUrlOrKey(this.category);
                    }
                }
                urlParams.set(GlobalSearch.filterUrlParam, this.filter);
                urlParams.delete(GlobalSearch.pageUrlParam);
                history.pushState(null, "", `?${urlParams.toString()}`);
                this.pageNum = "1";
                await this.handlePageChange();
                this.toggleLeftRail();
                this.setPaginationPageNum(Number(this.pageNum));
            }
        });
    }
    async initiatePageChangedListener() {
        await customElements.whenDefined("snt-pagination");
        document.addEventListener('pageChanged', async (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const pageNum = evt.detail;
            const urlParams = new URLSearchParams(window.location.search.slice(1));
            if (Number(pageNum) === 1) {
                urlParams.delete(GlobalSearch.pageUrlParam);
            }
            else {
                urlParams.set(GlobalSearch.pageUrlParam, pageNum);
            }
            this.pageNum = pageNum;
            this.handlePageChange();
            this.scrollToTop();
            this.focusFirstResult();
            history.pushState(null, "", `?${urlParams.toString()}${window.location.hash}`);
        });
    }
    async initiateTreeViewListener() {
        await customElements.whenDefined("snt-treeview");
        document.addEventListener('sntChange', async (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const detail = evt.detail;
            if (detail.node.key !== this.category) {
                this.category = detail.node.key;
                this.pageNum = '1';
                const urlParams = new URLSearchParams(window.location.search.slice(1));
                urlParams.set(GlobalSearch.categoryUrlParam, this.category);
                urlParams.delete(GlobalSearch.pageUrlParam);
                history.pushState(null, "", `?${urlParams.toString()}${window.location.hash}`);
                this.handlePageChange(false);
                this.setPaginationPageNum(1);
            }
        });
    }
    initiateUrlListener() {
        window.addEventListener("popstate", async () => {
            const urlParams = new URLSearchParams(window.location.search.slice(1));
            this.pageNum = urlParams.get(GlobalSearch.pageUrlParam) ?? "1";
            this.filter = urlParams.get(GlobalSearch.filterUrlParam) ?? GlobalSearch.defaultFilter;
            this.category = urlParams.get(GlobalSearch.categoryUrlParam) ?? GlobalSearch.defaultCategory;
            this.keywords = urlParams.get(GlobalSearch.searchUrlParam) ?? "";
            if (this.keywords === '') {
                this.showSearch();
            }
            else {
                this.showResults();
                this.handlePageChange();
                this.updateFilterSlider(this.filter);
                this.toggleLeftRail();
                const treeview = document.querySelector("snt-treeview");
                if (treeview) {
                    treeview.selectNodeByUrlOrKey(this.category);
                }
                this.setPaginationPageNum(Number(this.pageNum));
            }
        });
    }
    initiateSearchComboboxListener() {
        document.addEventListener("sntSearchSubmitted", async (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            this.keywords = evt.detail.keywords;
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            urlParams.set(GlobalSearch.searchUrlParam, this.keywords);
            urlParams.delete(GlobalSearch.pageUrlParam); //defualt page is page1
            history.pushState(null, "", `?${urlParams.toString()}`);
            await this.handlePageChange();
            this.populateFilterItems();
            this.showResults();
            this.setPaginationPageNum(1);
        });
    }
    async handlePageChange(updateResultsCount = true) {
        await customElements.whenDefined("snt-search-result-list");
        var faqResults = document.querySelector("snt-search-result-list");
        var urlParams = new URLSearchParams();
        urlParams.set(GlobalSearch.searchUrlParam, this.keywords);
        urlParams.set(GlobalSearch.filterUrlParam, this.filter);
        urlParams.set(GlobalSearch.categoryUrlParam, this.category);
        urlParams.set(GlobalSearch.pageUrlParam, this.pageNum);
        axios.get(`/api/vtl/globalSearchResults?${urlParams.toString()}`)
            .then(async (response) => {
            if (response.data.searchResult.items) {
                //set search results
                const results = JSON.stringify(response.data.searchResult.items);
                if (results && results != "") {
                    const faqResultsContainer = document.querySelector(".search-results");
                    const blogCategoryTree = document.querySelector('.blog-category-treeview');
                    if (results === "[]" && faqResultsContainer) {
                        faqResultsContainer.classList.add("no-results");
                        blogCategoryTree.classList.add("no-results");
                    }
                    else {
                        faqResultsContainer.classList.remove("no-results");
                        blogCategoryTree.classList.remove("no-results");
                    }
                    faqResults.setAttribute("search-result-list-json", results);
                }
                //set pagination total count
                if (response.data.searchResult.total !== null || response.data.searchResult.total !== undefined) {
                    const total = response.data.searchResult.total;
                    if (Number(total) && Number(total) > 0) {
                        this.totalCount = total;
                        this.setPaginationTotalPages(Math.ceil(total / 10));
                    }
                    else if (total === 0) {
                        this.totalCount = 0;
                    }
                }
                await customElements.whenDefined("snt-search-result-list");
                const resultList = document.querySelector("snt-search-result-list");
                let resultTitle = "";
                if (resultList) {
                    resultTitle = resultList.getAttribute("data-search-results-title") || "";
                    resultTitle += ` "${this.keywords}"`;
                }
                await this.setResultsTitle(resultTitle);
                this.togglePagination(this.totalCount);
                if (updateResultsCount) {
                    if (this.filter === "blog") {
                        await this.setResultsCount(this.totalBlogCount);
                    }
                    else {
                        await this.setResultsCount(this.totalCount);
                    }
                }
            }
        }, () => {
            console.error(`Promise rejected for search keywords "${this.keywords}"`);
        }).catch((error) => {
            console.error(`Error on fetching search results ${error}`);
        });
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
    async updateFilterSlider(filterKey) {
        if (filterKey && filterKey !== "") {
            await customElements.whenDefined("snt-faq-filter-slider");
            const filterSlider = document.querySelector("snt-faq-filter-slider");
            filterSlider.currentActive = filterKey;
        }
    }
    async setResultsTitle(title) {
        await customElements.whenDefined("snt-title");
        const titleH1 = document.querySelector(".results-title-section snt-title[title-type='h1']");
        if (titleH1) {
            titleH1.setTitle(title);
            titleH1.clampTitle();
        }
    }
    async setResultsCount(count) {
        await customElements.whenDefined("snt-search-result-list");
        const resultsCount = document.querySelector(".results-count");
        if (resultsCount) {
            resultsCount.innerHTML = count.toString();
        }
    }
    togglePagination(count) {
        const paginationEl = document.querySelector("snt-pagination");
        if (count > 0) {
            paginationEl.classList.remove('d-none');
        }
        else {
            paginationEl.classList.add('d-none');
        }
    }
    async setKeywordsInSearchBox(keywords) {
        await customElements.whenDefined("snt-search-combobox");
        const input = document.querySelector('.search-combobox-section snt-search-combobox input');
        if (input) {
            input.value = keywords;
        }
    }
    toggleLeftRail() {
        const searchResultsEl = document.querySelector('.search-results');
        const blogCategoryTree = document.querySelector('.blog-category-treeview');
        if (this.filter !== 'blog' && this.filter !== '') {
            searchResultsEl?.classList.remove('blog-results');
            blogCategoryTree?.classList.add('d-none');
        }
        else {
            searchResultsEl?.classList.add('blog-results');
            blogCategoryTree?.classList.remove('d-none');
        }
    }
    async populateFilterItems() {
        const urlParams = new URLSearchParams(window.location.search);
        await customElements.whenDefined('snt-faq-filter-slider');
        await customElements.whenDefined('snt-treeview');
        const treeview = document.querySelector("snt-treeview");
        const filterSlider = document.querySelector('snt-faq-filter-slider');
        const treeContentId = treeview.getAttribute('data-content-id');
        if (this.keywords == '') {
            filterSlider.filterItems = '[]';
            return;
        }
        const responseFilterItems = axios.get(`/api/vtl/globalSearchFilterItems?es=${this.keywords}&treeviewId=${treeContentId}`)
            .then((response) => {
            filterSlider.filterItems = response.data.filters;
            treeview.updateTreeView(JSON.stringify(response.data.blogCategories));
            if (response.data.blogCategories.items && !isNaN(response.data.blogCategories.items[0].count)) {
                this.totalBlogCount = response.data.blogCategories.items[0].count;
            }
        }, () => {
            console.error(`Promise rejected for search keywords "${this.keywords}"`);
        }).catch((error) => {
            console.error(`Error on fetching search results ${error}`);
        });
        urlParams.set(GlobalSearch.filterUrlParam, this.filter);
        urlParams.set(GlobalSearch.categoryUrlParam, this.category);
        urlParams.set(GlobalSearch.pageUrlParam, this.pageNum);
        history.replaceState(null, "", `?${urlParams.toString()}`);
        await responseFilterItems;
        this.handlePageChange();
        if (this.filter !== GlobalSearch.defaultFilter) {
            this.updateFilterSlider(this.filter);
        }
        if (this.filter === 'blog') {
            if (treeview) {
                treeview.selectNodeByUrlOrKey(this.category);
            }
        }
    }
    showSearch() {
        document.querySelector('.search-title-section')?.classList.remove('d-none');
        document.querySelector('.search-combobox-section')?.classList.remove('results-section');
        document.querySelector('.results-title-section')?.classList.add('d-none');
        document.querySelector('.search-results')?.classList.add('d-none');
        document.querySelector('.results-filter-section')?.classList.add('d-none');
        document.querySelector('.snt-search-results-count')?.classList.add('d-none');
    }
    showResults() {
        document.querySelector('.search-title-section')?.classList.add('d-none');
        document.querySelector('.search-combobox-section')?.classList.add('results-section');
        document.querySelector('.results-title-section')?.classList.remove('d-none');
        document.querySelector('.search-results')?.classList.remove('d-none');
        document.querySelector('.results-filter-section')?.classList.remove('d-none');
        document.querySelector('.snt-search-results-count')?.classList.remove('d-none');
    }
}
GlobalSearch.searchUrlParam = "es";
GlobalSearch.filterUrlParam = 'filter';
GlobalSearch.categoryUrlParam = "category";
GlobalSearch.pageUrlParam = 'page';
GlobalSearch.defaultFilter = 'all';
GlobalSearch.defaultCategory = 'all';
const instance = GlobalSearch.getInstance();
window.addEventListener("load", async () => {
    instance.initiate();
    instance.initiateSliderListener();
    instance.initiatePageChangedListener();
    instance.initiateUrlListener();
    instance.initiateTreeViewListener();
    instance.initiateSearchComboboxListener();
});
