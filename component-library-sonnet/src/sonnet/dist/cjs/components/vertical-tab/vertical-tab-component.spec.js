import { newSpecPage } from "@stencil/core/testing";
import { SntVerticalTabs } from './vertical-tab-component';
const verticalTabsHtml = `<snt-vertical-tabs>
                                  <div class="tab-header">
                                    <ul class="vertical-tab-items">
                                      <li class="tab-item">
                                        <p>
                                          <a class="title selected" id="home" data-text="Home Insurance" >Home Insurance</a >
                                        </p>
                                      </li> 
                                      <li class="tab-item">
                                        <p>
                                          <a class="title selected" id="auto" data-text="Auto Insurance" >Auto Insurance</a >
                                        </p>
                                      </li> 
                                    </ul>
                                  </div>
                                  <div class="panel-wrapper">  
                                    <section class="panel">content panel 2</section> 
                                    <section class="panel">content panel 3</section>
                                  </div>
                            </snt-vertical-tabs>`;
describe("VerticalTabComponent", () => {
    it('should render tab header elements', async () => {
        const page = await newSpecPage({
            components: [SntVerticalTabs],
            html: verticalTabsHtml,
        });
        expect(page.root.querySelector('.tab-header')).toBeTruthy();
        expect(page.root.querySelector('ul.vertical-tab-items')).toBeTruthy();
    });
    it('should render two header list items + content', async () => {
        const page = await newSpecPage({
            components: [SntVerticalTabs],
            html: verticalTabsHtml,
        });
        const tabHeaderItems = page.root.querySelectorAll('li');
        expect(tabHeaderItems.length).toEqual(2);
        expect(tabHeaderItems[0].querySelector('p').textContent).toContain('Home Insurance');
        expect(tabHeaderItems[1].querySelector('p').textContent).toContain('Auto Insurance');
    });
    it('should render two tab contents', async () => {
        const page = await newSpecPage({
            components: [SntVerticalTabs],
            html: verticalTabsHtml,
        });
        const sectionPanel = page.root.querySelectorAll('section');
        expect(page.root.querySelector('.panel-wrapper')).toBeTruthy(); //See if the panel wrapper gets generated
        // Aria label checks
        expect(sectionPanel[0].getAttribute('role')).toContain('tabpanel');
        expect(sectionPanel[1].getAttribute('aria-hidden')).toContain('false'); // Make sure the second tab is hidden by default
        //Content checks
        expect(sectionPanel[0].textContent).toContain('content panel 2');
        expect(sectionPanel[1].textContent).toContain('content panel 3');
    });
});
