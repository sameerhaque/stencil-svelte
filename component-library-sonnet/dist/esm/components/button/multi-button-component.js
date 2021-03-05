var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, h, Host, State } from '@stencil/core';
import { StringUtils } from "../../core/utils/StringUtils";
import { ItemUtils } from "../../core/components/item/ItemUtils";
let MultiButtonComponent = class MultiButtonComponent {
    constructor() {
        this.styles = {};
    }
    componentWillLoad() {
        this.configurations = ItemUtils.generateConfigurationFromItemOptions(this.element);
    }
    componentDidLoad() {
        let firstItemWidth = parseFloat(getComputedStyle(this.element.querySelector('.toggle-button .button-wrapper')).width);
        this.changeStyle(firstItemWidth, 0); //Set active style on the first item
    }
    handleClick(event) {
        // Reset all buttons
        Array.from(this.element.querySelectorAll('.btn')).map(element => {
            element.classList.remove('active');
            element.setAttribute('selected', 'false');
            element.setAttribute('aria-pressed', 'false');
        });
        // Set Active button
        let button = event.target;
        let index = parseFloat(button.getAttribute('button-index'));
        button.setAttribute('selected', 'true');
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        let computedWidth = parseFloat(getComputedStyle(button).width) - 4; //adjusting for borders
        let bodyLeft = ((button.getBoundingClientRect().left) - (this.element.getBoundingClientRect().left)) - ((index == 0) ? 1 : 2); //adjusting for the first item
        this.changeStyle(computedWidth, bodyLeft);
    }
    render() {
        return (h(Host, { class: "sliderSelector" },
            h("div", { class: "toggle-button full-width", role: "group" }, Array.from(this.configurations.values()).map((item, index) => h("div", { class: "button-wrapper", "data-key": index },
                h("button", { class: (item['selected'] ? 'active' : '') + ' btn', id: 'button-' + StringUtils.toCamelCase(item['label']), type: "button", disabled: item['disabled'], role: "button", "aria-pressed": "false", value: item['key'], "button-index": index, onClick: e => this.handleClick(e) }, item['label'])))),
            h("div", { class: "active-indicator", id: "active-indicator", style: this.styles })));
    }
    changeStyle(width, translateX) {
        this.styles = {
            'width': `${width}px`,
            'transform': `translateX(${translateX}px) scaleX(1)`
        };
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], MultiButtonComponent.prototype, "element", void 0);
__decorate([
    State(),
    __metadata("design:type", Object)
], MultiButtonComponent.prototype, "styles", void 0);
MultiButtonComponent = __decorate([
    Component({
        tag: "snt-multi-button",
        styleUrl: "multi-button.scss",
        shadow: false
    })
], MultiButtonComponent);
export { MultiButtonComponent };
