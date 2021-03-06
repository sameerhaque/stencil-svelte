import { Component, h } from "@stencil/core";
export class VerticalTabExample {
    render() {
        return (h("div", { class: "container combined-top" },
            h("snt-vertical-tabs", null,
                h("div", { class: "panel-wrapper" },
                    h("snt-data", { type: "json", id: "panel-1", data: '{"link": {"id": "1", "title": "Test Insurance"}}' }),
                    h("section", { class: "panel", id: "panel-tab-1", "aria-hidden": "true" },
                        h("snt-ad", { "icon-sources": '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                            }', "title-string": "Main component", "logo-sources": "", "style-classes": "center", href: "#", "link-label": "test here" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))),
                    h("snt-data", { type: "json", id: "panel-2", data: '{"link": {"id": "1", "title": "Auto Insurance"}}' }),
                    h("section", { class: "panel", "aria-hidden": "true" },
                        h("snt-ad", { "icon-sources": '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                            }', "title-string": "Main component", "logo-sources": "", "style-classes": "center", href: "#", "link-label": "test here" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.                             "))),
                    h("snt-data", { type: "json", id: "panel-2", data: '{"link": {"id": "2", "title": "Home Insurance"}}' }),
                    h("section", { class: "panel", "aria-hidden": "true" },
                        h("snt-ad", { "icon-sources": '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                            }', "title-string": "Main component", "logo-sources": "", "style-classes": "center", href: "#", "link-label": "test here" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                "))),
                    h("snt-data", { type: "json", id: "panel-3", data: '{"link": {"id": "3", "title": "Condo Insurance"}}' }),
                    h("section", { class: "panel", "aria-hidden": "true" },
                        h("snt-ad", { "icon-sources": '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                            }', "title-string": "Main component", "logo-sources": "", "style-classes": "center", href: "#", "link-label": "test here" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                "))))),
            h("br", null),
            h("snt-vertical-tabs", null,
                h("div", { class: "panel-wrapper" },
                    h("snt-data", { type: "json", id: "panel-1", data: '{"link": {"id": "1", "title": "Test Insurance"}}' }),
                    h("section", { class: "panel", role: "tabpanel", tabindex: "0", id: "panel-tab-1", "aria-hidden": "true" },
                        h("snt-ad", { "icon-sources": '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\r\n                            }', "title-string": "Main component", "logo-sources": "", "style-classes": "center", href: "#", "link-label": "test here" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p."))),
                    h("snt-data", { type: "json", id: "panel-2", data: '{"link": {"id": "1", "title": "Auto Insurance"}}' }),
                    h("section", { class: "panel", "aria-hidden": "true" }, "content panel 2"),
                    h("snt-data", { type: "json", id: "panel-2", data: '{"link": {"id": "2", "title": "Home Insurance"}}' }),
                    h("section", { class: "panel", "aria-hidden": "true" }, "content panel 3"),
                    h("snt-data", { type: "json", id: "panel-3", data: '{"link": {"id": "3", "title": "Condo Insurance"}}' }),
                    h("section", { class: "panel", "aria-hidden": "true" }, "content panel 4")))));
    }
    static get is() { return "vertical-tab-example"; }
}
VerticalTabExample.TAG_NAME = "vertical-tab-example";
