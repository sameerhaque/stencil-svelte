import { AbstractContentBuilder } from "./AbstractContentBuilder";
export class AbstractUrlContentBuilder extends AbstractContentBuilder {
    withUrl(url) {
        this.url = url;
        return this;
    }
    async build() {
        if (this.url) {
            return fetch(this.url.href).then(res => res.text()).then((body) => {
                return this.parse(body);
            });
        }
        throw new Error("No content has been defined using the builder.");
    }
}
