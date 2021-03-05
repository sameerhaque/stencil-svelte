export declare class SearchResults {
    private static readonly searchHash;
    private static readonly categoryHash;
    private static readonly categoryUrlParam;
    private static readonly filterUrlParam;
    private static readonly searchUrlParam;
    private static readonly pageUrlParam;
    private static readonly faqSearchContentTypes;
    private static instance;
    private selectedCategory;
    private selectedFilter;
    private selectedLanguageId;
    private constructor();
    static getInstance(): SearchResults;
    listen(): void;
    private getSelectedCategory;
    private setSearchResults;
    private setPaginationPageNum;
    private setPaginationTotalPages;
    private handlePageChange;
    private updateUrlTreeview;
    private updateCategoryPageCount;
    private updateUrlElasticSearch;
    private resetTreeviewSelection;
    private loadElasticSearchResults;
    private setResultsTitle;
    private updateFilterSlider;
    private getCategoryLabel;
    private scrollToTop;
    private focusFirstResult;
}