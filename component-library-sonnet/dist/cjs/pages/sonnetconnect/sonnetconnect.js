export class SonnetConnect {
    constructor() {
        this.category = 'all';
    }
    static getInstance() {
        if (!SonnetConnect.instance) {
            SonnetConnect.instance = new SonnetConnect();
        }
        return SonnetConnect.instance;
    }
    async initiate() {
        const urlParams = new URLSearchParams(window.location.search);
        history.replaceState(null, "", `?${urlParams.toString()}#`);
        this.category = urlParams.get(SonnetConnect.filterUrlParam) || 'all';
        await this.handlePageChange();
        await this.updateFilterSlider(this.category);
    }
    async updateFilterSlider(filterKey) {
        if (filterKey && filterKey !== "") {
            await customElements.whenDefined("snt-faq-filter-slider");
            const filterSlider = document.querySelector("snt-faq-filter-slider");
            if (filterSlider) {
                filterSlider.currentActive = filterKey;
            }
        }
    }
    async initiateSliderListener() {
        await customElements.whenDefined('snt-faq-filter-slider');
        document.addEventListener('faqFilterClick', async (event) => {
            if (!('detail' in event))
                throw new Error('invalid event');
            const newFilter = event.detail;
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            const currentFilter = urlParams.get(SonnetConnect.filterUrlParam);
            if (newFilter !== currentFilter) {
                this.category = newFilter;
                urlParams.set(SonnetConnect.filterUrlParam, this.category);
                history.pushState(null, "", `?${urlParams.toString()}#`);
                await this.handlePageChange();
            }
        });
    }
    initiateUrlListener() {
        window.addEventListener('popstate', async () => {
            let urlParams = new URLSearchParams(window.location.search.slice(1));
            let category = urlParams.get(SonnetConnect.filterUrlParam) || 'all';
            if (category !== this.category) {
                this.category = category;
                await this.handlePageChange();
                await this.updateFilterSlider(this.category);
            }
        });
    }
    async handlePageChange() {
        await customElements.whenDefined("snt-multi-column-mixed");
        const multiColumnMixedEl = document.querySelector("snt-multi-column-mixed");
        if (multiColumnMixedEl) {
            if (this.category !== "all") {
                const tilesToHide = multiColumnMixedEl.querySelectorAll(`.column:not([data-category='${this.category}'])`);
                if (tilesToHide) {
                    tilesToHide.forEach(el => {
                        el.classList.add("d-none");
                    });
                }
                const tilesToShow = multiColumnMixedEl.querySelectorAll(`.column[data-category='${this.category}']`);
                if (tilesToShow) {
                    tilesToShow.forEach(el => {
                        el.classList.remove("d-none");
                    });
                }
            }
            else {
                //show all
                const tiles = multiColumnMixedEl.querySelectorAll('.column');
                if (tiles) {
                    tiles.forEach(el => {
                        el.classList.remove("d-none");
                    });
                }
            }
            const viewport = multiColumnMixedEl.querySelector("snt-layout")?.getAttribute("viewport");
            if (viewport && viewport !== "") {
                multiColumnMixedEl.tagLastRow(viewport);
            }
        }
    }
}
SonnetConnect.filterUrlParam = "category";
const instance = SonnetConnect.getInstance();
window.addEventListener("load", async () => {
    instance.initiate();
    instance.initiateSliderListener();
    instance.initiateUrlListener();
});
