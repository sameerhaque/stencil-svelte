import { LanguageUtils } from "../../core/utils/LanguageUtils";
import { PredictiveSearch, SearchType } from "../predictive-search/PredictiveSearch";
export class Header {
    constructor() { }
    static getInstance() {
        if (!Header.instance) {
            Header.instance = new Header();
        }
        return Header.instance;
    }
    listen() {
        document.addEventListener('sntInput', async (event) => {
            if (!('detail' in event)) {
                throw new Error('not a custom event');
            }
            event = event;
            const el = event.target;
            if (el && el.tagName === 'SNT-SEARCH-COMBOBOX' && PredictiveSearch.elementIds.has(el.id)) {
                let contentTypes = [];
                switch (PredictiveSearch.elementIds.get(el.id)) {
                    case SearchType.Global:
                        contentTypes = PredictiveSearch.globalSearchContentTypes;
                        break;
                    case SearchType.FAQ:
                        contentTypes = PredictiveSearch.faqSearchContentTypes;
                        break;
                }
                const result = await PredictiveSearch.getSearchSuggestions(el.value, contentTypes, LanguageUtils.isFrench()
                    ? LanguageUtils.LANGUAGE_ID.fr
                    : LanguageUtils.LANGUAGE_ID.en, 10);
                el.setSearchSuggestions(result);
            }
        });
    }
}
Header.predictiveSearch = PredictiveSearch.getInstance();
const instance = Header.getInstance();
instance.listen();
Header.predictiveSearch.register('combobox-search', SearchType.FAQ);
