import { LanguageUtils } from '../../../core/utils/LanguageUtils';
import axios from "axios";
export class FaqIndex {
    constructor() { }
    static getInstance() {
        if (!FaqIndex.instance) {
            FaqIndex.instance = new FaqIndex();
        }
        return FaqIndex.instance;
    }
    listen() {
        document.addEventListener("sntSearchSubmitted", (evt) => {
            if (!('detail' in evt))
                throw new Error('not a custom event');
            const keywords = evt.detail.keywords;
            let params = new URLSearchParams();
            params.append("es", keywords);
            if (LanguageUtils.isFrench()) {
                window.location.href = "/faq/resultats?" + params.toString();
            }
            else {
                window.location.href = "/FAQs/results?" + params.toString();
            }
        });
        window.addEventListener('load', async () => {
            const blockList = document.querySelector('snt-faq-block-list');
            await customElements.whenDefined('snt-faq-block-list');
            axios.get(`/api/vtl/faqs/${blockList.getAttribute('data-content-id')}`).then((response) => {
                blockList.faqBlockList = response.data.categories;
            }, () => {
                console.error('Error retrieving faq list');
            });
        });
    }
}
const faqIndex = FaqIndex.getInstance();
faqIndex.listen();
