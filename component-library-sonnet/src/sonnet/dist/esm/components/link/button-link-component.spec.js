import { newSpecPage } from "@stencil/core/testing";
import { ButtonLinkComponent } from "./button-link-component";
describe("ButtonLinkComponent", () => {
    it('renders a link', async () => {
        const specPageOptions = {
            components: [ButtonLinkComponent],
            html: `<button-link
                    href="https://www.sonnet.ca/auto-insurance"
                    class-names="theme-default"
                    target="_self"
                    aria-label="aria label">Home &amp; Auto</button-link>`,
        };
        const page = await newSpecPage(specPageOptions);
        const linkElement = page.root.querySelector('a');
        expect(linkElement.getAttribute('href')).toEqual('https://www.sonnet.ca/auto-insurance');
        expect(linkElement.getAttribute('class')).toEqual('theme-default');
        expect(linkElement.innerText).toEqual('Home & Auto');
        expect(linkElement.getAttribute('target')).toEqual('_self');
        expect(linkElement.getAttribute('aria-label')).toEqual('aria label');
    });
    it('renders with external icon', async () => {
        const specPageOptions = {
            components: [ButtonLinkComponent],
            html: `<button-link
                    href="https://www.sonnet.ca/auto-insurance"
                    class-names="theme-default"
                    target="_blank"
                    aria-label="aria label">Home &amp; Auto</button-link>`,
        };
        const page = await newSpecPage(specPageOptions);
        const iconElement = page.root.querySelector('span.icon-new-window');
        expect(iconElement).not.toBeNull();
    });
});
