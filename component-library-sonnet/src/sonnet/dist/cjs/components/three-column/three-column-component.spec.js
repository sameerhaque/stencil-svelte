jest.mock('../../core/viewport/service/ViewportConfigurationService');
import { newSpecPage } from '@stencil/core/testing';
import { ThreeColumnComponent } from './three-column-component';
import { LayoutComponent } from '../layout/layout-component';
import { ViewportConfigurationService } from '../../core/viewport/service/ViewportConfigurationService';
describe('three-column-component', () => {
    describe('Props', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            ViewportConfigurationService.getInstance.mockReturnValue({
                register: jest.fn()
            });
        });
        it('contains three columns', async () => {
            const specPageOptions = {
                components: [ThreeColumnComponent],
                html: `<snt-three-column>
            <div slot="left">First</div>
            <div slot="center">Second</div>
            <div slot="right">Third</div>
        </snt-three-column>`
            };
            const page = await newSpecPage(specPageOptions);
            const columns = page.root.querySelectorAll('div.column');
            expect(columns.length).toEqual(3);
            expect(columns[0].textContent).toEqual('First');
            expect(columns[1].textContent).toEqual('Second');
            expect(columns[2].textContent).toEqual('Third');
        });
        it('sets the viewport when layout size changes', async () => {
            const specPageOptions = {
                components: [ThreeColumnComponent, LayoutComponent],
                html: `<snt-three-column>
                <div slot="left"><span>First</span></div>
                <div slot="center"><span>Second</span></div>
                <div slot="right"><span>Third</span></div>
            </snt-three-column>`
            };
            const page = await newSpecPage(specPageOptions);
            const layout = page.root.querySelector('snt-layout');
            layout.setAttribute('viewport', 'md');
            await page.waitForChanges();
            const columns = page.root.querySelectorAll('div.column');
            expect(columns[0].getAttribute('viewport')).toEqual('md');
            expect(columns[1].getAttribute('viewport')).toEqual('md');
            expect(columns[2].getAttribute('viewport')).toEqual('md');
        });
    });
    describe('registeringChildren', () => {
        it('calls registerViewport on snt-icon-copy elements', async () => {
            const threeColumnComponent = new ThreeColumnComponent();
            const columnEl = document.createElement('div');
            const iconEl = document.createElement('snt-icon-copy');
            iconEl.registerViewport = jest.fn();
            columnEl.appendChild(iconEl);
            threeColumnComponent.registerChildren(columnEl);
            expect(iconEl.registerViewport).toHaveBeenCalled();
        });
    });
    describe('componentDidLoad', () => {
        it('registers child elements to observer', () => {
            const threeColumnComponent = new ThreeColumnComponent();
            const leftColEl = document.createElement('div');
            const rightColEl = document.createElement('div');
            const centerColEl = document.createElement('div');
            threeColumnComponent['leftColumn'] = leftColEl;
            threeColumnComponent['rightColumn'] = rightColEl;
            threeColumnComponent['centerColumn'] = centerColEl;
            jest.spyOn(threeColumnComponent, 'registerChildren');
            threeColumnComponent.componentDidLoad();
            expect(threeColumnComponent.registerChildren).toHaveBeenCalledWith(leftColEl);
            expect(threeColumnComponent.registerChildren).toHaveBeenCalledWith(rightColEl);
            expect(threeColumnComponent.registerChildren).toHaveBeenCalledWith(centerColEl);
        });
    });
});
