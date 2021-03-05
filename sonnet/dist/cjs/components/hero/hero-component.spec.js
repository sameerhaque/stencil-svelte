import { newSpecPage } from "@stencil/core/testing";
import { HeroComponent } from './hero-component';
import { DataComponent } from '../data/data-component';
import { PanelComponent } from '../panel/panel-component';
describe('HeroComponent', () => {
    it('has a title', async () => {
        const specPageOptions = {
            components: [HeroComponent, DataComponent, PanelComponent],
            html: `
        <snt-hero properties='{
          "extra_small":{
             "logoUrl": "https://test-economical.dotcmscloud.com/dA/2d4022a9de/tp_SonnetxBoom_notagline_bi.svg",
             "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/922ca9cf-202c-48b7-9630-bfa409e53d23/fileAsset?language_id=1  "}
          },
          "small":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/2d4022a9de/tp_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/9320ff5d-3a9c-4c7b-a5a5-8365decf7fec/fileAsset?language_id=1 "
             }
          },
          "medium":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/ad5e04f1-e82b-450a-ae5f-f10aa767c02e/fileAsset?language_id=1 "
             }
          },
          "large":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/0808390f-92e3-4655-9dae-2a48d900e6f6/fileAsset?language_id=1 "
             }
          },
          "extra_large":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/729e08b0-1ab5-4c3b-8bb9-5d62a4e1e953/fileAsset?language_id=1 "
             }
          }
       }'>
        <div slot="content">
            <h1>Sonnet Insurance has Ontario tenants covered</h1>
            <p>Buy tenant insurance online in 5 minutes.</p>
        </div>
        </snt-hero>
        `
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector('h1');
        expect(titleElement.innerText).toContain('Sonnet Insurance has Ontario tenants covered');
    });
    it('sets the image viewport on resize', async () => {
        const specPageOptions = {
            components: [HeroComponent, DataComponent, PanelComponent],
            html: `
        <snt-hero properties='{
          "extra_small":{
             "logoUrl": "https://test-economical.dotcmscloud.com/dA/2d4022a9de/tp_SonnetxBoom_notagline_bi.svg",
             "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/922ca9cf-202c-48b7-9630-bfa409e53d23/fileAsset?language_id=1  "}
          },
          "small":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/2d4022a9de/tp_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/9320ff5d-3a9c-4c7b-a5a5-8365decf7fec/fileAsset?language_id=1 "
             }
          },
          "medium":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/ad5e04f1-e82b-450a-ae5f-f10aa767c02e/fileAsset?language_id=1 "
             }
          },
          "large":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/0808390f-92e3-4655-9dae-2a48d900e6f6/fileAsset?language_id=1 "
             }
          },
          "extra_large":{
              "logoUrl": "https://test-economical.dotcmscloud.com/dA/0bf0bd85b1/hd_SonnetxBoom_notagline_bi.svg",
              "logoAltText": "WealthSimple logo",
             "styles":{
                "backgroundImage":"https://test-economical.dotcmscloud.com/contentAsset/raw-data/729e08b0-1ab5-4c3b-8bb9-5d62a4e1e953/fileAsset?language_id=1 "
             }
          }
       }'>
          <div slot="content">
              <h1>Sonnet Insurance has Ontario tenants covered</h1>
              <p>Buy tenant insurance online in 5 minutes.</p>
          </div>
        </snt-hero>
        `
        };
        const page = await newSpecPage(specPageOptions);
        const event = new CustomEvent('viewportChanged', { detail: { viewport: 'medium' } });
        page.rootInstance.onResize(event);
        await page.waitForChanges();
        const imageElement = page.root.querySelector('snt-image.mobile-image');
        expect(imageElement.getAttribute('viewport')).toEqual('medium');
    });
});
