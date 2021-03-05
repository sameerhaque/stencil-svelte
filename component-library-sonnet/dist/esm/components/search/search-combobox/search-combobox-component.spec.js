import { SearchComboboxComponent } from "./search-combobox-component";
import { newSpecPage } from "@stencil/core/testing";
describe('Search Combobox Component', () => {
    const componentHtml = `<snt-search-combobox
        id="search-example-1"
        class="theme-default"
        search-function-ref="Search.getResults"
        auto-complete={true}
        language-string='{\"search\":\"Rechercher\"}'
    />`;
    it('builds', async () => {
        const specPageOptions = {
            components: [SearchComboboxComponent],
            html: componentHtml
        };
        const page = await newSpecPage(specPageOptions);
        const component = page.body.querySelector(SearchComboboxComponent.TAG_NAME);
        expect(component).toBeTruthy();
    });
    it('has combobox id properly set', async () => {
        const specPageOptions = {
            components: [SearchComboboxComponent],
            html: componentHtml
        };
        const page = await newSpecPage(specPageOptions);
        const combobox = page.body.querySelector("[role=combobox]");
        expect(combobox.id).toEqual("search-example-1-combobox");
    });
    it('has listbox id properly set', async () => {
        const specPageOptions = {
            components: [SearchComboboxComponent],
            html: componentHtml
        };
        const page = await newSpecPage(specPageOptions);
        const listbox = page.body.querySelector("[role=listbox]");
        expect(listbox.id).toEqual("search-example-1-listbox");
    });
});
