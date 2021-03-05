import { newSpecPage } from "@stencil/core/testing";
import { TreeviewComponent } from './treeview-component';
describe('Treeview component', () => {
    describe('DOM', () => {
        it('contains 24 items', async () => {
            const specPageOptions = {
                components: [TreeviewComponent],
                html: `<snt-treeview
        structure='${JSON.stringify(treeStructure)}'>
        </snt-treeview>`
            };
            const page = await newSpecPage(specPageOptions);
            const listItems = page.root.querySelectorAll('li');
            expect(listItems.length).toEqual(24);
        });
    });
    describe('Keyboard event processor', () => {
        it('has been set up', async () => {
            const specPageOptions = {
                components: [TreeviewComponent],
                html: `<snt-treeview
            structure='${JSON.stringify(treeStructure)}'>
            </snt-treeview>`
            };
            const page = await newSpecPage(specPageOptions);
            const delegatedHandlers = page.rootInstance.keyboardEventProcessor.getDelegatedHandlers();
            expect(delegatedHandlers.get('ArrowUp')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('ArrowDown')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('ArrowLeft')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('ArrowRight')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('Home')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('End')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('*')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get('Enter')).toBeInstanceOf(Function);
            expect(delegatedHandlers.get(' ')).toBeInstanceOf(Function); //space
        });
    });
    describe('treeitems', () => {
        it('has top-level items and children of expanded items set to visible', async () => {
            const specPageOptions = {
                components: [TreeviewComponent],
                html: `<snt-treeview
            structure='${JSON.stringify(treeStructure)}'>
            </snt-treeview>`
            };
            const page = await newSpecPage(specPageOptions);
            const treeviewComponent = page.rootInstance;
            const treeitems = await treeviewComponent.getTreeitems();
            const topLevelItems = treeitems.filter(node => !node.parentId);
            const expandedItemsChildren = treeitems.filter((node) => {
                const parent = treeitems.find((n) => n.id == node.parentId);
                return parent && parent.expanded;
            });
            const visibleItems = treeitems.filter((node) => node.visible);
            expect(visibleItems.length).toEqual(topLevelItems.length + expandedItemsChildren.length);
        });
        it('updates selected items', async () => {
            const specPageOptions = {
                components: [TreeviewComponent],
                html: `<snt-treeview
            structure='${JSON.stringify(treeStructure)}'>
            </snt-treeview>`
            };
            const page = await newSpecPage(specPageOptions);
            const treeviewComponent = page.rootInstance;
            let treeitems = await treeviewComponent.getTreeitems();
            let selectedItems = treeitems.filter((node) => node.selected);
            // No item should be selected at this point
            expect(selectedItems.length).toEqual(0);
            treeitems = await treeviewComponent.updateSelectedTreeitems(treeitems, [treeitems[0]]);
            selectedItems = treeitems.filter(node => node.selected);
            expect(selectedItems.length).toEqual(1);
        });
        it('updates visible items', async () => {
            const specPageOptions = {
                components: [TreeviewComponent],
                html: `<snt-treeview
          structure='${JSON.stringify(treeStructure)}'>
          </snt-treeview>`
            };
            const page = await newSpecPage(specPageOptions);
            const treeviewComponent = page.rootInstance;
            let treeitems = await treeviewComponent.getTreeitems();
            let invisbleItems = treeitems.filter((node) => !node.visible);
            treeitems = await treeviewComponent.updateVisibleTreeitems(treeitems, invisbleItems, true);
            invisbleItems = treeitems.filter((node) => !node.visible);
            // No item should be invisble at this point
            expect(invisbleItems.length).toEqual(0);
        });
        it('updates expanded items', async () => {
            const specPageOptions = {
                components: [TreeviewComponent],
                html: `<snt-treeview
          structure='${JSON.stringify(treeStructure)}'>
          </snt-treeview>`
            };
            const page = await newSpecPage(specPageOptions);
            const treeviewComponent = page.rootInstance;
            let treeitems = await treeviewComponent.getTreeitems();
            let expandableItems = treeitems.filter((node) => node.expandable);
            let expandedItemsCount = treeitems.filter((node) => node.expanded).length;
            treeitems = await treeviewComponent.updateExpandedTreeitems(treeitems, expandableItems, true);
            let expandedItems = treeitems.filter((node) => node.expanded);
            // No item should be invisble at this point
            expect(expandedItems.length).toBeGreaterThan(expandedItemsCount);
        });
    });
    const treeStructure = { "items": [{ "title": "Quoting", "key": "quoting", "expanded": "true", "items": [{ "title": "All", "key": "all" }, { "title": "Home", "key": "home" }, { "title": "Auto", "key": "auto", "items": [{ "title": "All", "key": "all" }, { "title": "Personal", "key": "personal" }, { "title": "Business", "key": "business" }] }, { "title": "Other", "key": "other" }] }, { "title": "Purchasing", "key": "purchasing" }, { "title": "Account", "key": "account" }, { "title": "Policy & Coverages", "key": "policy-coverages" }, { "title": "Payments", "items": [{ "title": "All", "key": "all" }, { "title": "Home", "key": "home" }, { "title": "Auto", "key": "auto" }, { "title": "Other", "key": "other" }] }, { "title": "Claims", "key": "claims" }, { "title": "Renewal & Cancellation", "key": "renewal-cancellation" }, { "title": "Group Insurance", "key": "group-insurance" }, { "title": "Other Inquiries", "key": "other-inquiries", "items": [{ "title": "All", "key": "all" }, { "title": "Home", "key": "home" }, { "title": "Auto", "key": "auto" }, { "title": "Other", "key": "other" }] }] };
});
