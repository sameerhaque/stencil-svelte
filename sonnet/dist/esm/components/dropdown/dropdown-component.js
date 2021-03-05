var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Host, h, Prop, Watch, State, Method, Element, Event } from "@stencil/core";
import { ItemConfiguration } from "../../core/components/item/domain/ItemConfiguration";
import { Item } from "../../core/components/item/domain/Item";
import { KeyboardEventProcessorBuilder } from "../../core/keyboard/processor/KeyboardEventProcessorBuilder";
import { NavigationDirectionEnum } from "../../core/keyboard/NavigationDirectionEnum";
import { ItemUtils } from "../../core/components/item/ItemUtils";
import { Keyboard } from "../../core/keyboard/Keyboard";
let DropdownComponent = class DropdownComponent {
    constructor() {
        this.opened = false;
        this.required = false;
        this.keyboardEventProcessor = KeyboardEventProcessorBuilder.newInstance()
            .withKeys([Keyboard.TAB, Keyboard.ESCAPE], () => this.close())
            .withKeys([Keyboard.ENTER, Keyboard.SPACE], () => this.toggle())
            .withKey(Keyboard.ARROW_UP, () => this.processArrowKeys(NavigationDirectionEnum.BACKWARDS))
            .withKey(Keyboard.ARROW_DOWN, () => this.processArrowKeys(NavigationDirectionEnum.FORWARDS))
            .build();
    }
    async open() {
        this.opened = true;
    }
    async close() {
        this.opened = false;
    }
    async toggle() {
        if (await this.isOpen() == true) {
            this.selectedItem = this.currentItem;
        }
        this.opened = !this.opened;
    }
    async isOpen() {
        return this.opened;
    }
    async setValue(value) {
        this.selectedItem = this.items.find(item => item.key == value);
    }
    async getValue() {
        return this.selectedItem.key;
    }
    async setIndex(index) {
        this.selectedItem = this.items[index];
    }
    async getIndex() {
        return this.items.indexOf(this.selectedItem);
    }
    handleModalOpenAndClose(opened) {
        if (opened) {
            this.currentItem = (this.selectedItem != undefined) ? this.selectedItem : this.getNextAvailableItem(NavigationDirectionEnum.FORWARDS);
        }
    }
    handleSelectedItemChange() {
        this.hiddenEl.dispatchEvent(new CustomEvent('blur'));
        this.dropdownSelectionChange.emit();
    }
    componentWillLoad() {
        this.initItemConfiguration();
        this.selectedItem = this.items.find(item => item.selected == true);
    }
    componentDidUpdate() {
        if (!this.opened) {
            if (document.activeElement != this.dropdownButtonElement) {
                this.dropdownButtonElement.focus();
            }
        }
    }
    componentDidLoad() {
        window.addEventListener('click', () => {
            if (document.activeElement != this.dropdownButtonElement) {
                this.close();
            }
        });
    }
    handleClick(item) {
        this.selectedItem = item;
        this.currentItem = item;
        this.textValueElement.classList.add('chosen');
    }
    render() {
        const selectedItemId = (this.selectedItem != undefined) ? `${this.name}-item-${this.selectedItem.value}` : "";
        const selectItemLabelId = `${this.name}-dropdown-selected-item-label`;
        return (h(Host, { class: "dropdown", id: `${this.name}-dropdown` },
            h("div", { class: `dropdown-container show-label-xs ${(this.opened) ? 'opened' : ''}`, "register-callback": "DropdownComponent.registerContainer" // TODO: Should register itself with a container event
                , onClick: this.toggle.bind(this), onKeyDown: this.processKeyboardEvent.bind(this) },
                h("div", { id: `${this.name}-button-dropdown`, class: `btn-link dropdown-display-btn ${(this.opened) ? 'open' : ''}`, role: "listbox", tabindex: "0", "aria-activedescendant": (this.selectedItem) ? selectedItemId : false, "aria-label": `${this.labelText}`, "aria-multiselectable": "false", "aria-disabled": "false", "aria-required": "true", "aria-expanded": (this.opened) ? "true" : false, ref: (thisElement) => this.dropdownButtonElement = thisElement },
                    h("div", { id: selectItemLabelId, ref: (el) => this.textValueElement = el, class: `text-overflow single-line ${this.selectedItem ? 'chosen' : ''}` }, (this.selectedItem) ? this.selectedItem.value : this.placeholderText),
                    h("div", { class: "icon-container icon-font iconTriangle", "aria-hidden": "true", role: "presentation" })),
                h("div", { class: "xs-navbar-header options-header" },
                    h("label", { id: `${this.name}-dropdown-label`, class: "pull-left ng-binding" }, this.labelText),
                    h("button", { type: "button", class: "modal-close btn btn-text btn-text-w-span xs-navbar--close-btn pull-right right-col-off no-link-animation", "aria-labelledby": `${this.name}-close-label ${this.name}-dropdown-label`, tabindex: "0" },
                        h("span", { id: `${this.name}-close-label`, class: "strong label" }, "Close"),
                        h("span", { class: "sr-only" }, "Close Icon"),
                        h("snt-icon", { styleClasses: "iconNavClose" }))),
                h("ul", { id: `${this.name}-insurance-type-dropdown-items`, class: "items menu list-unstyled text-left", role: "listbox", tabindex: "0", "aria-labelledby": selectItemLabelId, "aria-activedescendant": selectedItemId }, this.items.map((item) => h("li", { class: `dropdown--menu-item click text-left no-margin
              ${(this.selectedItem) == item ? "selected" : ""}
              ${(item == this.currentItem) ? "highlighted" : ""}
              ${(item.disabled == true) ? "disabled" : ""}` },
                    h("div", { id: selectedItemId, role: "option", tabindex: "-1", "aria-selected": (this.selectedItem == item) ? "true" : false, onClick: () => { this.handleClick(item); }, ref: (thisElement) => (this.currentItem == item && thisElement.focus()) }, item.value))))),
            h("input", { class: "hidden-textbox", tabindex: "-1", type: "text", "data-field": this.name, id: this.name, required: this.required, ref: (el) => this.hiddenEl = el, value: (this.selectedItem) ? this.selectedItem.key : "" })));
    }
    initItemConfiguration() {
        const configurationObject = this.itemConfiguration || ItemUtils.generateConfigurationFromItemOptions(this.element);
        if (configurationObject) {
            const configurations = configurationObject.getConfigurations();
            if (configurations) {
                this.items = Array.from(configurations.values());
            }
        }
    }
    async processArrowKeys(direction) {
        if (await this.isOpen() == false) {
            this.open();
        }
        else {
            this.currentItem = this.getNextAvailableItem(direction);
        }
    }
    getNextAvailableItem(direction, currentItem = this.currentItem) {
        const currentIndex = this.items.indexOf(currentItem);
        const maxIndex = this.items.length - 1;
        let nextItem;
        let nextIndex;
        if (direction == NavigationDirectionEnum.BACKWARDS) {
            (currentIndex <= 0) ? nextIndex = maxIndex : nextIndex = currentIndex - 1;
        }
        else if (direction == NavigationDirectionEnum.FORWARDS) {
            (currentIndex >= maxIndex) ? nextIndex = 0 : nextIndex = currentIndex + 1;
        }
        nextItem = this.items[nextIndex];
        return (nextItem.disabled) ? this.getNextAvailableItem(direction, nextItem) : nextItem;
    }
    async processKeyboardEvent(evt) {
        this.keyboardEventProcessor.process(evt);
    }
};
DropdownComponent.TAG_NAME = "snt-dropdown";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], DropdownComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "opened", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], DropdownComponent.prototype, "placeholderText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], DropdownComponent.prototype, "labelText", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", ItemConfiguration)
], DropdownComponent.prototype, "itemConfiguration", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "required", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], DropdownComponent.prototype, "name", void 0);
__decorate([
    State(),
    __metadata("design:type", Item)
], DropdownComponent.prototype, "selectedItem", void 0);
__decorate([
    State(),
    __metadata("design:type", Item)
], DropdownComponent.prototype, "currentItem", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "dropdownSelectionChange", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "open", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "close", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "toggle", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "isOpen", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "setValue", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "getValue", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "setIndex", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropdownComponent.prototype, "getIndex", null);
__decorate([
    Watch("opened"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], DropdownComponent.prototype, "handleModalOpenAndClose", null);
__decorate([
    Watch("selectedItem"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownComponent.prototype, "handleSelectedItemChange", null);
DropdownComponent = __decorate([
    Component({
        tag: "snt-dropdown",
        styleUrl: "dropdown-component.scss",
        shadow: false
    }),
    __metadata("design:paramtypes", [])
], DropdownComponent);
export { DropdownComponent };
