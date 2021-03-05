//https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
import { CancellationCalculator } from './CancellationCalculator';
class SntForm extends HTMLElement {
    async getData() { }
}
describe('CancellationCalculator', () => {
    describe('listen', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            customElements.define('snt-form', SntForm, {
                extends: 'div',
            });
        });
        afterEach(() => {
            jest.resetAllMocks();
            jest.clearAllMocks();
        });
        it('listens to form submit', async () => {
            const mockMethod = jest.spyOn(CancellationCalculator, 'calculateCancellationPenalty');
            mockMethod.mockReturnValue(10.0);
            document.body.innerHTML =
                '<div>' +
                    '  <span class="dollar-amount">' +
                    '  </span>' +
                    '  <div class="form-panel">' +
                    '  </div>' +
                    '  <div class="result-panel">' +
                    '  </div>' +
                    '  <div class="question-content">' +
                    '  </div>' +
                    '  <div class="cost-savings-content">' +
                    '  </div>' +
                    '</div>';
            const form = new SntForm();
            jest.spyOn(form, 'getData').mockResolvedValue({ content: {
                    occurency: 'monthly',
                    pay: 10.0,
                    coverageEnd: '10/10/21',
                    coverageStart: '12/01/20'
                } });
            document.body.appendChild(form);
            const event = new CustomEvent('formSubmit', { bubbles: true });
            CancellationCalculator.listen();
            form.dispatchEvent(event);
            await Promise.resolve(); //listen async
            await Promise.resolve(); //define
            await Promise.resolve(); //getData
            await Promise.resolve();
            expect(CancellationCalculator.calculateCancellationPenalty).toHaveBeenCalled();
            mockMethod.mockRestore();
        });
        it('listens to the back button', async () => {
            const mockMethod = jest.spyOn(CancellationCalculator, 'executeEditCancellationCalculator');
            mockMethod.mockImplementation();
            document.body.innerHTML =
                '<div>' +
                    '  <a id="backToCalculator">' +
                    '  </a>' +
                    '</div>';
            const linkEl = document.querySelector('a');
            const event = new CustomEvent('linkEvent', { bubbles: true, detail: { type: 'click', target: { id: 'backToCalculator' } } });
            CancellationCalculator.listen();
            linkEl.dispatchEvent(event);
            expect(CancellationCalculator.executeEditCancellationCalculator).toHaveBeenCalled();
            mockMethod.mockRestore();
        });
    });
    describe('executeEditCancellationCalculator', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            document.body.innerHTML =
                '<div>' +
                    '  <button id="backToCalculator">' +
                    '  </button>' +
                    '  <div class="form-panel d-none">' +
                    '  </div>' +
                    '  <div class="result-panel">' +
                    '  </div>' +
                    '</div>';
        });
        it('shows the form panel', () => {
            CancellationCalculator.listen();
            CancellationCalculator.executeEditCancellationCalculator();
            const formPanel = document.querySelector('div.form-panel');
            expect(formPanel.classList.toString()).not.toMatch('d-none');
        });
        it('removes the result panel', () => {
            CancellationCalculator.listen();
            CancellationCalculator.executeEditCancellationCalculator();
            const resultPanel = document.querySelector('div.result-panel');
            expect(resultPanel.classList.toString()).toMatch('d-none');
        });
    });
    describe('isMobile', () => {
        it('returns true if the computed result panel is hidden', () => {
            jest.spyOn(window, 'getComputedStyle').mockReturnValue({
                display: 'none'
            });
            document.body.innerHTML =
                '<div>' +
                    '  <div class="result-panel d-none">' +
                    '  </div>' +
                    '</div>';
            expect(CancellationCalculator.isMobile()).toEqual(true);
        });
        it('returns false if the result panel is not hidden', () => {
            jest.spyOn(window, 'getComputedStyle').mockReturnValue({
                display: 'black'
            });
            document.body.innerHTML =
                '<div>' +
                    '  <div class="result-panel" style="display:block">' +
                    '  </div>' +
                    '</div>';
            expect(CancellationCalculator.isMobile()).toEqual(false);
        });
    });
    describe('calculateCancellationPenalty', () => {
        let mockProRate;
        let mockShortRate;
        beforeEach(() => {
            mockProRate = jest.spyOn(CancellationCalculator, 'getProRateAmount');
            mockShortRate = jest.spyOn(CancellationCalculator, 'getShortRateAmount');
        });
        afterEach(() => {
            mockProRate.mockRestore();
            mockShortRate.mockRestore();
        });
        it('returns 0 when premium is negative', () => {
            const premium = CancellationCalculator.calculateCancellationPenalty(-1, new Date(2021, 12, 1), new Date(2020, 10, 1));
            expect(premium).toEqual(0);
        });
        it('returns 0 when cancellation date after start date', () => {
            const premium = CancellationCalculator.calculateCancellationPenalty(-1, new Date(2020, 12, 1), new Date(2021, 10, 1));
            expect(premium).toEqual(0);
        });
        it('returns 0 when start date is greater than one year before cancellation date', () => {
            const premium = CancellationCalculator.calculateCancellationPenalty(-1, new Date(2022, 12, 1), new Date(2020, 10, 1));
            expect(premium).toEqual(0);
        });
        it('returns short rate minus the pro rate', () => {
            mockProRate.mockReturnValue(100);
            mockShortRate.mockReturnValue(120);
            const premium = CancellationCalculator.calculateCancellationPenalty(200, new Date(2021, 12, 1), new Date(2020, 10, 1));
            expect(premium).toEqual(20);
        });
    });
    describe('getDaysInForce', () => {
        it('calculates how long current policy will be active until desired sonnet move date', () => {
            const days = CancellationCalculator.getDaysInForce(new Date(2021, 10, 1), new Date(2020, 11, 1));
            expect(days).toBeGreaterThanOrEqual(30); //there are rounding errors on the Jenkins server, should look into building a within range expectation
            expect(days).toBeLessThanOrEqual(32);
        });
    });
    describe('getProRateAmount', () => {
        it('calculates the pro rated amount', () => {
            const amount = CancellationCalculator.getProRateAmount(100, 61);
            expect(amount).toEqual(16.71);
        });
    });
    describe('getShortRateAmount', () => {
        let mockShortRate;
        beforeEach(() => {
            mockShortRate = jest.spyOn(CancellationCalculator, 'getShortRate');
        });
        afterEach(() => {
            mockShortRate.mockRestore();
        });
        it('calculates the short rate amount', () => {
            mockShortRate.mockReturnValue(0.66);
            const amount = CancellationCalculator.getShortRateAmount(100, 61);
            expect(amount).toEqual(66);
        });
    });
    describe('getShortRate', () => {
        it('returns zero when days not a number', () => {
            const rate = CancellationCalculator.getShortRate(undefined);
            expect(rate).toEqual(0);
        });
        it('returns zero when days less than 0', () => {
            const rate = CancellationCalculator.getShortRate(-5);
            expect(rate).toEqual(0);
        });
        it('returns 1 when days greater than or equal to 354', () => {
            const rate = CancellationCalculator.getShortRate(354);
            expect(rate).toEqual(1);
        });
        it('returns rate where number of days is greater than first number of days in rate table', () => {
            const rate = CancellationCalculator.getShortRate(45);
            expect(rate).toEqual(0.19);
        });
    });
    describe('setMobileResultHeight', () => {
        afterEach(() => {
            jest.clearAllMocks();
            jest.resetAllMocks();
        });
        it('sets height to form panel height', () => {
            jest.spyOn(window, 'getComputedStyle').mockReturnValue({
                height: '100px'
            });
            document.body.innerHTML =
                '<div>' +
                    '  <div class="result-panel">' +
                    '  </div>' +
                    '  <div class="form-panel d-none">' +
                    '  </div>' +
                    '</div>';
            CancellationCalculator.setMobileResultHeight();
            const resultPanelEl = document.querySelector('div.result-panel');
            expect(resultPanelEl.style.height).toEqual('100px');
        });
    });
    describe('resetResultHeight', () => {
        it('sets height to auto', () => {
            document.body.innerHTML =
                '<div>' +
                    '  <div class="result-panel">' +
                    '  </div>' +
                    '</div>';
            CancellationCalculator.resetResultHeight();
            const resultPanelEl = document.querySelector('div.result-panel');
            expect(resultPanelEl.style.height).toEqual('auto');
        });
    });
});
