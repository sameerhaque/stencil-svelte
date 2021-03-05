var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SearchComboboxComponent_1;
import { Component, Element, h, Host, Listen, Prop, State, Event, Watch, Method } from "@stencil/core";
import { StringUtils } from "../../../core/utils/StringUtils";
import { KeyboardEventProcessorBuilder } from "../../../core/keyboard/processor/KeyboardEventProcessorBuilder";
import { Keyboard } from "../../../core/keyboard/Keyboard";
import { NavigationDirectionEnum } from "../../../core/keyboard/NavigationDirectionEnum";
import { ReflectionUtils } from "../../../core/reflection/ReflectionUtils";
import { LanguageUtils } from "../../../core/utils/LanguageUtils";
let SearchComboboxComponent = SearchComboboxComponent_1 = class SearchComboboxComponent {
    constructor() {
        /**
         * State Variables
         */
        this.focused = false;
        this.expanded = false;
        /**
         * Public Properties API
         */
        this.autoComplete = false;
        this.ariaLabelledby = StringUtils.empty();
        this.ariaLabel = StringUtils.empty();
        this.languageJson = StringUtils.empty();
        this.languageString = StringUtils.empty();
        this.searchFunctionRef = StringUtils.empty();
        this.value = '';
        /**
         * Prop Lifecycle Events
         */
        this.activeIndex = -1;
    }
    activeIndexChange(activeIndex) {
        if (this.autoComplete && activeIndex != -1) {
            this.value = this.SearchSuggestion[this.activeIndex].title;
        }
    }
    /**
     * Component Lifecycle Events
     */
    componentWillLoad() {
        if (StringUtils.isEmpty(this.hostElement.id)) {
            throw new Error(`${SearchComboboxComponent_1.TAG_NAME} must have a valid id.`);
        }
        if (this.searchFunctionRef) {
            ReflectionUtils.getObjectReference(this.searchFunctionRef, window).then((searchFunction) => {
                this.searchFunction = searchFunction;
            });
        }
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["search"]);
        this.initKeyboardEventProcessor();
    }
    /**
     * Listeners
     */
    onClick(evt) {
        this.focused = this.expanded = false;
        evt.target.focus();
    }
    /**
     * Public Methods API
     */
    async setFocus() {
        if (this.input) {
            this.input.focus();
        }
        return Promise.resolve();
    }
    async getInputElement() {
        return Promise.resolve(this.input);
    }
    async setSearchSuggestions(suggestions) {
        if (suggestions) {
            this.SearchSuggestion = suggestions;
            this.expanded = this.SearchSuggestion.length > 0;
        }
    }
    /**
     * Local Methods
     */
    onFocus() {
        this.focused = true;
        this.sntFocus.emit();
        this.updateSearchSuggestions();
    }
    onInput(evt) {
        const input = evt.target;
        if (input) {
            this.value = input.value;
            this.userInput = input.value;
        }
        this.updateSearchSuggestions();
        this.sntInput.emit(evt);
    }
    onBlur() {
        if (!this.expanded) {
            this.focused = false;
        }
    }
    onListboxClick(evt) {
        if (evt.target) {
            if (evt.target.nodeName == "LI") {
                this.activeIndex = evt.target.dataset.index;
                this.selectItem();
                this.focused = false;
            }
        }
    }
    selectItem() {
        if (this.activeIndex !== -1) {
            this.value = this.SearchSuggestion[this.activeIndex].title;
            this.expanded = false;
        }
    }
    clear() {
        this.expanded = false;
        this.value = StringUtils.empty();
    }
    dismiss() {
        this.focused = this.expanded = false;
    }
    async updateSearchSuggestions() {
        if (this.searchFunction) {
            this.SearchSuggestion = await this.searchFunction(this.input.value, LanguageUtils.isFrench() ? LanguageUtils.LANGUAGE_ID.fr : LanguageUtils.LANGUAGE_ID.en, 10);
            this.expanded = this.SearchSuggestion.length > 0;
        }
    }
    initKeyboardEventProcessor() {
        this.keyboardEventProcessor = KeyboardEventProcessorBuilder.newInstance()
            .withKey(Keyboard.ARROW_UP, () => this.setNextActiveIndex(NavigationDirectionEnum.BACKWARDS))
            .withKey(Keyboard.ARROW_DOWN, () => this.setNextActiveIndex(NavigationDirectionEnum.FORWARDS))
            .withKey(Keyboard.HOME, () => this.setNextActiveIndex(NavigationDirectionEnum.FIRST))
            .withKey(Keyboard.END, () => this.setNextActiveIndex(NavigationDirectionEnum.LAST))
            .withKey(Keyboard.ENTER, () => this.submit())
            .withKey(Keyboard.ESCAPE, () => this.clear())
            .withKey(Keyboard.TAB, () => this.dismiss())
            .build();
    }
    processKeyboardEvent(evt) {
        this.keyboardEventProcessor.process(evt);
    }
    setNextActiveIndex(direction) {
        if (direction == NavigationDirectionEnum.BACKWARDS) {
            if (this.activeIndex <= 0) {
                this.activeIndex = -1;
                this.restoreUserInput();
            }
            else {
                this.activeIndex -= 1;
            }
        }
        else if (direction == NavigationDirectionEnum.FORWARDS) {
            if (this.activeIndex >= this.SearchSuggestion.length - 1) {
                this.activeIndex = -1;
                this.restoreUserInput();
            }
            else {
                this.activeIndex += 1;
            }
        }
        else if (direction == NavigationDirectionEnum.FIRST) {
            this.activeIndex = 0;
        }
        else if (direction == NavigationDirectionEnum.LAST) {
            this.activeIndex = this.SearchSuggestion.length - 1;
        }
    }
    highlightPattern(text, pattern) {
        const splitText = text.split(pattern);
        if (splitText.length <= 1) {
            return text;
        }
        const matches = text.match(pattern);
        return splitText.reduce((arr, element, index) => (matches[index] ? [
            ...arr,
            element,
            h("b", null, matches[index]),
        ] : [...arr, element]), []);
    }
    ;
    submit() {
        this.selectItem();
        if (this.activeIndex != -1) {
            window.location.href = this.SearchSuggestion[this.activeIndex].url;
        }
        else {
            this.sntSearchSubmitted.emit({ keywords: this.value });
            this.expanded = false;
        }
    }
    restoreUserInput() {
        this.value = this.userInput;
    }
    render() {
        const comboboxId = this.hostElement.id ? `${this.hostElement.id}-combobox` : null;
        const textboxId = this.hostElement.id ? `${this.hostElement.id}-textbox` : null;
        const listboxId = this.hostElement.id ? `${this.hostElement.id}-listbox` : null;
        const resultItemPrefix = "result-item-";
        return (h(Host, { class: {
                'search-combobox-has-focus': this.focused,
                'search-combobox-is-expanded': this.expanded
            } },
            h("snt-layout", { padding: this.padding },
                h("div", { class: "search-container" },
                    h("div", { role: "combobox", id: comboboxId, "aria-haspopup": "listbox", "aria-owns": listboxId, "aria-expanded": this.expanded.toString(), class: "search-input-area" },
                        h("snt-icon", { styleClasses: "iconNavSearch" }),
                        StringUtils.notEmpty(this.ariaLabelledby) ?
                            h("label", { htmlFor: textboxId, id: this.ariaLabelledby, class: "sr-only" }, this.languageVariables.get("search")) : null,
                        h("input", { type: "search", id: textboxId, role: "textbox", "aria-labelledby": this.ariaLabelledby || null, "aria-autocomplete": "both", "aria-controls": listboxId, "aria-activedescendant": this.activeIndex >= 0 ? resultItemPrefix + this.activeIndex : null, onInput: this.onInput.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyDown: this.processKeyboardEvent.bind(this), placeholder: this.languageVariables.get("search"), ref: elem => (this.input = elem), value: this.value, autoComplete: "off" })),
                    h("ul", { id: listboxId, role: "listbox", class: "search-results-area", onClick: this.onListboxClick.bind(this) }, (this.focused && this.SearchSuggestion && this.SearchSuggestion.length > 0) ?
                        this.SearchSuggestion.map((SearchSuggestionItem, index) => h("li", { role: "option", "aria-selected": index == this.activeIndex, "aria-label": this.languageVariables.get("link to") + SearchSuggestionItem.title, id: resultItemPrefix + index, class: {
                                'result': true,
                                'result-is-focused': index == this.activeIndex
                            }, "data-index": index },
                            h("a", { href: SearchSuggestionItem.url }, this.highlightPattern(SearchSuggestionItem.title, new RegExp(this.input.value, 'ig')))))
                        : null)),
                this.focused && this.expanded ? h("snt-backdrop", null) : null)));
    }
};
SearchComboboxComponent.TAG_NAME = "snt-search-combobox";
__decorate([
    Element(),
    __metadata("design:type", HTMLSntSearchComboboxElement)
], SearchComboboxComponent.prototype, "hostElement", void 0);
__decorate([
    State(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "focused", void 0);
__decorate([
    State(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "expanded", void 0);
__decorate([
    State(),
    __metadata("design:type", Array)
], SearchComboboxComponent.prototype, "SearchSuggestion", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "autoComplete", void 0);
__decorate([
    Prop({ reflect: false }),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "ariaLabelledby", void 0);
__decorate([
    Prop({ reflect: false }),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "ariaLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "languageJson", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "languageString", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "searchFunctionRef", void 0);
__decorate([
    Prop({ mutable: true }),
    __metadata("design:type", String)
], SearchComboboxComponent.prototype, "value", void 0);
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], SearchComboboxComponent.prototype, "padding", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], SearchComboboxComponent.prototype, "activeIndex", void 0);
__decorate([
    Watch('activeIndex'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SearchComboboxComponent.prototype, "activeIndexChange", null);
__decorate([
    Event(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "sntInput", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "sntFocus", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "sntBlur", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], SearchComboboxComponent.prototype, "sntSearchSubmitted", void 0);
__decorate([
    Listen('sntBackdropTap', { target: 'body' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SearchComboboxComponent.prototype, "onClick", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchComboboxComponent.prototype, "setFocus", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchComboboxComponent.prototype, "getInputElement", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SearchComboboxComponent.prototype, "setSearchSuggestions", null);
SearchComboboxComponent = SearchComboboxComponent_1 = __decorate([
    Component({
        tag: 'snt-search-combobox',
        styleUrl: "search-combobox-component.scss",
        shadow: false
    })
], SearchComboboxComponent);
export { SearchComboboxComponent };
