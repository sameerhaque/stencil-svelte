jest.mock('axios');
import { newSpecPage } from "@stencil/core/testing";
import { VideoComponent } from "./video-component";
import axios from 'axios';
describe("VideoComponent", () => {
    let videoProps, videoHtml, htmlString;
    beforeEach(() => {
        videoProps = {
            headline: 'Video Headline',
            description: '<p>Video <b>Description</b></p>',
            shareUrl: "https://videos.sonnet.ca/watch/PtL3pNmQZdc9ctaMd6mgup?",
            oembedUrl: "https://api.vidyard.com/dashboard/v1.1/oembed",
            playUrl: "https://play.vidyard.com"
        };
        videoHtml = `<snt-video
            headline="${videoProps.headline}"
            share-url="${videoProps.shareUrl}"
            oembed-url="${videoProps.oembedUrl}"
            play-url="${videoProps.playUrl}">
            <div slot="description">
                ${videoProps.description}
            </div>
        </snt-video>`;
        htmlString = `
            <script 
                type=\"text/javascript\" 
                async src=\"https://play.vidyard.com/embed/v4.js\">
            </script>
            <img 
                style=\"width: 100%; margin: auto; display: block;\"
                class=\"vidyard-player-embed\"
                src=\"https://play.vidyard.com/PtL3pNmQZdc9ctaMd6mgup.jpg\"
                data-uuid=\"PtL3pNmQZdc9ctaMd6mgup\"  
                data-v=\"4\"\n  data-type=\"inline\"
                data-width=\"640\"\n  data-height=\"360\"
            />
        `;
        axios.get.mockResolvedValue({
            data: {
                "html": htmlString
            }
        });
        global.DOMParser = jest.fn(() => {
            return {
                parseFromString: (htmlString, _type) => {
                    const placeholder = document.createElement("div");
                    placeholder.innerHTML = htmlString;
                    return placeholder;
                }
            };
        });
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("generates full oembed url", async () => {
        const specPageOptions = {
            components: [VideoComponent],
            html: videoHtml
        };
        const page = await newSpecPage(specPageOptions);
        const uuid = videoProps.shareUrl.match(/[^\/]+$/);
        const expectedFullOembedUrl = `${videoProps.oembedUrl}?url=${videoProps.playUrl}/${uuid}&format=json`;
        const generatedFullOembedUrl = page.rootInstance.getFullOembedUrl(videoProps.shareUrl, videoProps.oembedUrl, videoProps.playUrl);
        expect(generatedFullOembedUrl).toEqual(expectedFullOembedUrl);
    });
    it("generates player script from html string", async () => {
        const specPageOptions = {
            components: [VideoComponent],
            html: videoHtml
        };
        const page = await newSpecPage(specPageOptions);
        const fragment = page.rootInstance.getDocumentFragmentFromHtmlString(htmlString);
        const playerScript = page.rootInstance.getPlayerScript(fragment);
        expect(playerScript.tagName).toEqual('SCRIPT');
        expect(playerScript.classList.contains('player-script')).toEqual(true);
    });
    it("generates player embed from html string", async () => {
        const specPageOptions = {
            components: [VideoComponent],
            html: videoHtml
        };
        const page = await newSpecPage(specPageOptions);
        const fragment = page.rootInstance.getDocumentFragmentFromHtmlString(htmlString);
        const playerEmbed = page.rootInstance.getPlayerEmbed(fragment);
        expect(playerEmbed.tagName).toEqual('IMG');
        expect(playerEmbed.classList.contains('vidyard-player-embed')).toEqual(true);
    });
    it("renders", async () => {
        const specPageOptions = {
            components: [VideoComponent],
            html: videoHtml
        };
        const page = await newSpecPage(specPageOptions);
        const headline = page.root.querySelector('.headline');
        expect(headline.innerText.trim()).toEqual(videoProps.headline);
        const descriptionSlot = page.root.querySelector('[slot="description"]');
        expect(descriptionSlot.innerHTML.trim()).toEqual(videoProps.description);
        const playerScript = page.body.querySelectorAll('.player-script');
        expect(playerScript.length).toEqual(1);
        const playerEmbed = page.root.querySelectorAll('.player-embed');
        expect(playerEmbed.length).toEqual(1);
    });
});
