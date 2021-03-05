import { newSpecPage } from '@stencil/core/testing';
import { AccordionGroupComponent } from "./accordion-group-component";
import { AccordionComponent } from "./accordion-component";
// ATLEAST ONE ACC
// MULTI EXPAND TO
// ADD MULTI EXPAND TO NOT HAVE MUTLIPLE ACC OPEN
//
describe('Component Loads', () => {
    it('should build', () => {
        expect(new AccordionGroupComponent()).toBeTruthy(); //Checks to see if the component is valid and builds
    });
    it('renders component ', async () => {
        const component = new AccordionGroupComponent();
        const element = await component;
        expect(element).toBeTruthy();
    });
    it('renders component multi-expand prop ', async () => {
        const component = new AccordionGroupComponent();
        component.multiExpand = true;
        await component;
        expect(component.multiExpand).toBeTruthy();
    });
});
describe('Component Loads', () => {
    // MUST HAVE ATLEAST ONE CHILD
    // INITIALIZATION FUNCTION, AFTER RENDERING TO MAKE SURE THAT THERE IS ATLEAST ONE
    // MAKING SURE ONLY ONE EXPANDED IF TWO ARE SET TO BE EXPANDED
    it('checks to see if content is hidden on collapse', async () => {
        const page = await newSpecPage({
            components: [AccordionComponent],
            html: `
        <snt-accordion-group>
            <snt-accordion id="acc" expanded="true">
                <div slot="summary">Question One</div>
                <div slot="details"> Test dummy content in the accordion </div>
            </snt-accordion>
        </snt-accordion-group>
        `,
        });
        await page.waitForChanges();
        const getAccordionContentPanel = page.doc.getElementById('acc-panel').classList.contains('show');
        expect(getAccordionContentPanel).toBeTruthy();
    });
});
