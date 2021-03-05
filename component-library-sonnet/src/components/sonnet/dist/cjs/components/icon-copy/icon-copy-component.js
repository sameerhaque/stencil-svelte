var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, Host, h, Method, Prop } from '@stencil/core';
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
import { ViewportParameters } from "../../core/viewport/decorators/ViewportParameters";
import { ViewportAttributesBuilder } from '../../core/viewport/builder/ViewportAttributesBuilder';
import { ViewportParameterBuilder } from "../../core/viewport/builder/ViewportParameterBuilder";
import { ViewportConfigurationService } from "../../core/viewport/service/ViewportConfigurationService";
import { Pair } from "../../core/objects/pair";
import { DefaultContext } from "../../core/context/DefaultContext";
import { ComponentConstants } from "../ComponentConstants";
let IconCopyComponent = class IconCopyComponent {
    constructor() {
        this.titleString = '';
        this.styleClasses = StringUtils.empty();
        this.logoIsSet = false;
        this.linkId = StringUtils.empty();
    }
    async registerViewport(target) {
        this.parentLayout = target;
    }
    componentDidLoad() {
        this.data.getData().then(value => {
            this.context = new DefaultContext().fromObject(value);
            if (this.logoIsSet) {
                //Set Logo-Copy
                const largeLogoUrl = this.context.getInstance('largeLogoUrl');
                //as a standalone component we currently can only support the one size.
                this.image.setAttribute('src', largeLogoUrl);
                if (StringUtils.isEmpty(largeLogoUrl) && StringUtils.isEmpty(largeLogoUrl)) {
                    this.logo.classList.add('hidden');
                }
            }
            else {
                //Set Icon-Copy
                this.normalizeIconValues();
                const largeIconUrl = this.context.getInstance('largeIconUrl');
                const smallIconUrl = this.context.getInstance('smallIconUrl');
                //as a standalone component we currently can only support the one size.
                this.image.setAttribute('src', largeIconUrl);
                if (StringUtils.isEmpty(largeIconUrl) && StringUtils.isEmpty(smallIconUrl)) {
                    this.icon.classList.add('hidden');
                }
            }
            if (this.parentLayout) {
                ViewportConfigurationService.getInstance().register(this, [Pair.of('snt-layout', this.parentLayout)], this.resize);
            }
        });
    }
    normalizeIconValues() {
        const largeIconUrl = this.context.getInstance('largeIconUrl');
        const smallIconUrl = this.context.getInstance('smallIconUrl');
        if (StringUtils.isEmpty(largeIconUrl) && StringUtils.hasValue(smallIconUrl)) {
            this.context.add('largeIconUrl', smallIconUrl);
        }
        else if (StringUtils.isEmpty(smallIconUrl) && StringUtils.hasValue(largeIconUrl)) {
            this.context.add('smallIconUrl', largeIconUrl);
        }
    }
    resize() {
        if (this.logoIsSet) {
            ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('logo', this.image)]);
        }
        else {
            ViewportConfigurationService.getInstance().process(this, this.context, [Pair.of('icon', this.image)]);
        }
    }
    render() {
        var content;
        if (this.logoIsSet) {
            content = (h("div", { ref: (el) => this.logo = el, class: "logo" },
                h("img", { class: "logo-image", src: "", alt: "", "aria-hidden": "true", ref: (el) => this.image = el })));
        }
        else {
            content = (h("div", { ref: (el) => this.icon = el, class: "icon" },
                h("img", { class: "icon-image", src: "", alt: "", "aria-hidden": "true", ref: (el) => this.image = el })));
        }
        const iconCopyPanel = [
            h("div", { class: "icon-copy-panel" },
                content,
                h("h3", null, this.titleString),
                h("div", { class: WebUtils.generateClasses(["content"], this.styleClasses) },
                    h("slot", null)))
        ];
        return (h(Host, { class: (this.linkHref || this.linkActionReference) ? "link" : null },
            (this.linkActionReference)
                ? h("snt-action-link", { "link-id": this.linkId, actionReference: this.linkActionReference, actionData: this.linkActionData }, iconCopyPanel)
                : (this.linkHref)
                    ? h("snt-link", { "link-id": this.linkId, href: this.linkHref, title: this.linkTitle, target: this.linkTarget, rel: this.linkRel }, iconCopyPanel)
                    : iconCopyPanel,
            h("snt-data", { type: "json", src: this.propertiesSrc, data: this.properties, ref: (el) => this.data = el })));
    }
};
IconCopyComponent.TAG_NAME = "snt-icon-copy";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "el", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "titleString", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "propertiesSrc", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "properties", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "resizeEl", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], IconCopyComponent.prototype, "logoIsSet", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkHref", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkTitle", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkTarget", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkRel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkActionReference", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkActionData", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], IconCopyComponent.prototype, "linkId", void 0);
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeIconUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "icon", void 0);
__decorate([
    ViewportParameters([
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_SMALL.getLeft(), ComponentConstants.EXTRA_SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.SMALL.getLeft(), ComponentConstants.SMALL.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{smallLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.MEDIUM.getLeft(), ComponentConstants.MEDIUM.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{mediumLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.LARGE.getLeft(), ComponentConstants.LARGE.getRight())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{largeLogoUrl}}')
            .build())
            .build(),
        ViewportParameterBuilder.newInstance()
            .withWidth(ComponentConstants.EXTRA_LARGE.getLeft())
            .withAttributes(ViewportAttributesBuilder.newInstance()
            .with('src', '{{extraLargeLogoUrl}}')
            .build())
            .build()
    ]),
    __metadata("design:type", HTMLElement)
], IconCopyComponent.prototype, "logo", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", Promise)
], IconCopyComponent.prototype, "registerViewport", null);
IconCopyComponent = __decorate([
    Component({
        tag: 'snt-icon-copy',
        styleUrl: 'icon-copy-component.scss',
        shadow: false
    })
], IconCopyComponent);
export { IconCopyComponent };
