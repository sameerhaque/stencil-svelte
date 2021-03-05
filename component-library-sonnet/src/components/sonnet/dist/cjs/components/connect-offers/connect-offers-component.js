var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Prop, h, Element, Watch, State } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { LazyLoadIntersectionObserverManager } from "../../core/components/image/intersection/observer/ImageLazyLoadIntersectionObserverManager";
import { WebUtils } from "../../core/utils/WebUtils";
let ConnectOffersComponent = class ConnectOffersComponent {
    constructor() {
        this.offerAvailable = "";
        this.titleString = "";
        this.logoIsSet = false;
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.logoSources)) {
            this.logoSourceJson = JSON.parse(this.logoSources);
            if (Object.keys(this.logoSourceJson).length < 0)
                return;
            this.logoIsSet = true;
        }
        (this.modalData !== undefined) ? this.parseModalData(this.modalData) : null;
    }
    componentDidLoad() {
        if (this.logoIsSet)
            LazyLoadIntersectionObserverManager.getInstance().observe(this.element);
    }
    parseModalData(newValue) {
        if (newValue)
            this.modalDataObj = JSON.parse(newValue);
    }
    toggleLegal() {
        const legalCopy = this.element.querySelector('.modal-legal-copy');
        const legalIcon = this.element.querySelector('.modal-legal-link');
        if (legalCopy.classList.contains('d-none')) {
            legalCopy.classList.remove('d-none');
            legalIcon.innerHTML = '[-] ' + this.modalLegalLinkHide;
        }
        else {
            legalCopy.classList.add('d-none');
            legalIcon.innerHTML = '[+] ' + this.modalLegalLinkShow;
        }
    }
    showModal() {
        const modal = this.element.querySelector("snt-modal");
        modal.show();
    }
    copyToClipboard(e) {
        let couponCode = this.element.querySelector('.couponCode');
        couponCode.select();
        couponCode.setSelectionRange(6, couponCode.value.length);
        document.execCommand('copy');
        e.target.classList.add('d-none');
        this.element.querySelector('.iconCopy').classList.add('d-none');
        this.element.querySelector('.code_copied').classList.remove('d-none');
        setTimeout(() => {
            e.target.classList.remove('d-none');
            this.element.querySelector('.iconCopy').classList.remove('d-none');
            this.element.querySelector('.code_copied').classList.add('d-none');
        }, 5000);
    }
    ;
    render() {
        const buttonContent = this.buildButtonContent();
        const modalContent = this.buildModalContent(this.modalDataObj);
        const titleContent = StringUtils.hasValue(this.titleString)
            ? h("h3", null, this.titleString)
            : null;
        return (h("div", { class: WebUtils.generateClasses(["connect-offers-panel"], (this.offerAvailable ? 'offer-available' : '')) },
            h("div", { class: "offer-wrapper" }, this.offerAvailable),
            (this.logoIsSet) ?
                h("div", { class: "logo d-flex justify-content-center mb-4", role: "img", "aria-label": this.offerTitle },
                    h("picture", null,
                        h("source", { "data-srcSet": this.logoSourceJson.extraLargeLogoUrl, media: "(min-width: 1440px)" }),
                        h("source", { "data-srcSet": this.logoSourceJson.largeLogoUrl, media: "(min-width: 1024px)" }),
                        h("source", { "data-srcSet": this.logoSourceJson.mediumLogoUrl, media: "(min-width: 768px)" }),
                        h("source", { "data-srcSet": this.logoSourceJson.smallLogoUrl, media: "(min-width: 0px)" }),
                        h("img", { class: "logo-image", src: `${this.logoSourceJson.extraLargeLogoUrl}`, alt: (this.altTag) ? this.altTag : this.offerTitle }))) : '',
            titleContent,
            h("p", { innerHTML: this.description }),
            buttonContent,
            h("div", null),
            modalContent));
    }
    buildButtonContent() {
        if (this.href) {
            return (h("button-link-group", null,
                h("button-link", { class: "cta theme-default", href: this.href, target: this.target, "aria-label": this.ariaLabel }, this.buttonLabel)));
        }
        else if (this.actionReference && this.actionData && this.buttonLabel) {
            return (h("button-link-group", null,
                h("snt-action-button", { "action-reference": this.actionReference, "action-data": this.actionData, "style-classes": "cta theme-default", onClick: () => { this.showModal(); }, "link-title": this.buttonLabel })));
        }
        else {
            return null;
        }
    }
    buildModalContent(data) {
        if (this.actionReference) {
            const modalTitle = data.title;
            const modalDescription = data.description;
            const modalButtonLabel = data.button.title;
            const modalButtonHref = data.button.href;
            const modalButtonTarget = data.button.target;
            const modalCode = data.code;
            const modalLegalLinkShowElement = data.linkShow;
            const modalLegalLinkhideElement = data.linkHide;
            const legalCopy = data.legal;
            const copyOfferCodeTxt = data.copyOfferCodeTxt || "Copy offer code";
            const offerCodeCopiedTxt = data.offerCodeCopiedTxt || "Code copied!";
            this.modalLegalLinkShow = modalLegalLinkShowElement;
            this.modalLegalLinkHide = modalLegalLinkhideElement;
            return (h("snt-modal", { "language-string": "{\"close\":\"Close\"}", "style-classes": "ready-to-show" },
                h("snt-title-copy", { "title-string": modalTitle },
                    h("p", { style: { textAlign: "center" }, innerHTML: modalDescription })),
                h("div", { class: "offer-code " + ((modalCode) ? '' : 'd-none') },
                    h("div", { class: "offer-code-wrapper" },
                        h("snt-link", { href: "javascript:void(0)", onClick: (e) => { this.copyToClipboard(e); } },
                            modalCode,
                            h("span", { class: "icon-font iconCopy float-right", title: copyOfferCodeTxt }),
                            h("span", { class: "sr-only" }, copyOfferCodeTxt)),
                        h("p", { class: "code_copied d-none" }, offerCodeCopiedTxt))),
                h("input", { type: "text", tabindex: "-1", value: modalCode, class: "couponCode" }),
                h("button-link-group", null,
                    h("button-link", { class: "cta theme-default", href: modalButtonHref, target: modalButtonTarget, "aria-label": modalButtonLabel }, modalButtonLabel)),
                h("snt-accordion", { class: "transcript-accordion" },
                    h("div", { slot: "summary" },
                        h("span", { class: "legal-close" }, modalLegalLinkShowElement),
                        h("span", { class: "legal-open" }, modalLegalLinkhideElement)),
                    h("div", { slot: "details" },
                        h("div", { innerHTML: legalCopy })))));
        }
    }
};
ConnectOffersComponent.TAG_NAME = "snt-connect-offers";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ConnectOffersComponent.prototype, "element", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "offerAvailable", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "logoSources", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "altTag", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "offerTitle", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "titleString", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "target", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "description", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "buttonLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "actionReference", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "actionData", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ConnectOffersComponent.prototype, "modalData", void 0);
__decorate([
    State(),
    __metadata("design:type", Object)
], ConnectOffersComponent.prototype, "modalDataObj", void 0);
__decorate([
    Watch('modalData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConnectOffersComponent.prototype, "parseModalData", null);
ConnectOffersComponent = __decorate([
    Component({
        tag: 'snt-connect-offers',
        styleUrl: "./snt-connect-offers.scss",
        shadow: false
    })
], ConnectOffersComponent);
export { ConnectOffersComponent };
