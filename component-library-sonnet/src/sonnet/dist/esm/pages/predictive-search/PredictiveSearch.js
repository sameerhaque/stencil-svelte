import axios from 'axios';
import { ContentTypes } from '../../core/dotcms/content/ContentTypes';
export var SearchType;
(function (SearchType) {
    SearchType["Global"] = "global";
    SearchType["FAQ"] = "faq";
})(SearchType || (SearchType = {}));
export class PredictiveSearch {
    constructor() { }
    static get elementIds() {
        return this._elementIds;
    }
    static getInstance() {
        if (!PredictiveSearch.instance) {
            PredictiveSearch.instance = new PredictiveSearch();
        }
        return PredictiveSearch.instance;
    }
    register(elementId, searchType) {
        if (!elementId || elementId.trim() === '') {
            throw new Error(`PredictiveSearch.register : elementId should be a valid string`);
        }
        if (!searchType || !Object.values(SearchType).includes(searchType)) {
            throw new Error(`PredictiveSearch.register : ${searchType} is not a valid SearchType`);
        }
        PredictiveSearch._elementIds.set(elementId, searchType);
    }
    static async getSearchSuggestions(keywords, contentTypes, languageId = '1', resultSize = 10, page = 1) {
        var suggestions = new Array();
        if (keywords && keywords != '') {
            keywords = keywords.trim();
            var res = await PredictiveSearch.searchByKeywords(keywords, contentTypes, languageId, resultSize, page);
            res.data.contentlets.forEach((content) => {
                switch (content?.contentType) {
                    case ContentTypes.FAQ:
                        suggestions.push({
                            title: content.question,
                            url: content.url,
                        });
                        break;
                    case ContentTypes.Blog:
                        suggestions.push({
                            title: content.headline,
                            url: content.url,
                        });
                        break;
                }
            });
            return suggestions;
        }
        return suggestions;
    }
    static async getSearchResults(keywords, contentTypes, languageId = '1', resultSize = 10, page = 1) {
        if (keywords && keywords != '') {
            keywords = keywords.trim();
            var res = await PredictiveSearch.searchByKeywords(keywords, contentTypes, languageId, resultSize, page);
            return res.data;
        }
        return '';
    }
    static async searchByKeywords(keywords, contentTypes, languageId = '1', resultSize = 10, page = 1) {
        const query = PredictiveSearch.buildSearchQuery(keywords, contentTypes, languageId, resultSize, page);
        return axios.post('/api/es/search', query, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    static buildSearchQuery(keywords, contentTypes, languageId = '1', resultSize = 10, page = 1) {
        let contentTypeQuery = '';
        let luceneQuery = '';
        var offset = (page - 1) * resultSize;
        contentTypes.forEach(contentType => contentTypeQuery += `contentType:${contentType} `);
        luceneQuery =
            `+(${contentTypeQuery}) +catchall:${keywords}* title:'${keywords}'^15 title_dotraw:*${keywords}*^5 ` +
                `+languageId:${languageId} +deleted:false +working:true `;
        keywords.split(' ').forEach((keyword) => {
            luceneQuery += `title:${keyword}^5 `;
        });
        let query = `
        {
            "query" : {
                "query_string" : {
                    "query" : "${luceneQuery}"
                }
            },
            "size":${resultSize},
            "from":${offset}
        }
        `;
        return query;
    }
}
PredictiveSearch._elementIds = new Map();
PredictiveSearch.globalSearchContentTypes = [ContentTypes.FAQ, ContentTypes.Blog];
PredictiveSearch.faqSearchContentTypes = [ContentTypes.FAQ];
