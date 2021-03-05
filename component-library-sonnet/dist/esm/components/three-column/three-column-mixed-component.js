var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
import { StringUtils } from '../../core/utils/StringUtils';
import { WebUtils } from '../../core/utils/WebUtils';
let ThreeColumnComponent = class ThreeColumnComponent {
    constructor() {
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        this.registerChildren();
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
    onResize(event) {
        const viewport = event.detail.viewport;
        Array.from(this.flexGrid.children).forEach((child) => {
            child.setAttribute('viewport', viewport);
        });
        this.toggleImages(viewport);
        this.tagLastRow(viewport);
        this.setStartAndEnd(viewport);
    }
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
    tagLastRow(viewport) {
        const columnCount = {
            'extra-small': 1,
            'small': 1,
            'medium': 2,
            'large': 3,
            'extra-large': 3
        };
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('last-row');
        });
        const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
        const numberOfColumnsInLastRow = columnElements.length % columnCount[viewport] === 0
            ? columnCount[viewport]
            : columnElements.length % columnCount[viewport];
        const startingElement = columnElements.length - numberOfColumnsInLastRow;
        for (let index = startingElement; index < columnElements.length; index++) {
            columnElements[index].classList.add('last-row');
        }
    }
    setStartAndEnd(viewport) {
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('row-start');
            containerEl.classList.remove('row-end');
        });
        if (viewport !== 'medium') {
            return;
        }
        else {
            const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
            for (let index = 0; index < columnElements.length; index++) {
                if (index % 2 === 0) {
                    columnElements[index].classList.add('row-start');
                }
                else {
                    columnElements[index].classList.add('row-end');
                }
            }
        }
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) },
            h("snt-layout", { ref: (el) => this.layoutEl = el },
                h("div", { class: "row", ref: el => this.flexGrid = el },
                    h("slot", null)))));
    }
};
ThreeColumnComponent.TAG_NAME = "snt-three-column-mixed";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ThreeColumnComponent.prototype, "hostElement", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], ThreeColumnComponent.prototype, "styleClasses", void 0);
__decorate([
    Listen('viewportChanged', { target: 'parent' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomEvent]),
    __metadata("design:returntype", void 0)
], ThreeColumnComponent.prototype, "onResize", null);
ThreeColumnComponent = __decorate([
    Component({
        tag: "snt-three-column-mixed",
        styleUrl: "three-column-mixed-component.scss",
        shadow: false
    })
], ThreeColumnComponent);
export { ThreeColumnComponent };
