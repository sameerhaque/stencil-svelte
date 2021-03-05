import { newSpecPage } from "@stencil/core/testing";
import { IconCopyComponent } from './icon-copy-component';
import { DataComponent } from '../data/data-component';
describe('icon-copy', () => {
    it('builds', () => {
        expect(new IconCopyComponent()).toBeTruthy();
    });
    describe('Props', () => {
        it('has a title', async () => {
            const specPageOptions = {
                components: [IconCopyComponent, DataComponent],
                html: `<snt-icon-copy
          properties='{
            "smallIconUrl": "",
            "largeIconUrl": ""
          }'
          title-string="My Title">
          </snt-icon-copy>`
            };
            const page = await newSpecPage(specPageOptions);
            const titleElement = page.root.querySelector('h3');
            expect(titleElement.innerText).toEqual('My Title');
        });
        it('has a an image', async () => {
            const specPageOptions = {
                components: [IconCopyComponent, DataComponent],
                html: `<snt-icon-copy
        properties='{
          "smallIconUrl": "",
          "largeIconUrl": "/icon/test.png"
        }'
        title-string="My Title">
          </snt-icon-copy>`
            };
            const page = await newSpecPage(specPageOptions);
            const imageElement = page.root.querySelector('img');
            expect(imageElement.getAttribute('src')).toEqual('/icon/test.png');
        });
        it('has content', async () => {
            const specPageOptions = {
                components: [IconCopyComponent, DataComponent],
                html: `<snt-icon-copy
          properties='{
            "smallIconUrl": "",
            "largeIconUrl": ""
          }'
          title-string="My Title">
            <div>This is my content</div>
          </snt-icon-copy>`
            };
            const page = await newSpecPage(specPageOptions);
            const customContentElement = page.root.querySelector('div.content');
            expect(customContentElement.innerHTML.trim()).toEqual('<div>This is my content</div>');
        });
        it('has icon from properties', async () => {
            const specPageOptions = {
                components: [IconCopyComponent, DataComponent],
                html: `<snt-icon-copy slot="left"
          properties='{
              "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",
              "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"
          }'
          title-string="My Title">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </snt-icon-copy>`
            };
            const page = await newSpecPage(specPageOptions);
            const imageElement = page.root.querySelector('img');
            expect(imageElement.getAttribute('src')).toEqual('https://img.icons8.com/dotty/45/000000/user.png');
        });
    });
});
