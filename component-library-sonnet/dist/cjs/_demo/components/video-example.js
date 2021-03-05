var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let VideoExample = class VideoExample {
    render() {
        return (h("div", { class: "main-wrapper" },
            h("h1", null, "Video Component Demo"),
            h("br", null),
            h("br", null),
            h("div", { class: "individual-wrapper neutral-fill" },
                h("snt-video", { id: "video-one", headline: "Video 1: Title, Description and Transcript. ", shareUrl: "https://videos.sonnet.ca/watch/PtL3pNmQZdc9ctaMd6mgup?", oembedUrl: "https://api.vidyard.com/dashboard/v1.1/oembed", playUrl: "https://play.vidyard.com", transcriptSummaryOpen: 'Close "Video 1: Title, Description and Transcript." Transcript', transcriptSummaryClose: 'Open "Video 1: Title, Description and Transcript." Transcript' },
                    h("div", { slot: "description" },
                        h("p", null,
                            "Lorem ipsum dolor sit amet, ",
                            h("b", null, "consectetur adipisicing"),
                            " elit, sed do dolore magna aliqua. ",
                            h("br", null),
                            "Ut enim ad minim")),
                    h("div", { slot: "transcript-details" },
                        h("p", null, "[We open on a scoreboard that reads\u2026]"),
                        h("p", null, "[On-screen text: Young Stars vs. The Legends + the Sonnet Brand Mark]"),
                        h("p", null, "[Speaker: Announcer]"),
                        h("p", null, "[Cut to the dressing room where our coach speaks to the Young Stars.]"),
                        h("p", null, "[The Young Stars are working out on a Bosu ball and use resistance bands.]"),
                        h("p", null, "[Morgan Rielly speaks to the coach.]"),
                        h("p", null, "[Speaker: Morgan Rielly // Job Title: Defenseman, Toronto Maple Leafs]"),
                        h("p", null, "[We hear a slapping sound. The Young Stars and coach look around for the source of the sound.]"),
                        h("p", null, "[We cut to the Legends laying face down on massage tables, being worked on by burly masseurs.]"),
                        h("p", null, "[Speaker: Doug Gilmour // Job Title: Former Professional Hockey Player]"),
                        h("p", null, "[The Young Stars shake their heads in disbelief]"),
                        h("p", null, "[Cut back to the scoreboard to see a laptop with the Sonnet welcome page on it, followed by product screens of the Sonnet purchase experience.]")))),
            h("div", { class: "individual-wrapper" },
                h("snt-video", { id: "video-two", headline: "Video 2: Title and Transcript only. No Description.", shareUrl: "https://videos.sonnet.ca/watch/Y3WnSxmoADZCaHD7EkJmNK?", oembedUrl: "https://api.vidyard.com/dashboard/v1.1/oembed", playUrl: "https://play.vidyard.com", transcriptSummaryOpen: 'Close "Video 2: Title and Transcript only. No Description." Transcript', transcriptSummaryClose: 'Open "Video 2: Title and Transcript only. No Description." Transcript' },
                    h("div", { slot: "transcript-details" },
                        h("p", null, "[We open on a scoreboard that reads\u2026]"),
                        h("p", null, "[On-screen text: Young Stars vs. The Legends + the Sonnet Brand Mark]"),
                        h("p", null, "[Speaker: Announcer]"),
                        h("p", null, "[Cut to the dressing room where our coach speaks to the Young Stars.]"),
                        h("p", null, "[The Young Stars are working out on a Bosu ball and use resistance bands.]"),
                        h("p", null, "[Morgan Rielly speaks to the coach.]"),
                        h("p", null, "[Speaker: Morgan Rielly // Job Title: Defenseman, Toronto Maple Leafs]"),
                        h("p", null, "[We hear a slapping sound. The Young Stars and coach look around for the source of the sound.]"),
                        h("p", null, "[We cut to the Legends laying face down on massage tables, being worked on by burly masseurs.]"),
                        h("p", null, "[Speaker: Doug Gilmour // Job Title: Former Professional Hockey Player]"),
                        h("p", null, "[The Young Stars shake their heads in disbelief]"),
                        h("p", null, "[Cut back to the scoreboard to see a laptop with the Sonnet welcome page on it, followed by product screens of the Sonnet purchase experience.]")))),
            h("div", { class: "individual-wrapper neutral-fill" },
                h("snt-video", { id: "video-three", shareUrl: "https://videos.sonnet.ca/watch/auXSgJKKLSn5CUTcSQyPoe?", oembedUrl: "https://api.vidyard.com/dashboard/v1.1/oembed", playUrl: "https://play.vidyard.com", transcriptSummaryOpen: 'Close "Video 3: Video Only. No Title, Description or Transcript." Transcript', transcriptSummaryClose: 'Open "Video 3: Video Only. No Title, Description or Transcript.' },
                    h("div", { slot: "transcript-details" },
                        h("p", null, "[We open on a scoreboard that reads\u2026]"),
                        h("p", null, "[On-screen text: Young Stars vs. The Legends + the Sonnet Brand Mark]"),
                        h("p", null, "[Speaker: Announcer]"),
                        h("p", null, "[Cut to the dressing room where our coach speaks to the Young Stars.]"),
                        h("p", null, "[The Young Stars are working out on a Bosu ball and use resistance bands.]"),
                        h("p", null, "[Morgan Rielly speaks to the coach.]"),
                        h("p", null, "[Speaker: Morgan Rielly // Job Title: Defenseman, Toronto Maple Leafs]"),
                        h("p", null, "[We hear a slapping sound. The Young Stars and coach look around for the source of the sound.]"),
                        h("p", null, "[We cut to the Legends laying face down on massage tables, being worked on by burly masseurs.]"),
                        h("p", null, "[Speaker: Doug Gilmour // Job Title: Former Professional Hockey Player]"),
                        h("p", null, "[The Young Stars shake their heads in disbelief]"),
                        h("p", null, "[Cut back to the scoreboard to see a laptop with the Sonnet welcome page on it, followed by product screens of the Sonnet purchase experience.]"))))));
    }
};
VideoExample.TAG_NAME = "video-example";
VideoExample = __decorate([
    Component({
        tag: 'video-example',
        styles: ``,
        shadow: false
    })
], VideoExample);
export { VideoExample };
