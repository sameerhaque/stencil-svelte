var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Host, Listen, Prop, Method } from "@stencil/core";
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
import { ComponentConstants } from '../ComponentConstants';
let MultiColumnComponent = class MultiColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    componentWillLoad() {
        if (this.columnCount)
            this.columnCountObj = JSON.parse(this.columnCount);
    }
    componentDidLoad() {
        this.registerChildren();
        this.adjustLayout();
    }
    registerChildren() {
        this.flexGrid.childNodes.forEach((childEl) => {
            if (childEl.classList && childEl.classList.contains('column')) {
                childEl.childNodes.forEach((columnChildEl) => {
                    if (columnChildEl.tagName === 'SNT-ICON-COPY') {
                        columnChildEl.registerViewport(this.layoutEl);
                    }
                });
            }
        });
    }
    async adjustLayout() {
        let viewport = this.getViewport();
        Array.from(this.flexGrid.children).forEach((child) => {
            child.setAttribute('viewport', viewport);
        });
        this.toggleImages(viewport);
        await this.tagLastRow(viewport);
        await this.setColumns();
    }
    getViewport() {
        const viewportBreakpoints = [
            { breakpoint: ComponentConstants.EXTRA_LARGE.getLeft(), viewport: 'extra-large' },
            { breakpoint: ComponentConstants.LARGE.getLeft(), viewport: 'large' },
            { breakpoint: ComponentConstants.MEDIUM.getLeft(), viewport: 'medium' },
            { breakpoint: ComponentConstants.SMALL.getLeft(), viewport: 'small' },
            { breakpoint: ComponentConstants.EXTRA_SMALL.getLeft(), viewport: 'extra-small' }
        ];
        const currentViewBreakpoint = viewportBreakpoints.find((viewBreakpoint) => window.innerWidth >= viewBreakpoint.breakpoint);
        return currentViewBreakpoint.viewport;
    }
    // TODO: Change into media queries
    toggleImages(viewport) {
        if (viewport == 'medium' || viewport == 'small') {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.contains(item.querySelector('snt-image-column'))) {
                    item.classList.add('d-none');
                }
            });
        }
        else {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none');
                }
            });
        }
    }
    // TODO: Rework this section to prevent repait for performance purposes
    async tagLastRow(viewport) {
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('last-row');
        });
        const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
        const numberOfColumnsInLastRow = columnElements.length % this.columnCountObj[viewport] === 0
            ? Math.min(columnElements.length, this.columnCountObj[viewport])
            : columnElements.length % this.columnCountObj[viewport];
        const startingElement = columnElements.length - numberOfColumnsInLastRow;
        for (let index = startingElement; index < columnElements.length; index++) {
            columnElements[index].classList.add('last-row');
        }
    }
    async setColumns() {
        const classList = [];
        for (const [key, value] of Object.entries(this.columnCountObj)) {
            classList.push(`${key}-${value}`);
        }
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.add(...classList);
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { ref: (el) => this.layoutEl = el },
                h("div", { class: "row", ref: el => this.flexGrid = el },
                    h("slot", null)))));
    }
};
MultiColumnComponent.TAG_NAME = "snt-multi-column-mixed";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], MultiColumnComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], MultiColumnComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MultiColumnComponent.prototype, "columnCount", void 0);
__decorate([
    Listen('resize', { target: 'window' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MultiColumnComponent.prototype, "adjustLayout", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MultiColumnComponent.prototype, "tagLastRow", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MultiColumnComponent.prototype, "setColumns", null);
MultiColumnComponent = __decorate([
    Component({
        tag: "snt-multi-column-mixed",
        styleUrl: "multi-column-mixed-component.scss",
        shadow: false
    })
], MultiColumnComponent);
export { MultiColumnComponent };
