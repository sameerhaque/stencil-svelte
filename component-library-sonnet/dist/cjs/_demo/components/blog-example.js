var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from "@stencil/core";
let BlogExample = class BlogExample {
    render() {
        return (h("div", null,
            h("div", { class: "col-3" },
                h("snt-blog", { imgSrc: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", titleText: "What do you want to know about landlord insurance What do you want to know about landlord insurance What do you want to know about landlord insurance", tagText: "at home", timeToRead: "5 min read", blogLink: "https://www.sonnet.ca/blog/what-you-need-to-know-about-landlord-insurance" })),
            h("br", null),
            h("div", { class: "col-12" },
                h("snt-blog-info", { "accessibility-text": "{\r\n                        \"linkedIn\": \"Share on LinkedIn\",\r\n                        \"facebook\":\"Share on Facebook\",\r\n                        \"twitter\":\"Share on Twitter\",\r\n                        \"email\":\"Share with email\"\r\n                    }", "title-text": "What to know when buying your second home", timeToRead: "5 min read", "blog-link": "https://www.sonnet.ca/blog/buying-your-second-home", "published-time": "September 19, 2020" }),
                h("div", { class: "test-content" },
                    h("h3", null, "TEST BLOG CONTENT "),
                    h("blockquote", null,
                        h("p", null,
                            "Make sure you\u2019re looking at builders who are part of",
                            h("br", null),
                            "your local builders\u2019 association.")),
                    h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus laoreet facilisis. Sed commodo orci quis commodo lacinia. Quisque tellus risus, lacinia ac lacinia semper, faucibus a lacus. Vestibulum laoreet turpis ligula, vel lobortis sapien molestie sed. Vivamus congue urna eget rutrum porta. Nam gravida mattis nibh quis pharetra. Mauris tristique suscipit mi, nec blandit urna dignissim nec. Nullam vulputate imperdiet purus a finibus. Pellentesque pharetra et mi vel egestas. Maecenas a pretium tortor."),
                    h("p", null, "Sed sit amet laoreet tortor. Sed aliquam sem eu lorem accumsan euismod. Donec et elit elit. Etiam dictum finibus urna a cursus. Duis euismod, turpis sed gravida rhoncus, justo dolor molestie ante, vel consectetur neque ligula vitae justo. Nam tempus porttitor ultrices. Aenean vitae malesuada sapien. Donec bibendum sapien a venenatis venenatis. Vestibulum imperdiet sollicitudin lacinia. Etiam eleifend nisi massa, vel ultrices elit volutpat nec. Vivamus accumsan fringilla lectus eget interdum. Nullam id efficitur metus, quis dapibus lacus. Proin non bibendum mauris. Duis pellentesque libero non est convallis vehicula. Duis imperdiet vitae lectus quis porta."),
                    h("p", null, "Nulla hendrerit enim nec vehicula consectetur. Nam tempus orci ipsum, sit amet tincidunt turpis auctor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat tortor sed tempor porta. Mauris sit amet mi iaculis ex ultricies interdum. Ut ornare orci lorem, at tincidunt ipsum maximus in. Nunc ornare tempor facilisis. Pellentesque neque nisi, faucibus sit amet iaculis quis, posuere eget diam. Sed rhoncus lobortis felis, vel posuere turpis vehicula vel. Nunc et orci elementum, ullamcorper eros eu, tempor dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sed eros at eros lobortis dictum. Sed lacus orci, tristique vel fringilla in, cursus sit amet odio."),
                    h("p", null, "Vivamus aliquam nisi at tortor mollis, vel condimentum urna hendrerit. Praesent euismod tellus id ante fermentum, at rutrum nunc pretium. Curabitur et tempor metus. Vestibulum aliquet neque non ligula mollis, ullamcorper cursus sapien bibendum. Curabitur consectetur laoreet aliquet. Nulla eget purus eu mauris euismod sodales lacinia in sem. Integer at faucibus sapien. Cras fermentum et arcu at blandit. Donec feugiat efficitur elit ac efficitur. Nulla in sapien justo. Aenean rutrum justo pretium metus maximus, eu molestie eros efficitur. Cras imperdiet semper egestas. Vestibulum at feugiat magna."),
                    h("p", null, "Donec sed metus sit amet urna molestie consectetur nec non nunc. Donec felis sem, vulputate sed convallis quis, pharetra id magna. Nullam quis tortor id dolor feugiat auctor at sed ipsum. Ut porttitor finibus mauris ut dignissim. Vivamus scelerisque pellentesque lorem sed pellentesque. Proin congue, neque eu molestie vulputate, sem massa vulputate sapien, ut bibendum eros nisl in risus. Aliquam purus nisi, suscipit non ornare sed, scelerisque vel lacus. Donec purus neque, posuere quis nisi a, commodo dictum massa.")))));
    }
};
BlogExample.TAG_NAME = "blog-example";
BlogExample = __decorate([
    Component({
        tag: "blog-example",
        shadow: false
    })
], BlogExample);
export { BlogExample };
