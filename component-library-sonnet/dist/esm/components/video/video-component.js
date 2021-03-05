var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, h, Prop, Element, State } from '@stencil/core';
import axios from 'axios';
let VideoComponent = class VideoComponent {
    async componentWillLoad() {
        await this.processOembed();
    }
    async processOembed() {
        const fullOembedUrl = this.getFullOembedUrl(this.shareUrl, this.oembedUrl, this.playUrl);
        await axios.get(fullOembedUrl).then((oembedResponse) => {
            const docFragment = this.getDocumentFragmentFromHtmlString(oembedResponse.data.html);
            const playerEmbed = this.getPlayerEmbed(docFragment);
            this.playerScript = this.getPlayerScript(docFragment);
            //Vidyard embed code that gets replaced with the iFrame                        
            this.playerEmbed = h("div", { class: "player-embed", innerHTML: playerEmbed.outerHTML });
        });
    }
    componentDidLoad() {
        //Add Vidyard script that replaces embed code with iFrame
        if (document.querySelector(`script[src="${this.playerScript.src}"]`) == null) {
            document.body.appendChild(this.playerScript);
        }
    }
    getFullOembedUrl(shareUrl, oembedUrl, playUrl) {
        const uuid = shareUrl.match(/[^\/]+$/);
        const fullPlayUrl = playUrl + '/' + uuid;
        return `${oembedUrl}?url=${fullPlayUrl}&format=json`;
    }
    getDocumentFragmentFromHtmlString(htmlString) {
        const domParser = new DOMParser();
        return domParser.parseFromString(htmlString, 'text/html');
    }
    getPlayerScript(docFragment) {
        const playerScript = document.createElement("script");
        const unexecutablePlayerScrupt = docFragment.querySelector('script');
        playerScript.setAttribute("src", unexecutablePlayerScrupt.getAttribute('src'));
        playerScript.setAttribute("type", unexecutablePlayerScrupt.getAttribute('type'));
        playerScript.setAttribute("async", unexecutablePlayerScrupt.getAttribute('async'));
        playerScript.classList.add("player-script");
        return playerScript;
    }
    getPlayerEmbed(docFragment) {
        const playerEmbed = docFragment.querySelector('.vidyard-player-embed');
        playerEmbed.setAttribute('data-width', '');
        playerEmbed.setAttribute('data-height', '');
        return playerEmbed;
    }
    render() {
        return (h("snt-layout", null,
            h("div", { class: "intro" },
                h("h3", { class: "headline" }, this.headline),
                h("slot", { name: "description" })),
            this.playerEmbed,
            this.transcriptSummaryOpen && this.transcriptSummaryClose
                ? h("snt-accordion", { class: "transcript-accordion", id: `${this.element.id}-accordion` },
                    h("div", { slot: "summary" },
                        h("span", { class: "transcript-summary-open" }, this.transcriptSummaryOpen),
                        h("span", { class: "transcript-summary-close" }, this.transcriptSummaryClose)),
                    h("div", { slot: "details" },
                        h("slot", { name: "transcript-details" })))
                : null));
    }
};
VideoComponent.TAG_NAME = "snt-video";
__decorate([
    Prop(),
    __metadata("design:type", String)
], VideoComponent.prototype, "headline", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], VideoComponent.prototype, "shareUrl", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], VideoComponent.prototype, "oembedUrl", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], VideoComponent.prototype, "playUrl", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], VideoComponent.prototype, "transcriptSummaryOpen", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], VideoComponent.prototype, "transcriptSummaryClose", void 0);
__decorate([
    Element(),
    __metadata("design:type", Object)
], VideoComponent.prototype, "element", void 0);
__decorate([
    State(),
    __metadata("design:type", Object)
], VideoComponent.prototype, "playerEmbed", void 0);
VideoComponent = __decorate([
    Component({
        tag: "snt-video",
        styleUrl: "video-component.scss",
        shadow: false
    })
], VideoComponent);
export { VideoComponent };
