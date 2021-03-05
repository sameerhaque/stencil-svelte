var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let ThreeColumnExample = class ThreeColumnExample {
    render() {
        return (h("div", null,
            h("h1", null, "Three column text"),
            h("snt-three-column", null,
                h("div", { slot: "left" }, "First"),
                h("div", { slot: "center" }, "Second"),
                h("div", { slot: "right" }, "Third")),
            h("br", null),
            h("h1", null, "Three column blog post"),
            h("snt-three-column", null,
                h("div", { slot: "left" },
                    h("snt-blog", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg", titleText: "What do you want to know about landlord insurance. I have a longer title and really really really really long", tagText: "AT HOME", timeToRead: "4 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" })),
                h("div", { slot: "center" },
                    h("snt-blog", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg", titleText: "What do you want to know about landlord insurance", tagText: "AT HOME", timeToRead: "4 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" })),
                h("div", { slot: "right" },
                    h("snt-blog", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/hero-banner/group/group-desktop-1x.jpg", titleText: "Short title", tagText: "AT HOME", timeToRead: "4 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" }))),
            h("br", null),
            h("h1", null, "Three column icon copy"),
            h("snt-three-column", null,
                h("snt-icon-copy", { slot: "left", properties: '{\r\n                            "smallIconUrl": "",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "title-string": "My Title" },
                    h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")),
                h("snt-icon-copy", { slot: "center", properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "title-string": "My Title" },
                    h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                h("snt-icon-copy", { slot: "right", properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "title-string": "My Title" },
                    h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."))),
            h("br", null),
            h("h1", null, "Three column icon copy center copy"),
            h("div", { class: "center" },
                h("snt-three-column", null,
                    h("snt-icon-copy", { slot: "left", properties: '{\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/80/000000/homer-simpson--v2.png",\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/80/000000/user.png"\r\n                            }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")),
                    h("snt-icon-copy", { slot: "center", properties: '{\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/80/000000/homer-simpson--v2.png",\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/80/000000/user.png"\r\n                            }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                    h("snt-icon-copy", { slot: "right", properties: '{\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/80/000000/homer-simpson--v2.png",\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/80/000000/user.png"\r\n                            }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")))),
            h("br", null),
            h("h1", null, "Three column icon copy center copy"),
            h("div", { class: "center" },
                h("snt-three-column", null,
                    h("snt-icon-copy", { slot: "left", properties: '{\r\n                                "smallIconUrl": "",\r\n                                "largeIconUrl": ""\r\n                            }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")),
                    h("snt-icon-copy", { slot: "center", properties: '{\r\n                                "smallIconUrl": "",\r\n                                "largeIconUrl": ""\r\n                            }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                    h("snt-icon-copy", { slot: "right", properties: '{\r\n                                "smallIconUrl": "",\r\n                                "largeIconUrl": ""\r\n                            }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."))),
                h("br", null),
                h("br", null),
                h("h1", null, "Three column Logo copy"),
                h("snt-three-column", null,
                    h("snt-icon-copy", { slot: "left", logoIsSet: true, properties: '{\r\n                            "smallIconUrl": "",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                            "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\r\n                            "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\r\n                            "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",\r\n                            "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\r\n                        }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")),
                    h("snt-icon-copy", { slot: "center", logoIsSet: true, properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                            "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\r\n                            "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\r\n                            "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",\r\n                            "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\r\n                        }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                    h("snt-icon-copy", { slot: "right", logoIsSet: true, properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                            "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\r\n                            "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\r\n                            "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",\r\n                            "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\r\n                        }', "title-string": "My Title" },
                        h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."))),
                h("br", null))));
    }
};
ThreeColumnExample.TAG_NAME = "three-column-example";
ThreeColumnExample = __decorate([
    Component({
        tag: 'three-column-example',
        shadow: false
    })
], ThreeColumnExample);
export { ThreeColumnExample };
