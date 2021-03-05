import { SonnetConnect } from "./sonnetconnect";
class SntFaqFilterSlider extends HTMLElement {
}
class SntMultiColumnMixed extends HTMLElement {
}
describe("Sonnet Connect", () => {
    describe("getInstance", () => {
        it("creates an instance of SonnetConnect", () => {
            const sonnetConnect = SonnetConnect.getInstance();
            expect(sonnetConnect).toBeInstanceOf(SonnetConnect);
        });
    });
    describe("initiate", () => {
        beforeEach(() => {
            document.body.innerHTML =
                `<div>
                  <snt-faq-filter-slider>
                  </snt-faq-filter-slider>
                  <snt-multi-column-mixed>
                    <snt-layout viewport="large">
                        <div class="column" data-category="finance">
                        </div>
                    </snt-layout>
                  </snt-multi-column-mixed>
                </div>`;
            customElements.define('snt-multi-column-mixed', SntMultiColumnMixed, {
                extends: 'div',
            });
            customElements.define('snt-faq-filter-slider', SntFaqFilterSlider, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('calls handlePageChange', async () => {
            const sonnetConnect = new SonnetConnect();
            const mock = jest
                .spyOn(sonnetConnect, 'handlePageChange')
                .mockImplementation(() => Promise.resolve());
            sonnetConnect.initiate();
            await Promise.resolve(); //handlePageChange
            await Promise.resolve(); //updateFilterSlider
            expect(mock).toHaveBeenCalled();
        });
        it('calls updateFilterSlider', async () => {
            const sonnetConnect = new SonnetConnect();
            const mock = jest
                .spyOn(sonnetConnect, 'updateFilterSlider')
                .mockImplementation(() => Promise.resolve());
            sonnetConnect.initiate();
            await Promise.resolve(); //handlePageChange
            await Promise.resolve(); //updateFilterSlider
            expect(mock).toHaveBeenCalled();
        });
    });
    describe('initiateSliderListener', () => {
        beforeEach(() => {
            document.body.innerHTML =
                '<div>' +
                    '  <snt-faq-filter-slider>' +
                    '  </snt-faq-filter-slider>' +
                    '</div>';
            customElements.define('snt-faq-filter-slider', SntFaqFilterSlider, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('does nothing when filter has not changed', async () => {
            window.location.search = '?category=all';
            const sonnetConnect = new SonnetConnect();
            const event = new CustomEvent('faqFilterClick', { detail: 'all' });
            spyOn(sonnetConnect, 'handlePageChange');
            sonnetConnect.initiateSliderListener();
            await Promise.resolve();
            document.dispatchEvent(event);
            expect(sonnetConnect.handlePageChange).not.toHaveBeenCalled();
        });
        it('calls handle page change when filter changes', async () => {
            window.location.search = '?category=all';
            const sonnetConnect = new SonnetConnect();
            const event = new CustomEvent('faqFilterClick', { detail: 'home' });
            jest.spyOn(sonnetConnect, 'handlePageChange').mockImplementation(() => Promise.resolve());
            sonnetConnect.initiateSliderListener();
            await Promise.resolve();
            document.dispatchEvent(event);
            await Promise.resolve();
            expect(sonnetConnect.handlePageChange).toHaveBeenCalled();
        });
    });
    describe('initiateUrlListener', () => {
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('does nothing when category is the same', () => {
            window.location.search = '?category=all';
            const sonnetConnect = new SonnetConnect();
            jest.spyOn(sonnetConnect, 'handlePageChange').mockImplementation(() => Promise.resolve());
            jest.spyOn(sonnetConnect, 'updateFilterSlider').mockImplementation(() => Promise.resolve());
            const event = new CustomEvent('popstate');
            sonnetConnect.initiateUrlListener();
            window.dispatchEvent(event);
            expect(sonnetConnect.handlePageChange).not.toHaveBeenCalled();
            expect(sonnetConnect.updateFilterSlider).not.toHaveBeenCalled();
        });
        it('calls handle page change when category is the different', async () => {
            window.location.search = '?category=home';
            const sonnetConnect = new SonnetConnect();
            jest.spyOn(sonnetConnect, 'handlePageChange').mockImplementation(() => Promise.resolve());
            jest.spyOn(sonnetConnect, 'updateFilterSlider').mockImplementation(() => Promise.resolve());
            const event = new CustomEvent('popstate');
            sonnetConnect.initiateUrlListener();
            window.dispatchEvent(event);
            await Promise.resolve();
            await Promise.resolve();
            expect(sonnetConnect.handlePageChange).toHaveBeenCalled();
            expect(sonnetConnect.updateFilterSlider).toHaveBeenCalledWith('home');
        });
    });
});
