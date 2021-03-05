'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const ItemUtils = require('./ItemUtils-a3f7b24c.js');
const NavigationDirectionEnum = require('./NavigationDirectionEnum-5d962e1f.js');

const dropdownComponentCss = "snt-dropdown{display:block}snt-dropdown *{-webkit-box-sizing:border-box;box-sizing:border-box}snt-dropdown .btn-link{color:#6f6f6f;text-decoration:none;font-weight:normal}snt-dropdown .btn-link:hover{color:#6f6f6f;text-decoration:none}snt-dropdown .btn-link:focus{text-decoration:none}snt-dropdown .icon-container{display:inline-block;font-size:12px;color:#147582}snt-dropdown .dropdown-container.opened .icon-container{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}snt-dropdown .hidden-textbox{height:0px;width:0px;visibility:hidden;padding:0;margin:0;float:right}@media (max-width: 767px){snt-dropdown .dropdown-container.opened{position:fixed;top:0;left:0;right:0;bottom:0;height:auto;background-color:#fff;z-index:110000}snt-dropdown .dropdown-container.opened ul{top:72px;bottom:0;max-height:none;background-color:#fff;z-index:110000;padding:0}snt-dropdown .dropdown-container.opened.show-label-xs .options-header{-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #323232;display:-webkit-flex;display:-ms-flexbox;display:flex;height:72px;line-height:1;overflow:hidden;padding:0 20px;position:relative;z-index:1000}snt-dropdown .dropdown-container.opened.show-label-xs .dropdown-display-btn{display:none}}.dropdown{font-size:16px}.dropdown.fixed-position.visible-xs{z-index:1200}.dropdown>select{display:none}.dropdown .value{min-width:50px;min-height:39px;line-height:40px;height:39px;color:#71d5e2;background-color:transparent;border:0;border-bottom:none}.dropdown .value.light{color:#aaa}.dropdown .menu{background-color:#fff;border:1px solid #767676;border-top:none;color:#323232;display:none;position:absolute;left:0;list-style:none;max-height:300px;overflow-x:hidden;overflow-y:auto;padding:0;text-align:left;top:45px;width:100%;z-index:1220}.dropdown .menu-item{border-bottom:1px solid #b2b2b2;color:#323232;cursor:pointer;font-size:16px;font-weight:400;height:45px;line-height:16px;padding:15px 35px 5px 21px;text-align:left;width:100%}.dropdown .menu-item span{color:#323232}.dropdown .menu-item:focus{background-color:#71d5e2}.dropdown .menu-item:hover{background-color:#f2f2f2}.dropdown .menu-item.selected{font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif;background-position:right 21px top 17px;background-repeat:no-repeat;background-size:12px 10px;background-image:url(../images/Drpdown-check.svg)}.dropdown .item:hover{background-color:#71d5e2}.dropdown .item:first-child{border-bottom:1px solid #767676}.dropdown .item p{margin:0}.dropdown .item p:last-child{font-size:13px}.dropdown.form-control{border:0;display:inline-block;height:auto;padding:0}.dropdown.form-control:focus{-webkit-box-shadow:none;box-shadow:none}.dropdown.large .dropdown-container .dropdown-display-btn,.dropdown.size-x2 .dropdown-container .dropdown-display-btn{padding:22px;height:60px}.dropdown.large .dropdown-container .dropdown-display-btn.open,.dropdown.size-x2 .dropdown-container .dropdown-display-btn.open{padding:22px 21px}.dropdown.large .dropdown-container .dropdown-display-btn:hover,.dropdown.size-x2 .dropdown-container .dropdown-display-btn:hover{padding:22px 21px}.dropdown.large .menu-item,.dropdown.size-x2 .menu-item{padding:22px 35px 3px 21px;height:60px}.dropdown.large .menu-item.selected,.dropdown.size-x2 .menu-item.selected{background-position:right 21px top 27px}.dropdown.large .menu,.dropdown.size-x2 .menu{top:63px}@media (max-width: 767px){.dropdown .menu-item{border-bottom:1px solid #b2b2b2;color:#323232;display:block;height:auto;font-family:Averta-Regular, Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;line-height:1;padding:22px 20px;position:relative;text-align:left;width:100%}.dropdown .menu-item:last-child:after{content:none}.dropdown .menu-item:focus{background-color:#71d5e2;font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif}.dropdown .menu-item:focus a,.dropdown .menu-item:focus a:active,.dropdown .menu-item:focus a:focus,.dropdown .menu-item:focus a:hover{font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif}.dropdown .menu-item:hover{background-color:#f2f2f2;color:#323232}.dropdown .menu-item:hover a,.dropdown .menu-item:hover a:active,.dropdown .menu-item:hover a:focus,.dropdown .menu-item:hover a:hover{background-color:#6e60d9;color:#323232 !important}.dropdown .menu-item.selected{background-position:right 30px top 30px;background-repeat:no-repeat;background-size:12px 10px;background-image:url(../images/Drpdown-check.svg)}.dropdown .menu-item.selected a,.dropdown .menu-item.selected a:active,.dropdown .menu-item.selected a:focus,.dropdown .menu-item.selected a:hover{font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif;background-position:right 30px top 30px;background-repeat:no-repeat;background-size:12px 10px;background-image:url(../images/Drpdown-check.svg)}.dropdown .modal-close{margin-top:-12px;padding:0;position:absolute;right:20px;top:50%}.dropdown .modal-close:active,.dropdown .modal-close:focus,.dropdown .modal-close:hover{text-decoration:none}.dropdown .modal-close .label{color:#323232;font-size:14px;font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif;font-weight:400;line-height:17px;padding-bottom:0;padding-left:0;padding-top:0;position:relative;top:-2px}.dropdown.large .dropdown-container.opened .dropdown-display-btn,.dropdown.size-x2 .dropdown-container.opened .dropdown-display-btn{height:72px;padding:20px}}.dropdown.menu-dropdown .dropdown-container .dropdown-display-btn{background-color:#f8f8f8;border-color:transparent}.dropdown.menu-dropdown .dropdown-container .dropdown-display-btn.open,.dropdown.menu-dropdown .dropdown-container .dropdown-display-btn:focus,.dropdown.menu-dropdown .dropdown-container .dropdown-display-btn:hover{background-color:#f8f8f8;border-color:transparent}.dropdown-container{position:relative;font-size:16px}.dropdown-container .options-header{display:none}.dropdown-container .options-header>label{line-height:24px;margin-bottom:0;color:#323232;font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif;width:calc(100% - 113px)}.dropdown-container .options-header.doubleLine{height:200%}.dropdown-container .options-header .dropdown_line2{font-size:12px}.dropdown-container.opened .dropdown-display-btn:before{-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}.dropdown-container.opened .menu{display:block}@media (min-width: 768px){.dropdown-container .display-btn{padding:15px}}.dropdown-display-btn{height:100%;width:100%;height:45px;padding:14px 34px 14px 20px;line-height:1;color:#6f6f6f;text-decoration:none;border:1px solid #6f6f6f;font-family:Averta-Regular, Arial, Helvetica, sans-serif;text-align:left;background-color:#fff;line-height:1;-webkit-box-sizing:border-box;box-sizing:border-box}.dropdown-display-btn:hover{border:1px solid #147582;-webkit-box-sizing:border-box;box-sizing:border-box}.dropdown-display-btn:focus,.dropdown-display-btn.open{padding:14px 34px 14px 19px;background-color:#fff;border:3px solid #147582;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.selected{position:relative;font-weight:700;font-family:Averta-ExtraBold, Arial, Helvetica, sans-serif}.selected:before{content:\"\";position:absolute;right:25px;width:6px;height:12px;font-size:12px;line-height:12px;border:solid #323232;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.click{cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dropdown-container .dropdown-display-btn{padding:0}.dropdown-container .dropdown-display-btn.open,.dropdown-container .dropdown-display-btn:active,.dropdown-container .dropdown-display-btn:focus,.dropdown-container .dropdown-display-btn:hover{padding:0;outline:0}.dropdown-container .dropdown-display-btn>div.text-overflow{display:inline-block;width:calc(100% - 34px);padding:14px 34px 14px 20px}.dropdown-container.opened .dropdown-display-btn>div.text-overflow,.dropdown-container .dropdown-display-btn:focus>div.text-overflow{padding:12px 32px 12px 18px;width:calc(100% - 32px)}.dropdown-container .dropdown-display-btn>div.chosen{color:#323232}.dropdown--menu-item{width:100%;line-height:inherit;font-size:inherit !important;color:inherit;border-bottom:1px solid #b2b2b2;padding:0 !important;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;height:auto}.dropdown--menu-item>div{display:block;word-break:break-word;width:100%;font-family:Averta-Regular, Arial, Helvetica, sans-serif;padding:16px 57px 14px 20px}.dropdown--menu-item>div:focus{background-color:#6ebac5}.dropdown--menu-item>div:hover{background-color:#f2f2f2}.dropdown--menu-item>div:active{background-color:#147582;color:#fff}.btn-text.btn-text-w-span span:last-child,.driver-details .btn-text-w-span.link-text span:last-child,.primary-link.btn-text-w-span span:last-child{-webkit-transition:background-size 0.2s ease-in 0.05s;transition:background-size 0.2s ease-in 0.05s;background-image:-webkit-linear-gradient(#9e0a9a 0, #9e0a9a 100%);background-image:-webkit-gradient(linear, left top, left bottom, color-stop(0, #9e0a9a), to(#9e0a9a));background-image:linear-gradient(#9e0a9a 0, #9e0a9a 100%);background-repeat:no-repeat;background-size:0 2px;background-position:0 100%;padding:0 0 4px;color:#9e0a9a;white-space:normal}@media (min-width: 768px){.dropdown--menu-item{min-height:45px;padding:10px 45px 10px 15px}}@media (max-width: 767px){.dropdown-container .options-header>label{font-size:14px}.xs-navbar--close-btn.right-col-off{padding:0 20px 0 10px;margin-right:-20px}.dropdown--menu-item>div{padding:18px 57px 18px 20px}.xs-navbar--close-btn.btn{font-size:14px;color:#095d68;-webkit-transition:background-color ease-out 0.3s;transition:background-color ease-out 0.3s;line-height:71px}.xs-navbar--close-btn.btn:hover,.xs-navbar--close-btn.btn:focus{color:#9e0a9a}.dropdown-container.opened.show-label-xs .options-header .xs-navbar--close-btn{position:absolute;top:0;bottom:0;right:0;font-weight:700;font-family:Averta-Regular, Arial, Helvetica, sans-serif;margin-right:0;margin-bottom:0;line-height:inherit;background:0 0;border-bottom:0;padding-left:15px}.dropdown-container.opened.show-label-xs .options-header .xs-navbar--close-btn::before{border-bottom:0}.xs-navbar--close-btn>.label{font-size:inherit;color:inherit;padding:0;top:0}.dropdown-container.opened.show-label-xs .options-header .xs-navbar--close-btn>.label{top:-1px;left:-7px}.dropdown-container.opened.show-label-xs .options-header .xs-navbar--close-btn>.icon{top:2px}.xs-navbar--close-btn.right-col-off>.icon{right:-5px;border-bottom:0;-webkit-transition:all ease-out 0.3s;transition:all ease-out 0.3s;font-family:Averta-Regular, Arial, Helvetica, sans-serif}.xs-navbar--close-btn.right-col-off>.icon:hover{border-bottom:2px solid #9e0a9a}.xs-navbar--close-btn:active,.xs-navbar--close-btn:focus,.xs-navbar--close-btn:hover{text-decoration:none;background-color:#e5e5e5 !important}}.dropdown.size-x2 .dropdown-container .dropdown-display-btn.open,.dropdown.size-x2 .dropdown-container .dropdown-display-btn:hover{padding:10px 0}.dropdown.size-x2 .dropdown-display-btn,.dropdown.size-x2 .dropdown.large .dropdown-container .dropdown-display-btn{padding:0.5em !important}.dropdown--menu-item{font-size:inherit}ol,ul{margin-top:0;margin-bottom:10px}.dropdown--menu-item.disabled{pointer-events:none;color:lightgray}";

const DropdownComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dropdownSelectionChange = index.createEvent(this, "dropdownSelectionChange", 7);
        this.opened = false;
        this.required = false;
        this.keyboardEventProcessor = NavigationDirectionEnum.KeyboardEventProcessorBuilder.newInstance()
            .withKeys([NavigationDirectionEnum.Keyboard.TAB, NavigationDirectionEnum.Keyboard.ESCAPE], () => this.close())
            .withKeys([NavigationDirectionEnum.Keyboard.ENTER, NavigationDirectionEnum.Keyboard.SPACE], () => this.toggle())
            .withKey(NavigationDirectionEnum.Keyboard.ARROW_UP, () => this.processArrowKeys(NavigationDirectionEnum.NavigationDirectionEnum.BACKWARDS))
            .withKey(NavigationDirectionEnum.Keyboard.ARROW_DOWN, () => this.processArrowKeys(NavigationDirectionEnum.NavigationDirectionEnum.FORWARDS))
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
            this.currentItem = (this.selectedItem != undefined) ? this.selectedItem : this.getNextAvailableItem(NavigationDirectionEnum.NavigationDirectionEnum.FORWARDS);
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
        return (index.h(index.Host, { class: "dropdown", id: `${this.name}-dropdown` }, index.h("div", { class: `dropdown-container show-label-xs ${(this.opened) ? 'opened' : ''}`, "register-callback": "DropdownComponent.registerContainer" // TODO: Should register itself with a container event
            ,
            onClick: this.toggle.bind(this), onKeyDown: this.processKeyboardEvent.bind(this) }, index.h("div", { id: `${this.name}-button-dropdown`, class: `btn-link dropdown-display-btn ${(this.opened) ? 'open' : ''}`, role: "listbox", tabindex: "0", "aria-activedescendant": (this.selectedItem) ? selectedItemId : false, "aria-label": `${this.labelText}`, "aria-multiselectable": "false", "aria-disabled": "false", "aria-required": "true", "aria-expanded": (this.opened) ? "true" : false, ref: (thisElement) => this.dropdownButtonElement = thisElement }, index.h("div", { id: selectItemLabelId, ref: (el) => this.textValueElement = el, class: `text-overflow single-line ${this.selectedItem ? 'chosen' : ''}` }, (this.selectedItem) ? this.selectedItem.value : this.placeholderText), index.h("div", { class: "icon-container icon-font iconTriangle", "aria-hidden": "true", role: "presentation" })), index.h("div", { class: "xs-navbar-header options-header" }, index.h("label", { id: `${this.name}-dropdown-label`, class: "pull-left ng-binding" }, this.labelText), index.h("button", { type: "button", class: "modal-close btn btn-text btn-text-w-span xs-navbar--close-btn pull-right right-col-off no-link-animation", "aria-labelledby": `${this.name}-close-label ${this.name}-dropdown-label`, tabindex: "0" }, index.h("span", { id: `${this.name}-close-label`, class: "strong label" }, "Close"), index.h("span", { class: "sr-only" }, "Close Icon"), index.h("snt-icon", { styleClasses: "iconNavClose" }))), index.h("ul", { id: `${this.name}-insurance-type-dropdown-items`, class: "items menu list-unstyled text-left", role: "listbox", tabindex: "0", "aria-labelledby": selectItemLabelId, "aria-activedescendant": selectedItemId }, this.items.map((item) => index.h("li", { class: `dropdown--menu-item click text-left no-margin
              ${(this.selectedItem) == item ? "selected" : ""}
              ${(item == this.currentItem) ? "highlighted" : ""}
              ${(item.disabled == true) ? "disabled" : ""}` }, index.h("div", { id: selectedItemId, role: "option", tabindex: "-1", "aria-selected": (this.selectedItem == item) ? "true" : false, onClick: () => { this.handleClick(item); }, ref: (thisElement) => (this.currentItem == item && thisElement.focus()) }, item.value))))), index.h("input", { class: "hidden-textbox", tabindex: "-1", type: "text", "data-field": this.name, id: this.name, required: this.required, ref: (el) => this.hiddenEl = el, value: (this.selectedItem) ? this.selectedItem.key : "" })));
    }
    initItemConfiguration() {
        const configurationObject = this.itemConfiguration || ItemUtils.ItemUtils.generateConfigurationFromItemOptions(this.element);
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
        if (direction == NavigationDirectionEnum.NavigationDirectionEnum.BACKWARDS) {
            (currentIndex <= 0) ? nextIndex = maxIndex : nextIndex = currentIndex - 1;
        }
        else if (direction == NavigationDirectionEnum.NavigationDirectionEnum.FORWARDS) {
            (currentIndex >= maxIndex) ? nextIndex = 0 : nextIndex = currentIndex + 1;
        }
        nextItem = this.items[nextIndex];
        return (nextItem.disabled) ? this.getNextAvailableItem(direction, nextItem) : nextItem;
    }
    async processKeyboardEvent(evt) {
        this.keyboardEventProcessor.process(evt);
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "opened": ["handleModalOpenAndClose"],
        "selectedItem": ["handleSelectedItemChange"]
    }; }
};
DropdownComponent.TAG_NAME = "snt-dropdown";
DropdownComponent.style = dropdownComponentCss;

exports.snt_dropdown = DropdownComponent;
